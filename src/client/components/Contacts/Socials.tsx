const Socials = () => {
  return (
    <div className="socials">
      <div className="socials socials--sub">
        <a
          href="https://t.me/lnn0q"
          target="_blank"
          className="socials__socialsLink"
        >
          <div className="socials__svgContainer">
            <img src="/icons/telegram.svg" />
          </div>
          <div>Telegram</div>
        </a>
        <a
          href="https://www.linkedin.com/in/bohdan-denysenko-49233a23b"
          target="_blank"
          className="socials__socialsLink"
        >
          <div className="socials__svgContainer">
            <img src="/icons/linkedin.svg" />
          </div>
          <div>LinkedIn</div>
        </a>
      </div>
      <a
        href="https://github.com/lnn0q"
        target="_blank"
        className="socials__socialsLink socials__socialsLink--sub"
      >
        <div className="socials__svgContainer">
          <img src="/icons/github.svg" />
        </div>
        <div>GitHub</div>
      </a>
    </div>
  );
};

export default Socials;
