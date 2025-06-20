import "../globals.css";
import Image, { type StaticImageData } from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import Sorcerer from "../images/sorcerer.svg";
import Kilohearts from "../images/kilohearts.svg";
import Universal from "../images/universal.svg";
import Imagiro from "../images/imagiro.svg";

const MARQUEE: StaticImageData[] = [Sorcerer, Kilohearts, Universal, Imagiro]
const ELEMENTS = [...MARQUEE]

export default function Page() {
    return (
        <div>
            <div className="navbar"><Navbar /></div>
            <div className="content-gallery">
            
            </div>
            <div className="page-bottom">
                <div className='scroll-bg'></div>
                <div className="footer"><Footer /></div>
            </div>
        </div>
    );
}