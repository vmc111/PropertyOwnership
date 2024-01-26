export interface UserType {
  id: number;
  userName: string;
  name: string;
  password: string;
  mobileNumber: string;
  department: Department;
}

export type Department =
  | "BANK"
  | "STATE_REGULATORY"
  | "INSURANCE"
  | "REAL_ESTATE";

export type ActiveTab =
   "CREATE_WALLET"
  | "VERIFY_USER"
  | "ADD_MONEY_TO_WALLET"
  | "CHECK_BALENCE"
  | "GET_PROPERTIES_BY_OWNER"
  | "CREATE_PROPERTY"
  | "SELL_PROPERTY"
  | "BUY_FRACTIONS_OF_PROPERTY"
  | "PURCHASE_INSURANCE"
  | "VIEW_PROPERTIES_WITH_INSURANCE"
  | "FILE_INSURANCE_CLAIM"
  | 'VERIFY_PROPERTY'
  | 'READ_ALL_PROPERTIES'
  | 'GET_TRANSACTION_HISTORY_BY_PROPERTY'

export const BankTabs: ActiveTab[] = ['CREATE_WALLET', 'VERIFY_USER', 'ADD_MONEY_TO_WALLET', 'CHECK_BALENCE', 'GET_PROPERTIES_BY_OWNER', 'READ_ALL_PROPERTIES', 'GET_TRANSACTION_HISTORY_BY_PROPERTY']

export const RealEstateTabs: ActiveTab[] = ['CREATE_PROPERTY', 'SELL_PROPERTY', 'BUY_FRACTIONS_OF_PROPERTY', 'GET_PROPERTIES_BY_OWNER', 'READ_ALL_PROPERTIES', 'GET_TRANSACTION_HISTORY_BY_PROPERTY']

export const InsuranceTabs: ActiveTab[] = ['PURCHASE_INSURANCE', 'VIEW_PROPERTIES_WITH_INSURANCE', 'FILE_INSURANCE_CLAIM', 'GET_PROPERTIES_BY_OWNER', 'READ_ALL_PROPERTIES', 'GET_TRANSACTION_HISTORY_BY_PROPERTY'];

export const StateRegulatoryTabs: ActiveTab[] = ['VERIFY_PROPERTY', 'GET_PROPERTIES_BY_OWNER', 'READ_ALL_PROPERTIES', 'GET_TRANSACTION_HISTORY_BY_PROPERTY'];

export const getTabsListByDepartment = (dep: Department): ActiveTab[] => {
    switch(dep){
        case 'BANK':
            return BankTabs;
        case 'INSURANCE':
            return InsuranceTabs;
        case 'STATE_REGULATORY':
            return StateRegulatoryTabs;
        case 'REAL_ESTATE':
            return RealEstateTabs;
    }
}