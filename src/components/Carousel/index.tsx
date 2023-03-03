import React from "react";

interface ButtonProps {
  /**
   * What background color to use
   */
  color?: "btn-primary" | "btn-secondary" | "btn-accent" | "btn-ghost";
  /**
   * How large should the button be?
   */
  size?: "btn-xs" | "btn-sm" | "btn" | "btn-lg";

  /**
   * Outline button
   */
  isOutline?: boolean;

  /**
   * Wide button
   */
  isWide?: boolean;
  /**
   * Button contents
   */

  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Optional class
   */
}

/**
 * Primary UI component for user interaction
 */
export const Carousel = () => {
  return (
    <div className="relative carousel rounded-box">
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide2" className="btn btn-circle">
          ❯
        </a>
      </div>
      <div className="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
          alt="Burger"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
          alt="Burger"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
          alt="Burger"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
          alt="Burger"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
          alt="Burger"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
          alt="Burger"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
          alt="Burger"
        />
      </div>
    </div>
  );
};
