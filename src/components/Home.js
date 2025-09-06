import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

function Home() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Load comments in real-time from Firestore
  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          text: doc.data().text,
          timestamp: doc.data().timestamp,
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  // Submit new comment to Firestore
  const handleSubmit = async () => {
    if (comment.trim() !== "") {
      await addDoc(collection(db, "comments"), {
        text: comment,
        timestamp: serverTimestamp(),
      });
      setComment(""); // clear input
    }
  };


  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: "url('/my-first-project/homebg.jpeg')",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="flex-grow container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Left Side */}
          <div className="p-6 rounded shadow bg-gray-70">
            <h2 className="text-xl font-bold mb-2 text-black">
              Dear Honey Caitlin ❤︎,
            </h2>
            <br />
            <p className="text-black text-justify font-bold">
              Although we're far from each other on this first anniversary,
              God's grace has made it feel like you're always right here beside
              me - today, tomorrow, and forever. This year has made us stronger,
              wiser, and more loving than ever before, honey. Even though we’re
              far apart, my heart feels closer to you every single day. Distance
              may keep us from holding hands or celebrating side by side, but
              nothing can ever keep me from loving you.
            </p>
            <br />
            <p className="text-black text-justify font-bold">
              I want to take this moment to apologize, my love, for the mistakes
              I've made and for the times I fell short in our relationship.
              Please know that I am always learning, growing, and striving to be
              the best partner for you. The past three years have been filled
              with countless memories, laughter, and lessons, and I am thankful
              for the opportunity to share this journey with you. I can’t wait
              for the day when the miles between us disappear,
            </p>
            <br />
            <p className="text-black text-justify font-bold">
              Until then, remember that you are always in my heart, my thoughts,
              and my prayers. I am grateful for you being my strength,
              happiness, and forever. Cheers to our love that persists despite
              distance, and to many more anniversaries to come. I love you
              endlessly. Thank you for your patience, your love, and your faith
              in us. My heart is overflowing with joy because I still have you
              despite the distance.
            </p>
            <br />
            <p className="text-red-500 text-5xl text-center">❤︎❤︎❤︎</p>
            <br/>
          </div>
            
            
            {/* Right Side - Comment Box */}
          <div className="p-6 rounded shadow flex flex-col bg-white">
            <h2 className="text-xl font-bold mb-4 text-black">
              Leave a Message 💬
            </h2>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Write your message here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button
              onClick={handleSubmit}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Submit
            </button>

            {/* Display Comments */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-black mb-2">
                Response:
              </h3>
              {comments.length === 0 ? (
                <p className="text-gray-500">No response yet.</p>
              ) : (
                <ul className="space-y-2">
                  {comments.map((c) => (
                    <li
                      key={c.id}
                      className="bg-gray-100 p-3 rounded-lg shadow text-black"
                    >
                      {c.text} 
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;