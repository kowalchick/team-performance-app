import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Chart from "../Chart/Chart";


const Results = ({onAnswersCheck, dataAnswer}) => {

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
                        <Chart
                            labels={dataAnswer[0].labels}
                            data1={dataAnswer[0].data[0].values}
                            data2={dataAnswer[0].data[1].values}
                        />
                    </div>
                    <button className="btn" onClick={onAnswersCheck}>Send results to my email</button>
                </div>
            </div>
        </div>

    )

}
export default Results;