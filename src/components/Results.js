import React, { useEffect, useState } from 'react';

const Results = ({onAnswersCheck}) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1 className="thanks">Thank you for your time ❤️</h1>
                    <div className='content-box'>
                        <h2 className="thanks-subtitle">Find your results below</h2>
                        <p><strong>text</strong></p>
                    </div>
                    <button className="btn" onClick={onAnswersCheck}>Send results to my email</button>
                </div>
            </div>
        </div>

    )

}
export default Results;