import React, { useState } from "react";

const images = [
  process.env.PUBLIC_URL + "/Gallery/1pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/2pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/3pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/4pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/5pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/6pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/7pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/8pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/9pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/10pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/11pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/12pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/13pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/14pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/15pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/16pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/17pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/18pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/19pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/20pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/21pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/22pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/23pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/41pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/25pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/26pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/27pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/28pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/29pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/30pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/31pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/32pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/33pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/34pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/35pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/36pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/37pic.jpeg",
  process.env.PUBLIC_URL + "/Gallery/38pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/39pic.jpg",
  process.env.PUBLIC_URL + "/Gallery/40pic.jpeg",
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
