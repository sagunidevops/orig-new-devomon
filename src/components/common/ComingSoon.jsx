import { useEffect } from "react";

const ComingSoon = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
    <section className=" flex flex-col justify-center bg-coming_soon_bg_img bg-no-repeat bg-cover h-screen">
        <div className="container">
           <div className="bg-comingSoonBgImg bg-no-repeat bg-cover w-[240px] h-[240px] sm:w-[358px] sm:h-[358px] mx-auto flex justify-center items-center">
             <p className="text-3xl md:text-4xl xl:text-5xl text-white font-bold font-raleway">coming soon</p>
           </div>
        </div>
    </section>
    </>
  )
}

export default ComingSoon