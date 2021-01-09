import React from 'react';

const NotMatch = () => {
    return (
        <div className="container">
            <div style={{ height: "70vh" }} className="text-danger display-1 d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h1>404 Error! </h1>
                    <h2>Sorry, Your Page Is Not Found.</h2>
                </div>
            </div>
        </div>
    );
};

export default NotMatch;