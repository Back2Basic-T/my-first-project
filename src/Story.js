import React from "react";

function Story() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundImage: "url('/home-bg.jpeg')", height: "100vh", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Our Story</h1>
        <p className="mb-4">
          It all started three years ago when Aizen and Eos met by chance at a
          local café. From that moment on, their lives changed forever. They
          bonded over their shared love for adventure, music, and food.
        </p>
        <p className="mb-4">
          Over the years, they have traveled to many beautiful places together,
          creating unforgettable memories. Their relationship has been filled
          with laughter, support, and endless love.
        </p>
        <p className="mb-4">
          As they celebrate their third anniversary, Aizen and Eos look forward
          to many more years of happiness and adventures together. Their story
          is a testament to the power of love and companionship.
        </p>
      </main>
    </div>
  );
}

export default Story;
