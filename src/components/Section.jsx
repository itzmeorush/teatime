import React from "react";
import { motion } from "framer-motion";

const Section = ({
  h3,
  text,
  hasBtn = true,
  btnTxt,
  imgSrc,
  imgSize = "70%",
  bgColor,
  headColor,
  textColor,
  btnBgColor,
  btnColor,
}) => {

  const headingOptions = {
    initial:{
      y: '-100%',
      opacity: 0,
    },
    whileInView:{
      y:0,
      opacity: 1,
    }
  }

  const textOptions ={
    ...headingOptions,
    transition:{
      delay: 0.3,
    }
  }
  const btnOptions ={
    initial:{
      y: '100%',
      opacity: 0,
    },
    whileInView:{
      y:0,
      opacity: 1,
    },
    transition:{
      delay: 0.3,
      ease:'easeIn'
    }
  }
  const imgOptions ={
    initial:{
     scale:0.1,
      opacity: 0,
    },
    whileInView:{
     scale: 1,
      opacity: 1,
    },
    transition:{
      delay: 0.3,
    }
  }

  


  return (
    <section className="section" style={{ backgroundColor: bgColor }}>
      <div>
        <motion.h3 style={{ color: headColor }} data-cursorpointer={true}
         {...headingOptions}
        >
         
          {h3}
        </motion.h3>
        <motion.p style={{ color: textColor }} data-cursorpointer={true} {...textOptions}>
          {text}
        </motion.p>
        {hasBtn && (
          <motion.button
            style={{ backgroundColor: btnBgColor, color: btnColor }}
            data-cursorpointer={true} {...btnOptions}
          >
            {btnTxt}
          </motion.button>
        )}
        <motion.img src={imgSrc} alt="img" style={{ width: imgSize }} {...imgOptions} />
      </div>
    </section>
  );
};

export default Section;
