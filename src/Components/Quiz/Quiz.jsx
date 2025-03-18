import React from "react";

function Quiz() {
  return (
    <div className="bg-blue-400 h-screen flex justify-center items-center">
      <div className="h-[70vh] w-1/3 bg-blue-200 rounded-xl">
        <div className="mt-3">
          <h2 className="text-blue-600 text-2xl font-medium ml-3 mb-1 cursor-default">Quiz</h2>
          <hr className="border-black" />
        </div>

        <div className="mt-5 flex flex-col">
          <div className="pl-5">
            <div className="witch-quistion mb-5 font-mono">
              <p className="font-bold text-lg pl-18 cursor-default">Questions</p>
            </div>
            <div className="all-quistion-answer flex flex-col align-center">
              <div className="w-full flex items-center justify-center mb-5">
                <div className="flex items-center font-medium bg-blue-100 border w-[25vw] h-[5vh] rounded-md p-2 cursor-pointer">
                  <p>Answer - 1</p>
                </div>
              </div>
              <div className="w-full flex items-center justify-center mb-5">
                <div className="flex items-center font-medium bg-blue-100 border w-[25vw] h-[5vh] rounded-md p-2 cursor-pointer">
                  <p>Answer - 2</p>
                </div>
              </div>
              <div className="w-full flex items-center justify-center mb-5">
                <div className="flex items-center font-medium bg-blue-100 border w-[25vw] h-[5vh] rounded-md p-2 cursor-pointer">
                  <p>Answer - 3</p>
                </div>
              </div>
              <div className="w-full flex items-center justify-center">
                <div className="flex items-center font-medium bg-blue-100 border w-[25vw] h-[5vh] rounded-md p-2 cursor-pointer">
                  <p className="cursor-pointer">Answer - 4</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-5 ">
            <button className="border-0 p-[10px] w-[6vw] bg-blue-500 hover:bg-blue-800 rounded-xl text-white cursor-pointer">
              Submit
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-2 font-serif cursor-default">
            1 of 20 quistions
        </div>
      </div>
    </div>
  );
}

export default Quiz;
