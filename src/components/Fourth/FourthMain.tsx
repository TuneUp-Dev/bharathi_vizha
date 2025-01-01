import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
  } from "@nextui-org/react";
  import { useState } from "react";
  
  
  interface CardProps {
    image: string;
    title: string;
    description: string;
    onClick: () => void;
  }

  const Card: React.FC<CardProps> = ({ image, title, description, onClick }) => (
    <div
      onClick={onClick}
      role="button"
      aria-label={`View details about ${title}`}
      className="relative cursor-pointer border border-gray-200 rounded-lg shadow-lg overflow-hidden group mx-auto w-[90vw] h-[200px] sm:w-[265px] sm:h-[170px] md:w-[338px] md:h-[220px] lg:w-[304px] lg:h-[200px] xl:w-[384px] xl:h-[250px]"
    >
 
      <div className="absolute inset-0 transition-transform duration-500 ease-linear group-hover:scale-[1.03]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    
      <div className="absolute bottom-0 w-full py-2 px-4 bg-red-800 bg-opacity-80 backdrop-blur-[4px] transition-all duration-300 ease-linear">
        <h3 className="text-[18px] md:text-[20px] lg:text-[22px] text-center font-semibold text-amber-500">
          {title}
        </h3>
        <p className="text-[12px] text-center text-gray-200 line-clamp-1 mt-1">
          {description}
        </p>
      </div>
    </div>
  );

  const FourthMain: React.FC = () => {
    const cardData = [
        {
          image: "https://i.ibb.co/9Tbyqhx/001.jpg",
          title: "2016",
          description:
        "   பாரதி ஜோதியை 'ஏற்றி வைத்து அணிவகுப்பைத் தொடக்கி வைத்தல் ",
  },
        {
          image: "https://i.ibb.co/YjDR4Nf/002.jpg",
          title: "2017",
          description:
          "நகரின் வீதிகளில் 'பாரதி ஜோதி ' அணிவகுப்பு -"
       
      },
        {
          image: "https://i.ibb.co/GJb30Sd/003.jpg",
          title: "2018",
          description:
      "வீதியில் இசை முழக்கத்துடன் அணிவகுப்பு."
      },
        {
          image: "https://i.ibb.co/Y37fyfH/004.jpg",
          title: "2019",
          description:
      "விருதாளர் முனைவர் சொ. சேதுபதி அவர்கள் பாரதி ஜோதி 'யைப் பெற்றுக் கொள்தல்..."  
      },
        {
          image: "https://i.ibb.co/zHrvm9Q/005.jpg",
          title: "2020",
          description:
          "விருதாளர் முனைவர் சொ. சேதுபதி அவர்கள் பாரதி ஜோதி 'யைப் பெற்றுக் கொள்தல்..."  
     
      },
        {
          image: "https://i.ibb.co/V9gd2SR/006.jpg",
          title: "2021",
          description:
          "மக்கள் சிந்தனைப் பேரவையின் தலைவர் த. ஸ்டாலின் குணசேகரன் அவர்கள் விழா அறிமுகவுரை நிகழ்த்துதல்"
      },
        {
          image: "https://i.ibb.co/8byz4RT/007.jpg",
          title: "2022",
          description:
          "பத்மஸ்ரீ எஸ்கேஎம். மயிலானந்தன் அவர்கள் தலைமையுரை நிகழ்த்துதல் ..."  
      },
        {
          image: "https://i.ibb.co/Tt3WdLg/008.jpg",
          title: "2023",
          description:
          "தவத்திரு குன்றக்குடி அடிகளார் அவர்களின் திருவுருவப் படத் திறப்பு .." 
      },
        {
          image: "https://i.ibb.co/72D5W8H/009.jpg",
          title: "2023",
          description:
          "தமிழகத்தின் ஆன்மீக வழிகாட்டி 'நூல் அறிமுகம் ..."
      },
        {
          image: "https://i.ibb.co/D7MxHtc/010.jpg",
          title: "2023",
          description:
          "மகாகவி பாரதி வரலாறு ' நூல் அறிமுகம் " 
      },
        {
          image: "https://i.ibb.co/6JvMgXH/011.jpg",
          title: "2023",
          description:
          "பாரதியும் ஜப்பானும் 'நூல் அறிமுகம்"
      },
        {
          image: "https://i.ibb.co/6yVGKZk/012.jpg",
          title: "2023",
          description:
          "டாக்டர் என்.எஸ். சத்தியசுந்தரி அவர்கள் வாழ்த்துரை வழங்குதல்"
      },
        {
          image: "https://i.ibb.co/rQx0v3w/013.jpg",
          title: "2023",
          description: 
          "எழுத்தாளர் பொன்னீலன் அவர்கள் உரை நிகழ்த்துதல்."
      },
        {
          image: "https://i.ibb.co/RBc0Pfc/014.jpg",
          title: "2023",
          description:
          "பேரவையின் பணிக்குழு உறுப்பினர் வி. பொன்னுசாமி அவர்கள் தகுதிப்பட்டயம் வாசித்தல்..."
      },
        {
          image: "https://i.ibb.co/GVC6Bc3/015.jpg",
          title: "2023",
          description:
          "பாரதி விருது வழங்குதல்"
      },
        {
          image: "https://i.ibb.co/xf4FYvq/016.jpg",
          title: "2023",
          description:      
          "ரூ 50,000/- பொற்கிழி வழங்குதல்."
      },
        {
          image: "https://i.ibb.co/KydMndx/017.jpg",
          title: "2023",
          description:
          "தகுதிப்பட்டயம் வழங்குதல்.."
      },
        {
          image: "https://i.ibb.co/LgpvBj1/018.jpg",
          title: "2023",
          description:
          "தவத்திரு குன்றக்குடி பொன்னம்பல அடிகளார் அவர்கள் சிறப்புரையாற்றினார்."
      },
        {
          image: "https://i.ibb.co/xsGKWNX/019.jpg",
          title: "2023",
          description:
          "விருதாளர் முனைவர் சொ. சேதுபதி அவர்கள் ஏற்புரையாற்றுதல்..."
        },
        {
          image: "https://i.ibb.co/2yx44f5/020.jpg",
          title: "2023",
          description:
          "பேரவையின் துணைத்தலைவர் பேராசிரியர் கோ. விஜயராமலிங்கம் நன்றியுரையாற்றுதல் .."    
      },
        {
          image: "https://i.ibb.co/qdcYv0N/021.jpg",
          title: "2023",
          description: 
          "பங்கேற்ற கல்லூரி மாணவியர்"   
      },
        {
          image: "https://i.ibb.co/z5F7Rrk/022.jpg",
          title: "2023",
          description:
          "திரளான பார்வையாளர்களில் ஒரு பகுதி..."
      },
        {
          image: "https://i.ibb.co/QJnP3v1/023.jpg ",
          title: "2023",
          description:
          "கூட்டத்தின் ஒரு பகுதி..."
        },
      ];
  
    const [visible, setVisible] = useState(false);
    const [selectedCard, setSelectedCard] = useState<{
      description: string;
      image: string;
      title: string;
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
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center mt-4">
          <h1 className="text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] text-red-900 font-bold text-center">
            2024 (இந்த ஆண்டு)
          </h1>
          <p className=" text-[10px] md:text-[10px] lg:text-[10px] xl:text-[20px] p-10 text-left">
            மக்கள் சிந்தனைப் பேரவையின்27 ஆம் ஆண்டு பாரதி விழா
பல மாவட்டங்களிலிருந்து பார்வையாளர்கள் பங்கேற்பு
மக்கள் சிந்தனைப் பேரவையின் 27 ஆம் ஆண்டு பாரதி விழா 11.12.2024 ஆம் தேதி புதன்கிழமை மாலை 6.00 மணிக்கு ஈரோடு - சம்பத் நகர்-கொங்கு கலையரங்கில் நடைபெற்றது.
நிகழ்வுக்கு தேசிய நல விழிப்புணர்வு இயக்கத்தின் தலைவர் பத்மஸ்ரீ எஸ்கேஎம். மயிலானந்தன் தலைமை வகித்தார். மக்கள் சிந்தனைப் பேரவையின் நிறுவனர் மற்றும் தலைவர் த. ஸ்டாலின் குணசேகரன் வரவேற்புடன் கூடிய விழா அறிமுகவுரை நிகழ்த்தினார். பாரதி ஜோதியை ஏற்றி வைத்து அணிவகுப்பைத் தொடக்கி வைத்த டாக்டர் என்.எஸ். சத்தியசுந்தரி வாழ்த்துரை வழங்கினார்.
மறைந்த தவத்திரு குன்றக்குடி அடிகளாரின் நூற்றாண்டை முன்னிட்டு இந்நிகழ்வில் தவத்திரு அடிகளாரின் திருவுருவப் படம் திறந்து வைக்கப்பட்டது. சாகித்ய அகாடமி விருது பெற்ற
எழுத்தாளர் பொன்னீலன் அடிகளாரின் திருவுருவப்படத்தை திறந்து வைத்து உரையாற்றினார்.
 <br /><br />
எழுத்தாளர் பொன்னீலன் எழுதிய 'தமிழகத்தின் ஆன்மீக வழிகாட்டி 'முனைவர் சொ. சேதுபதி தொகுத்த மகாகவி பாரதி வரலாறு 'பேராசிரியர் ய. மணிகண்டன் தொகுத்தும் பகுத்தும் வெளியிட்ட 'பாரதியும் ஜப்பானும் ' ஆகிய மூன்று நூல்கள் மேடையில் அறிமுகப்படுத்தப்பட்டன.
2024 ஆம் ஆண்டுக்கான மக்கள் சிந்தனைப் பேரவையின் பாரதி விருது 'பாரதியியல் ஆய்வாளர் முனைவர் சொ. சேதுபதி அவர்களுக்கு வழங்கப்பட்டது. இவ்விருது கேடயம். தகுதிப் பட்டயம், ரூ 50,000/- பரிசுத்தொகை ஆகியவற்றை உள்ளடக்கியதாகும். பேரவையின் பணிக்குழு உறுப்பினர் வி. பொன்னுசாமி விருதாளரின் தகுதிப்பட்டயம் வாசித்தார்.தவத்திரு குன்றக்குடி பொன்னம்பல அடிகளார் விருதாளர் முனைவர் சொ. சேதுபதிக்கு விருதை வழங்கி விழாச் சிறப்புரையாற்றினார். விருதாளர் முனைவர் சொ. சேதுபதி ஏற்புரை நிகழ்த்தினார். பேரவையின் மாநிலத் துணைத்தலைவர் பேராசிரியர் கோ. விஜயராமலிங்கம் நன்றியுரையாற்றினார்.
முன்னதாக மாலை 4.00 மணிக்கு பாரதி இறுதிப் பேருரையாற்றிய ஈரோடு கருங்கல்பாளையம் நூலகத்திலிருந்து பாரதி ஜோதியை ஏந்திய பேரவையின் மாணவர் படை அணிவகுப்பு தொடங்கியது அங்கு பாரதி ஜோதியை ஏற்றுவித்து அணிவகுப்பைத் தொடங்கி வைத்தார் 91 வயது நிரம்பிய பவானி நதி பாதுகாப்புக் கூட்டமைப்பின் தலைவர் டாக்டர் என்.எஸ். சத்தியசுந்தரி.
'பாரதி ஜோதி ' அணிவகுப்பு இசை முழக்கத்துடன் கம்பீரமாகப் புறப்பட்டு ஈரோடு நகரின் முக்கிய வீதிகளில் வலம் வந்து இறுதியாக மாலை 5.50 மணிக்கு பாரதி விழா நடைபெற்ற கொங்கு கலையரங்கம் வந்து சேர்ந்தது.
விருதாளர் முனைவர் சொ. சேதுபதி பாரதி ஜோதியைப் பெற்றுக்கொண்டு சிறிது தூரம் நடந்து அரங்கத்தின் உள்ளே வைக்கப்பட்டுள்ள மகாகவி பாரதி படத்தின் முன்பு ஜோதியை ஊன்றி வைத்தார். ஜோதி விழா முடியும் வரை சுடர்விட்டு எரிந்த
வண்ணம் இருந்தது.பாரதி விழா நிகழ்வில் பல வெளி மாவட்டங்களிலிருந்து மக்கள் சிந்தனைப் பேரவையின் நிர்வாகிகள், உறுப்பினர்கள், பாரதி அன்பர்கள், தமிழ் ஆர்வலர்கள் மிகத் திரளாக ஆர்வமுடன் வருகை புரிந்து ஈடுபாட்டுடன் பங்கேற்றனர். ஆர்வம் மிக்க கல்லூரி மாணவர்கள் பலர் இந்நிகழ்வில் பார்வையாளர்களாகப் பங்கேற்றிருந்தனர்.மொத்தத்தில் இந்த ஆண்டின் 'பாரதி விழா நிகழ்வு முழு வீச்சிலும் மாநிலத் தன்மையுடனும் பெரும் திரளான பார்வையாளர்களை உள்ளடக்கியதாகவும் எழுச்சிகரமாகவும் நடைபெற்று முடிந்தது.
</p>
        </div>
  

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mt-4">
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
  
        {/* Modal */}
        {selectedCard && (
          <Modal isOpen={visible} onClose={closeModal} size="lg">
            <ModalContent>
              <ModalHeader className="text-xl font-bold text-red-900">
                {selectedCard.title}
              </ModalHeader>
              <ModalBody>
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <p className="text-md text-gray-700">{selectedCard.description}</p>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </>
    );
  };
  
  export default FourthMain;
  