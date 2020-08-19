import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Newbar from './Newbar';
import Home from './Home';
import About from './About';
import Work from './Work';
import Service from './Service';
import Contact from './Contact';
import Footer from './Footer';
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
    return(
        <>
            <Newbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Service" component={Service} />
                <Route exact path="/Work" component={Work} />
                <Route exact path="/Contact" component={Contact} />
                <Redirect to="/Home"/>
            </Switch>
            <Footer/>
        </>
    );
}

export default App;
