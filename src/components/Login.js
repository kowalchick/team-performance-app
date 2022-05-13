import React from 'react';

const Login = ({}) => {
    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1 className="fancy">Login</h1>
                    <div className="content-box">

                        <form className="box">
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input className="input" type="email" placeholder="e.g. name@example.com">
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input className="input" type="password" placeholder="********">
                                </div>
                            </div>
                        </form>
                    </div>
                    <button className="btn">Start Survey</button>
                </div>
            </div>
        </div>
    );
}

export default Login;