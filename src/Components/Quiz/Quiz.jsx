import React from "react";

function Quiz() {
  return (
    <div className="bg-blue-400 h-screen flex justify-center items-center">
      <div className="h-[60vh] w-[29vw] bg-blue-200 rounded-xl">
        <div className="mt-3 px-8">
          <h2 className="text-blue-600 text-2xl font-medium mb-1 cursor-default">
            Quiz
          </h2>
          <hr className="border-black border-t-2 mt-3" />
        </div>

        <div className="mt-5 flex flex-col">
          <div className="pl-5 ml-3">
            <h2 className="font-medium text-lg cursor-default">
              1 . Inside which HTML element do we put the JavaScript?
            </h2>
            <ul className="mt-5">
              <li className=" flex items-center font-normal bg-blue-100 border w-[25vw] h-[5vh] mb-5 rounded-md p-2 cursor-pointer">
                <p>&lt;script&gt;</p>
              </li>
              <li className=" flex items-center font-normal bg-blue-100 border w-[25vw] h-[5vh] mb-5 rounded-md p-2 cursor-pointer">
                <p>&lt;scripting&gt;</p>
              </li>
              <li className=" flex items-center font-normal bg-blue-100 border w-[25vw] h-[5vh] mb-5 rounded-md p-2 cursor-pointer">
                <p>&lt;js&gt;</p>
              </li>
              <li className=" flex items-center font-normal bg-blue-100 border w-[25vw] h-[5vh] mb-5 rounded-md p-2 cursor-pointer">
                <p>&lt;javascript&gt;</p>
              </li>
            </ul>
          </div>

          <div className="flex justify-center mt-5 ">
            <button className="border-0 p-[10px] w-[8vw] bg-blue-500 hover:bg-blue-800 rounded-xl text-white cursor-pointer">
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
