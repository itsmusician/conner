import "../globals.css";
import Image from "next/image";
import portrait from "../images/photo.jpg";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Page() {
    return (
        <div>
            <div className="navbar"><Navbar /></div>
            <div className="content-about font-[family-name:var(--font-geist-sans)]">
                <h1 className="home font-[family-name:var(--font-isabella-italic)]">hello :{">"}</h1>
                <div className="portrait">
                <Image
                    src={portrait}
                    alt="portrait"
                    width="300"
                    height="200"
                />
                </div>
                <h3 className="font-[family-name:var(--font-hanken)]">
                {"           I'm Conner."}
                </h3>
                <p className="font-[family-name:var(--font-hanken)]">
                    <br></br>
                    I am an Interdisciplinary creator ready to
                    make your next project come to life with a
                    broad range of skills and experience from
                    many different avenues.
                    <br></br><br></br>
                    Stay tuned for an updated about page and site.
                    <br></br><br></br><br></br>

                    I am an Interdisciplinary creator ready to
                    make your next project come to life with a
                    broad range of skills and experience from
                    many different avenues.
                    <br></br><br></br>
                    Stay tuned for an updated about page and site.
                    <br></br><br></br><br></br>
                </p>
            </div>
            <div className="page-bottom">
                <div className="footer"><Footer /></div>
            </div>
        </div>
    );
}