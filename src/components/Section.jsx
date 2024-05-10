import SectionSvg from '../assets/svg/SectionSvg';

const Section = ({ className, id, crosses, crossesOffset, customPaddings, children }) => {
  return (
    <div id={id} className={
      `relative 
        ${customPaddings || `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`} 
        ${className || ""}
      `
    }
    >
      {children}
      {/* Left side line - only visible for large devices */}
      <div className="hidden md:block absolute top-0 left-5 lg:left-7.5 xl:left-10 bg-stroke-1 pointer-events-none h-full w-0.25" />
      {/* Right side line - only visible for large devices */}
      <div className="hidden md:block absolute top-0 right-5 lg:right-7.5 xl:right-10 bg-stroke-1 pointer-events-none h-full w-0.25" />

      {
        crosses && (
          <>
            <div className={`hidden lg:block absolute top-0 left-7.5 xl:left-10 right-7.5 xl:right-10 bg-stroke-1 h-0.25 pointer-events-none ${crossesOffset && crossesOffset}`}>
            </div>
            <SectionSvg crossesOffset={crossesOffset} />
          </>
        )
      }
    </div>
  )
}

export default Section;
