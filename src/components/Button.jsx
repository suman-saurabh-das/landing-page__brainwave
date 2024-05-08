import ButtonSvg from '../assets/svg/ButtonSvg';

// Button is a reusable component.
// It can export a button or a link based on the href property.
const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button h-11 inline-flex items-center justify-center relative hover:text-color-1 transition-colors ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  // Function to render a button
  const renderButton = () => {
    return (
      <button className={classes} onClick={onClick}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </button>
    )
  };

  // Function to render a link
  const renderLink = () => {
    return (
      <a className={classes} href={href}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </a>
    )
  };

  // Return link if href property exists else return button
  return href ? renderLink() : renderButton();
}

export default Button;
