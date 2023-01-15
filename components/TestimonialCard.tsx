import Image from "next/image";
import testimonialStyle from "../styles/testimonial.module.css";
import indexStyle from "../styles/index.module.css";
import user1 from "../public/images/user1.jpg";
import user2 from "../public/images/user2.jpg"
import { Testimonial } from "./Testimonials";

type Props = {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: Props) {
  const formatTestimonial = (testimonial: string): React.ReactElement => {
    const testimonialArray = testimonial.split("\n");
    const testimonialElement = testimonialArray.map((subsection: string) => {
      return (<>{subsection}<br /><br /></>)
    })
    return <>{testimonialElement}</>;
  }

  return (
    <div className={testimonialStyle.card}>
      <Image src={testimonial.id === "1" ? user1 : user2} alt={""} width={40} height={40} />
      <div className={testimonialStyle.testimonial}>
        <p className={testimonialStyle.p}>
          {formatTestimonial(testimonial.testimonial)}
        </p>
        <h3 className={indexStyle.h3}>{testimonial.name}</h3>
      </div>
    </div>
  );
}