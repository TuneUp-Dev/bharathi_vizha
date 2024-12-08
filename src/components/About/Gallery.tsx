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
      image: "https://i.ibb.co/S3xCd2G/DSC-3348.jpg",
      title: "DSC-3348",
      description: "This is a description or additional content for card 5.",
    },
    {
      image: "https://i.ibb.co/3s7SWKS/2014.jpg",
      title: "2014",
      description: "This is a description or additional content for card 1.",
    },
    {
      image: "https://i.ibb.co/Rp8GvJB/000002.jpg",
      title: "000002",
      description: "This is a description or additional content for card 2.",
    },
    {
      image: "https://i.ibb.co/6b0yj36/DSC-0099-copy.jpg",
      title: "DSC-0099-copy",
      description: "This is a description or additional content for card 3.",
    },
    {
      image: "https://i.ibb.co/TTfQLxN/DSC-0145-copy.jpg",
      title: "DSC-0145-copy",
      description: "This is a description or additional content for card 4.",
    },
    {
      image: "https://i.ibb.co/rGVTkCz/DSCN9893.jpg",
      title: "DSCN9893",
      description: "This is a description or additional content for card 6.",
    },
    {
      image: "https://i.ibb.co/9NqX7Nn/DSC-0089-copy.jpg",
      title: "DSC-0089-copy",
      description: "This is a description or additional content for card 7.",
    },
    {
      image: "https://i.ibb.co/4P0ZWc0/DSC-2023.jpg",
      title: "DSC-2023",
      description: "This is a description or additional content for card 8.",
    },
    {
      image: "https://i.ibb.co/G5qFf3Z/DSC-0273-copy.jpg",
      title: "DSC-0273-copy",
      description: "This is a description or additional content for card 9.",
    },
    {
      image: "https://i.ibb.co/nQrtBLV/DSC-1996.jpg",
      title: "DSC-1996",
      description: "This is a description or additional content for card 10.",
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
