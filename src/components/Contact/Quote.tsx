const Quote = () => {
  return (
    <>
      <div className="w-full pt-32">
        <section className="relative bg-amber-500 py-12 px-4 md:py-16 md:px-6">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: "url('../assets/logo.png')" }}
          ></div>
          <div className="relative z-10 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-red-900">
              "உலகில் நீங்கள் பார்க்க விரும்பும் மாற்றமாக இருங்கள்"
            </h2>
            <p className="text-sm md:text-lg mt-4 text-white">
              சமூகத்தில் நீண்டகால தாக்கத்தை உருவாக்க எங்களுடன் சேருங்கள்.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Quote;
