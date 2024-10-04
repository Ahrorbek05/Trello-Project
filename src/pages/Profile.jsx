import React from "react";

const Profile = () => {
  let html = document.querySelector("html");
  if (localStorage.getItem("theme")) {
    html.setAttribute("data-theme", localStorage.getItem("theme"));
  }
  function DataThemeChange(e) {
    html.setAttribute("data-theme", e.target.value);
    localStorage.setItem("theme", e.target.value);
  }

  return (
    <div className="relative top-[200px]">
      <h1 className="text-[50px] text-center mb-4">Settings</h1>
      <div className="flex gap-6 ">
        <form className="w-[500px] border-def flex justify-center flex-col p-10 gap-4 info-form">
          <h1 className="text-[30px] text-center">My Info</h1>
          <div className="lables flex flex-col gap-8">
            <div className="flex gap-4 w-[416px]">
              <label className="FirstName w-[205.6px] h-[59.2px]">
                <h1>Name</h1>
                <input
                  type="text"
                  className="pl-3 border-def h-full"
                  placeholder="Carl"
                />
              </label>
              <label className="LastName w-full h-[59.2px]">
                <h1>Surname</h1>
                <input
                  type="text"
                  className="pl-3 border-def w-full h-full"
                  placeholder="Jhonson"
                />
              </label>
            </div>
            <label className="email w-full h-[59.2px]">
              <h1>Email</h1>
              <input
                type="text"
                placeholder="cj95@gmail.com"
                className="w-full p-4 border-def"
              />
            </label>
            <label className="flex gap-1 flex-col">
              <h1>Password</h1>
              <div className="flex gap-2">
                <input
                  type="password"
                  value="..........."
                  className="w-full p-4 border-def"
                />
                <button className="border-def transition-[1s] hover:px-[50px]">
                  Change Password
                </button>
              </div>
            </label>
          </div>
        </form>
        <div className="settings w-full h-full p-10 border-def flex flex-col gap-4">
          <h1 className="text-[30px] ">Site settings</h1>
          <h1 className="flex items-center gap-4">
            <input
              type="checkbox"
              className="toggle border-def transition-[0.3s]"
            />
            Animation during
          </h1>
          <h1 className="flex items-center gap-4">
            <select className="border-def p-1" onChange={DataThemeChange}>
              <option value="light">White Paper</option>
              <option value="retro">Milky Cofee</option>
              <option value="black">Black Water</option>
            </select>
            Theme
          </h1>

          <h1 className="flex items-center gap-4"></h1>
          <h1 className="flex items-center gap-4"></h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
