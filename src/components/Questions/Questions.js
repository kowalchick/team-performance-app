import React, { useState } from 'react';

import {Box, Slider} from '@mui/material';
import { alpha, styled, createTheme } from "@mui/material/styles";

const myTheme = createTheme({
    palette: {
        primary: {
            main: '#EE3A68',
        },
        secondary: {
            light: '#fff',
            main: '#1E0108',
            contrastText: '#C9CBCF',
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 388,
            md:1200,
        },
    },
});

const SuccessSlider = styled(Slider)(({ theme }) => ({
    color: myTheme.palette.primary.main,
    "& 	.MuiSlider-valueLabelOpen":{
        fontFamily: `'Montserrat', sans-serif `,
        fontSize: `1.125rem`,
        backgroundColor: `${alpha(myTheme.palette.secondary.light,1)}`,
        color: `${alpha(myTheme.palette.primary.main,1)}`,
        border:`dashed 2px ${alpha(myTheme.palette.primary.main,1)}`
    },
    "& .MuiSlider-markLabel":{
        fontFamily: `'Montserrat', sans-serif `,
        fontWeight:`bold`,
        fontSize:`1.125rem`,
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize:`0.8rem`,
        },
        paddingTop: `20px`,
        color: `${alpha(myTheme.palette.secondary.main,0.8)}`,
    },
    "&.MuiSlider-root":{
        margin: `0 100px 20px 100px`,
        [theme.breakpoints.between('xs', 'sm')]: {
            margin: `0 50px 20px 50px`,
        },

    },
    "& .MuiSlider-thumb": {
        border:`solid 5px ${alpha(myTheme.palette.primary.main,1)}`,
        backgroundColor:`${alpha(myTheme.palette.secondary.light, 1)}`,
        width:`40px`,
        height:`40px`,
        "&:hover, &.Mui-focusVisible": {
            boxShadow: `0px 0px 0px 8px ${alpha(myTheme.palette.primary.main, 0.16)}`
        },
        "&.Mui-active": {
            boxShadow: `0px 0px 0px 14px ${alpha(myTheme.palette.primary.main, 0.16)}`
        }
    }
}));

const marks = [
    {
        value: 100,
        label: 'I strongly disagree',
    },
    {
        value: 0,
        label: 'I strongly agree',
    },
];

function valuetext(value) {
    return `${value}`;
}

const Questions = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
    const [selected, setSelected] = useState(50);

    const handleSliderChange = (event, newValue) => {
        setSelected(newValue);
    };

    const nextClickHandler = () => {
        onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
        setSelected(50);
        if (activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion + 1);
        } else {
            onSetStep(4);
        }
    };

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h2 className="question-title">{data.question}</h2>
                    <div className="content-box">
                        <div className="control">
                            <Box sx={{
                                display: 'flex',
                                width: '100%',
                                margin: 'auto',
                            }}>
                                <SuccessSlider
                                    aria-label="Custom marks"
                                    defaultValue={50}
                                    value={selected}
                                    getAriaValueText={valuetext}
                                    step={1}
                                    valueLabelDisplay="auto"
                                    marks={marks}
                                    onChange={handleSliderChange}
                                    aria-labelledby="input-slider"
                                    sx={{flex:1}}
                                />
                            </Box>
                        </div>
                    </div>
                    <button className="btn" onClick={nextClickHandler}>Next question</button>
                </div>
            </div>
        </div>
    );
}
export default Questions;