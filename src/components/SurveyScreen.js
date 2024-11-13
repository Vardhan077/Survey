
/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Question from "./Question";

const SurveyWrapper = styled.div`
  
  border-radius: 15px;
  padding: 20px;
  width: 400px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

`;

const ContainerClass = styled.div`
  
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100vh;
  width:auto;
background: linear-gradient(135deg, #f0f8ff, #add8e6);
`

const Header = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

const QuestionNumber = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const NavigationButton = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  ${({ primary }) =>
    primary
      ? `
        background: #4caf50;
        color: white;

        &:hover {
          background: #45a049;
        }
      `
      : `
        background: #f44336;
        color: white;

        &:hover {
          background: #da190b;
        }
      `}
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const SurveyScreen = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
    localStorage.setItem("surveyAnswers", JSON.stringify({ ...answers, [questionId]: answer }));
  };

  const handleFinish = () => {
    alert("Survey Completed! Thank you for your feedback.");
    console.log("Final Answers:", answers);
  };

  return (
    <ContainerClass>
    <SurveyWrapper>
      <Header>Customer Survey</Header>
      <QuestionNumber>
        {currentQuestion + 1}/{questions.length}
      </QuestionNumber>
      <Question question={questions[currentQuestion]} onAnswer={handleAnswer} />
      <div>
        <NavigationButton
          disabled={currentQuestion === 0}
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
        >
          Prev
        </NavigationButton>
        {currentQuestion < questions.length - 1 ? (
          <NavigationButton
            primary
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
          >
            Next
          </NavigationButton>
        ) : (
          <NavigationButton primary onClick={handleFinish}>
            Finish
          </NavigationButton>
        )}
      </div>
    </SurveyWrapper>
    </ContainerClass>
  );
};

export default SurveyScreen;
