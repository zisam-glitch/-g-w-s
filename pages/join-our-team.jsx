import Head from "next/head";
import { Fragment, useEffect } from "react";
import Cursor from "../src/layouts/Cursor";
import Preloader from "../src/layouts/Preloader";
import Join from "../src/components/join-our-team";

const Intro = () => {
  useEffect(() => {
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/6192234f6bb0760a4942a6b6/1fkhdjruo";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Grow With Sayed | Join Our Team</title>
      </Head>
      <Preloader />
      <div className="aali_tm_all_wrap" data-magic-cursor="show">
        <div className="aali_tm_intro">
          <div className="short_info">
            <img src="img/logo/dark.png" alt="Intro Image" />
            <h3>Join Our Team</h3>
          </div>
          <span className="intro_line" />
          <span className="intro_line_2" />
          <span className="intro_line_3" />
            <div className="right">
             
              <Join />
          </div>
        </div>
      </div>
      <Cursor />
    </Fragment>
  );
};

export default Intro;
