import "../globals.css";
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Sorcerer from "../images/sorcerer.svg";
import Kilohearts from "../images/kilohearts.svg";
import Universal from "../images/universal.svg";
import Imagiro from "../images/imagiro.svg";
import Bubble from "../images/bubble.svg";

export default function Page() {
    return (
        <div>
            <div className="navbar"><Navbar /></div>
            <div className="content-gallery font-[family-name:var(--font-geist-sans)]">    
                <div className="scroll-bg">
                    <div className='animate-scroll-logos logo-invert'>
                        <div className='flex flex-row stretch gap-x-[4vw] items-center'>
                            <a
                                href="https://kilohearts.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className='object-cover'
                                    src={Kilohearts}
                                    alt='Kilohearts'
                                    height={1000}
                                />
                            </a>
                            <a
                                href="https://sorcerer.quest/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className=''
                                    src={Sorcerer}
                                    alt='Sorcerer'
                                    height={1000}
                                />
                            </a>
                            <a
                                href="https://www.nbcuniversal.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className=''
                                    src={Universal}
                                    alt='Universal'
                                    height={1000}
                                />
                            </a>
                            <a
                                href="https://imagi.ro/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className=''
                                    src={Imagiro}
                                    alt='Imagiro'
                                    height={1000}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                test
                <h1>test</h1>
            </div>
            <div className="animate-bubble left-[100]">
                <Image
                    className=''
                    src={Bubble}
                    alt='Bubble'
                    height={300}
                />
            </div>
            <h1>Gallery</h1>
                    <p>
                        <br></br><br></br><br></br><br></br>test hello
                        <br></br><br></br>test hello
                        <br></br><br></br>
                    </p>
                    <iframe src="https://kit.co/embed?url=https%3A%2F%2Fkit.co%2FMusical%2Faudio-gear" scrolling="no"></iframe>
            <div className="page-bottom">
                <div className="footer"><Footer /></div>
            </div>
        </div>
    );
}