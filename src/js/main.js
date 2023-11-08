//==>   Warning : Alternative branch [ONLY FOR EXPERIMENTAL SCRIPTS]   <==//

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

var boxes = document.querySelectorAll("[class^='box-']");
var boxWrappers = document.querySelectorAll("[class^='wrapper-box-']");

boxes.forEach((box, index) => {
  gsap.to(box, {
    scrollTrigger: {
      trigger: boxWrappers[index],
      start: "center center",
      end: "400% center",
      pin: true,
      pinSpacing: false,
      markers: true,
      scrub: 1,
      id: index,
      onUpdate: (self) => {
        let progress = self.progress;
        if (progress > 0.85) {
          gsap.to(box, { opacity: 1 - (progress - 0.85) * 15 }); //<== from the 3rd one
        }
      },
    },
    scale: 0.9,
    rotate: () => gsap.utils.random(-8, 8), //<== from the 3rd one (except: 0)
  });
});
