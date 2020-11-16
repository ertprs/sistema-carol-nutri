import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import AuthLayout from '../pages/_layouts/auth'
import DefaltLayout from '../pages/_layouts/default'

export default function RouteWrapper({
    component: Component, 
    isPrivate = false,
    ... rest
}) {

    const { user } = useContext(AuthContext)

    if(!user && isPrivate){
        return <Redirect to="/signin" />
    }

    if(user && !isPrivate){
        return <Redirect to="/dashboard" />
    }

    let Layout = user ? DefaltLayout : AuthLayout

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