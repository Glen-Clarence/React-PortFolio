import { gsap } from "gsap";

export const fadeIn = (node: gsap.TweenTarget) => {
  gsap.from(node, {
    y: 50,
    duration: 1,
    opacity: 0,
    delay: 0,
  });
};
