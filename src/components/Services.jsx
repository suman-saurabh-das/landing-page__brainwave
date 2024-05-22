import React from 'react';
import Section from './Section';
import Heading from './Heading';
import Generating from './Generating';

import { service1, service2, service3, check } from '../assets';
import { brainwaveServices, brainwaveServicesIcons } from '../constants';
import { PhotoChatMessage, Gradient, VideoBar, VideoChatMessage } from './design/Services';

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators"
          text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          {/* Container for service 1 - START */}
          <div className="border border-n-1/10 flex h-[39rem] xl:h-[46rem] items-center mb-5 overflow-hidden p-8 lg:p-20 relative rounded-3xl z-1">
            {/* Background image */}
            <div className="absolute top-0 left-0 h-full pointer-events-none w-full md:w-3/5 xl:w-auto">
              <img
                className="h-full object-cover md:object-right w-full"
                src={service1}
                alt="Smartest AI"
                height={730}
                width={800}
              />
            </div>

            {/* Container for Heading & List items */}
            <div className="relative ml-auto max-w-[17rem] z-1">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {
                  brainwaveServices.map((item, index) => (
                    <li className="border-t border-n-6 flex items-start py-4" key={index}>
                      <img src={check} alt="check" height={24} width={24} />
                      <p className="ml-4">{item}</p>
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* Center Generating component */}
            <Generating className="absolute right-4 bottom-4 lg:bottom-8 left-4 lg:left-1/2 border border-n-1/10 lg:-translate-x-1/2" />
          </div>
          {/* Container for service 1 - END */}

          {/* Container for service 2 & 3 */}
          <div className="grid gap-5 lg:grid-cols-2 relative z-1">
            {/* Container for service 2 - START */}
            <div className="border border-n-1/10 min-h-[39rem] overflow-hidden relative rounded-3xl">
              {/* Left image container */}
              <div className="absolute inset-0">
                <img
                  className="h-full object-cover w-full"
                  src={service2}
                  alt="robot"
                  height={750}
                  width={630}
                />
              </div>
              {/* Left heading and paragraph container */}
              <div className="absolute bg-gradient-to-b from-n-8/0 to-n-8/90 flex flex-col inset-0 justify-end p-8 lg:p-15">
                <h4 className="h4 mb-4">Photo Editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app&apos;s photo editing feature. Try it now!
                </p>
              </div>
              {/* Chat pop-up message */}
              <PhotoChatMessage />
            </div>
            {/* Container for service 2 - END */}

            {/* Container for service 3 - START */}
            <div className="bg-n-7 lg:min-h-[46rem] overflow-hidden p-4 rounded-3xl">
              <div className="px-4 xl:px-8 py-12">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The world’s most powerful AI photo and video art generation engine. What will you create?
                </p>
                <ul className="flex items-center justify-between">
                  {
                    brainwaveServicesIcons.map((item, index) => (
                      <li key={index}
                        className={`flex items-center justify-center rounded-2xl ${index === 2 ? "bg-conic-gradient h-[3rem] md:h-[4.5rem] p-0.25 w-[3rem] md:w-[4.5rem]" : "bg-n-6 h-10 md:h-15 w-10 md:w-15"}`}
                      >
                        <div className={`${index === 2 ? "bg-n-7 flex h-full items-center justify-center rounded-[1rem] w-full" : ""}`}>
                          <img src={item} alt={item} height={24} width={24} />
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div className="bg-n-8 h-[20rem] md:h-[25rem] overflow-hidden relative rounded-xl">
                <img className="h-full object-cover w-full" src={service3} alt="robot" height={400} width={520} />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
            {/* Container for service 3 - END */}
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  )
}

export default Services
