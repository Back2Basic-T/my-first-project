import React, { useState } from "react";

const images = [
  "/Gallery/1pic.jpg",
  "/Gallery/pic (2).jpeg",
  "/Gallery/pic (3).jpeg",
  "/Gallery/pic (3).jpg",
  "/Gallery/2pic.jpg",
  "/Gallery/pic2.jpeg",
  "/Gallery/pic3.jpg",
  "/Gallery/3pic.jpg",
  "/Gallery/pic5.jpeg",
  "/Gallery/pic6.jpg",
  "/Gallery/pic7.jpg",
  "/Gallery/pic8.jpg",
  "/Gallery/pic9.jpeg",
  "/Gallery/pic (2).jpg",
  "/Gallery/4pic.jpg",
  "/Gallery/pic (4).jpeg",
  "/Gallery/pic (4).jpg",
  "/Gallery/pic (5).jpeg",
  "/Gallery/pic (5).jpg",
  "/Gallery/pic (6).jpeg",
  "/Gallery/pic (6).jpg",
  "/Gallery/pic (7).jpeg",
  "/Gallery/pic (7).jpg",
  "/Gallery/pic (8).jpeg",
  "/Gallery/pic (8).jpg",
  "/Gallery/pic (9).jpg",
  "/Gallery/pic (9).jpeg",
  "/Gallery/pic (10).jpeg",
  "/Gallery/pic (10).jpg",
  "/Gallery/pic (11).jpeg",
  "/Gallery/pic (12).jpg",
  "/Gallery/pic (12).jpeg",
  "/Gallery/pic (13).jpeg",
  "/Gallery/pic (13).jpg",
  "/Gallery/pic (14).jpg",
  "/Gallery/pic (14).jpeg",
  "/Gallery/pic (15).jpg",
  "/Gallery/pic (16).jpg",
  "/Gallery/pic (17).jpg",
  "/Gallery/pic (18).jpg",
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
