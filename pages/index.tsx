import path from "path";
import fsPromises from 'fs/promises';
import { InferGetStaticPropsType } from "next";

import Header from "@/components/Header";
import Featured from "@/components/Featured";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home({ courses, testimonials }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Header />
      <Featured courses={courses} />
      <About />
      <Testimonials testimonials={testimonials} />
      <CallToAction />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const coursesPath = path.join(process.cwd(), 'courses.json');
  const coursesJson = await fsPromises.readFile(coursesPath);
  const coursesData = JSON.parse(coursesJson.toString());

  const testimonialsPath = path.join(process.cwd(), 'testimonials.json');
  const testimonialsJson = await fsPromises.readFile(testimonialsPath);
  const testimonialsData = JSON.parse(testimonialsJson.toString());
  return {
    props: { 
      courses: coursesData,
      testimonials: testimonialsData,
    }
  }
}