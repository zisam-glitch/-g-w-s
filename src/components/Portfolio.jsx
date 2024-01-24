import React, { useEffect, useState } from 'react';
import * as contentful from 'contentful';
import Slide from "./slide"
import Tab from "./tabs/Tabs";
import TabsPanel from "./tabs/TabsPanel";
import ContentCreation from "./ContentCreation"
import InstagramGrowth from "./InstagramGrowth"
// import Tabcrs from "./tabcars"
const Portfolo = () => {
  return (
    <div className="Aspp">
      {/* <h3 className="sub-title">Selected works</h3> */}
      <h1 className="titles">Selected Works</h1>
      <TabsPanel>
        
        <Tab title="Website">
          <Slide />
          {/* <Tabcrs /> */}
        </Tab>
        <Tab title="Content Creation ">
     
          <ContentCreation/>
        </Tab>
        <Tab title="Instagram Growth">
        <InstagramGrowth/>
        </Tab>
        <Tab title="Reels Editing">
          <div className="tabcard">
            <ul>
              <li>
                <div className="cardtab">
                  <a  >
                    <video
                      loop
                      muted
                      autoplay="autoplay"
                      src="https://res.cloudinary.com/db1i46uiv/video/upload/c_scale,q_50,w_400/v1693074728/2.3_zopah7.mp4"
                    ></video>
                  </a>
                </div>
              </li>
              <li>
                <div className="cardtab">
                  <a  >
                    <video
                      loop
                      muted
                      autoplay="autoplay"
                      src="https://res.cloudinary.com/db1i46uiv/video/upload/c_scale,q_50,w_400/v1693074750/2.0_ucfpfi.mov"
                    ></video>
                  </a>
                </div>
              </li>

              <li>
                <div className="cardtab">
                  <a  >
                    <video
                      loop
                      muted
                      autoplay="autoplay"
                      src="https://res.cloudinary.com/db1i46uiv/video/upload/c_scale,q_50,w_400/v1693074760/2.1_jev0ox.mp4"
                    ></video>
                  </a>
                </div>
              </li>
              {/* <li>
                <div className="cardtab">
                  <a  >
                    <video
                      loop
                      muted
                      autoplay="autoplay"
                      src="img/portfolio/2.2.mp4"
                    ></video>
                  </a>
                </div>
              </li> */}
            </ul>
          </div>
        </Tab>
      </TabsPanel>
    </div>
  );
};

export default Portfolo;