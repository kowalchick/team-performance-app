import React from 'react';

const Welcome = ({onSurveyStart}) => {
    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1 className="fancy">Welcome 🙌</h1>
                    <div className="content-box">
                        <h2 className="title">We Put You First</h2>
                        <p className="description">
                            Answering those short questions you will help us
                            understand better the factors that determine your motivation
                            and make our organization a better place.
                        </p>
                        <p><strong>Your opinion is important to us.</strong></p>
                    </div>
                    <button className="btn" onClick={onSurveyStart}>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Welcome;