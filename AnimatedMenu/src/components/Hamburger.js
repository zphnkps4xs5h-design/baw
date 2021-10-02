import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleFoodReturn,
  handleFood,
  staggerRevealClose
} from "./Animations";

import dessert from "../img/1.jpeg";
import dessert1 from "../img/2.jpg";
import dessert2 from "../img/3.jpg";
import dessert3 from "../img/4.jpg";
import dessert4 from "../img/5.jpg";

const cities = [
  { name: "dessert", image:dessert },
  { name: "dessert1", image: dessert1 },
  { name: "dessert2", image: dessert2 },
  { name: "dessert3", image: dessert3 },
  { name: "dessert4", image: dessert4}
];

const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let Background = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);

  let info = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2);
    }
  }, [state]);

  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div
          ref={el => (Background = el)}
          className='menu-background'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to='/opportunities'>
                      yUMMYDesserts
                    </Link>
                  </li>
                 
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      to='/contact-us'>
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className='info'>
                <h3>About</h3>
                <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eos odio eaque odit consectetur quod velit commodi exercitationem, omnis quidem amet similique eius quasi facilis maxime? Eveniet ratione distinctio voluptatum?
                </p>
              </div>
              <div className='desserts'>
                Desserts:
                {/* Returning the list of cities */}
                {cities.map(el => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleFood(el.image, Background)}
                    onMouseOut={() => handleFoodReturn(Background)}>
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
