import { notification1 } from "../assets"
import { notificationImages } from "../constants"

const Notification = ({className, title}) => {
  return (
    <div className={`backdrop-blur bg-n-9/40 border border-n-1/10 flex gap-5 items-center p-4 pr-6 rounded-2xl ${className || ""}`}>
      {/* Notification image 1 */}
      <img alt="notification-image1" className="rounded-xl" src={notification1} height={62} width={62} />
      <div className="flex-1">
        {/* Notification title */}
        <h6 className="font-semibold mb-1 text-base">
          {title}
        </h6>
        {/* Notification image 2,3,4 container */}
        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {
              notificationImages.map((item, index) => (
                <li className="border-2 border-n-12 flex h-6 overflow-hidden rounded-full w-6" key={index}>
                  <img alt={item} src={item} height={20} width={20} />
                </li>
              ))
            }
          </ul>
          <div className="body-2 text-n-13">
            1m ago
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification
