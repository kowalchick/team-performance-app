import React, {useEffect, useRef} from "react";

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { alpha, styled } from "@mui/material/styles";
import { createTheme } from '@mui/material/styles';

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
});

const SuccessSlider = styled(Slider)(({ theme }) => ({
    width: 350,
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
        fontSize: `1.125rem`,
        paddingTop: `20px`,
        color: `${alpha(myTheme.palette.secondary.main,0.8)}`
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
        label: 'I strongly agree',
    },
    {
        value: 0,
        label: 'I strongly disagree',
    },
];

function valuetext(value: number) {
    return `${value}`;
}


const Questions = ({data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep}) => {

    const [selected, setSelected] = React.useState(50); //value, setValue
    const inputWrapper = useRef();

    useEffect(() => {
        const findCheckedInput = inputWrapper.current.querySelector('input:checked');
        if(findCheckedInput) {
            findCheckedInput.checked = false;
        }
    }, [data]);

    const handleChange = (event, newSelection) => {
        setSelected(newSelection);
    }

    const nextClickHandler = (e) => {
        onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
        setSelected(50);
        if(activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion + 1);
        } else {
            onSetStep(3);
        }
    }

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h2 className="question-title">{data.question}</h2>
                    <div className="content-box">
                        <div className="control" ref={inputWrapper}>
                            <Box sx={{
                                display: 'inline-block',
                            }}>
                                <SuccessSlider
                                    aria-label="Custom marks"
                                    defaultValue={50}
                                    value={selected}
                                    getAriaValueText={valuetext}
                                    step={1}
                                    valueLabelDisplay="auto"
                                    marks={marks}
                                    onChange={handleChange}
                                    aria-labelledby="input-slider"
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