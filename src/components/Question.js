// // const Question = ({ question, onAnswer }) => {
// //     const handleChange = (e) => {
// //       onAnswer(question.id, e.target.value);
// //       console.log(question.id, e.target.value)
// //     };
  
// //     return (
// //       <div className="question">
// //         <p>{question.question}</p>
// //         {question.type === "rating" && (
// //           question.options.map(option => (
// //             <button key={option} onClick={() => onAnswer(question.id, option)}>
// //               {option}
// //             </button>
// //           ))
// //         )}
// //         {question.type === "text" && (
// //           <textarea onChange={handleChange} />
// //         )}
// //       </div>
// //     );
// //   };
  
// // export default Question


// /** @jsxImportSource @emotion/react */
// import styled from "@emotion/styled";

// const QuestionWrapper = styled.div`
//   margin-bottom: 20px;
// `;

// const QuestionText = styled.p`
//   font-size: 16px;
//   color: #333;
//   margin-bottom: 15px;
// `;

// const OptionButton = styled.button`
//   margin: 5px;
//   padding: 10px 15px;
//   border: 1px solid #ddd;
//   background: ${({ selected }) => (selected ? "#4caf50" : "#fff")};
//   color: ${({ selected }) => (selected ? "#fff" : "#333")};
//   border-radius: 5px;
//   cursor: pointer;
//   transition: all 0.3s;

//   &:hover {
//     background: #4caf50;
//     color: white;
//   }
// `;

// const TextInput = styled.textarea`
//   width: 100%;
//   padding: 10px;
//   font-size: 14px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   resize: none;
// `;

// const Question = ({ question, onAnswer }) => {
//   const handleChange = (e) => {
//     onAnswer(question.id, e.target.value);
//   };

//   return (
//     <QuestionWrapper>
//       <QuestionText>{question.question}</QuestionText>
//       {question.type === "rating" && (
//         question.options.map((option) => (
//           <OptionButton
//             key={option}
//             onClick={() => onAnswer(question.id, option)}
//           >
//             {option}
//           </OptionButton>
//         ))
//       )}
//       {question.type === "text" && <TextInput onChange={handleChange} />}
//     </QuestionWrapper>
//   );
// };

// export default Question;



/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState } from "react";

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const QuestionOptions = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin:15px;

`

const QuestionText = styled.p`
   
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const OptionButton = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background: ${(props) => (props.isSelected ? "#4caf50" : "#e0e0e0")};
  color: ${(props) => (props.isSelected ? "#fff" : "#333")};
  transition: all 0.3s;

  &:hover {
    background: ${(props) => (props.isSelected ? "#45a049" : "#d5d5d5")};
  }
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 100px;
  margin: 10px 0;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

const Question = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onAnswer(question.id, option);
  };

  const handleTextChange = (e) => {
    onAnswer(question.id, e.target.value);
  };

  return (
    <QuestionWrapper>
      <QuestionText>{question.question}</QuestionText>
      <QuestionOptions>
      {question.type === "rating" &&
        question.options.map((option) => (
          <OptionButton
            key={option}
            isSelected={selectedOption === option}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </OptionButton>
        ))}
        </QuestionOptions>
      {question.type === "text" && <TextArea onChange={handleTextChange} />}
    </QuestionWrapper>
  );
};

export default Question;
