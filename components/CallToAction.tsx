import indexStyle from "../styles/index.module.css";
import ctaStyle from "../styles/callToAction.module.css";

export default function CallToAction() {
  return (
    <div className={ctaStyle.section}>
      <h1 className={indexStyle.h1}>立即報名，挑選心儀劇本</h1>
      <a className={indexStyle.heroBtn}>預約時間</a>
    </div>
  );
}