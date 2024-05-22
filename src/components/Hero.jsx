import React from 'react';
import { useRef } from 'react';
import Section from './Section';
import Button from './Button';
import Generating from './Generating';
import Notification from './Notification';
import CompanyLogos from './CompanyLogos';

import curve from '../assets/hero/curve.png';
import robot from '../assets/hero/robot.jpg';
import heroBackground from '../assets/hero/hero-background.jpg';
import { BackgroundCircles, BottomLine, Gradient } from './design/Hero';
import { heroIcons } from '../constants';
import { ScrollParallax } from 'react-just-parallax';

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section className="-mt-[5.25rem] pt-[12rem]" crosses={true} crossesOffset="lg:translate-y-[5.25rem]" customPaddings={true} id="hero">
      <div className="container relative" ref={parallaxRef}>
        {/* Hero section - Container 1 */}
        <div className="mb-[4rem] md:mb-20 lg:mb-[6rem] mx-auto relative text-center max-w-[62rem] z-1">
          {/* Heading text */}
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
            <span className="inline-block relative">
              Brainwave
              <img className="absolute top-full left-0 xl:-mt-2 w-full" src={curve} alt="Curve" height={28} width={624} />
            </span>
          </h1>

          {/* Sub heading text */}
          <p className="body-1 mb-6 lg:mb-8 mx-auto text-n-2 max-w-3xl">
            Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.
          </p>

          {/* Call to action button */}
          <Button href="#pricing" white={true}>
            Get started
          </Button>
        </div>

        {/* Hero section - Container 2 */}
        <div className="relative mx-auto xl:mb-24 max-w-[23rem] md:max-w-5xl">
          {/* Container for Hero image, Generating component, left menu and right notifications */}
          <div className="bg-conic-gradient p-0.5 relative rounded-2xl z-1">
            <div className="bg-n-8 relative rounded-[1rem]">
              <div className="bg-n-10 h-[1.4rem] overflow-hidden rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] md:aspect-[688/490] lg:aspect-[1024/490] overflow-hidden rounded-b-[0.9rem]">
                {/* Hero image */}
                <img
                  alt="HeroAI"
                  className="scale-[1.7] md:scale-[1] translate-y-[8%] md:-translate-y-[10%] lg:-translate-y-[23%] w-full"
                  src={robot} height={490} width={1024}
                />

                {/* Center Generating component */}
                <Generating className="absolute right-4 md:right-auto bottom-5 md:bottom-8 left-4 md:left-1/2 md:-translate-x-1/2 md:w-[31rem]" />

                {/* Left floating menu with parallax animation */}
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden xl:flex absolute bottom-[7.5rem] -left-[5.5rem] backdrop-blur bg-n-9/40 border border-n-1/10 px-1 py-1 rounded-2xl">
                    {
                      heroIcons.map((icon, index) => (
                        <li className="p-5" key={index}>
                          <img alt="icon" src={icon} height={25} width={24} />
                        </li>
                      ))
                    }
                  </ul>
                </ScrollParallax>

                {/* Right floating notification with parallax animation */}
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification 
                    className="hidden xl:flex absolute -right-[5.5rem] bottom-[11rem] w-[18rem]" 
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>

          {/* Container for Hero image background */}
          <div className="absolute -top-[54%] md:-top-[46%] lg:-top-[104%] left-1/2 -translate-x-1/2 w-[234%] md:w-[138%] lg:w-[104%]">
            {/* Hero image background */}
            <img
              alt="HeroBackground"
              className="w-full"
              src={heroBackground} height={1800} width={1440}
            />
          </div>
          {/* Background circles with mouse move animation */}
          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden lg:block mt-20 relative z-10" />
      </div>
      {/* Background line with plus at left and right ends */}
      <BottomLine />
    </Section>
  )
}

export default Hero;
