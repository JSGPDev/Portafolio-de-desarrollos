const ControlButtonComponent = ({ isShowed, text, className, action }) => {
  const classComputed = `${className} ${isShowed ? "list-Selected" : "list"}`;
  return (
    <p className={classComputed} onClick={action}>
      {text}
    </p>
  );
};

export default ControlButtonComponent;
