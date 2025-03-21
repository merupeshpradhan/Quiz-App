import React, { useEffect, useState } from "react";
import { data } from "../../Questions/data";

function Quiz() {
  let [index, setindex] = useState(0);
  let [currentQuestion, setCurrentQuestion] = useState(data[index]);
  let [selectedAnswer, setSelectedAnswer] = useState(null);
  let [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    setCurrentQuestion(data[index]);
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [index]);

  const checkAns = (ans) => {
    if (!isAnswered) {
      setSelectedAnswer(ans);
      setIsAnswered(true);
    }
  };

  const nextQuestion = () => {
    if (index < data.length - 1) {
      setindex(index + 1);
    }
  };

  const options = Object.keys(currentQuestion)
    .filter((key) => key.startsWith("option"))
    .map((key) => currentQuestion[key]);

  return (
    <div className="bg-blue-400 h-screen flex justify-center items-center">
      <div className="p-2 md:p-4 w-[600px]  sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4 bg-blue-200 rounded-xl m-5">
        <h2 className="text-blue-600 text-xl md:text-2xl font-medium mb-2 cursor-default">
          JavaScript Quiz
        </h2>
        <hr className="border-black border-t-2 mt-1 md:mt-3" />

        <div className="mt-2 md:mt-5 flex flex-col">
          <div className="">
            <h2 className="font-medium text-sm md:text-lg cursor-default">
              {index + 1} . {currentQuestion.question}
            </h2>

            <ul className="mt-3 md:mt-5">
              {options.map((option, i) => {
                let isCorrect = currentQuestion.ans === i + 1;
                let isSelected = selectedAnswer === i;

                return (
                  <li
                    key={i}
                    className={`flex items-center font-normal text-sm sm:text-base border  md:h-[6vh] mb-2 md:mb-5 rounded-md p-1 md:p-2 cursor-pointer 
                 ${
                   isAnswered
                     ? isCorrect
                       ? "bg-green-500 border-green-500 text-white"
                       : isSelected
                       ? "bg-red-500 border-red-500 text-white "
                       : "bg-blue-100"
                     : "bg-blue-100"
                 }`}
                    onClick={() => checkAns(i)}
                  >
                    <p>{option}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex justify-center mt-2 md:mt-5 ">
            <button
              onClick={nextQuestion}
              className="border-0 p-[10px] w-1/2 bg-blue-500 hover:bg-blue-800 rounded-xl text-white cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-1 md:mt-2 font-serif cursor-default">
          {index + 1} of {data.length} Question
        </div>
      </div>
    </div>
  );
}

export default Quiz;
