import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import {Chart} from "../Chart/ChartComponent";
import {colors} from "../../settings/colors";

const StyledFavoriteIcon = styled(FavoriteIcon)({
    color: colors.pink,
    paddingLeft: "10px",
  });

function useMediaQuery(query) {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => setMatches(media.matches);
        
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [query]);

    return matches;
}

const Results = ({ onAnswersCheck, dataAnswer, dataAnswer2 }) => {

    const isMobile = useMediaQuery('(max-width: 582px)');

    const chartData = isMobile ? dataAnswer2[0] : dataAnswer[0];

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1 className="thanks">
                        Thank you for your time
                        <StyledFavoriteIcon />
                    </h1>
                    <div className='content-box'>
                        <h2 className="thanks-subtitle">Find your results below</h2>
                        <Chart
                            labels={chartData.labels}
                            data1={chartData.data[0].values}
                            data2={chartData.data[1].values}
                            isMobile={isMobile}
                        />
                    </div>
                    <button className="btn" onClick={onAnswersCheck}>Send results to my email</button>
                </div>
            </div>
        </div>
    );
}

export default Results;
