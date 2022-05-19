import React, {useState} from "react";
import './App.css';

import Welcome from "./components/Welcome/Welcome";
import Questions from "./components/Questions/Questions";
import surveyData from "./data/db.json";
import Results from "./components/Results/Results";
import Login from "./components/Login/Login";

const App = () => {
    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);

    const surveyStartHandler = () => {
        setStep(2);
    }

  return (
    <div className="App">
        {step === 1 && <Welcome onSurveyStart={surveyStartHandler}/>}
        {step === 2 && <Login onSetStep={setStep} />}
        {step === 3 && <Questions
            data={surveyData.data[activeQuestion]}
            onAnswerUpdate={setAnswers}
            numberOfQuestions={surveyData.data.length}
            activeQuestion={activeQuestion}
            onSetActiveQuestion={setActiveQuestion}
            onSetStep={setStep}
        />}
        {step === 4 && <Results
            results={answers}
            dataAnswer={surveyData.dataAnswer}
            />}
    </div>
  );
}
export default App;

