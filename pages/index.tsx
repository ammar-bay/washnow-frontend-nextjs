import Section1 from "@pages-sections/home/section-1";
import Section2 from "@pages-sections/home/section-2";
import Section3 from "@pages-sections/home/section-3";
import Section4 from "@pages-sections/home/section-4";
import Section5 from "@pages-sections/home/section-5";
import Section6 from "@pages-sections/home/section-6";
import Section7 from "@pages-sections/home/section-7";
import NavBar from "@components/NavBar";

const Home: React.FC<{}> = () => {
  return (
    <div className="home">
      <NavBar />
      {/* Main */}
      <Section1 />
      {/* How it works */}
      <Section2 />
      {/* Pricing */}
      <Section3 />
      {/* FAQs */}
      <Section4 />
      {/* Appointment */}
      <Section5 />
      {/* Contact */}
      <Section6 />
      {/* footer */}
      <Section7 />
    </div>
  );
};

export default Home;
