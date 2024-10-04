import React, { useRef, useState } from "react";

function Board() {
  let TaskName1 = useRef("");
  let TaskName2 = useRef("");
  let TaskName3 = useRef("");
  let TaskName4 = useRef("");

  const [task1, setTask1] = useState([]);
  const [task2, setTask2] = useState([]);
  const [task3, setTask3] = useState([]);
  const [task4, setTask4] = useState([]);
  function AddTask1() {
    if (TaskName1.current.value == "") {
      alert("please fill input");
      return null;
    } else {
      task1.push(TaskName1.current.value);
      console.log(task1);
    }
  }
  function AddTask2() {
    if (TaskName2.current.value == "") {
      alert("please fill input");
      return null;
    } else {
      task2.push(TaskName2.current.value);
    }
  }
  function AddTask3() {
    if (TaskName3.current.value == "") {
      alert("please fill input");
      return null;
    } else {
      task3.push(TaskName3.current.value);
    }
  }
  function AddTask4() {
    if (TaskName4.current.value == "") {
      alert("please fill input");
      return null;
    } else {
      task4.push(TaskName4.current.value);
    }
  }
  return (
    <div className="py-[142px] flex w-[1267px] gap-4">
      <div className="w-full flex flex-col gap-[11px]">
        <div className="w-full h-[38px] py-8 p-4 border-def flex items-center justify-between ">
          <h1 className="text-[17px]">Backlog</h1>
          <div className="flex gap-4 items-center">
            <div className="w-[18px] h-1 flex gap-1">
              <div className="w-1 border-def"></div>
              <div className="w-1 border-def"></div>
              <div className="w-1 border-def"></div>
            </div>
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
              className="px-[14px] py-[6px] text-[17px] border-def"
            >
              +
            </button>

            <dialog id="my_modal_1" className="modal ">
              <div className="modal-box border-def">
                <h3 className="font-bold text-lg mb-2">Creating Task</h3>
                <label className="mt-2">
                  <h1 className="text-[20px]">Task Name</h1>
                  <input
                    ref={TaskName1}
                    type="text"
                    className="border-def p-3 w-full"
                  />
                </label>
                <div className="modal-action">
                  <form method="dialog">
                    <button
                      className="mr-3 def-btn px-4 py-3 border-def"
                      onClick={AddTask1}
                    >
                      Submit
                    </button>
                    <button className=" bg-black text-white def-btn px-4 py-3 border-def">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        {task1.length > 0 &&
          task1.map((value, index) => {
            return (
              <div key={index} className="px-[18px] py-4 border-def">
                <h1 className="text-2xl">{value}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            );
          })}
      </div>
      <div className="w-full flex flex-col gap-[11px]">
        <div className="w-full h-[38px] py-8 p-4 border-def flex items-center justify-between ">
          <h1 className="text-[17px]">To Do</h1>
          <div className="flex gap-4 items-center">
            <div className="w-[18px] h-1 flex gap-1">
              <div className="w-1 border-def"></div>
              <div className="w-1 border-def"></div>
              <div className="w-1 border-def"></div>
            </div>
            <button
              onClick={() => document.getElementById("my_modal_2").showModal()}
              className="px-[14px] py-[6px] text-[17px] border-def"
            >
              +
            </button>

            <dialog id="my_modal_2" className="modal ">
              <div className="modal-box border-def">
                <h3 className="font-bold text-lg mb-2">Creating Task</h3>
                <label className="mt-2">
                  <h1 className="text-[20px]">Task Name</h1>
                  <input
                    ref={TaskName2}
                    type="text"
                    className="border-def p-3 w-full"
                  />
                </label>
                <div className="modal-action">
                  <form method="dialog">
                    <button
                      className="mr-3 def-btn px-4 py-3 border-def"
                      onClick={AddTask2}
                    >
                      Submit
                    </button>
                    <button className=" bg-black text-white def-btn px-4 py-3 border-def">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-[11px]">
        <div className="w-full h-[38px] py-8 p-4 border-def flex items-center justify-between ">
          <h1 className="text-[17px]">In Progress</h1>
          <div className="flex gap-4 items-center">
            <div className="w-[18px] h-1 flex gap-1">
              <div className="w-1 border-def"></div>
              <div className="w-1 border-def"></div>
              <div className="w-1 border-def"></div>
            </div>
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="px-[14px] py-[6px] text-[17px] border-def"
            >
              +
            </button>

            <dialog id="my_modal_3" className="modal ">
              <div className="modal-box border-def">
                <h3 className="font-bold text-lg mb-2">Creating Task</h3>
                <label className="mt-2">
                  <h1 className="text-[20px]">Task Name</h1>
                  <input
                    ref={TaskName3}
                    type="text"
                    className="border-def p-3 w-full"
                  />
                </label>
                <div className="modal-action">
                  <form method="dialog">
                    <button
                      className="mr-3 def-btn px-4 py-3 border-def"
                      onClick={AddTask3}
                    >
                      Submit
                    </button>
                    <button className=" bg-black text-white def-btn px-4 py-3 border-def">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-[11px]">
        <div className="w-full h-[38px] py-8 p-4 border-def flex items-center justify-between ">
          <h1 className="text-[17px]">Review</h1>
          <div className="flex gap-4 items-center">
            <div className="w-[18px] h-1 flex gap-1">
              <div className="w-1 border-def"></div>
              <div className="w-1 border-def"></div>
              <div className="w-1 border-def"></div>
            </div>
            <button
              onClick={() => document.getElementById("my_modal_4").showModal()}
              className="px-[14px] py-[6px] text-[17px] border-def"
            >
              +
            </button>

            <dialog id="my_modal_4" className="modal ">
              <div className="modal-box border-def">
                <h3 className="font-bold text-lg mb-2">Creating Task</h3>
                <label className="mt-2">
                  <h1 className="text-[20px]">Task Name</h1>
                  <input
                    ref={TaskName4}
                    type="text"
                    className="border-def p-3 w-full"
                  />
                </label>
                <div className="modal-action">
                  <form method="dialog">
                    <button
                      className="mr-3 def-btn px-4 py-3 border-def"
                      onClick={AddTask4}
                    >
                      Submit
                    </button>
                    <button className=" bg-black text-white def-btn px-4 py-3 border-def">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
