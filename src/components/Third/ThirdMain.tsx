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
  invitation?: string;
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
      description:
        "கல்வெட்டறிஞர் புலவர் செ.இராசு விருது பெற்றார். பேராசிரியர் பாரதிபுத்திரன், சிங்கப்பூர் தமிழ் இலக்கியக் களம் அமைப்பின் தலைவர் முனைவர் இரத்தின வேங்கடேசன், சிங்கப்பூர் நாடாளுமன்ற உறுப்பினர் இரா.தினகரன் ஆகியோர் சிறப்புரையாற்றினர்.",
      invitation:
        "https://i.ibb.co/9rYnFkd/BHARATHI-VIZHA-INVITATION-2016-1.jpg",
    },
    {
      image: "https://i.ibb.co/2qywd0f/2017.jpg",
      title: "2017",
      description:
        "தமிழறிஞர் சிலம்பபொலி சு.செல்லப்பன் விருது பெற்றார். மூத்த அரசியல் தலைவர் ஆர்.நல்லகண்ணு. டென்மார்க் எழுத்தாளர் வி.ஜீவகுமாரன், சென்னைப் பல்கலைக்கழக மேனாள் துணைவேந்தர் முனைவர் பொற்கோ ஆகியோர் சிறப்புரையாற்றினர்.",
      invitation: "https://i.ibb.co/sQszbzY/002.jpg",
    },
    {
      image: "https://i.ibb.co/s2pW8n9/2018.jpg",
      title: "2018",
      description:
        "எழுத்தாளர் கு.சின்னப்பபாரதி விருது பெற்றார். இலக்கியச் செல்வர் குமரி அனந்தன், ISRO மேனாள் இயக்குனர் டாக்டர் மயில்சாமி அண்ணாதுரை. மூத்த வழக்குரைஞர் ஆர்.காந்தி ஆகியோர் சிறப்புரையாற்றினர்",
      invitation: "https://i.ibb.co/2dRM9vG/007.jpg",
    },
    {
      image: "https://i.ibb.co/FHVPJDk/2019.jpg",
      title: "2019",
      description:
        "மக்களிசைக் கலைஞர் முனைவர் புஷ்பவனம் குப்புசாமி திருமதி அனிதா குப்புசாமி தம்பதியர்க்கு விருது வழங்கப்பட்டது. மேனாள் ஜார்கண்ட் மாநில உயர்நீதிமன்றத் தலைமை நீதிபதி எம்.கற்பகவிநாயகம், பாரதிதாசன் பல்கலைக்கழக மேனாள் தமிழ்த்துறைத் தலைவர் பேராசிரியர் பா.மதிவாணன் ஆகியோர் சிறப்புரையாற்றினர்",
      invitation: "https://i.ibb.co/ctdQY8x/001.jpg",
    },
    {
      image: "https://i.ibb.co/fQq6xyW/2020.jpg",
      title: "2020",
      description:
        "இசைக்கவி ரமணன் விருது பெற்றார். பெரியார் பல்கலைக்கழககத் துணைவேந்தர் பேராசிரியர் பொ.குழந்தைவேல், சென்னை எம்.பி.சீனிவாசன் இளைஞர் இசைக்குழு இயக்குனர் டி.ராமச்சந்திரன் ஆகியோர் சிறப்புரையாற்றினர்.",
      invitation: "https://i.ibb.co/HNyvLSK/image.jpg",
    },
    {
      image: "https://i.ibb.co/B3n65wL/2021.jpg",
      title: "2021",
      description:
        "தியாகி கி.லட்சுமிகாந்தன்பாரதி ஐஏஎஸ் விருது பெற்றார். பி.கே.கிருஷ்ணராஜ் வாணவராயர், கோவை - விஜயா பதிப்பக உரியைாளர் மு.வேலாயுதம் ஆகியோர் சிறப்புரையாற்றினர்.",
      invitation: "https://i.ibb.co/9rYpH7W/Makkal-Sinthanai-Peravai-new.jpg",
    },
    {
      image: "https://i.ibb.co/6ZDzf43/2022.jpg",
      title: "2022",
      description:
        "பாரதியியல் ஆய்வாளர் பேராசிரியர் ய.மணிகண்டன் விருது பெற்றார். உயர்நீதிமன்ற நீதிபதி ஆர்.மகாதேவன், காந்தி கிராம கிராமியப் பல்கலைக்கழகத்தின் மேனாள் துணைவேந்தர் பேராசிரியர் ந.மார்க்கண்டன். கல்வெட்டறிஞர் புலவர் செ.இராசு ஆகியோர் சிறப்புரையாற்றினர்.",
      invitation: "https://i.ibb.co/vPLWpLB/001.jpg",
    },
    {
      image: "https://i.ibb.co/XWqBv1n/2023.jpg",
      title: "2023",
      description:
        "பாரதியியல் ஆய்வாளர் முனைவர் ஆ.இரா.வேங்கடாசலபதி விருது பெற்றார். பேராசிரியர் சிற்பி பாலசுப்பிரமணியம், பேராசிரியர் த.ராஜாராம், வட அமெரிக்கத் தமிழ்ச் சங்கப் பேரவையின் பேராளர் கொழந்தவேல் இராமசாமி ஆகியோர் சிறப்புரையாற்றினர்",
      invitation: "https://i.ibb.co/fSYsTbf/002.jpg",
    },
  ];

  const [visible, setVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState<{
    title: string;
    description: string;
    image: string;
    invitation?: string;
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
              invitation={card.invitation}
              onClick={() => openModal(card)}
            />
          ))}
        </div>
        <div className="w-full flex items-center justify-center mt-14 gap-x-5">
          <Link to={"/2007-2015"}>
            <Button size="lg" className="bg-amber-500 text-red-900 font-medium">
              Previous Page
            </Button>
          </Link>
          <Link to={"/2024"}>
            <Button size="lg" className="bg-amber-500 text-red-900 font-medium">
              Next Page
            </Button>
          </Link>
        </div>
      </div>

      {/* Popup Modal */}
      <Modal
        className="max-h-[78vh] md:h-[70vh] min-w-[60vw]"
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

                      {selectedCard.invitation ? (
                        <>
                          <div className="mt-10 bg-gray-100 w-full h-auto p-5 rounded-lg">
                            <h1 className="text-[35px] font-semibold text-red-900">
                              அழைப்பிதழ்
                            </h1>
                            <img
                              src={selectedCard.invitation}
                              className="rounded-xl"
                              alt=""
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="mt-10 bg-gray-100 w-full h-auto p-5 rounded-lg">
                            <h1 className="text-[30px] text-center font-semibold text-red-900">
                              {selectedCard.title} ஆம் ஆண்டு பதிவுகள் கைவசம்
                              இல்லை
                            </h1>
                          </div>
                        </>
                      )}
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
