import React, { useState } from "react";

const images = [
  "/Gallery/1pic.jpg",
  "/Gallery/2pic.jpg",
  "/Gallery/3pic.jpg",
  "/Gallery/4pic.jpg",
  "/Gallery/5pic.jpg",
  "/Gallery/6pic.jpeg",
  "/Gallery/7pic.jpg",
  "/Gallery/8pic.jpg",
  "/Gallery/9pic.jpeg",
  "/Gallery/10pic.jpg",
  "/Gallery/11pic.jpg",
  "/Gallery/12pic.jpg",
  "/Gallery/13pic.jpeg",
  "/Gallery/14pic.jpg",
  "/Gallery/15pic.jpg",
  "/Gallery/16pic.jpeg",
  "/Gallery/17pic.jpg",
  "/Gallery/18pic.jpeg",
  "/Gallery/19pic.jpg",
  "/Gallery/20pic.jpeg",
  "/Gallery/21pic.jpg",
  "/Gallery/22pic.jpeg",
  "/Gallery/23pic.jpg",
  "/Gallery/24pic.jpeg",
  "/Gallery/25pic.jpg",
  "/Gallery/26pic.jpg",
  "/Gallery/27pic.jpeg",
  "/Gallery/28pic.jpeg",
  "/Gallery/29pic.jpg",
  "/Gallery/30pic.jpeg",
  "/Gallery/31pic.jpg",
  "/Gallery/32pic.jpeg",
  "/Gallery/33pic.jpeg",
  "/Gallery/34pic.jpg",
  "/Gallery/35pic.jpg",
  "/Gallery/36pic.jpeg",
  "/Gallery/37pic.jpg",
  "/Gallery/38pic.jpg",
  "/Gallery/39pic.jpg",
  "/Gallery/40pic.jpg",
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
