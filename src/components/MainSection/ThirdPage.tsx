const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
  "image9.jpg",
];

const ThirdPage = () => {
  return (
    <div className="w-full h-full flex-shrink-0 relative flex items-center">
      <div className="w-full px-8">
        <div className="flex items-center mb-12">
          <h1 className="text-[7vw] font-bold mr-4">About</h1>
          <span className="text-[5vw]">📚</span>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-md bg-white"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={src}
                alt={`about-${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
