import ShowcaseArea from "../../components/Components/ShowcaseArea";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import cardsData from "../../data/showcase/cards";

const cards = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <Nav />
      <div className="px-4 flex justify-center items-center my-2">
        <Header link="/components" name="Cards" />
      </div>

      <div className="w-full py-8 flex flex-col justify-center items-center gap-8">
        {cardsData.map((cardData, idx) => {
          return (
            <div key={idx} className="w-full px-4 max-w-7xl">
              <ShowcaseArea
                name={cardData.name}
                component={cardData.component}
                jsx={cardData.jsx}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default cards;
