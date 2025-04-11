import { lazy, Suspense } from "react";
import Loading from "../components/Loading/Loading";

const AboutUs = lazy(() => import("../pages/About/AboutUs/AboutUs"));
const OurTeam = lazy(() => import("../pages/About/OurTeam/OurTeam"));

function About() {
  return (
    <Suspense fallback={<Loading />}>
      <AboutUs />
      <OurTeam />
    </Suspense>
  );
}

export default About;
