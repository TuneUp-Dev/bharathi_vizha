import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
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

const FirstMain: React.FC = () => {
  const cardData = [
    {
      image: "https://i.ibb.co/dLdNXDW/1998.jpg",
      title: "1998",
      description: "This is a description or additional content for card 1.",
    },
    {
      image: "https://i.ibb.co/nbR7Zkw/1999.jpg",
      title: "1999",
      description:
        "This is a description or additional content for card 2. lorekjsibscicubwiusjbiuhw iuwgiwbc wugw cuwybcwc uywcb wgwugvwquguwcgf qbuwgu bfyg aefigiw vbienve euvyei fejviu   bwjgiwnrtuw ck bugu ervyewfefhwfwi43biureguegoih87wgo4ue32bku vfd78eh  g 8 bi g8 g 8we euihe euigevi iu3eieur uiegi eei  ib93 eevw7ug39y3 vr kj  sniiew rvuheiv iuene einvinv fiu w  ev8 iuebi vr 8e ek uwyw jvr uyw w vuwyv jvr ivew vuiwevbiwev vfiwe v bvwe wevl vwwevkjvw uycwbkwv iuvw wvkjvbuiwv vwuiwve 9ewqn voi;n q9f4qi niuqer iub iuwh fuwiu nwherwfwniv u eufh9erwhiberiqb",
    },
    {
      image: "https://i.ibb.co/kH0BTtX/2000.jpg",
      title: "2000",
      description: "This is a description or additional content for card 3.",
    },
    {
      image: "https://i.ibb.co/LYHwFDp/2001.jpg",
      title: "2001",
      description: "This is a description or additional content for card 4.",
    },
    {
      image: "https://i.ibb.co/9bjcz43/2002.jpg",
      title: "2002",
      description: "This is a description or additional content for card 5.",
    },
    {
      image: "https://i.ibb.co/KxRF6tL/2003.jpg",
      title: "2003",
      description: "This is a description or additional content for card 6.",
    },
    {
      image: "https://i.ibb.co/XWc1fJQ/2004.jpg",
      title: "2004",
      description: "This is a description or additional content for card 7.",
    },
    {
      image: "https://i.ibb.co/xGZM6Vm/2005.jpg",
      title: "2005",
      description: "This is a description or additional content for card 8.",
    },
    {
      image: "https://i.ibb.co/SdnWWZ9/2006.jpg",
      title: "2006",
      description: "This is a description or additional content for card 9.",
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
            1998 - 2006
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
              Next Page
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

export default FirstMain;
