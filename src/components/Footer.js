import React from 'react';

function Footer() {
    return (
        <footer className="bg-[#93b071] text-black text-center py-4 fixed bottom-0 left-0 w-full">
            <p>&copy; {new Date().getFullYear()} Honey's Website. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
