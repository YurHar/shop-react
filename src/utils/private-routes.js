import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {HomePage} from "../pages/home-page";

function PrivateRoute({ component: Component, ...rest }) {
    const isLoggedIn = true;

    return (
        <Route
            {...rest}
            render={(props) =>
                isLoggedIn ? (
                    <HomePage {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
}

export default PrivateRoute;