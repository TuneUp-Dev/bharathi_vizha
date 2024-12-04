const Joiners = () => {
  const items = [
    {
      title: "ஆசிரியர்கள்",
    },
    {
      title: "மாணவர்கள்",
    },
    {
      title: "சமூக ஆர்வலர்கள்",
    },
    {
      title: "பொதுமக்கள்",
    },
  ];

  return (
    <section className="pt-24 px-8 md:px-16 lg:px-32">
      <h2 className="text-3xl md:text-4xl font-bold text-red-900 text-center mb-8 md:mb-12">
        யார் சேரலாம்?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center text-center bg-red-900 shadow-lg rounded-lg p-6 md:py-7"
          >
            <h3 className="text-lg md:text-xl font-semibold text-white">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Joiners;
