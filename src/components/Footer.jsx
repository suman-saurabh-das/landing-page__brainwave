import React from 'react';
import Section from './Section';

import { socials } from '../constants';

const Footer = () => {
  return (
    <Section className="!px-0 !py-10" crosses={true}>
      <div className="container flex max-sm:flex-col items-center justify-center sm:justify-between gap-10">
        <p className="caption lg:block text-n-4">© {new Date().getFullYear()}. All rights reserved.</p>
        <ul className="flex flex-wrap gap-5">
          {
            socials.map((item) => (
              <a className="bg-n-7 hover:bg-n-6 flex h-10 items-center justify-center rounded-full transition-colors w-10" href={item.url} key={item.id}>
                <img src={item.iconUrl} alt={item.title} height={16} width={16} />
              </a>
            ))
          }
        </ul>
      </div>
    </Section>
  )
}

export default Footer
