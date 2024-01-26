import { useState } from "react";

const CreateWalletFields = (): React.ReactElement => {
  const [username, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");

  const renderButton = (): React.ReactElement => (
    <button className="w-full py-[5px] self-stretch bg-blue-500 text-white text-base rounded-md hover:bg-blue-700 cursor-pointer font-medium">
      Submit
    </button>
  );

  const renderUserNameField = (): React.ReactElement => (
    <input
      placeholder="User Name"
      value={username}
      className="w-full px-3 py-2 outline outline-offset-2 outline-cyan-500 rounded-md text-gray-500 text-base"
      onChange={(e) => setName(e.target.value)}
    />
  );

  const renderEmailField = (): React.ReactElement => (
    <input
      placeholder="Email"
      value={email}
      className="w-full px-3 py-2 outline outline-offset-2 outline-cyan-500 rounded-md text-gray-500 text-base"
      onChange={(e) => setEmail(e.target.value)}
    />
  );

  const renderPhoneNumberField = (): React.ReactElement => (
    <input
      placeholder="Phone Number"
      value={mobileNumber}
      className="w-full px-3 py-2 outline outline-offset-2 outline-cyan-500 rounded-md text-gray-500 text-base"
      onChange={(e) => setMobileNumber(e.target.value)}
    />
  );

  return (
    <div className="bg-white min-w-[300px] px-6 py-8 rounded-xl shadow-gray-50 flex flex-col items-start gap-4 backdrop-blur">
      {renderUserNameField()}
      {renderEmailField()}
      {renderPhoneNumberField()}
      {renderButton()}
    </div>
  );
};

export default CreateWalletFields;
