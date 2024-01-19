import { motion, useAnimation, useInView } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef } from "react"

const NewsBlogSec3 = () => {
  const refSec3 = useRef(null);
  const isInView = useInView(refSec3, {once: true});
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
      <div id="allnews" className="h-[350px] sm:px-[4.5rem] px-2 lg:px-[5.5rem] bg-black/70 pb-2">
        <section 
          ref = {refSec3}
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
              <h1 className="font-bold sm:text-xl lg:text-2xl pt-1 pb-4 text-left pl-4">Tất cả tin tức</h1>
          </motion.div>
        </section>
      </div>
    </>
  )
}

export default NewsBlogSec3;