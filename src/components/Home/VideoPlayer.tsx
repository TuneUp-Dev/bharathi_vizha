const VideoPlayer = () => {
  return (
    <div className="mt-20">
      <iframe
        src={"https://www.youtube.com/embed/bCGkt2i_Srs"}
        title={"Bharathi_Vizha"}
        frameBorder="0"
        className="rounded-xl mx-auto w-[90vw] lg:w-[80vw] h-[50vw] lg:h-[45vw]"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
