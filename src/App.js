import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import SurveyScreen from "./components/SurveyScreen";
import questions from "./data/questions.json";

function App() {
  const [surveyStarted, setSurveyStarted] = useState(false);

  return (
    <div className="App">
      {!surveyStarted ? (
        <WelcomeScreen startSurvey={() => setSurveyStarted(true)} />
      ) : (
        <SurveyScreen questions={questions} />
      )}
    </div>
  );
}

export default App;
