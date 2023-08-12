import Hero from "./Hero";
import About from "./About";
import AboutCard from "./AboutCard";
import Partner from "./Partner";
import TouchForm from "./TouchForm";
import { useEffect } from "react";
import { LatestNewsHandler } from "../common/Api";
import { NewsApi } from "../common/ApiUrls";
import { useState } from "react";
import News from "./News";

const Homepage = () => {
  const [latestNewsData, setLatestNewsData] = useState();
  const [loading, setLoading] = useState(false);

  const latestNewsApiHandler = async () => {
    setLoading(true);
    try {
      const newsData = await LatestNewsHandler(NewsApi());
      setLatestNewsData(newsData);
      setLoading(false);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    latestNewsApiHandler();
  }, []);
  console.log("latestNewsDatalatestNewsData",latestNewsData)
  return (
    <>
      <Hero />
      <About />
      <AboutCard />
      <News newsDataValue={latestNewsData} loading={loading} />
      <Partner />
      <TouchForm />
    </>
  );
};

export default Homepage;
