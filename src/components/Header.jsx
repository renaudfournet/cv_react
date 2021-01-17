import styled from 'styled-components'

function Header() {
  const styleName = {
      color: "#2A26F0",
      fontSize: 40,
    },
    styleBonjour = {
      fontSize: 40,
      margin: 50,
    },
    header = {
      marginTop: 100,
    },
    verticalLine = {
      borderLeft: "solid",
      height: 164,
      left: 50,
      marginLeft: "50%",
      color: "#2A26F0",
      marginTop: 30,
      marginBottom: 30,
    },
    presentation = {
      color: "#2A26F0",
    };
  return (
    <div style={header}>
      <h3>
        <div>
          <span style={styleBonjour}>BONJOUR,</span>
        </div>
        <br /> JE SUIS <br />
        <span style={styleName}>RENAUD FOURNET.</span>
      </h3>
      <div style={verticalLine}></div>
      <StyledFontWeight>
      <p style={presentation}>Développeur web Javascript junior</p>
      </StyledFontWeight>
    </div>
  );
}

const StyledFontWeight = styled.p`
p {
  font-weight: 300,
}
`

export default Header;
