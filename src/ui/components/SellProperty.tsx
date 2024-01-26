import { useState } from "react";

const SellPropertyFields = (): React.ReactElement => {
  const [propertyId, setPropertyId] = useState<string>("");
  const [fractionsAvailableForSale, setFractionsAvailableForSale] =
    useState<string>("");

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
  const renderFractionsAvailableForSaleField = (): React.ReactElement => (
    <input
      placeholder="Fractions Available for Sale"
      value={fractionsAvailableForSale}
      className="w-full px-3 py-2 outline outline-offset-2 outline-cyan-500 rounded-md text-gray-500 text-base"
      onChange={(e) => setFractionsAvailableForSale(e.target.value)}
    />
  );

  return (
    <div className="bg-white min-w-[300px] px-6 py-8 rounded-xl shadow-gray-50 flex flex-col items-start gap-4 backdrop-blur">
      {renderPropertIdField()}
      {renderFractionsAvailableForSaleField()}
      {renderButton()}
    </div>
  );
};

export default SellPropertyFields;
