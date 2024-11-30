import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

// Define props interface
interface CardProps {
  image: string;
  title: string;
  description: string;
}

// Reusable Card Component
const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="relative border border-gray-200 rounded-lg shadow-lg overflow-hidden group w-[360px] h-[220px] sm:w-[265px] sm:h-[170px] md:w-[338px] md:h-[220px] lg:w-[304px] lg:h-[200px] xl:w-[384px] xl:h-[250px]">
      {/* Image */}
      <div className="absolute inset-0 transition-transform duration-500 ease-linear group-hover:scale-[1.03]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      {/* Text */}
      <div className="absolute bottom-0 w-full py-1 px-6 bg-red-800 bg-opacity-80 backdrop-blur-[4px] transition-all duration-1000 ease-linear group-hover:opacity-0">
        <h3 className="text-[22px] sm:text-[22px] md:text-[20px] lg:text-[23px] xl:text-[30px] text-center font-semibold text-amber-500">
          {title}
        </h3>
      </div>
    </div>
  );
};

const SecondMain: React.FC = () => {
  const cardData = [
    {
      image: "https://i.ibb.co/61pgCj4/2007.jpg",
      title: "2007",
      description: "This is a description or additional content for card 10.",
    },
    {
      image: "https://i.ibb.co/br0Bnct/2008.jpg",
      title: "2008",
      description: "This is a description or additional content for card 1.",
    },
    {
      image: "https://i.ibb.co/fQ3Hm9s/2009.jpg",
      title: "2009",
      description: "This is a description or additional content for card 2.",
    },
    {
      image: "https://i.ibb.co/kBPs327/2010.jpg",
      title: "2010",
      description: "This is a description or additional content for card 3.",
    },
    {
      image: "https://i.ibb.co/v4KFCFb/2011.jpg",
      title: "2011",
      description: "This is a description or additional content for card 4.",
    },
    {
      image: "https://i.ibb.co/S50v5LC/2012.jpg",
      title: "2012",
      description: "This is a description or additional content for card 5.",
    },
    {
      image: "https://i.ibb.co/0t6FtG3/2013.jpg",
      title: "2013",
      description: "This is a description or additional content for card 6.",
    },
    {
      image: "https://i.ibb.co/CbWWmZ4/2014.jpg",
      title: "2014",
      description: "This is a description or additional content for card 7.",
    },
    {
      image: "https://i.ibb.co/LSXpcPZ/2015.jpg",
      title: "2015",
      description: "This is a description or additional content for card 8.",
    },
  ];

  return (
    <>
      <div>
        <div className="h-[120px] md:h-[140px] flex items-center justify-center mt-[20px]">
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-red-900 font-bold text-center">
            2007 - 2015
          </h1>
        </div>
        <div className="w-[360px] sm:w-[600px] md:w-[700px] lg:w-[960px] xl:w-[1200px] mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="w-full flex items-center justify-center mt-14 gap-x-5">
          <Button size="lg" className="bg-amber-500 text-red-900 font-medium">
            <Link to={"/1998-2007"}>Previous Page</Link>
          </Button>
          <Button size="lg" className="bg-amber-500 text-red-900 font-medium">
            <Link to={"/2016-2023"}>Next Page</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SecondMain;
