import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    let adminEmail;
    const adminData = sessionStorage.getItem("admin");
    const adminInfo = JSON.parse(adminData);
    if (adminInfo) {
        adminEmail = adminInfo.email;
    } else {
        adminEmail = false;
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
            adminEmail === "jotihomoeo32@gmail.com" || adminEmail === "mjrgeorge@gmail.com" ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;