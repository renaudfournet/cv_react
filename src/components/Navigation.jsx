import "../index.css";
import { Button } from "reactstrap";

function Navigation() {
  const styleButton = {
      backgroundColor: "#2A26F0",
      display: "flex",
      margin: 20,
      fontSize: 12,
    },
    styleName = {
      color: "#2A26F0",
      display: "flex",
      margin: 20,
      fontSize: 12,
    },
    styleNav = {
      display: "flex",
      justifyContent: "space-between",
    };

  return (
    <div style={styleNav}>
      <h4 style={(styleNav, styleName)}>RENAUD FOURNET.</h4>
      <Button style={(styleNav, styleButton)}>ME CONTACTER</Button>
    </div>
  );
}

export default Navigation;
