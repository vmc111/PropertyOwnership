import { useState } from "react";

const CreatePropertyFields = (): React.ReactElement => {
  const [address, setAddress] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [ownerWalletAddress, setOwnerWalletAddress] = useState<string>("");

  const renderButton = (): React.ReactElement => (
    <button className="w-full py-[5px] self-stretch bg-blue-500 text-white text-base rounded-md hover:bg-blue-700 cursor-pointer font-medium">
      Submit
    </button>
  );

  const renderAddressField = (): React.ReactElement => (
    <input
      placeholder="Address"
      value={address}
      className="w-full px-3 py-2 outline outline-offset-2 outline-cyan-500 rounded-md text-gray-500 text-base"
      onChange={(e) => setAddress(e.target.value)}
    />
  );

  const renderValueField = (): React.ReactElement => (
    <input
      placeholder="Value"
      value={value}
      className="w-full px-3 py-2 outline outline-offset-2 outline-cyan-500 rounded-md text-gray-500 text-base"
      onChange={(e) => setValue(e.target.value)}
    />
  );

  const renderOwnerWalletAddressField = (): React.ReactElement => (
    <input
      placeholder="Owner Wallet Address "
      value={ownerWalletAddress}
      className="w-full px-3 py-2 outline outline-offset-2 outline-cyan-500 rounded-md text-gray-500 text-base"
      onChange={(e) => setOwnerWalletAddress(e.target.value)}
    />
  );

  return (
    <div className="bg-white min-w-[300px] px-6 py-8 rounded-xl shadow-gray-50 flex flex-col items-start gap-4 backdrop-blur">
      {renderAddressField()}
      {renderValueField()}
      {renderOwnerWalletAddressField()}
      {renderButton()}
    </div>
  );
};

export default CreatePropertyFields;
