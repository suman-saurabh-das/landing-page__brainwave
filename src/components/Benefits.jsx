import Section from './Section';
import Heading from './Heading';
import Arrow from '../assets/svg/Arrow';
import ClipPath from '../assets/svg/ClipPath';

import { benefits } from '../constants';
import { GradientLight } from './design/Benefits';


const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {
            benefits.map((item) => (
              <div
                className="bg-no-repeat bg-[length:100%_100%] block p-0.5 relative md:max-w-[24rem]"
                style={{ backgroundImage: `url(${item.backgroundUrl})` }}
                key={item.id}
              >
                {/* Container for card */}
                <div className="flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none relative z-2">
                  {/* Card title */}
                  <h5 className="h-5 mb-5">{item.title}</h5>
                  {/* Card details */}
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                  {/* Card icon and button container */}
                  <div className="flex items-center mt-auto">
                    <img src={item.iconUrl} alt={item.title} height={48} width={48} />
                    <p className="font-bold font-code ml-auto text-n-1 text-xs tracking-wider uppercase">
                      Explore more
                    </p>
                    <Arrow />
                  </div>
                </div>
                {/* Blue gradient light background */}
                {item.light && <GradientLight />}

                {/* Container for displaying background image on hover */}
                <div
                  className="absolute bg-n-8 inset-0.5"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity">
                    {
                      item.imageUrl && (
                        <img
                          className="h-full object-cover w-full"
                          src={item.imageUrl}
                          alt={item.title}
                          height={362}
                          width={380}
                        />
                      )
                    }
                  </div>
                </div>
                {/* Clips the border of the image container to display the svg gradient border */}
                <ClipPath />
              </div>
            ))
          }
        </div>
      </div>
    </Section>
  )
}

export default Benefits;
