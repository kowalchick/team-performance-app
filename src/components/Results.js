import React, { useEffect, useState } from 'react';

const Results = ({onAnswersCheck}) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h2 className="title">Thank you for your time</h2>
                    <h3 style={{
                        color: "rgba(30, 1, 8, 0.7)",
                        fontSize: "1.75rem",
                        fontWeight: 500
                    }}>Find your results below
                    </h3>
                    <p><strong>text</strong></p>
                    <button className="button is-rounded" onClick={onAnswersCheck}>Sent results to my email</button>
                </div>
            </div>
        </div>

    )

}
export default Results;