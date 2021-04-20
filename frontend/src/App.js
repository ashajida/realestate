import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {GlobalStyle} from './globalstyles';
import PropertiesContext from './provider/propertyProvider';
import LocationsContext from './provider/locationsProvider';
import Properties from './pages/Property';
import Search from './pages/Search';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import ContactUs from './pages/ContactUs';
import propertiesReducer from './reducers/propertiesReducer';
import locationsReducer from './reducers/locationsReducer';
import PropertiesByLocationPage from './pages/PropertiesByLocation';
import NoMatch from './components/NoMatch';

function App() {
    const [ locations, locationsDispatch ] = useReducer(locationsReducer, []);
    const [ properties, propertiesDispatch ] = useReducer(propertiesReducer, []);
    
    return (
        <Router>
            <GlobalStyle />
            <LocationsContext.Provider  value={ { locations, locationsDispatch } }>
            <PropertiesContext.Provider value={{ properties, propertiesDispatch } }>
            <Navbar/> 
            <Switch>
                <Route exact path='/' component={ Home }/>
                <Route exact path='/properties/:id' component={ Properties }/>
                <Route exact path='/search/' component={ Search }/>
                <Route exact path='/buy' component={ Buy }/>
                <Route exact path='/rent' component={ Rent }/>
                <Route exact path='/contact' component={ ContactUs }/>
                <Route exact path='/locations/:id' component={ PropertiesByLocationPage }/>
                <Route component={ NoMatch }/>
            </Switch>
            <Footer />
            </PropertiesContext.Provider>
            </LocationsContext.Provider>
        </Router>
    );
}

export default App;
