import Hero from "./Hero";
import About from "./About";
import AboutCard from "./AboutCard";
import LatestNews from "./LatestNews";
import Partner from "./Partner";
import TouchForm from "./TouchForm";
import SideSocialIcon from "../common/SideSocialIcon";
import { useEffect } from "react";
import { LatestNewsHandler } from "../common/Api";
import { NewsApi } from "../common/ApiUrls";
import { useState } from "react";
import moment from 'moment';
import News from "./News";


const Homepage = () => {
  const [latestNewsData, setLatestNewsData] = useState();

  const latestNewsApiHandler = async () => {
    const newsData = await LatestNewsHandler(NewsApi());
    setLatestNewsData(newsData);
  };
  useEffect(() => {
    latestNewsApiHandler();
  }, []);
console.log("latestNewsDatalatestNewsData", moment(latestNewsData&&latestNewsData[0].created).format("MMM Do"))
  return (
    <>
      <SideSocialIcon />
      <Hero />
      <About />
      <AboutCard />
      <LatestNews />
      <News/>
      <Partner />
      <TouchForm />
    </>
  );
};

export default Homepage;
