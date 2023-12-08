import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useOverlapping = (ref) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // use the code in gsap context
      const sections = gsap.utils.toArray(".section");
      const headerRef = document.querySelector("header");
      if (sections && headerRef) {
        sections.forEach((section) =>
          gsap.to(section, {
            scrollTrigger: {
              // markers: true,
              trigger: section,
              start: () =>
                section.offsetHeight <=
                window.innerHeight - headerRef.offsetHeight
                  ? `top ${headerRef.offsetHeight}px`
                  : "bottom bottom",
              endTrigger: ref.current,
              end: "bottom top",
              scrub: true,
              pin: section,
              pinSpacing: false,
            },
          })
        );
      }
    }, ref);

    return () => ctx.revert();
  }, [ref]);
};
