import { motion, useAnimation, useInView } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef } from "react"

const Slide = () => {

  return (
      <div className="flex h-full justify-between flex-col lg:flex-row hover:bg-gray-300/70 lg:p-4 rounded-2xl">
          <div className="image h-1/3 lg:h-full lg:w-[30%]">
          <Link href="/">
            <div
              style={{ backgroundImage: 'url("/images/img1.jpg")' }}
              className="h-full bg-center bg-no-repeat bg-contain lg:bg-cover bg-white/50 rounded-t-2xl lg:rounded-2xl"
            >
            </div>
          </Link>
          </div>
          <div className="info flex justify-start pt-4 flex-col w-full lg:w-[65%] h-2/3 lg:h-full relative px-2 xs:px-4 lg:px-0">
              <div className="cat">
                  <Link href={"/"} className="text-orange-600 hover:text-orange-800">Business, Travel</Link>
                  <Link href={"/"} className="text-gray-800 hover:text-gray-600"> - July 3, 2022</Link>
              </div>
              <div className="title pt-4 xs:pt-0">
                  <Link href={"/"} className="text-xl lg:text-3xl font-bold text-gray-800 hover:text-gray-600 line-clamp-3 xs:line-clamp-none">Your most unhappy customers are your greatest source of learning</Link>
              </div>
              <p className="text-gray-500 pt-4 lg:pt-8 truncate-text invisible xs:visible line-clamp-2 sm:line-clamp-3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              <h1 className="self-center lg:self-end absolute bottom-2 lg:bottom-0 text-sm">-Đội ngũ TDLogistics-</h1>
          </div>
      </div>
  )
}

const NewsBlogSec2 = () => {
  const refSec2 = useRef(null);
  const isInView = useInView(refSec2, {once: true});
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(()=>{
    if (isInView){
      mainControls.start("visible")
      slideControls.start("visible")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

  return (
    <>
      <div className="h-[450px] sm:px-[4.5rem] px-2 lg:px-[5.5rem] bg-black/70 pb-2">
        <section 
          ref = {refSec2}
          className="relative bg-white/90 p-4 rounded-3xl h-full w-full">
          <motion.div 
            variants={{
              hidden: {opacity:0 , y:20},
              visible: {opacity:1 , y:0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: .5, delay: .25}}
            className="flex flex-col mx-auto h-full w-full">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl pt-0 pb-2 lg:pb-4 text-center">Sự kiện hot đáng chú ý</h1>
              { Slide() }
          </motion.div>
        </section>
      </div>
    </>
  )
}

export default NewsBlogSec2;