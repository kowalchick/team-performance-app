import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Chart from "../Chart/Chart";
import {ChartMobile} from "../Chart/ChartMobile";

function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => {
            setMatches(media.matches);
        };
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
}

const Results = ({onAnswersCheck, dataAnswer,dataAnswer2}) => {

    let isSmallWide = useMediaQuery('(max-width: 582px)')
    let isBigWide = useMediaQuery('(min-width: 583px)')

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
                        {isSmallWide && <ChartMobile
                            labels={dataAnswer2[0].labels}
                            data1={dataAnswer2[0].data[0].values}
                            data2={dataAnswer2[0].data[1].values}
                        />}
                        {isBigWide && <Chart
                            labels={dataAnswer[0].labels}
                            data1={dataAnswer[0].data[0].values}
                            data2={dataAnswer[0].data[1].values}
                        />}
                    </div>
                    <button className="btn" onClick={onAnswersCheck}>Send results to my email</button>
                </div>
            </div>
        </div>

    )

}
export default Results;