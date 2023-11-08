//====> Warning : Alternative branch [ONLY FOR EXPERIMENTAL SCRIPTS] <==//

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

var boxes = document.querySelectorAll(".box");
var boxWrappers = document.querySelectorAll(".box-wrapper");

boxWrappers.forEach("boxWrapper", () => {
  boxes.forEach("box", () => {
    gsap.to(".box", {
      scrollTrigger: {
        trigger: ".box-wrapper",
        start: "center center",
        end: "400% center",
        pin: true,
        pinSpacing: false,
        markers: true,
        scrub: 1,
        onUpdate: function (self) {
          const progress = self.progress;
          if (progress > 0.85) {
            gsap.to(".box", { opacity: 1 - (progress - 0.85) * 10 });
          }
        },
      },
      scale: 0.9,
      rotate: () => gsap.utils.random(-8, 8),
    });
  });
});

// gsap.to(".box-1", {
//   scrollTrigger: {
//     trigger: ".box-wrapper-1",
//     start: "center center",
//     end: "400% center",
//     pin: true,
//     pinSpacing: false,
//     markers: true,
//     scrub: 1,
//     onUpdate: function (self) {
//       const progress = self.progress;
//       if (progress > 0.85) {
//         gsap.to(".box-1", { opacity: 1 - (progress - 0.85) * 10 });
//       }
//     },
//   },
//   scale: 0.9,
//   rotate: () => gsap.utils.random(-8, 8),
// });

// gsap.to(".box-2", {
//   scrollTrigger: {
//     trigger: ".box-wrapper-2",
//     markers: true,
//     start: "center center",
//     end: "400% center",
//     pin: true,
//     pinSpacing: false,
//     scrub: 1,
//     onUpdate: function (self) {
//       const progress = self.progress;
//       if (progress > 0.85) {
//         gsap.to(".box-2", { opacity: 1 - (progress - 0.85) * 10 });
//       }
//     },
//   },
//   scale: 0.9,
//   rotate: () => gsap.utils.random(-8, 8),
// });

// gsap.to(".box-3", {
//   scrollTrigger: {
//     trigger: ".box-wrapper-3",
//     markers: true,
//     start: "center center",
//     end: "400% center",
//     pin: true,
//     pinSpacing: false,
//     scrub: 1,
//     onUpdate: function (self) {
//       const progress = self.progress;
//       if (progress > 0.85) {
//         gsap.to(".box-3", { opacity: 1 - (progress - 0.85) * 10 });
//       }
//     },
//   },
//   scale: 0.9,
//   rotate: () => gsap.utils.random(-8, 8),
// });

// gsap.to(".box-4", {
//   scrollTrigger: {
//     trigger: ".box-wrapper-4",
//     markers: true,
//     start: "center center",
//     end: "400% center",
//     pin: true,
//     pinSpacing: false,
//     scrub: 1,
//     onUpdate: function (self) {
//       const progress = self.progress;
//       if (progress > 0.85) {
//         gsap.to(".box-4", { opacity: 1 - (progress - 0.85) * 10 });
//       }
//     },
//   },
//   scale: 0.9,
//   rotate: () => gsap.utils.random(-8, 8),
// });

// gsap.to(".box-5", {
//   scrollTrigger: {
//     trigger: ".box-wrapper-5",
//     markers: true,
//     start: "center center",
//     end: "400% center",
//     pin: true,
//     pinSpacing: false,
//     scrub: 1,
//     onUpdate: function (self) {
//       const progress = self.progress;
//       if (progress > 0.85) {
//         gsap.to(".box-5", { opacity: 1 - (progress - 0.85) * 10 });
//       }
//     },
//   },
//   scale: 0.9,
//   rotate: () => gsap.utils.random(-8, 8),
// });

// gsap.to(".box-6", {
//   scrollTrigger: {
//     trigger: ".box-wrapper-6",
//     markers: true,
//     start: "center center",
//     end: "400% center",
//     pin: true,
//     pinSpacing: false,
//     scrub: 1,
//     onUpdate: function (self) {
//       const progress = self.progress;
//       if (progress > 0.85) {
//         gsap.to(".box-6", { opacity: 1 - (progress - 0.85) * 10 });
//       }
//     },
//   },
//   scale: 0.9,
//   rotate: () => gsap.utils.random(-8, 8),
// });

// gsap.to(".box-7", {
//   scrollTrigger: {
//     trigger: ".box-wrapper-7",
//     markers: true,
//     start: "center center",
//     end: "400% center",
//     pin: true,
//     pinSpacing: false,
//     scrub: 1,
//     onUpdate: function (self) {
//       const progress = self.progress;
//       if (progress > 0.85) {
//         gsap.to(".box-7", { opacity: 1 - (progress - 0.85) * 10 });
//       }
//     },
//   },
//   scale: 0.9,
//   rotate: () => gsap.utils.random(-8, 8),
// });

// gsap.to(".box-8", {
//   scrollTrigger: {
//     trigger: ".box-wrapper-8",
//     markers: true,
//     start: "center center",
//     end: "400% center",
//     pin: true,
//     pinSpacing: false,
//     scrub: 1,
//     onUpdate: function (self) {
//       const progress = self.progress;
//       if (progress > 0.85) {
//         gsap.to(".box-8", { opacity: 1 - (progress - 0.85) * 10 });
//       }
//     },
//   },
//   scale: 0.9,
//   rotate: () => gsap.utils.random(-8, 8),
// });

// gsap.to(".box-9", {
//   scrollTrigger: {
//     trigger: ".box-wrapper-9",
//     markers: true,
//     start: "center center",
//     end: "400% center",
//     pin: true,
//     pinSpacing: false,
//     scrub: 1,
//     onUpdate: function (self) {
//       const progress = self.progress;
//       if (progress > 0.85) {
//         gsap.to(".box-9", { opacity: 1 - (progress - 0.85) * 10 });
//       }
//     },
//   },
//   scale: 0.9,
//   rotate: () => gsap.utils.random(-8, 8),
// });

// gsap.to(".box-10", {
//   scrollTrigger: {
//     trigger: ".box-wrapper-10",
//     markers: true,
//     start: "center center",
//     end: "400% center",
//     pin: true,
//     pinSpacing: false,
//     scrub: 1,
//     onUpdate: function (self) {
//       const progress = self.progress;
//       if (progress > 0.85) {
//         gsap.to(".box-10", { opacity: 1 - (progress - 0.85) * 10 });
//       }
//     },
//   },
//   scale: 0.9,
//   rotate: () => gsap.utils.random(-8, 8),
// });

// gsap.to(".box-11", {
//   scrollTrigger: {
//     trigger: ".box-wrapper-11",
//     markers: true,
//     start: "center center",
//     end: "400% center",
//     pin: true,
//     pinSpacing: false,
//     scrub: 1,
//     onUpdate: function (self) {
//       const progress = self.progress;
//       if (progress > 0.85) {
//         gsap.to(".box-11", { opacity: 1 - (progress - 0.85) * 10 });
//       }
//     },
//   },
//   scale: 0.9,
//   rotate: () => gsap.utils.random(-8, 8),
// });

// gsap.to(".box-12", {
//   scrollTrigger: {
//     trigger: ".box-wrapper-12",
//     markers: true,
//     start: "center center",
//     end: "400% center",
//     pin: true,
//     pinSpacing: false,
//     scrub: 1,
//     onUpdate: function (self) {
//       const progress = self.progress;
//       if (progress > 0.85) {
//         gsap.to(".box-12", { opacity: 1 - (progress - 0.85) * 10 });
//       }
//     },
//   },
//   scale: 0.9,
//   rotate: () => gsap.utils.random(-8, 8),
// });
