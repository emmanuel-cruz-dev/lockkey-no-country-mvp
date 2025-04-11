import { lazy, Suspense } from "react";
import Loading from "../components/Loading/Loading";

const Features = lazy(() => import("../pages/Home/Features/Features"));
const Hero = lazy(() => import("../pages/Home/Hero/Hero"));
const PricingPlans = lazy(
  () => import("../pages/Home/PricingPlans/PricingPlans")
);
const Testimonials = lazy(
  () => import("../pages/Home/Testimonials/Testimonials")
);
const WhatWeDo = lazy(() => import("../pages/Home/WhatWeDo/WhatWeDo"));
const WhoWeAre = lazy(() => import("../pages/Home/WhoWeAre/WhoWeAre"));
const TalkBanner = lazy(() => import("../pages/Home/TalkBanner/TalkBanner"));

function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Hero />
      <Features />
      <WhoWeAre />
      <WhatWeDo />
      <PricingPlans />
      <Testimonials />
      <TalkBanner />
    </Suspense>
  );
}

export default Home;
