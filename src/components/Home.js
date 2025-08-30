import React from 'react';

function Home() {
    return (
        <div className="py-8 px-4 text-center"
>
            <div className="App">
                <header className="App-header" style={{ backgroundImage: "url(${process.env.PUBLIC_URL}/home-bg.jpeg)", height: "100vh", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {/* Container for 2 sides */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left " >
                        
                        {/* Left Side */}
                        <div className=" p-6 rounded shadow " >
                            <h2 className="text-xl font-bold mb-2 text-black">Picture Based State</h2>
                            <p className='text-black'>Content Here</p>
                        </div>

                        {/* Right Side */}
                        <div className="bg-green-100 p-6 rounded shadow">
                            <h2 className="text-xl font-bold mb-2 text-black">Message here!!</h2>
                            <p className='text-black'>This is the right side content.</p>
                        </div>

                    </div>
                </header>
            </div>
        </div>
    );
}

export default Home;
