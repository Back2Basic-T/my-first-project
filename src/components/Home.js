import React from "react";

function Home() {
  return (
    <div className="py-8 px-4 text-center">
      <header
        className="App-header h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/homebg.jpeg)` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Left Side */}
          <div className="p-6 rounded shadow bg-gray-70">
            <h2 className="text-xl font-bold mb-2 text-black">Dear Honey Caitlin ❤︎,</h2>
            <br />
            <p className="text-black text-justify font-bold">Although we're far from each other on this first anniversary, God's grace has made it feel like you're always right here beside me - today, tomorrow, and forever. This year has made us stronger, wiser, and more loving than ever before, honey. Even though we’re far apart, my heart feels closer to you every single day. Distance may keep us from holding hands or celebrating side by side, but nothing can ever keep me from loving you.</p> <br />
            <p className="text-black text-justify font-bold">I want to take this moment to apologize, my love, for the mistakes I've made and for the times I fell short in our relationship. Please know that I am always learning, growing, and striving to be the best partner for you. The past three years have been filled with countless memories, laughter, and lessons, and I am thankful for the opportunity to share this journey with you. I can’t wait for the day when the miles between us disappear,</p> <br />
            <p className="text-black text-justify font-bold">Until then, remember that you are always in my heart, my thoughts, and my prayers. I am grateful for you being my strength, happiness, and forever. Cheers to our love that persists despite distance, and to many more anniversaries to come. I love you endlessly. Thank you for your patience, your love, and your faith in us. My heart is overflowing with joy because I still have you despite the distance.</p> <br />
            <p className="text-red-500 text-5xl text-center" >❤︎❤︎❤︎</p>              
          </div> 

          {/* Right Side */}
        {/*  <div className="bg-gray-70 p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-2 text-black">Message here!!</h2>
            <p className="text-black">This is the right side content.</p>
          </div>    */}
        </div>
      </header>
    </div>
  );
}

export default Home;
