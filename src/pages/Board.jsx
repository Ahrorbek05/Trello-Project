import React from "react";

function Board() {
  return (
    <div className="py-[142px] flex w-[1267px] gap-4 flex-col">
      <h1 className="text-[50px]"> Boards</h1>
      <div className="boards flex gap-4">
        <div className="board p-5 relative bg-black border-def w-[384px] h-[150px]">
          <h1 className="text-[30px] text-white absolute top-2 left-2">
            Project Managment
          </h1>
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/trello.png"
            alt=""
            className="absolute bottom-2 left-2 w-10 h-10"
          ></img>
        </div>
        <div className="board p-5 relative bg-black border-def w-[288px] h-[150px]">
          <h1 className="text-[30px] text-white absolute top-2 left-2">
            Scrum
          </h1>
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/trello.png"
            alt=""
            className="absolute bottom-2 left-2 w-10 h-10"
          ></img>
        </div>
        <div className="board p-5 relative bg-black border-def w-[384px] h-[150px]">
          <h1 className="text-[30px] text-white absolute top-2 left-2">
            Bug Trascing
          </h1>
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/trello.png"
            alt=""
            className="absolute bottom-2 left-2 w-10 h-10"
          ></img>
        </div>
        <div className="board p-5 relative bg-black border-def w-[288px] h-[150px]">
          <h1 className="text-[30px] text-white absolute top-2 left-2">
            Web design process
          </h1>
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/trello.png"
            alt=""
            className="absolute bottom-2 left-2 w-10 h-10"
          ></img>
        </div>
      </div>
      <div class="relative w-80 h-28 bg-gradient-to-r border-def rounded-xl shadow-lg transition-all duration-500 transform hover:scale-110 hover:rotate-2 hover:shadow-2xl cursor-pointer outline-none mb-6 mt-20 overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-transparent to-transparent opacity-20 pointer-events-none"></div>
        <h2 class="flex items-center justify-center text-gray-100  font-semibold text-xl pt-10 relative z-10 space-x-2">
          <span className="text-black">Create Board</span>
        </h2>
        <div class="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
      </div>
    </div>
  );
}

export default Board;
