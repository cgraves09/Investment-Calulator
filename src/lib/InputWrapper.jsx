export default function InputWrapper({ children, label }) {
  return (
    <>
      <p id="input">
        <label>{label} </label>
        {children}
      </p>
    </>
  );
}
