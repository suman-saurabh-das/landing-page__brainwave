import React from 'react';
import Section from './Section';
import Button from './Button';

import { brainwaveSymbol, check } from '../assets';
import { collabApps, collabContent, collabText } from '../constants';
import { LeftCurve, RightCurve } from './design/Collaboration';

const Collaboration = () => {
  return (
    <Section crosses={true}>
      <div className="container lg:flex">
        {/* Left container for heading and list of features */}
        <div className="max-w-[25rem]">

          {/* Collaboration heading */}
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>
          
          {/* List of features */}
          <ul className="mb-10 md:mb-14 max-w-[22rem]">
            {
              collabContent.map((item) => (
                <li className="mb-3 py-3" key={item.id}>
                  <div className="flex items-center">
                    <img src={check} alt="check" height={24} width={24} />
                    <h6 className="body-2 ml-5">{item.title}</h6>
                  </div>
                  {item.text && <p className="body-2 mt-3 text-n-4">{item.text}</p>}
                </li>
              ))
            }
          </ul>

          {/* Collaboration try it now button */}
          <Button>Try it now</Button>
        </div>

        {/* Right container for circular illustration */}
        <div className="lg:ml-auto mt-4 xl:w-[38rem]">

          {/* Collaboration right text */}
          <p className="body-2 mb-8 md:mb-16 lg:mb-32 lg:mx-auto lg:w-[22rem] text-n-4">
            {collabText}
          </p>

          {/* Background circles */}
          <div className="aspect-square border border-n-6 flex left-1/2 relative rounded-full scale-75 md:scale-100 -translate-x-1/2 w-[22rem]">
            <div className="aspect-square border border-n-6 flex m-auto rounded-full w-60">
              <div className="aspect-square bg-conic-gradient m-auto p-[0.2rem] rounded-full w-[6rem]">
                <div className="bg-n-8 flex h-full items-center justify-center rounded-full w-full">
                  <img src={brainwaveSymbol} alt="brainwave" height={48} width={48} />
                </div>
              </div>
            </div>

            {/* List of app images encircling brainwave symbol */}
            <ul>
              {collabApps.map((app, index) => (
                <li className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`} key={app.id}>
                  <div className={`bg-n-7 border border-n-1/15 flex h-[3.2rem] relative rounded-xl -top-[1.6rem] w-[3.2rem] -rotate-${index * 45}`}>
                    <img className="m-auto" src={app.icon} alt={app.title} height={app.height} width={app.width} />
                  </div>
                </li>
              ))}
            </ul>

            {/* Left and Right background curve svg lines (only for large devices) */}
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Collaboration;
