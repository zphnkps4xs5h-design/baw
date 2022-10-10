import React from "react";
import ShowcaseArea from "../../components/Components/ShowcaseArea";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import navbarsData from "../../data/showcase/navbars";

const navbars = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <Nav />
      <div className="px-4 flex justify-center items-center my-2">
        <Header link="/components" name="Navbars" />
      </div>

      <div className="w-full py-8 flex flex-col justify-center items-center gap-8">
        {navbarsData.map((navbarData, idx) => {
          return (
            <div key={idx} className="w-full px-4 max-w-7xl">
              <ShowcaseArea
                name={navbarData.name}
                large={navbarData.large}
                small={navbarData.small}
                jsx={navbarData.jsx}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default navbars;
