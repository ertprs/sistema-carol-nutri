import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import DefaultLayout from '../pages/_layouts/default';
import AuthLayout from '../pages/_layouts/auth';

export default function RouteWrapper({
    component: Component, 
    isPrivate = false,
    ... rest
}) {
    const singned = true;

    if(!singned && isPrivate){
        return <Redirect to="/singin" />
    }

    const Layout = singned ? DefaultLayout : AuthLayout

    return (
        <Route { ... rest}
            render={props => (
                <Layout>
                    <Component {... props} />
                </Layout>
                
            )}
        />
    )
}