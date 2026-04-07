import { createElement, forwardRef, useEffect, useRef, useState } from "react";

/**
 * Fades/slides content in when it enters the viewport. Respects prefers-reduced-motion via CSS.
 */
const Reveal = forwardRef(function Reveal(
  { children, className = "", delay = 0, as: ElementType = "div", style, ...rest },
  forwardedRef
) {
  const innerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const mergedRef = (node) => {
    innerRef.current = node;
    if (typeof forwardedRef === "function") forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  return createElement(
    ElementType,
    {
      ref: mergedRef,
      className: `reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`,
      style: {
        ...style,
        "--reveal-delay": `${delay}ms`,
      },
      ...rest,
    },
    children
  );
});

export default Reveal;
