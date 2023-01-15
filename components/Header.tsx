import indexStyle from "../styles/index.module.css";
import headerStyle from "../styles/header.module.css";
import Image from "next/image";
import logo from "../public/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuStyle, setMenuStyle] = useState(" right-[-200px]");
  const showMenu = () => {
    setMenuStyle(" right-[0px]");
  }

  const hideMenu = () => {
    setMenuStyle(" right-[-200px]");
  }
  return (
    <div className={headerStyle.section}>
      <nav className={headerStyle.nav}>
        <Image src={logo} alt={""} />
        <div className={headerStyle.navLinks + menuStyle}>
            <div className={headerStyle.menuIcon} onClick={hideMenu}><FontAwesomeIcon icon={faTimes} /></div>
            <ul>
                <li><a href="">主頁</a></li>
                <li><a href="">關於我們</a></li>
                <li><a href="products.html">劇本目錄</a></li>
                <li><a href="">報名參與</a></li>
                <li><a href="">聯絡我們</a></li>
            </ul>
        </div>
        <div className={headerStyle.menuIcon} onClick={showMenu}><FontAwesomeIcon icon={faBars} /></div>
      </nav>
      <div className={headerStyle.textBox}>
          <h1 className={indexStyle.h1}>香港推理及沉浸式劇情研究室</h1>
          <p className={indexStyle.p}>恍然入夢，投入角色悲喜與共；保持清醒，真兇蟄伏望君諦聽
          <br />南柯入夢，夢覺柯南
          </p>
          <div className={indexStyle.heroBtn}>按此進入</div>
      </div>
    </div>
  );
}