import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ActiveTab,
  Department,
  getTabsListByDepartment,
} from "../../../data-access/Entities";
import Sidebar from "../../components/Sidebar";
import FieldsView from "./FieldsView";

const HomePage = (): React.ReactElement => {
  const [tabItemsList, setTabItems] = useState<ActiveTab[]>([]);
  const [activeTab, setActiveTab] = useState<ActiveTab>();
  const [department, setDepartment] = useState<Department | undefined>();

  const navigator = useNavigate();

  useEffect(() => {
    const dep = localStorage.getItem("Organization");
    if (!dep) return;
    setDepartment(dep as Department);
    const tabs = getTabsListByDepartment(dep as Department);
    setTabItems(tabs);
    setActiveTab(tabs[0]);
  }, []);

  const onClickLogout = (): void => {
    localStorage.clear();
    navigator("/");
  };

  const renderLogoutButton = (): React.ReactElement => (
    <button
      onClick={onClickLogout}
      className="px-8 py-[5px] self-stretch bg-red-500 text-white text-base rounded-md hover:bg-red-700 cursor-pointer font-medium"
    >
      Logout
    </button>
  );

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <div className="p-6 border-b border-b-gray-300 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-700">{department}</h2>
        {renderLogoutButton()}
      </div>
      <div className="flex-grow bg-gray-100 flex w-full">
        <Sidebar
          tabItems={tabItemsList}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="flex items-center justify-center w-full">
          {activeTab ? <FieldsView activeTab={activeTab} /> : null}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
