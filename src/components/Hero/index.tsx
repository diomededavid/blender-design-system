import React from "react";

interface HeroProps {
  /**
   * Accept children components
   */
  children?: React.ReactNode;
}

export const Hero = ({ children }: HeroProps) => (
  <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">{children}</div>
  </div>
);

export default Hero;
