const ComingSoon = () => {
  return (
    <>
    <section className="h-screen flex flex-col justify-center bg-coming_soon_bg_img bg-no-repeat bg-cover">
        <div className="container">
            {/* <img className="max-w-[358px] mx-auto" src={coming_soon} alt="coming_soon" /> */}
           <div className="bg-comingSoonBgImg bg-no-repeat bg-cover w-[358px] h-[358px] mx-auto flex justify-center items-center">
             <p className="text-3xl md:text-4xl xl:text-5xl text-white font-bold font-raleway">coming soon</p>
           </div>
        </div>
    </section>
    </>
  )
}

export default ComingSoon