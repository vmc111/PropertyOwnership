import React, { useState } from "react";
import { Department } from "../../../data-access/Entities";
import useUserLogin from "../../../data-access/Auth/hooks/userLogin";
import { useNavigate } from "react-router-dom";

const LoginPage = (): React.ReactElement => {
  const [username, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [department, setDepartment] = useState<Department>();

  const navigate = useNavigate();
  const { loginUser } = useUserLogin();

  const onClickLogin = (): void => {
    if (!department) {
      alert("Please select your organization.");
      return;
    }
    const { isLoginSucces, errormessage } = loginUser({
      username: username.toUpperCase(),
      password,
      department,
    });

    if (isLoginSucces) {
      navigate("/home");
      localStorage.clear();
      localStorage.setItem("Organization", department);
      return;
    }

    alert(errormessage);
  };

  const renderButton = (label: string): React.ReactElement => (
    <button
      disabled={label === "Register" ? true : false}
      onClick={onClickLogin}
      className="w-full py-[5px] self-stretch bg-blue-500 text-white text-base rounded-md hover:bg-blue-700 cursor-pointer font-medium"
    >
      {label}
    </button>
  );

  const renderDepartmentPicker = (): React.ReactElement => (
    <div className="flex flex-col gap-2 w-full">
      <select
        className="px-3 py-1 outline outline-offset-2 cursor-pointer text-gray-700 outline-cyan-500 rounded-md"
        name="department"
        id="department"
        value={department}
        onChange={(e) => setDepartment(e.target.value as Department)}
      >
        <option
          selected
          disabled={true}
          className="px-2 py-1 text-gray-400"
          value=""
        >
          Select your Organization
        </option>
        <option className="px-2 py-1 cursor-pointer" value={"BANK"}>
          Bank
        </option>
        <option className="px-2 py-1 cursor-pointer" value={"STATE_REGULATORY"}>
          State Regulatory
        </option>
        <option className="px-2 py-1 cursor-pointer" value={"INSURANCE"}>
          Insurance
        </option>
        <option className="px-2 py-1 cursor-pointer" value={"REAL_ESTATE"}>
          Real Estate
        </option>
      </select>
    </div>
  );

  const renderUserNameField = (): React.ReactElement => (
    <input
      placeholder="User Name"
      value={username}
      className="w-full px-3 py-2 outline outline-offset-2 outline-cyan-500 rounded-md text-gray-500 text-base"
      onChange={(e) => setName(e.target.value.toUpperCase())}
    />
  );

  const renderPasswordeField = (): React.ReactElement => (
    <input
      type="password"
      placeholder="Password"
      value={password}
      className="w-full px-3 py-2 outline outline-offset-2 outline-cyan-500 rounded-md text-gray-500 text-base"
      onChange={(e) => setPassword(e.target.value)}
    />
  );

  return (
    <div className="flex overflow-hidden gap-10 justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-screen w-full">
      <div className="flex flex-col overflow-hidden">
        <h1 className="text-center text-5xl text-gray-800 font-semibold truncate">
          <pre>Fractional Property</pre>
          Ownership Platform
        </h1>
      </div>
      <div className="bg-white min-w-[250px] px-6 py-8 rounded-xl shadow-gray-50 w-[28%] flex flex-col items-start gap-4 backdrop-blur">
        {renderDepartmentPicker()}
        <div className="w-full">{renderUserNameField()}</div>
        {renderPasswordeField()}
        <div className="w-full flex gap-1 items-center mt-6">
          {renderButton("Login")}
          {renderButton("Register")}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
