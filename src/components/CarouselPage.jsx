import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1280px-24701-nature-natural-beauty.jpg",
    title: "image1",
  },
  {
    url: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    title: "image2",
  },
  {
    url: "https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?cs=srgb&dl=pexels-pixabay-36478.jpg&fm=jpg",
    title: "image3",
  },
  {
    url: "https://static.vecteezy.com/system/resources/previews/002/316/624/non_2x/natural-background-with-green-lawn-free-photo.jpg",
    title: "image4",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl w-full mx-auto overflow-hidden rounded-2xl shadow-lg m-5 cursor-pointer">
      <img
        src={images[current].url}
        alt={images[current].title}
        className="w-full h-[400px] object-cover transition-all duration-700"
      />

      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white text-lg font-semibold">
        {images[current].title}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
      >
        <ChevronLeft className="text-black" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
      >
        <ChevronRight className="text-black" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
