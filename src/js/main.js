//==>   Warning : Alternative branch [ONLY FOR EXPERIMENTAL SCRIPTS]   <==//

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Timeline } from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Timeline);

var boxes = document.querySelectorAll("[class^='box-']");
var boxWrappers = document.querySelectorAll("[class^='wrapper-box-']");

gsap.utils.toArray(boxes).forEach((box, index) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: boxWrappers[index],
      start: "center center",
      end: "400% top",
      scrub: 1,
      pin: true,
      markers: true,
    },
  });

  tl.to(box, {
    scale: 0.9,
    ease: "none",
    rotate: () => gsap.utils.random(-8, 8),
  });

  tl.to(
    box,
    {
      opacity: 0,
      ease: "none",
    },
    "<+=85%"
  );
});
