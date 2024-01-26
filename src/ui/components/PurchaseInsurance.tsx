import { useState } from "react";

const PurchaseInsuranceFields = (): React.ReactElement => {
  const [propertyId, setPropertyId] = useState<string>("");
  const [insuranceProvider, setInsuranceProvider] = useState<string>("");
  const [insuranceId, setInsuranceId] = useState<string>("");
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
  const renderInsuranceProviderField = (): React.ReactElement => (
    <input
      placeholder="Insurance Provider"
      value={insuranceProvider}
      className="w-full px-3 py-2 outline outline-offset-2 outline-cyan-500 rounded-md text-gray-500 text-base"
      onChange={(e) => setInsuranceProvider(e.target.value)}
    />
  );
  const renderInsuranceIdField = (): React.ReactElement => (
    <input
      placeholder="Insurance Id"
      value={insuranceId}
      className="w-full px-3 py-2 outline outline-offset-2 outline-cyan-500 rounded-md text-gray-500 text-base"
      onChange={(e) => setInsuranceId(e.target.value)}
    />
  );

  return (
    <div className="bg-white min-w-[300px] px-6 py-8 rounded-xl shadow-gray-50 flex flex-col items-start gap-4 backdrop-blur">
      {renderPropertIdField()}
      {renderInsuranceProviderField()}
      {renderInsuranceIdField()}
      {renderButton()}
    </div>
  );
};

export default PurchaseInsuranceFields;
