import Button from './Button';

import { pricing } from '../constants'
import { check } from '../assets';

const PricingList = () => {
  return (
    <div className="flex max-lg:flex-wrap gap-[1rem]">
      {
        pricing.map((item) => (
          <div className="bg-n-8 border border-n-6 h-full px-6 even:py-14 odd:py-8 odd:my-4 rounded-[2rem] w-[19rem] max-lg:w-full lg:w-auto [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3" key={item.id}>
            <h4 className="h4 mb-4">{item.title}</h4>
            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{item.description}</p>
            <div className="flex items-center h-[5.5rem] mb-6">
              {
                item.price && (
                  <>
                    <div className="h-3">$</div>
                    <div className="font-bold leading-none text-[5.5rem]">{item.price}</div>
                  </>
                )
              }
            </div>

            <Button
              className="mb-6 w-full"
              href={item.price ? "/pricing" : "mailto:dsumansaurabh@gmail.com"}
              white={!!item.price}
            >
              { item.price ? "Get started" : "Contact us" }
            </Button>

            <ul>
              {item.features.map((feature, index) => (
                <li className="border-t border-n-6 flex items-center py-5" key={index}>
                  <img src={check} alt="Check" height={24} width={24} />
                  <p className="body-2 ml-4">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        ))
      }
    </div>
  )
}

export default PricingList;
