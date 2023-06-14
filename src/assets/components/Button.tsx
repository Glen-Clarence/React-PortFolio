import { gsap } from "gsap";
import { ReactNode, useEffect, useRef } from "react";

interface buttonProps {
  className: string;
  children: ReactNode;
}

const Button: React.FC<buttonProps> = ({ className, children }) => {
  // const buttons = gsap.utils.toArray(".button");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tlRef = useRef<gsap.core.Timeline>();

  useEffect(() => {
    const button = buttonRef.current;
    const span = button?.children[0] as gsap.TweenTarget;

    if (button && span) {
      tlRef.current = gsap.timeline({ paused: true });
      tlRef.current.to(span, {
        duration: 0.2,
        yPercent: -150,
        ease: "power2.in",
      });
      tlRef.current.set(span, { yPercent: 150 });
      tlRef.current.to(span, { duration: 0.2, yPercent: 0 });
    }
  }, []);

  const handleButtonHoverEvent = () => {
    const tl = tlRef.current;
    if (tl) {
      tl.play(0);
    }
  };

  const handleButtonLeaveEvent = () => {
    const tl = tlRef.current;
    if (tl) {
      tl.reverse();
    }
  };
  return (
    <button
      onMouseEnter={() => handleButtonHoverEvent()}
      onMouseLeave={() => handleButtonLeaveEvent()}
      ref={buttonRef}
      className={"text-4xl px-3 py-3 overflow-hidden " + className}
    >
      <span className="inline-block ">{children}</span>
    </button>
  );
};

export default Button;
