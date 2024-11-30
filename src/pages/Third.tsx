import React from "react";
<<<<<<< HEAD

const Third = () => {
  return <div>Third</div>;
};

=======
import Headgrid from "../components/Headgrid";

// Define props interface
interface CardProps {
  image: string;
  title: string;
  description: string;
}

// Reusable Card Component
const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div
      className="relative border border-gray-200 rounded-lg shadow-lg overflow-hidden group"
      style={{ height: "300px" }}
    >
      {/* Image */}
      <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-110">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      {/* Text */}
      <div className="absolute bottom-0 w-full py-4 px-6 bg-red-800 bg-opacity-90 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
        <h3 className="text-[30px] text-center font-semibold text-amber-500">{title}</h3>
      </div>
    </div>
  );
};

const Third: React.FC = () => {
  const cardData = [
    {
      image: "https://i.ibb.co/hDmgrZ9/2016.jpg",
      title: "2016",
      description: "This is a description or additional content for card 1.",
    },
    {
      image: "https://i.ibb.co/2qywd0f/2017.jpg",
      title: "2017",
      description: "This is a description or additional content for card 2.",
    },
    {
      image: "https://i.ibb.co/s2pW8n9/2018.jpg",
      title: "2018",
      description: "This is a description or additional content for card 3.",
    },
    {
      image: "https://i.ibb.co/FHVPJDk/2019.jpg",
      title: "2019",
      description: "This is a description or additional content for card 3.",
    },
    {
      image: "https://i.ibb.co/fQq6xyW/2020.jpg",
      title: "2020",
      description: "This is a description or additional content for card 3.",
    },
    {
      image: "https://i.ibb.co/B3n65wL/2021.jpg",
      title: "2021",
      description: "This is a description or additional content for card 3.",
    },
    {
      image: "https://i.ibb.co/6ZDzf43/2022.jpg",
      title: "2022",
      description: "This is a description or additional content for card 3.",
    },
    {
      image: "https://i.ibb.co/XWqBv1n/2023.jpg",
      title: "2023",
      description: "This is a description or additional content for card 3.",
    },
    ];

  return (
    <div>
    <Headgrid/>
    <div className="h-[120px] md:h-[140px] flex items-center justify-center bg-gray-50">
      <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-red-900 font-bold text-center">
        Some Heading
      </h1>
    </div>
    <div className="grid gap-6 p-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
    <div className="flex items-center justify-center mt-10 mb-8">
      <a href="">
  <button className="p-4 bg-amber-500 text-red-900 rounded-lg hover:bg-red-900 hover:text-white">
    Go to 2024
  </button></a>
</div>

    </div>
  );
};

>>>>>>> main
export default Third;
