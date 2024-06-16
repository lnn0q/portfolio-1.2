import "./styles/Header.css";
const Header = () => {
  return (
    <header>
      <div className="header__previewBox">
        <img src="/images/background.jpg" className="header__img" />
        <div className="header__labelModal">
          <div className="header__labelTyped">
            <div className="header__textTypewriter">Hi!</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
