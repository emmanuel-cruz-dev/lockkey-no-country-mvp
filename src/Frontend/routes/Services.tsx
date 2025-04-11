import { lazy, Suspense } from "react";
import Loading from "../components/Loading/Loading";

const OurServices = lazy(
  () => import("../pages/OurServices/OurServices/OurServices")
);
const FAQs = lazy(() => import("../pages/OurServices/FAQs/FAQs"));

function Services() {
  return (
    <Suspense fallback={<Loading />}>
      <OurServices />
      <FAQs />
    </Suspense>
  );
}

export default Services;
