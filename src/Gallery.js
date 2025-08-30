import React, { useState } from "react";

const images = [
  process.env.PUBLIC_URL + "/Gallery/1pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/2pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/3pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/4pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/5pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/6pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/7pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/8pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/9pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/10pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/11pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/12pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/13pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/14pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/15pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/16pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/17pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/18pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/19pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/20pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/21pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/22pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/23pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/24pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/25pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/26pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/27pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/28pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/29pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/30pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/31pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/32pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/33pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/34pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/35pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/36pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/37pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/38pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/39pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/40pic.jpg",
];


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-6">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Gallery image ${idx + 1}`}
          className="w-full sm:w-72 h-52 object-cover rounded-lg shadow-md border-4 border-gray-300 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setSelectedImage(src)}
        />
      ))}

      {/* Modal Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Zoomed"
            className="max-w-3xl max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
