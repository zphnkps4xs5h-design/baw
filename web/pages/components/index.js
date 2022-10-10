import Card from "../../components/Components/Card";
import Nav from "../../components/Nav";
import componentsCardData from "../../data/component";

const components = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <Nav />
      <div className="w-full py-8 flex flex-wrap justify-center items-center gap-8">
        {componentsCardData.map(
          ({ id, name, numberOfComponents, link, image }) => (
            <Card
              key={id}
              name={name}
              numberOfComponents={numberOfComponents}
              link={link}
              image={image}
            />
          )
        )}
      </div>
    </div>
  );
};

export default components;
