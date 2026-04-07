import React from "react";

export default function Header() {
  return (
    <div className="frontpage">
      <div className="frontpage-inner">
        <h1 className="hero-line hero-line-1">Kobe Uko</h1>
        <p className="hero-tagline hero-line hero-line-2">
          Computer Science student building products, automation, and developer-focused tools.
        </p>
        <a className="hero-cta hero-line hero-line-3" href="#about-me">
          About Me
        </a>
      </div>
    </div>
  );
}
