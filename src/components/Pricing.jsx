import React from 'react';
import Section from './Section';
import Heading from './Heading';
import PricingList from './PricingList';

import { smallSphere, stars } from '../assets';
import { LeftLine, RightLine } from './design/Pricing';

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        {/* Sphere container - only visible in large devices */}
        <div className="hidden lg:flex justify-center mb-[6.5rem] relative">
          <img className="relative z-1" src={smallSphere} alt="Sphere" height={255} width={255} />
          <div className="absolute top-1/2 left-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2 w-[60rem]">
            <img className="w-full" src={stars} alt="Stars" height={400} width={950} />
          </div>
        </div>

        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        {/* Pricing list container */}
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a className="border-b font-bold font-code text-xs tracking-wider uppercase" href="#pricing">See the full details</a>
        </div>
      </div>
    </Section>
  )
}

export default Pricing;
