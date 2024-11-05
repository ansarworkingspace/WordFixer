import { Outfit } from "next/font/google";
import Hero from "./component/Hero";
import CorrectionShowcase from "./component/CorrectionShowcase";
import BadgeList from "./component/BadgeList";
import Footer from "./component/Footer";
import Header from "./component/Header";

// Call the font loader at the module scope
const outfit = Outfit({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <div
        className={`text-white relative mt-16 overflow-hidden flex flex-col items-center  gap-5 ${outfit.className}`}
      >
        <CorrectionShowcase />
        <Hero />
        <Footer />
      </div>
    </>
  );
}
