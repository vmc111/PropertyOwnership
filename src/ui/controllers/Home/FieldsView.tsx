import React from "react";
import { ActiveTab, Department } from "../../../data-access/Entities";
import AddMoneyToWalletFields from "../../components/AddMoneyToWallet";
import BuyFractionsOfPropertyFields from "../../components/BuyFractionsOfProperty";
import CheckBalanceFields from "../../components/CheckBalance";
import CreatePropertyFields from "../../components/CreateProperty";
import CreateWalletFields from "../../components/CreateWalletFields";
import GetPropertiesByOwnerFields from "../../components/GetPropertiesByOwner";
import PurchaseInsuranceFields from "../../components/PurchaseInsurance";
import VerifyUserFields from "../../components/VerifyUser";
import SellPropertyFields from "../../components/SellProperty";
import VerifyPropertyFields from "../../components/VerifyProperty";
import FileInsuranceClaimFields from "../../components/FileInsuranceClaim";
import GetTransactionHistoryByWallet from "../../components/GetTransactionHistoryByWallet";

interface FieldsViewProps {
  //   department: Department;
  activeTab: ActiveTab;
}

const FieldsView = (props: FieldsViewProps): React.ReactElement => {
  const { activeTab } = props;

  switch (activeTab) {
    case "ADD_MONEY_TO_WALLET":
      return <AddMoneyToWalletFields />;
    case "BUY_FRACTIONS_OF_PROPERTY":
      return <BuyFractionsOfPropertyFields />;
    case "CHECK_BALENCE":
      return <CheckBalanceFields />;
    case "CREATE_PROPERTY":
      return <CreatePropertyFields />;
    case "CREATE_WALLET":
      return <CreateWalletFields />;
    case "FILE_INSURANCE_CLAIM":
      return <FileInsuranceClaimFields />;
    case "GET_PROPERTIES_BY_OWNER":
      return <GetPropertiesByOwnerFields />;
    case "PURCHASE_INSURANCE":
      return <PurchaseInsuranceFields />;
    case "SELL_PROPERTY":
      return <SellPropertyFields />;
    case "VERIFY_PROPERTY":
      return <VerifyPropertyFields />;
    case "VERIFY_USER":
      return <VerifyUserFields />;
    case "VIEW_PROPERTIES_WITH_INSURANCE":
      return <></>;
    case "READ_ALL_PROPERTIES":
      return <></>;
    case "GET_TRANSACTION_HISTORY_BY_PROPERTY":
      return <GetTransactionHistoryByWallet />;
  }
};

export default FieldsView;
