//====>   Warning : Alternative branch [ONLY FOR EXPERIMENTAL SCRIPTS]   <==//

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

var boxes = document.querySelectorAll("[class^='box-']");
var boxWrappers = document.querySelectorAll("[class^='box-wrapper-']");

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
      onUpdate: function (self) {
        const progress = self.progress;
        if (progress > 0.85) {
          gsap.to(box, { opacity: 1 - (progress - 0.85) * 10 });
        }
      },
    },
    scale: 0.9,
    rotate: () => gsap.utils.random(-8, 8),
  });
});
