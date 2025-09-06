import React from "react";    

function Story() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundImage: "url('/my-first-project/homebg.jpeg')", height: "100vh", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Our Story</h1>
        <p className="mb-4 font-bold text-justify">
          Three years ago, Aizen met Eos at the mall, introduced through fate as she happened to be his classmate’s sister. What began as a simple meeting soon felt like destiny. From shy smiles to endless conversations, they discovered a connection that only grew stronger with time — built on their shared love for adventure, music, and food. That unexpected moment became the beginning of a love story that continues to blossom to this day.
        </p>
        <p className="mb-4 font-bold text-justify">
          Over the years, Aizen and Eos have wandered through many beautiful places hand in hand, turning simple days into unforgettable adventures. Every trip became more than just a destination — it was a chapter of their love story, painted with laughter, warm embraces, and quiet moments that only they could understand. Through every high and low, they have been each other’s greatest source of strength, proving that true love is not only about joy and excitement but also about patience, support, and unwavering devotion. Their journey together is a collection of priceless memories, bound by a love that grows deeper with every passing day. 
        </p>
        <p className="mb-4 font-bold text-justify">
          As they celebrate their third anniversary, Aizen and Eos look back with grateful hearts on how far they have come — from a simple meeting at the mall to building a love that has grown stronger with every challenge and sweeter with every memory. Though this year finds them apart, their hearts remain closer than ever, bound by faith, trust, and the promise of forever. They dream of many more years filled with adventures, quiet moments, and shared dreams, knowing that their story is living proof that true love can endure distance, time, and every obstacle in between. <br/> <br/><br/>
        </p>
      </main>
    </div>
  );
}

export default Story;
