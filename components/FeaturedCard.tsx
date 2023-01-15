import { Course } from "./Featured";
import indexStyle from "../styles/index.module.css"
import featuredStyle from "../styles/featured.module.css"

type Props = {
  course: Course;
}

export default function FeaturedCard({ course }: Props) {
  return (
    <div className={featuredStyle.card + ` ${course.id === "sword" ? "bg-sword" : course.id === "mayflower" ? "bg-mayflower" : "bg-oneThirty"}`}>
      <h3 className={indexStyle.h3}>{`《${course.title}》`}</h3>
      <p className={featuredStyle.p}>{`${course.subtitle}`}</p>
      <p className={featuredStyle.p}>{`${course.description}`}</p>
    </div>
  );
}