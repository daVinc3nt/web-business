import { useMotionValue, useTransform, animate, motion } from "framer-motion";
import ButtonLink from "./Sec1ChildComponent/ButtonLink";
import { useEffect } from "react";
import CursorBlinker from "./Sec1ChildComponent/CursorBlinker";

const NewsBlogSec1 = () => {
  const textIndex = useMotionValue(0);
  const texts = [
    "Có gì trên TDLogistics?",
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 180, {
      type: "tween",
      duration: 5,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="sm:px-[4.5rem] px-2 lg:px-[5.5rem] bg-black/70 pt-20 pb-2">
        <motion.section  
          variants={{
            hidden: {opacity:0 , y:75},
            visible: {opacity:1 , y:0},
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: .5, delay: .25}}
          className="relative p-4 rounded-3xl h-full w-full">
          <div className="flex flex-col mx-auto h-full w-full">
              <span className="self-center lg:pb-4">
                <motion.span className="font-bold text-4xl lg:text-6xl lg:pt-8 text-center text-white">{ displayText }</motion.span>
                <CursorBlinker />
              </span>
              <h2 className="font-semibold text-sm sm:text-xl lg:text-2xl pt-4 pb-2 lg:pb-4 text-center text-white">Nơi cập nhật tất cả tin tức, hoạt động mới nhất từ TDLogistics và các đối tác.</h2>
          </div>
          <div className="flex flex-wrap w-full justify-center">
            <ButtonLink href="#allnews" buttonText="Tất cả tin tức"/>
            <ButtonLink href="#customer" buttonText="Khách hàng"/>
            <ButtonLink href="#driver" buttonText="Tài xế"/>
            <ButtonLink href="#partner" buttonText="Đối tác"/>
            <ButtonLink href="#brand" buttonText="Đồng hành cùng thương hiệu"/> 
          </div>
        </motion.section>
      </div>
    </>
  )
}

export default NewsBlogSec1;