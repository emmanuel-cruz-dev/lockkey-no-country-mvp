import { lazy, Suspense } from "react";
import Loading from "../components/Loading/Loading";

const Contact = lazy(() => import("../pages/Contact/Contact/Contact"));
const WhyChooseUs = lazy(
  () => import("../pages/Contact/WhyChooseUs/WhyChooseUs")
);

function ContactPage() {
  return (
    <Suspense fallback={<Loading />}>
      <WhyChooseUs />
      <Contact />
    </Suspense>
  );
}

export default ContactPage;
