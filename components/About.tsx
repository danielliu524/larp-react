import indexStyle from "../styles/index.module.css";
import AboutCard from "./AboutCard";

import micImage from "./../public/images/mic.jpg";
import roomImage from "./../public/images/room.jpg";
import gatheringImage from "./../public/images/gathering.jpg";

export default function About() {
  return (
    <div className={indexStyle.section + " pt-5"}>
      <h1 className={indexStyle.h1}>關於南柯一夢</h1>
      <p className={indexStyle.p}>專業主持，帶你體驗浮生恣意；安排彈性，約本細節專人回應</p>
      <div className={indexStyle.row}>
        <AboutCard text={"專業主持"} background={micImage} />
        <AboutCard text={"精美環境"} background={roomImage} />
        <AboutCard text={"歡樂交友"} background={gatheringImage} />
      </div>
    </div>
  )
}