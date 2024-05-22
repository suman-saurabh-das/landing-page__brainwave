import React from 'react';
import Tagline from './Tagline';

const Heading = ({className, title, text, tag}) => {
  return (
    <div className={`mb-12 lg:mb-20 mx-auto md:text-center max-w-[50rem] ${className}`}>
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  )
}

export default Heading;
