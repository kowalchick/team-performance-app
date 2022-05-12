import React, {useState, useEffect} from "react";
import './App.css';

import Welcome from "./components/Welcome";
import Questions from "./components/Questions";
import surveyData from "./data/db.json";
import Results from "./components/Results";

const App = () => {
    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);

    const surveyStartHandler = () => {
        setStep(2);
    }

  return (
    <div className="App">
        {step === 1 && <Welcome onSurveyStart={surveyStartHandler} />}
        {step === 2 && <Questions
            data={surveyData.data[activeQuestion]}
            onAnswerUpdate={setAnswers}
            numberOfQuestions={surveyData.data.length}
            activeQuestion={activeQuestion}
            onSetActiveQuestion={setActiveQuestion}
            onSetStep={setStep}
        />}
        {step === 3 && <Results
            data={surveyData.data[activeQuestion]}
            numberOfQuestion={surveyData.data.length}
            activeQuestion={activeQuestion}
            onSetActiveQuestion={setActiveQuestion}
            onSetStep={setStep}
            />}
    </div>
  );
}
export default App;

