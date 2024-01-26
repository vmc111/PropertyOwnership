import { ActiveTab } from "../../data-access/Entities";

interface SidebarProps {
  tabItems: ActiveTab[];
  activeTab: ActiveTab | undefined;

  setActiveTab: (tab: ActiveTab) => void;
}

const Sidebar = (props: SidebarProps): React.ReactElement => {
  const { tabItems, activeTab, setActiveTab } = props;

  const renderTabButtons = (tab: ActiveTab): React.ReactElement => {
    const onClickTab = (): void => {
      setActiveTab(tab);
    };

    const activeTabClassName = "text-blue-700 hover:bg-blue-50";
    const inActiveTabClassName = " text-black hover:bg-gray-50";

    return (
      <button
        title={tab}
        key={tab}
        onClick={onClickTab}
        className={`px-8 self-stretch py-[5px] text-base cursor-pointer font-medium truncate ${
          activeTab === tab ? activeTabClassName : inActiveTabClassName
        }`}
      >
        {tab}
      </button>
    );
  };

  return (
    <div className="!w-[300px] px-2 pt-8 gap-8 bg-white border-r border-r-gray-300 flex flex-col items-center flex-shrink-0">
      {tabItems.map(renderTabButtons)}
    </div>
  );
};

export default Sidebar;
