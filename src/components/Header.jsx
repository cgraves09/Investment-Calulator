export default function Header({ logo, title }) {
  return (
    <div id="header">
      <img src={logo} alt="money bags" />
      <h1> {title} </h1>
    </div>
  );
}
