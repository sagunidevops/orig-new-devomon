import { array2 } from "../common/Helper"
import latest_news_slider_img from "../../assets/images/homepageImages/webp/latest_news_slides.webp";
const News = () => {
  return (
    <>
    <section>
        <div className="container">
            <img
                  className=""
                  src={latest_news_slider_img}
                  alt="latest_news_slider_img"
            />
        </div>
    </section>
    {
        array2.map((items,index)=>{
            <div key={index}>
                <p>
                    {items.date}
                </p>
                <h3>
                    {items.question}
                </h3>
                <p>
                    {items.answer}
                </p>
            </div>
        })
    }
    </>
  )
}

export default News