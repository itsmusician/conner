"use client"
import { useEffect } from "react";

let i = 0;
let theme: string[] = ["civiltwilight", "redshift", "seafloor", "mauve",
    "pine", "yuzu", "eclipsebloom"];

export let currentTheme = "civiltwilight";

export const Navbar = () => {
    const changeTheme=()=>{
        i++;
        if (i > 6) {i = 0;}
        currentTheme = theme[i];
        /*useEffect(() => {
            document.querySelector("html").setAttribute("data-theme", currentTheme);
        }, [currentTheme]);*/
        console.log(currentTheme);
    }
    
    return (
        <div className="flex gap-4 items-center flex-col sm:flex-row">
        <button
            className="rounded-full flex hover:bg-[hsl(var(--twc-base-dark))] hover:text-[hsl(var(--twc-base-light))] px-4 py-3"
            onClick={() => changeTheme()}
        >
        {currentTheme}
        </button>
        <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center gap-2 hover:bg-var(--base-light) dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/about"
            target="_blank"
            rel="noopener noreferrer"
        >
        About
        </a>
        <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://www.instagram.com/conner.musician/"
            target="_blank"
            rel="noopener noreferrer"
        >
        My Work
        </a>
        <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://kit.co/Musical"
            target="_blank"
            rel="noopener noreferrer"
        >
        Gear
        </a>
        </div>
    );
};