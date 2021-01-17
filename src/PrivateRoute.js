import React from "react";
import {
    Route,
    Redirect
} from "react-router-dom";

import Layout from "./Layout";

export default function PrivateRoute({ children, ...rest }) {
    let isAuthenticated = false;
    isAuthenticated = localStorage.getItem("token");
    isAuthenticated = true;
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <div>
                        <Layout {...props}/>
                    {/*     <Redirect from="/admin" to="/admin/dashboard" /> */}
                    </div>
                ) : (
                        <Redirect to='/login' />
                    )
            }
        />
    );
}
