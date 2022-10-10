import ShowcaseArea from "../../components/Components/ShowcaseArea";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import tabsData from "../../data/showcase/tabs";

const tabs = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <Nav />
      <div className="px-4 flex justify-center items-center my-2">
        <Header link="/components" name="Tabs" />
      </div>

      <div className="w-full py-8 flex flex-col justify-center items-center gap-8">
        {tabsData.map((tabData, idx) => {
          return (
            <div key={idx} className="w-full px-4 max-w-7xl">
              <ShowcaseArea
                name={tabData.name}
                component={tabData.component}
                jsx={tabData.jsx}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default tabs;
