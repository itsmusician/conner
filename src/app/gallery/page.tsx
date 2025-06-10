import "../globals.css";
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import NI from "../images/ni.svg";
import Kilohearts from "../images/kilohearts.svg";
import Universal from "../images/universal.svg";
import Exacoustics from "../images/exacoustics.svg";

export default function Page() {
    return (
        <div>
            <span className="navbar"><Navbar /></span>
            <div className="content-gallery font-[family-name:var(--font-geist-sans)] logo-invert">
                <h1>Gallery</h1>
                <p>
                    test hello
                    <br></br><br></br>
                </p>
                <div className='animate-scroll-logos logo-invert'>
                    <div className="scroll-bg"></div>
                    <span className='flex flex-row stretch gap-x-[4vw] items-center'>
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
                            href="https://www.native-instruments.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className=''
                                src={NI}
                                alt='Native Instruments'
                                height={1000}
                            />
                        </a>
                        <a
                            href="https://exacoustics.com/"
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
                            href="https://exacoustics.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className=''
                                src={Exacoustics}
                                alt='Exacoustics'
                                height={1000}
                            />
                        </a>
                    </span>
                </div>
            </div>
            <div className="footer-fade"></div>
            <div className="footer"><Footer /></div>
        </div>
    );
}