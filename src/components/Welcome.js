import React from 'react';

const Welcome = ({onSurveyStart}) => {
    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1>Welcome</h1>
                    <strong>We Put You First</strong>
                    <p>
                        Answering those short questions you will help us
                        understand better the factors that determine your motivation
                        and make our organization a better place.
                        <p>Your opinion is important to us.</p>
                    </p>
                    <button className="button is-info is-medium" onClick={onSurveyStart}>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Welcome;