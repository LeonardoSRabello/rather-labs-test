import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ANIMATIONS } from "../../constants/animation";
import "./style.css";

const Animation = () => {
  const ref = useRef();

  const { contextSafe } = useGSAP({ ref });

  const handleClick = contextSafe(() => {
    let tl = gsap.timeline();
    ANIMATIONS.forEach((animation) => {
      tl = tl.to(ref.current, { ...animation });
    });
  });

  return (
    <>
      <div className="glow-wrapper">
        <div className="glow" ref={ref} />
      </div>
      <button onClick={handleClick}>Start animation</button>
    </>
  );
};

export default Animation;
