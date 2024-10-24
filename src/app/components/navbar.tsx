"use client"
import "../globals.css"

let i = 0;
const theme: string[] = ["civiltwilight", "redshift", "seafloor", "mauve",
    "pine", "yuzu", "eclipsebloom"];

export let currentTheme = "civiltwilight";

export function changeTheme() {
    i++;
    if (i > 6) {i = 0;}
    currentTheme = theme[i];
    console.log(currentTheme);
}

const Navbar = () => {   
    return (
        <div className="navbar">
            <span className="flex justify-center items-center flex-row gap-x-nav gap-y-nav pt-nav font-[family-name:var(--font-geist-sans)]">
                {/*<button
                    className="rounded-full flex hover:bg-[hsl(var(--twc-base-dark))] hover:text-[hsl(var(--twc-text-nav))] px-4 py-3"
                    onClick={() => changeTheme()}
                >
                {currentTheme}
                </button>*/}
                <a
                    className="rounded-full flex hover:bg-[hsl(var(--twc-base-dark))] hover:text-[hsl(var(--twc-text-nav))] px-4 py-3"
                    href="/"
                    target="_self"
                    rel="noopener noreferrer"
                >
                Home
                </a>
                <a
                    className="rounded-full flex hover:bg-[hsl(var(--twc-base-dark))] hover:text-[hsl(var(--twc-text-nav))] px-4 py-3"
                    href="/about"
                    target="_self"
                    rel="noopener noreferrer"
                >
                About
                </a>
                <a
                    className="rounded-full flex hover:bg-[hsl(var(--twc-base-dark))] hover:text-[hsl(var(--twc-text-nav))] px-4 py-3"
                    href="/gallery"
                    target="_self"
                    rel="noopener noreferrer"
                >
                Gallery
                </a>
                <a
                    className="rounded-full flex hover:bg-[hsl(var(--twc-base-dark))] hover:text-[hsl(var(--twc-text-nav))] px-4 py-3"
                    href="https://kit.co/Musical"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Equipment
                </a>
            </span>
        </div>
    );
};

export default Navbar;