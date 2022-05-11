import React, {useState, useEffect, useRef} from "react";

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
    {
        value: 0,
        label: 'I strongly agree',
    },
    {
        value: 100,
        label: 'I strongly disagree',
    },
];

function valuetext(value: number) {
    return `${value}`;
}


const Questions = ({data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep}) => {
    const nextClickHandler =(e) => {
        // const [selected, setSelected] = useState('');
        // const [error, setError] = useState('');
        // const radiosWrapper = useRef();

        // const changeHandler = (e) => {
        //     setSelected(e.target.value);
        //     if(error) {
        //         setError('');
        //     }
        // }

    }
    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h2 className="mb-5">{data.question}</h2>
                    <div className="control">
                        <Box sx={{ width: '80%', padding: '30', display: 'inline-block'}}>
                            <Slider
                                aria-label="Custom marks"
                                defaultValue={20}
                                getAriaValueText={valuetext}
                                step={10}
                                valueLabelDisplay="auto"
                                marks={marks}
                            />
                        </Box>
                            {/*<label className="radio has-background-light">*/}
                            {/*    <input type="radio" name="answer" value="" />*/}
                            {/*</label>*/}
                    </div>
                    <div className="has-text-danger">error here</div>
                    <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Next question</button>
                </div>
            </div>
        </div>
    );
}
export default Questions;