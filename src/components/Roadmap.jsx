import Section from './Section';
import Heading from './Heading';
import Tagline from './Tagline';
import Button from './Button';

import { roadmap } from '../constants';
import { check2, grid, loading1 } from '../assets';
import { Gradient } from './design/Roadmap';

const Roadmap = () => {
  return (
    <Section id="roadmap" className="overflow-hidden">
      <div className="container md:pb-10">
        <Heading
          tag="Ready to get started"
          title="What we're working on"
        />
        <div className="grid md:grid-cols-2 gap-6 md:gap-4 md:pb-[7rem] relative">
          {
            roadmap.map((item) => {
              const status = item.status === "done" ? "Done" : "In progress";
              return (
                <div className={`md:flex p-0.25 rounded-[2.5rem] even:md:translate-y-[7rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}`} key={item.id}>
                  <div className="bg-n-8 overflow-hidden p-8 xl:p-15 relative rounded-[2.4375rem]">
                    <div className="absolute top-0 left-0 max-w-full">
                      <img className="w-full" src={grid} alt="Grid" height={550} width={550} />
                    </div>

                    <div className="relative z-1">
                      {/* Date and progress text container */}
                      <div className="flex items-center justify-between mb-8 md:mb-20 max-w-[27rem]">
                        <Tagline>{item.date}</Tagline>
                        <div className="bg-n-1 flex items-center px-4 py-1 rounded text-n-8">
                          <img
                            className="mr-2.5"
                            src={item.status === "done" ? check2 : loading1} alt={status}
                            height={16} width={16}
                          />
                          <div className="tagline">{status}</div>
                        </div>
                      </div>

                      {/* Roadmap image container */}
                      <div className="mb-10 -mx-15 -my-10">
                        <img
                          className="w-full"
                          src={item.imageUrl} alt={item.title}
                          height={426} width={628}
                        />
                      </div>

                      {/* Roadmap heading and paragraph */}
                      <h4 className="h4 mb-4">{item.title}</h4>
                      <p className="body-2 text-n-4">{item.text}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }

          <Gradient />
        </div>

        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="#roadmap">Our roadmap</Button>
        </div>
      </div>
    </Section>
  )
}

export default Roadmap;
