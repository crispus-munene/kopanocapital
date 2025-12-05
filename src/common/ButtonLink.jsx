function ButtonLink({ href, children, className, target, logo, upperText, lowerText }) {
  return (
    <a
      href={href}
      className={className}
      target={target}
    >
      {children}
    </a>
  );
}

export default ButtonLink;