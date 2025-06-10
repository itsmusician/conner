"use client"
import "../globals.css"

const Navbar = () => {   
    return (
        <div>
            <span className="flex justify-center items-center flex-row gap-x-nav gap-y-nav font-[family-name:var(--font-hanken)] font-bold">
                <a
                    className="rounded-full flex px-4 py-3"
                    href="/"
                    target="_self"
                    rel="noopener noreferrer"
                >
                HOME
                </a>
                <a
                    className="rounded-full flex px-4 py-3"
                    href="/about"
                    target="_self"
                    rel="noopener noreferrer"
                >
                ABOUT
                </a>
                <a
                    className="rounded-full flex px-4 py-3"
                    href="/gallery"
                    target="_self"
                    rel="noopener noreferrer"
                >
                GALLERY
                </a>
                <a
                    className="rounded-full flex px-4 py-3"
                    href="https://kit.co/Musical"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                EQUIPMENT
                </a>
            </span>
        </div>
    );
};

export default Navbar;