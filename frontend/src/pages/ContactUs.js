import Form from '../components/ContactUs/Form/Form';

import { Fragment } from 'react';

import { useEffect } from 'react';

const ContactUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return(
        <Fragment>
            <Form />
        </Fragment>
    )
}

export default ContactUs;