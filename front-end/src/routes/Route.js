import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

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



    return (
        <Route { ... rest}
            render={props => (
                <Component {... props} />
                
            )}
        />
    )
}