<?php


function properties_cpt() {
    $labels = array(
        'name'               => _x( 'Properties', 'properties' ),
        'singular_name'      => _x( 'Property', 'property' ),
        'add_new'            => _x( 'Add New', 'property' ),
        'add_new_item'       => __( 'Add New Property' ),
        'edit_item'          => __( 'Edit Property' ),
        'new_item'           => __( 'New Property' ),
        'all_items'          => __( 'All Property' ),
        'view_item'          => __( 'View Product' ),
        'search_items'       => __( 'Search Products' ),
        'not_found'          => __( 'No properties found' ),
        'not_found_in_trash' => __( 'No properties found in the Trash' ), 
        'menu_name'          => 'Property'
      );
      $args = array(
        'labels'        => $labels,
        'description'   => 'Holds our properties and property specific data',
        'public'        => true,
        'menu_position' => 5,
        'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments' ),
        'has_archive'   => true,
        'show_in_rest'  => true,
        'taxonomies'    => ['category']
      );
      register_post_type( 'properties', $args ); 
} 

add_action( 'init', 'properties_cpt' );

function create_ACF_meta_in_REST() {
  $postypes_to_exclude = ['acf-field-group','acf-field'];
  $extra_postypes_to_include = ["page"];
  $post_types = array_diff(get_post_types(["_builtin" => false], 'names'),$postypes_to_exclude);

  array_push($post_types, $extra_postypes_to_include);

  foreach ($post_types as $post_type) {
      register_rest_field( $post_type, 'ACF', [
          'get_callback'    => 'expose_ACF_fields',
          'schema'          => null,
     ]
   );
  }

}

function expose_ACF_fields( $object ) {
  $ID = $object['id'];
  return get_fields($ID);
}

add_action( 'rest_api_init', 'create_ACF_meta_in_REST' );

add_action('rest_api_init', function () {
  $args = array(
    'taxonomy' => 'category',
    'hide_empty' => 0
  );
  $categories = get_categories($args);

    foreach ($categories as  $cat) {
      register_rest_field( $cat, 'image', [
          'get_callback'    => 'import_ACF',
          'schema'          => null,
    ]
  );
  }
  

});


function import_ACF( $object ) {
  $ID = $object['id'];
  return get_field('image', 'category_'.$object['id']);
}

function create_ACF_for_categories() {
  $postypes_to_exclude = ['acf-field-group','acf-field', 'post'];
  $extra_postypes_to_include = ["category"];
  $post_types = array_diff(get_post_types(["_builtin" => false], 'names'),$postypes_to_exclude);

  array_push($post_types, $extra_postypes_to_include);

  foreach ($post_types as $post_type) {
      register_rest_field( $post_type, 'is_featured', [
          'get_callback'    => 'expose_ACF_fields_for_cat',
          'schema'          => null,
     ]
   );
  }

}

function expose_ACF_fields_for_cat( $object ) {
  $ID = $object['id'];
  return get_field('is_featured', 'category_'.$ID);
}


add_action( 'rest_api_init', 'create_ACF_for_categories' );



add_action('rest_api_init', function () {
  $args = array(
    'taxonomy' => 'category',
    'hide_empty' => 0
  );
  $categories = get_categories($args);

    foreach ($categories as  $cat) {
      register_rest_field( $cat, 'properties', [
          'get_callback'    => 'import_cat_to_posts',
          'schema'          => null,
    ]
  );
  }
  

});


// Add Properties to Category Response
function import_cat_to_posts( $object ) {
  $ID = $object['id'];
  $posts = get_posts([
    'cat' => $ID,
    'post_type' => 'properties',    
  ]);

  $post_meta = [];

  foreach( $posts as $post ) {
    $post_meta[] = [
        'ACF' => [
        'id'           => $post->ID,
        'image'        => get_field( 'image', $post->ID ),
        'type'         => get_field( 'type', $post->ID ),
        'is_featured'  => get_field( 'is_featured', $post->ID ),
        'name'         => get_field( 'name', $post->ID ),
        'price'        => get_field( 'price', $post->ID ),
        'location'     => get_field( 'location', $post->ID ),
        'postcode'     => get_field( 'postcode', $post->ID ),
        'bedroom'      => get_field( 'bedrooms', $post->ID ),
        'living_room'  => get_field( 'living_room', $post->ID ),
        'bathrooms'    => get_field( 'bathrooms', $post->ID ),
        'agent'        => get_field( 'agent', $post->ID ),
      ]
    ];
  }

  return $post_meta;
}
