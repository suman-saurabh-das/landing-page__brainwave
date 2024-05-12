const Heading = ({className, title}) => {
  return (
    <div className={`mb-12 lg:mb-20 mx-auto max-w-[50rem] ${className}`}>
      {title && <h2 className="h2">{title}</h2>}
    </div>
  )
}

export default Heading;
