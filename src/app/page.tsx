import Image from "next/image";
import portrait from "./images/photo.jpg";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css"

export default function Home() {
  return (
    <div>
      <div className="home">
        <span className="portrait">
          <Image
                src={portrait}
                alt="portrait"
                width="300"
                height="200"
            />
        </span>
        <span className="navbar-home"><Navbar /></span>
        <span className="footer-home"><Footer /></span>
      </div>
    </div>
  );
}