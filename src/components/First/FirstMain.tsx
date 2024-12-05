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
      description:
        "முதல் 'பாரதி விருது' பெற்ற எழுத்தாளர் பொன்னீலன் விருதினைப் பெற்றுக்கொண்டு ஏற்புரை நிகழ்த்திய போது எடுத்த படம். மேடையில் மக்கள் சிந்தனை பெறவையின் தலைவர் த.ஸ்டாலின் குணசேகரன், தேசிய நல விழிப்புணர்வு இயக்கத்தின் தலைவர் எஸ்கேஎம்.மயிலானந்தன், பாரதி வித்யா பவன் பள்ளியின் தாளாளர் டாக்டர் எல்.எம்.இராமகிருஷ்ணன் ஆகியோர் உள்ளனர்.",
    },
    {
      image: "https://i.ibb.co/nbR7Zkw/1999.jpg",
      title: "1999",
      description:
        "பாரதியியல் ஆய்வாளர் பெ.சு.மணி விருது பெற்றார். விருது வழங்கி விழாச் சிறப்புரையாற்றியவர் பொதுவுடமை இயக்கத் தலைவர் தா.பாண்டியன். சுதந்திரப் போராட்டத் தியாகிகள் ஐ.மாயாண்டிபாரதி, கே.சுப்பராயலு, பி.ராமசாமி, கி.லட்சுமிகாந்தன்பாரதி ஐஏஎஸ் ஆகியோர் சிறப்பு விருந்தினர்களாகப் பங்கேற்றனர்.",
    },
    {
      image: "https://i.ibb.co/kH0BTtX/2000.jpg",
      title: "2000",
      description:
        "'பாரதி' திரைப்பட இயக்குனர் ஞானராஜசேகரன் விருது பெற்றார். இலக்கியச் செல்வர் குமரி அனந்தன் விழாச் சிறப்புரையாற்றினார்",
    },
    {
      image: "https://i.ibb.co/LYHwFDp/2001.jpg",
      title: "2001",
      description:
        "பாரதியியல் ஆய்வாளர் - சாகித்ய அகாடமி விருது பெற்ற படைப்பாளி தொ.மு.சி.ரகுநாதன் விருது பெற்றார். சாகித்ய அகாடமி விருது பெற்ற எழுத்தாளர் பொன்னீலன் விருது வழங்கினார். சாகித்ய அகாடமி விருது பெற்ற எழுத்தாளர் பிரபஞ்சன், வழக்குரைஞர் எம்.செல்வநாயகி ஆகியோர் சிறப்புரையாற்றினர்",
    },
    {
      image: "https://i.ibb.co/9bjcz43/2002.jpg",
      title: "2002",
      description:
        "எழுத்தாளர் த. ஜெயகாந்தன் விருது பெற்றார். தியாகி ஐ. மாயாண்டிபாரதி விருது வழங்கினார். பாரதியியல் ஆய்வாளர் பெ.சு.மணி தமிழ்நாடு சுதந்திரப் போராட்ட வீரர்கள் சமிதியின் தலைவர் தியாகி பி.ராமசாமி. தமிழருவிமணியன், பாரதி கிருஷ்ணகுமார், கவிஞர் பரிணாமன் ஆகியோர் சிறப்புரையாற்றினர்",
    },
    {
      image: "https://i.ibb.co/KxRF6tL/2003.jpg",
      title: "2003",
      description:
        "கல்வியாளர் - தமிழறிஞர் - கவிஞர் வா.செ.குழந்தைசாமி விருது பெற்றார். தவத்திரு குன்றக்குடி பொன்னம்பல அடிகளார், கவிஞர் ஈரோடு தமிழன்பன் ஆகியோர் சிறப்புரையாற்றினர்",
    },
    {
      image: "https://i.ibb.co/XWc1fJQ/2004.jpg",
      title: "2004",
      description:
        "கல்வியாளர் - துணைவேந்தர் வே.வசந்திதேவி விருது பெற்றார். மத்திய இணையமைச்சர் மாண்புமிகு சுப்புலட்சுமி ஜெகதீசன் மத்திய இணையமைச்சர் ஈ.வி.கே.எஸ்.இளங்கோவன் கோவை பாரதிய வித்யா பவன் தலைவர் பி.கே.கிருஷ்ணராஜ் வாணவராயர் ஆகியோர் சிறப்புரையாற்றினர்",
    },
    {
      image: "https://i.ibb.co/xGZM6Vm/2005.jpg",
      title: "2005",
      description:
        "ராஜஸ்தானில் தீவிர சமூகப் பணியாற்றும் தமிழ்ப் பெண் போராளி அருணாராய் ஐஏஎஸ் விருது பெற்றார். அ.கி.வெங்கிடசுப்பிரமணியன் ஐஏஎஸ் விழாச் சிறப்பு விருந்தினராகப் பங்கேற்றார்.",
    },
    {
      image: "https://i.ibb.co/SdnWWZ9/2006.jpg",
      title: "2006",
      description:
        "சுதந்திரப் போராட்டத் தியாகி ஜி.எஸ்.லட்சுமண ஐயர் அவர்களுக்கு விருது வழங்கப்பட்டது. பி.கே.கிருஷ்ணராஜ் வாணவராயர், தமிழருவிமணியன் ஆகியோர் விழாச் சிறப்புரையாற்றினர்.",
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
