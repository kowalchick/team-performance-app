import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Chart from "./Chart";


const Results = ({onAnswersCheck}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/dataAnswers", { method: "GET", redirect: "follow" })
            .then((res) => res.json())
            .then((json) => {
                setData(json);
            })
            .catch((err) => console.log(err));
    }, []);

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
                            labels={data.length === 0 ? ["#EE3A68"] : data[0].labels}
                            data1={data.length === 0 ? [0, 0, 0] : data[0].data[0].values}
                            data2={data.length === 0 ? [0, 0, 0] : data[0].data[1].values}
                        />
                    </div>
                    <button className="btn" onClick={onAnswersCheck}>Send results to my email</button>
                </div>
            </div>
        </div>

    )

}
export default Results;