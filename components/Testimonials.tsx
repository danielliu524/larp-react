import indexStyle from "../styles/index.module.css";
import TestimonialCard from "./TestimonialCard";

export type Testimonial = {
  id: string;
  name: string;
  testimonial: string;
}

type Props = {
  testimonials: any;
}

export default function Testimonials({ testimonials }: Props) {
  return (
    <div className={indexStyle.section + " pt-[100px]"}>
      <h1 className={indexStyle.h1}>玩家好評</h1>
      <p className={indexStyle.p}>不時優惠，鳴謝忠粉誠摯回饋</p>
      <div className={indexStyle.row}>
        <TestimonialCard testimonial={testimonials["1"]} />
        <TestimonialCard testimonial={testimonials["2"]} />
      </div>
    </div>
  );
}