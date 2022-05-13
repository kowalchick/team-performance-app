import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Results = ({onAnswersCheck}) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1 className="thanks">
                        Thank you for your time
                        <FavoriteIcon sx={{ color: "#EE3A68", paddingLeft:"10px" }} />
                    </h1>
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