import indexStyle from "../styles/index.module.css";
import footerStyle from "../styles/footer.module.css";
import Image from "next/image";
import logoImage from "../public/images/logofont.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  const socialMediaIconStyle = {
    color: "#000000",
    margin: "0 13px",
    cursor: "pointer",
    padding: "18px 0",
  }
  return (
    <div className={footerStyle.section}>
      <Image src={logoImage} alt={""} />
      <p className={indexStyle.p}>劇本殺 | HKlarp | Larp | 劇場 | 推理 | 解謎 | 香港好去處</p>
      <div className={footerStyle.icons}>
        <FontAwesomeIcon style={socialMediaIconStyle} icon={faInstagram} />
        <FontAwesomeIcon style={socialMediaIconStyle} icon={faTelegram} />
        <FontAwesomeIcon style={socialMediaIconStyle} icon={faWhatsapp} />
      </div>
      <p className={indexStyle.p}>Made with <FontAwesomeIcon style={{color: "#f44336"}} icon={faHeart} /> by Draco</p>
    </div>
  );
}