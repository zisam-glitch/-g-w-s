const Footer = () => {
  return (
    <div className="aali_tm_section">
      <div className="aali_tm_copyright">
        <div className="container">
          <div className="copyright_inner">
            <div className="top">
              <div className="logo">
                <img src="img/logo/logo.png" alt="aali image" />
              </div>
              <div className="social">
                <span>Connect</span>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/FlashGiftZone.BD?mibextid=ZbWKwL">
                      <i className="icon-facebook-1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/grow_with_sayed?igshid=MzRlODBiNWFlZA==">
                      <i className="icon-instagram-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom">
              <div className="left">
                <p>
                  The entirety of this site is protected by copyright ©{" "}
                  {new Date().getFullYear()}{" "}
                  <a className="line_anim" target="_blank" rel="noreferrer">
                    Grow With Sayed
                  </a>{" "}
                </p>
              </div>
              <div className="right left newsss">
                <a href="/join-our-team" className="line_anim">Join Our Team</a>
              </div>
            </div>
            <span
              className="border moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
          </div>
        </div>
        <span className="square moving_effect" data-direction="x" />
      </div>
    </div>
  );
};

export default Footer;
