import { useState } from "react";

const BuyFractionsOfPropertyFields = (): React.ReactElement => {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [tokens, setTokens] = useState<string>("");

  const renderButton = (): React.ReactElement => (
    <button className="w-full py-[5px] self-stretch bg-blue-500 text-white text-base rounded-md hover:bg-blue-700 cursor-pointer font-medium">
      Submit
    </button>
  );

  const renderWalletAddressField = (): React.ReactElement => (
    <input
      placeholder="Buyer Wallet Address"
      value={walletAddress}
      className="w-full px-3 py-2 outline outline-offset-2 outline-cyan-500 rounded-md text-gray-500 text-base"
      onChange={(e) => setWalletAddress(e.target.value)}
    />
  );
  const renderTokensField = (): React.ReactElement => (
    <input
      placeholder="Tokens"
      value={tokens}
      className="w-full px-3 py-2 outline outline-offset-2 outline-cyan-500 rounded-md text-gray-500 text-base"
      onChange={(e) => setTokens(e.target.value)}
    />
  );

  return (
    <div className="bg-white min-w-[300px] px-6 py-8 rounded-xl shadow-gray-50 flex flex-col items-start gap-4 backdrop-blur">
      {renderWalletAddressField()}
      {renderTokensField()}
      {renderButton()}
    </div>
  );
};

export default BuyFractionsOfPropertyFields;
