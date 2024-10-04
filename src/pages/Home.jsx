import React from "react";

function Home() {
  return (
    <div className="py-[122px] px-[20px]">
      <div className="hello pt-10 flex justify-between">
        <div className="pt-10 w-[500px]">
          <h1 className="text-[70px]">
            Welcome! 
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            pariatur ad accusamus, recusandae ipsum accusantium qui, tempore
            doloremque magnam voluptatibus quod! Reprehenderit iste harum a
            illum, exercitationem quo ratione officiis accusantium. Soluta
            architecto aspernatur porro ut eaque commodi amet ipsum molestiae
            enim incidunt placeat officia minus, ducimus ipsa sequi maiores!
          </p>
        </div>
        <div className="tasks border-def p-20">
          <h1 className="text-[50px] text-center">Your Boards</h1>
          <div className="cards flex w-[436px] flex-wrap gap-4">
            <div className="card-home border-def"></div>
            <div className="card-home border-def"></div>
            <div className="card-home border-def"></div>
            <div className="card-home border-def"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
