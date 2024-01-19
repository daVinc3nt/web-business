import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";
import Instagram from "../components/InstagramGallery/Instagram";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import { useIntl } from "react-intl";
const Home: NextPage = () => {
  const intl = useIntl();
  return (
    //things shall be on navbar menu
    <>
    <div className="overflow-y-scroll no-scrollbar">
      <Head>
        <title>TDLogistics</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading={intl.formatMessage({ id: 'NavBar.home.hello' })} 
            message={intl.formatMessage({ id: 'NavBar.home.sologan' })} />
      <Slider slides={SliderData} />
      <Instagram />
      <Portfolio />
      <Contact />
    </div>
    </>
  );
};

export default Home;
