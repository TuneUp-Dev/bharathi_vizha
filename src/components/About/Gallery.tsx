// Define props interface
interface CardProps {
  image: string;
}

// Reusable Card Component
const Card: React.FC<CardProps> = ({ image }) => {
  return (
    <div className="relative border-gray-200 border-[2px] hover:border-amber-500 rounded-lg shadow-lg overflow-hidden group mx-auto w-[90vw] h-[200px] sm:w-[285px] sm:h-[175px] md:w-[338px] md:h-[220px] lg:w-[470px] lg:h-[330px] xl:w-[584px] xl:h-[400px] transition-all duration-500 ease-in-out">
      {/* Image */}
      <div className="absolute inset-0 transition-transform duration-500 ease-linear group-hover:scale-[1.03]">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const cardData = [
    {
      image: "https://i.ibb.co/hDmgrZ9/2016.jpg",
      title: "2016",
      description: "This is a description or additional content for card 8.",
    },
    {
      image: "https://i.ibb.co/2qywd0f/2017.jpg",
      title: "2017",
      description: "This is a description or additional content for card 8.",
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
    {
      image: "https://i.ibb.co/XWqBv1n/2023.jpg",
      title: "2024",
      description: "This is a description or additional content for card 3.",
    },
  ];

  return (
    <>
      <div>
        <div className="h-[120px] md:h-[140px] flex items-center justify-center mt-[20px]">
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-red-900 font-bold text-center">
            கலை காட்சி
          </h1>
        </div>
        <div className="w-[360px] sm:w-[600px] md:w-[700px] lg:w-[960px] xl:w-[1200px] mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3">
          {cardData.map((card, index) => (
            <Card key={index} image={card.image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
