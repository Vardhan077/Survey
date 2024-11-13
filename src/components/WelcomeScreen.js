/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f0f8ff, #add8e6);
  text-align: center;
`;

const WelcomeHeader = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
`;

const StartButton = styled.button`
  padding: 15px 30px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: #45a049;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const WelcomeScreen = ({ startSurvey }) => {
  return (
    <WelcomeWrapper>
      <WelcomeHeader>Welcome to the Customer Survey</WelcomeHeader>
      <StartButton onClick={startSurvey}>Start</StartButton>
    </WelcomeWrapper>
  );
};

export default WelcomeScreen;
