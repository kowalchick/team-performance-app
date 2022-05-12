import React from 'react';

const Welcome = ({onSurveyStart}) => {
    return(
        <div className="card">
            <div className="card-content">
                <div className="content welcome-txt">
                    <h1>Welcome</h1>
                    <h4>We Put You First</h4>
                    <p>
                        Answering those short questions you will help us
                        understand better the factors that determine your motivation
                        and make our organization a better place.
                    </p>
                    <p><strong>Your opinion is important to us.</strong></p>
                    <button className="button is-rounded" onClick={onSurveyStart}>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Welcome;