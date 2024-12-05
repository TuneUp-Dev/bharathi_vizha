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

const SecondMain: React.FC = () => {
  const cardData = [
    {
      image: "https://i.ibb.co/61pgCj4/2007.jpg",
      title: "2007",
      description:
        "இயற்கை வேளாண் ஞானி கோ.நம்மாழ்வார் விருது பெற்றார். மத்திய இணையமைச்சர் மாண்புமிகு சுப்புலட்சுமி ஜெகதீசன், பேராசிரியர் டாக்டர் சு.சிவகாமசுந்தரி, அமைச்சர் மாண்புமிகு தங்கம் தென்னரசு, மாவட்ட ஆட்சித் தலைவர் த.உதயச்சந்திரன் ஐஏஎஸ் ஆகியோர் சிறப்புரையாற்றினர்",
    },
    {
      image: "https://i.ibb.co/br0Bnct/2008.jpg",
      title: "2008",
      description:
        "தமிழறிஞர் மணவை முஸ்தபா விருது பெற்றார். திரைப்பட நடிகை மனோரமா, பாரதியார் பல்கலைக்கழகத் துணைவேந்தர் பேராசிரியர் டாக்டர் ஜி.திருவாசகம், சாத்தூர் இலட்சுமணப் பெருமாள் ஆகியோர் சிறப்புரையாற்றினர்.",
    },
    {
      image: "https://i.ibb.co/fQ3Hm9s/2009.jpg",
      title: "2009",
      description:
        "பாரதியியல் ஆய்வாளரும் வரலாற்றியல் அறிஞருமான நூறு வயது நிரம்பிய சி.எஸ்.சுப்ரமணியம் விருது பெற்றார். சொற்பொழிவாளர் நெல்லை கண்ணன், பி.கே.கிருஷ்ணராஜ் வாணவராயர், மாவட்ட ஆட்சித் தலைவர் இரா.சுடலைக்கண்ணன் ஐஏஎஸ் ஆகியோர் சிறப்புரையாற்றினர்.",
    },
    {
      image: "https://i.ibb.co/kBPs327/2010.jpg",
      title: "2010",
      description:
        "சமூக சேவகி கிருஷ்ணம்மாள் ஜெகநாதன் விருது பெற்றார். மத்திய இணையமைச்சர் மாண்புமிகு சுப்புலட்சுமி ஜெகதீசன், காந்தி கிராம கிராமியப் பல்கலைக்கழகத்தின் மேனாள் துணைவேந்தர் பேராசிரியர் ந.மார்கண்டன், சாகித்ய அகாடமி விருது பெற்ற எழுத்தாளர் பிரபஞ்சன் ஆகியோர் சிறப்புரையாற்றினர்.",
    },
    {
      image: "https://i.ibb.co/v4KFCFb/2011.jpg",
      title: "2011",
      description:
        "திறனாய்வாளர் தி.க.சிவசங்கரன் விருது பெற்றார். மனோன்மணியம் சுந்தரனார் பல்கலைக்கழக மேனாள் துணைவேந்தர் பேராசிரியர் க.ப.அறவாணன், 'தினமணி' இதழின் ஆசிரியர் கே.வைத்தியநாதன், மாவட்ட ஆட்சித் தலைவர் டாக்டர் வி.கே.சண்முகம் ஐஏஎஸ், கல்வெட்டறிஞர் புலவர் செ.இராசு ஆகியோர் சிறப்புரையாற்றினர்.",
    },
    {
      image: "https://i.ibb.co/S50v5LC/2012.jpg",
      title: "2012",
      description:
        "பாரதியியல் அறிஞர் முதுமுனைவர் டி.என்.இராமச்சந்திரன் விருது பெற்றார். ஆய்வறிஞர் பெ.சு.மணி, சொற்பொழிவாளர் பேராசிரியர் கு.ஞானசம்பந்தன், ஈரோடு தங்க.விசுவநாதன் ஆகியோர் சிறப்புரையாற்றினர்.",
    },
    {
      image: "https://i.ibb.co/0t6FtG3/2013.jpg",
      title: "2013",
      description:
        "பாரதியியல் ஆய்வாளர் சீனி.விசுவநாதன் விருது பெற்றார். உச்சநீதிமன்ற மேனாள் நீதிபதி ஏ.ஆர்.லட்சுமணன், இலக்கியச்சுடர் வழக்கறிஞர் த.இராமலிங்கம், சிங்கப்பூர் 'கவிமாலை' அமைப்பின் காப்பாளர் புதுமைத்தேனீ மா.அன்பழகள், பேராசிரியர் செ.சு.பழனிசாமி ஆகியோர் சிறப்புரையாற்றினர்",
    },
    {
      image: "https://i.ibb.co/CbWWmZ4/2014.jpg",
      title: "2014",
      description:
        "மூத்த தொல்லியல் ஆய்வாளர் பேராசிரியர் எ.சுப்பராயலு விருது பெற்றார். புலவர் புலமைப்பித்தன், 'தினமலர்' ஆசிரியர் முனைவர் இரா.கிருஷ்ணமூர்த்தி, 'கனடா உதயன்' இதழின் பிரதம ஆசிரியர் ஆர்.என்.லோகேந்திரலிங்கம், பேராசிரியர் சிற்பி பாலசுப்பிரமணியம் ஆகியோர் சிறப்புரையாற்றினர்.",
    },
    {
      image: "https://i.ibb.co/LSXpcPZ/2015.jpg",
      title: "2015",
      description:
        "வில்லிசைக் கலைஞர் கவிஞர் சுப்பு ஆறுமுகம் விருது பெற்றார். மூத்த அரசியல் தலைவர் ஆர்.நல்லகண்ணு, பொதிகைத் தொலைக்காட்சி - கோவை நிலையத் தலைவர் திருமதி ஆண்டாள் பிரியதர்ஷினி, சொற்பொழிவாளர் பேராசிரியர் த.இராஜாராம் ஆகியோர் சிறப்புரையாற்றினர்",
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
              onClick={() => openModal(card)}
            />
          ))}
        </div>
        <div className="w-full flex items-center justify-center mt-14 gap-x-5">
          <Link to={"/1998-2006"}>
            <Button size="lg" className="bg-amber-500 text-red-900 font-medium">
              Previous Page
            </Button>
          </Link>
          <Link to={"/2016-2023"}>
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

export default SecondMain;
