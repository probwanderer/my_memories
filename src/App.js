import React from 'react';
import Home from './components/Home/Home';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
    
return(
    <GoogleOAuthProvider clientId="889335930432-4k9od6pkj273lh2m969oduc92qd12bq7.apps.googleusercontent.com">
    <BrowserRouter>
    <Container maxidth="lg">
        <Navbar/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/auth" exact component={Auth}/>
        </Switch>
    </Container>
    </BrowserRouter>
    </GoogleOAuthProvider>
)
}
export default App;
