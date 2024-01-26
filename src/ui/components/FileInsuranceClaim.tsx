import { useState } from "react";

const FileInsuranceClaimFields = (): React.ReactElement => {
  const [propertyId, setPropertyId] = useState<string>("");
  const [claimAmount, setClaimAmount] = useState<string>("");
  const [claimReason, setClaimReason] = useState<string>("");
  const renderButton = (): React.ReactElement => (
    <button className="w-full py-[5px] self-stretch bg-blue-500 text-white text-base rounded-md hover:bg-blue-700 cursor-pointer font-medium">
      Submit
    </button>
  );

  const renderPropertIdField = (): React.ReactElement => (
    <input
      placeholder="Property Id"
      value={propertyId}
      className="w-full px-3 py-2 outline outline-offset-2 outline-cyan-500 rounded-md text-gray-500 text-base"
      onChange={(e) => setPropertyId(e.target.value)}
    />
  );
  const renderClaimAmountField = (): React.ReactElement => (
    <input
      placeholder="Claim Amount"
      value={claimAmount}
      className="w-full px-3 py-2 outline outline-offset-2 outline-cyan-500 rounded-md text-gray-500 text-base"
      onChange={(e) => setClaimAmount(e.target.value)}
    />
  );
  const renderClaimReasonField = (): React.ReactElement => (
    <input
      placeholder="Claim Reason"
      value={claimReason}
      className="w-full px-3 py-2 outline outline-offset-2 outline-cyan-500 rounded-md text-gray-500 text-base"
      onChange={(e) => setClaimReason(e.target.value)}
    />
  );

  return (
    <div className="bg-white min-w-[300px] px-6 py-8 rounded-xl shadow-gray-50 flex flex-col items-start gap-4 backdrop-blur">
      {renderPropertIdField()}
      {renderClaimAmountField()}
      {renderClaimReasonField()}
      {renderButton()}
    </div>
  );
};

export default FileInsuranceClaimFields;
