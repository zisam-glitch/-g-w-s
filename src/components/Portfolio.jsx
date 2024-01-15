import React, { useEffect, useState } from 'react';
import * as contentful from 'contentful';
import Slide from "./slide"
import Tab from "./tabs/Tabs";
import TabsPanel from "./tabs/TabsPanel";
const Portfolo = () => {
  return (
    <div className="Aspp">
      {/* <h3 className="sub-title">Selected works</h3> */}
      <h1 className="titles">Selected Works</h1>
      <TabsPanel>
        
        <Tab title="Website">
          <Slide />
        </Tab>
        <Tab title="Content Creation ">
          <div className="tabcard">
            <ul>
              <li>
                <div className="cardtab">
                  <a  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_400/v1693074712/5.1_yafdd4.jpg" alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="cardtab">
                  <a  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_400/v1693074709/5.2_ebqzgn.jpg" alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="cardtab">
                  <a  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_400/v1693074712/5.3_ovt9ks.jpg" alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="cardtab">
                  <a  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_400/v1693074712/5.4_baetp1.jpg" alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="cardtab">
                  <a  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_400/v1693074715/5.5_vvcmjd.jpg" alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="cardtab">
                  <a  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_400/v1693074715/5.6_mluajn.jpg" alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="cardtab">
                  <a  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_400/v1693074719/5.7_ukfamf.jpg" alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="cardtab">
                  <a  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_400/v1693074735/5.16_pe3j3u.jpg" alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="cardtab">
                  <a  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_400/v1693074721/5.9_qpkx4f.jpg" alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="cardtab">
                  <a  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_400/v1693074726/5.10_d4nlwj.jpg" alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="cardtab">
                  <a  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_400/v1693074722/5.11_q9czdx.jpg" alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="cardtab">
                  <a  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_400/v1693074729/5.12_ykwtcz.jpg" alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="cardtab">
                  <a  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_400/v1693074730/5.13_vn1e8f.jpg" alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="cardtab">
                  <a  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_400/v1693074729/5.14_hvknge.jpg" alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="cardtab">
                  <a  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_400/v1693074733/5.15_hqpi2p.jpg" alt="" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </Tab>
        <Tab title="Instagram Growth">
          <div className="tabcard">
            <ul>
              <li>
                <div className="cardtab">
                  <a  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_400/v1693074707/1.06_l3vktu.jpg" alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="cardtab">
                  <a  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_400/v1693074700/1.05_l1liju.jpg" alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="cardtab">
                  <a  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_400/v1693074703/1.07_gm1v2l.jpg" alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="cardtab">
                  <a  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_400/v1693074697/1.04_c2kmwu.jpg" alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="cardtab">
                  <a  >
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_400/v1693074696/1.02_hteqrk.jpg" alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="cardtab">
                  <a>
                    <img src="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_4000/v1693074696/1.03_hsjctb.jpg" alt="" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
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