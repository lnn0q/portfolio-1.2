import "./styles/Footer.css";
const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer>
      <hr />
      {/* <div className="footer__label"> */}
      {/*   &#xf1f9; {2024 !== year ? "2024 - " + year : "2024"} */}
      {/* </div> */}
    </footer>
  );
};

export default Footer;
