import Image from "next/image";
import portrait from "./images/photo.jpg";

export default function Home() {
  return (
    <div className="content-home grid [grid-template-columns:1fr]">
      <h1 className="home font-[family-name:var(--font-isabella-italic)]">hello :{">"}</h1>
      <div className="portrait">
        <Image
          src={portrait}
          alt="portrait"
          width="300"
          height="200"
        />
      </div>
      <h3 className="font-[family-name:var(--font-geist-sans)]">
        {"           I'm Conner."}
      </h3>
      <p className="font-[family-name:var(--font-geist-sans)]">
      </p>
    </div>
  );
}