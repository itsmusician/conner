"use client"
let i = 0;
let theme: string[] = ["civiltwilight", "redshift", "seafloor", "mauve"];

const Navbar = () => {
    const changeTheme = () => {
        i++;
        console.log("TEST");
    };

    const ThemeButton = ({ changeTheme }:any) => {
        return (
            <button
                className="rounded-full flex hover:bg-[hsl(var(--twc-base-dark))] hover:text-[hsl(var(--twc-base-light))] px-4 py-3"
                onClick={() => changeTheme}
            >
            I hate the current theme omg please give me a different one
            </button>
        );
    }

    return (
        <div className="flex gap-4 items-center flex-col sm:flex-row">
        <ThemeButton changeTheme={changeTheme} />
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
            href="https://github.com/itsmusician"
            target="_blank"
            rel="noopener noreferrer"
        >
        Code
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

export default Navbar;