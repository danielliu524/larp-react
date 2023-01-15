import indexStyles from "../styles/index.module.css";
import FeaturedCard from './FeaturedCard';

type Props = {
  courses: any;
}

export type Course = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function Featured({ courses }: Props) {
  return (
    <div className={indexStyles.section + " pt-[100px]"}>
      <h1 className={indexStyles.h1}>本週精選劇本</h1>
      <p className={indexStyles.p}>精挑細選，劇情獨特千回百轉</p>
      <div className={indexStyles.row}>
        <FeaturedCard course={courses["sword"]} />
        <FeaturedCard course={courses["mayflower"]} />
        <FeaturedCard course={courses["oneThirty"]} />
      </div>
    </div>
  );
}