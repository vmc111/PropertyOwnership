import { useEffect } from "react";
// PropertyTable.tsx

import React from "react";

interface Property {
  PId: string;
  Address: string;
  Size: number;
  Value: number;
  Status: string;
  AvailableForSale: boolean;
  FractionsPerFlat: number;
  GovtUniqueID: string;
  Owner: string;
}

let data: Property[] = [
  {
    PId: "51",
    Address: "123 Main St",
    Size: 1500,
    Value: 200000,
    Status: "Available",
    AvailableForSale: true,
    FractionsPerFlat: 10,
    GovtUniqueID: "ABC123",
    Owner: "John Doe",
  },
  {
    PId: "52",
    Address: "456 Oak St",
    Size: 2000,
    Value: 250000,
    Status: "Sold",
    AvailableForSale: false,
    FractionsPerFlat: 8,
    GovtUniqueID: "XYZ789",
    Owner: "Jane Smith",
  },
  {
    PId: "51",
    Address: "123 Main St",
    Size: 1500,
    Value: 200000,
    Status: "Available",
    AvailableForSale: true,
    FractionsPerFlat: 10,
    GovtUniqueID: "ABC123",
    Owner: "John Doe",
  },
  {
    PId: "52",
    Address: "456 Oak St",
    Size: 2000,
    Value: 250000,
    Status: "Sold",
    AvailableForSale: false,
    FractionsPerFlat: 8,
    GovtUniqueID: "XYZ789",
    Owner: "Jane Smith",
  },
  {
    PId: "51",
    Address: "123 Main St",
    Size: 1500,
    Value: 200000,
    Status: "Available",
    AvailableForSale: true,
    FractionsPerFlat: 10,
    GovtUniqueID: "ABC123",
    Owner: "John Doe",
  },
  {
    PId: "52",
    Address: "456 Oak St",
    Size: 2000,
    Value: 250000,
    Status: "Sold",
    AvailableForSale: false,
    FractionsPerFlat: 8,
    GovtUniqueID: "XYZ789",
    Owner: "Jane Smith",
  },
  {
    PId: "51",
    Address: "123 Main St",
    Size: 1500,
    Value: 200000,
    Status: "Available",
    AvailableForSale: true,
    FractionsPerFlat: 10,
    GovtUniqueID: "ABC123",
    Owner: "John Doe",
  },
  {
    PId: "52",
    Address: "456 Oak St",
    Size: 2000,
    Value: 250000,
    Status: "Sold",
    AvailableForSale: false,
    FractionsPerFlat: 8,
    GovtUniqueID: "XYZ789",
    Owner: "Jane Smith",
  },
  {
    PId: "51",
    Address: "123 Main St",
    Size: 1500,
    Value: 200000,
    Status: "Available",
    AvailableForSale: true,
    FractionsPerFlat: 10,
    GovtUniqueID: "ABC123",
    Owner: "John Doe",
  },
  {
    PId: "52",
    Address: "456 Oak St",
    Size: 2000,
    Value: 250000,
    Status: "Sold",
    AvailableForSale: false,
    FractionsPerFlat: 8,
    GovtUniqueID: "XYZ789",
    Owner: "Jane Smith",
  },
  {
    PId: "51",
    Address: "123 Main St",
    Size: 1500,
    Value: 200000,
    Status: "Available",
    AvailableForSale: true,
    FractionsPerFlat: 10,
    GovtUniqueID: "ABC123",
    Owner: "John Doe",
  },
  {
    PId: "52",
    Address: "456 Oak St",
    Size: 2000,
    Value: 250000,
    Status: "Sold",
    AvailableForSale: false,
    FractionsPerFlat: 8,
    GovtUniqueID: "XYZ789",
    Owner: "Jane Smith",
  },
  {
    PId: "51",
    Address: "123 Main St",
    Size: 1500,
    Value: 200000,
    Status: "Available",
    AvailableForSale: true,
    FractionsPerFlat: 10,
    GovtUniqueID: "ABC123",
    Owner: "John Doe",
  },
  {
    PId: "52",
    Address: "456 Oak St",
    Size: 2000,
    Value: 250000,
    Status: "Sold",
    AvailableForSale: false,
    FractionsPerFlat: 8,
    GovtUniqueID: "XYZ789",
    Owner: "Jane Smith",
  },
  {
    PId: "51",
    Address: "123 Main St",
    Size: 1500,
    Value: 200000,
    Status: "Available",
    AvailableForSale: true,
    FractionsPerFlat: 10,
    GovtUniqueID: "ABC123",
    Owner: "John Doe",
  },
  {
    PId: "52",
    Address: "456 Oak St",
    Size: 2000,
    Value: 250000,
    Status: "Sold",
    AvailableForSale: false,
    FractionsPerFlat: 8,
    GovtUniqueID: "XYZ789",
    Owner: "Jane Smith",
  },
  {
    PId: "52",
    Address: "456 Oak St",
    Size: 2000,
    Value: 250000,
    Status: "Sold",
    AvailableForSale: false,
    FractionsPerFlat: 8,
    GovtUniqueID: "XYZ789",
    Owner: "Jane Smith",
  },
  {
    PId: "52",
    Address: "456 Oak St",
    Size: 2000,
    Value: 250000,
    Status: "Sold",
    AvailableForSale: false,
    FractionsPerFlat: 8,
    GovtUniqueID: "XYZ789",
    Owner: "Jane Smith",
  },
  {
    PId: "52",
    Address: "456 Oak St",
    Size: 2000,
    Value: 250000,
    Status: "Sold",
    AvailableForSale: false,
    FractionsPerFlat: 8,
    GovtUniqueID: "XYZ789",
    Owner: "Jane Smith",
  },
  {
    PId: "52",
    Address: "456 Oak St",
    Size: 2000,
    Value: 250000,
    Status: "Sold",
    AvailableForSale: false,
    FractionsPerFlat: 8,
    GovtUniqueID: "XYZ789",
    Owner: "Jane Smith",
  },
  {
    PId: "52",
    Address: "456 Oak St",
    Size: 2000,
    Value: 250000,
    Status: "Sold",
    AvailableForSale: false,
    FractionsPerFlat: 8,
    GovtUniqueID: "XYZ789",
    Owner: "Jane Smith",
  },
  {
    PId: "52",
    Address: "456 Oak St",
    Size: 2000,
    Value: 250000,
    Status: "Sold",
    AvailableForSale: false,
    FractionsPerFlat: 8,
    GovtUniqueID: "XYZ789",
    Owner: "Jane Smith",
  },
  {
    PId: "52",
    Address: "456 Oak St",
    Size: 2000,
    Value: 250000,
    Status: "Sold",
    AvailableForSale: false,
    FractionsPerFlat: 8,
    GovtUniqueID: "XYZ789",
    Owner: "Jane Smith",
  },
];

const ReadAllProperties = (): React.ReactElement => {
  const getProperties = async () => {
    const url = "http://localhost:3000/readAllProperties";
    const options = {
      method: "GET",
    };

    const response = await fetch(url, options);
    const res = await response.json();
    if (response.ok) {
      console.log(res);
      data = res;
    } else {
      alert(res.error);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);
  return (
    <div className="bg-white min-w-[300px] px-6 py-8  rounded-xl shadow-gray-50 flex flex-col items-start gap-4 backdrop-blur">
      <div className="container mx-auto mt-8 overflow-y-auto max-h-screen">
        <h1 className="text-4xl font-bold text-black mb-4 text-center">
          List of Properties
        </h1>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-green-400">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Address</th>
              <th className="py-2 px-4 border-b">Size</th>
              <th className="py-2 px-4 border-b">Value</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Available For Sale</th>
              <th className="py-2 px-4 border-b">Fractions Per Flat</th>
              <th className="py-2 px-4 border-b">Govt Unique ID</th>
              <th className="py-2 px-4 border-b">Owner</th>
            </tr>
          </thead>
          <tbody className="bg-cyan-50">
            {data.map((property) => (
              <tr key={property.PId}>
                <td className="py-2 px-4 border-b">{property.PId}</td>
                <td className="py-2 px-4 border-b">{property.Address}</td>
                <td className="py-2 px-4 border-b">{property.Size}</td>
                <td className="py-2 px-4 border-b">{property.Value}</td>
                <td className="py-2 px-4 border-b">{property.Status}</td>
                <td className="py-2 px-4 border-b">
                  {property.AvailableForSale ? "Yes" : "No"}
                </td>
                <td className="py-2 px-4 border-b">
                  {property.FractionsPerFlat}
                </td>
                <td className="py-2 px-4 border-b">{property.GovtUniqueID}</td>
                <td className="py-2 px-4 border-b">{property.Owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReadAllProperties;
