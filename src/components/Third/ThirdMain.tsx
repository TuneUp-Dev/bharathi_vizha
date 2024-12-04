import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Define props interface
interface CardProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
}

// Reusable Card Component
const Card: React.FC<CardProps> = ({ image, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer border border-gray-200 rounded-lg shadow-lg overflow-hidden group mx-auto w-[90vw] h-[200px] sm:w-[265px] sm:h-[170px] md:w-[338px] md:h-[220px] lg:w-[304px] lg:h-[200px] xl:w-[384px] xl:h-[250px]"
    >
      {/* Image */}
      <div className="absolute inset-0 transition-transform duration-500 ease-linear group-hover:scale-[1.03]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      {/* Text */}
      <div className="absolute bottom-0 w-full py-1 px-6 bg-red-800 bg-opacity-80 backdrop-blur-[4px] transition-all duration-1000 ease-linear lg:group-hover:opacity-0">
        <h3 className="text-[22px] sm:text-[22px] md:text-[20px] lg:text-[23px] xl:text-[30px] text-center font-semibold text-amber-500">
          {title}
        </h3>
      </div>
    </div>
  );
};

const ThirdMain: React.FC = () => {
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
  ];

  const [visible, setVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState<{
    title: string;
    description: string;
    image: string;
  } | null>(null);

  const openModal = (card: (typeof cardData)[number]) => {
    setSelectedCard(card);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setSelectedCard(null);
  };

  return (
    <>
      <div>
        <div className="h-[120px] md:h-[140px] flex items-center justify-center -mt-7 md:mt-0">
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-red-900 font-bold text-center">
            2016 - 2023
          </h1>
        </div>
        <div className="w-[360px] sm:w-[600px] md:w-[700px] lg:w-[960px] xl:w-[1200px] mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              onClick={() => openModal(card)}
            />
          ))}
        </div>
        <div className="w-full flex items-center justify-center mt-14">
          <Link to={"/2007-2015"}>
            <Button size="lg" className="bg-amber-500 text-red-900 font-medium">
              Previous Page
            </Button>
          </Link>
        </div>
      </div>

      {/* Popup Modal */}
      <Modal
        className="h-[70vh] min-w-[60vw]"
        isOpen={visible}
        onOpenChange={(isOpen) => {
          if (!isOpen) closeModal();
        }}
        isDismissable
      >
        <ModalContent>
          {() => (
            <>
              {selectedCard && (
                <>
                  <div className="w-full h-auto overflow-y-auto p-2 pb-8 scrollbar scrollbar-thumb-red-900 scrollbar-track-gray-100">
                    <ModalHeader className="text-[35px] text-red-900">
                      {selectedCard.title}
                    </ModalHeader>
                    <ModalBody>
                      <img
                        src={selectedCard.image}
                        alt={selectedCard.title}
                        className="rounded-lg mb-4 -mt-4"
                      />
                      <p className="mt-2 text-justify">
                        {selectedCard.description}
                      </p>
                    </ModalBody>
                  </div>
                </>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ThirdMain;
