import React from 'react';
import { companyLogos } from "../constants"

const CompanyLogos = ({className}) => {
  return (
    <div className={className}>
      <h5 className="mb-6 tagline text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {
          companyLogos.map((logo, index) => (
            <li className="flex flex-1 items-center justify-center h-[8.5rem]" key={index}>
              <img alt={logo} src={logo} height={28} width={134} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CompanyLogos
