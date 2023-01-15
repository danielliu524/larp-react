import indexStyle from "../styles/index.module.css"
import aboutStyle from "../styles/about.module.css"
import Image, { StaticImageData } from "next/image";

type Props = {
  text: string;
  background: StaticImageData;
}

export default function AboutCard({ text, background }: Props) {
  return (
    <div className={aboutStyle.card}>
      <Image src={background} alt={""}/>
      <div className={aboutStyle.layer}>
        <h3 className={indexStyle.h3}>{text}</h3>
      </div>
    </div>
  );
}