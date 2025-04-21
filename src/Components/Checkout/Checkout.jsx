import React, { useRef } from "react";
import "./Checkout.css";
import checkoutimg1 from "../../assets/checkoutimg1.png";
import checkoutimg2 from "../../assets/checkoutimg2.png";
import checkoutimg3 from "../../assets/checkoutimg3.png";
import checkoutstar from "../../assets/checkoutstar.png";
import checkoutline from "../../assets/checkoutline.png";

const Checkout = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="checkout">
      <img className="checkoutline" src={checkoutline} alt="" />
      <h1 className="checkouth1">
        Check Out{" "}
        <span className="hidden">
          <br />
        </span>{" "}
        Recent Review
      </h1>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="checkoutdiv1">
                <div className="checkoutdiv1div1">
                  <img className="checkoutimg1" src={checkoutimg1} alt="" />
                  <div className="checkoutdiv1div">
                    <h2 className="checkoutdiv1h2">James Conway</h2>
                    <p className="checkoutdiv1p">Developer</p>
                  </div>
                </div>
                <div className="checkoutall1">
                  <h3 className="checkoutdiv1h3">Awesome Work!!</h3>
                  <p className="checkoutdiv1p">
                    This is unbelievable. He is too fast and
                    <span className="hidden">
                      <br />
                    </span>
                    he work with details. I will hire him
                    <span className="hidden">
                      <br />
                    </span>
                    again.
                  </p>
                  <img className="star" src={checkoutstar} alt="" />
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="checkoutdiv2">
                <div className="checkoutdiv2div2">
                  <img className="checkoutimg2" src={checkoutimg2} alt="" />
                  <div className="checkoutdiv2div">
                    <h2 className="checkoutdiv2h2">Augustine Watkins</h2>
                    <p className="checkoutdiv2p">UX/ UI Designer</p>
                  </div>
                </div>
                <div className="checkoutall1">
                  <h3 className="checkoutdiv2h3">Awesome UX/ UI designer</h3>
                  <p className="checkoutdiv2p">
                    Augustine is still one of the best i have{" "}
                    <span className="hidden">
                      <br />
                    </span>{" "}
                    had the pleasure of working with. Her{" "}
                    <span className="hidden">
                      <br />
                    </span>{" "}
                    professionalism and detail
                  </p>
                  <img className="star" src={checkoutstar} alt="" />
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="checkoutdiv3">
                <div className="checkoutdiv3div3">
                  <img className="checkoutimg1" src={checkoutimg3} alt="" />
                  <div className="checkoutdiv3div">
                    <h2 className="checkoutdiv3h2">Jorge Mclaughlin</h2>
                    <p className="checkoutdiv3p">Digital Marketer</p>
                  </div>
                </div>
                <div className="checkoutall1">
                  <h3 className="checkoutdiv3h3">Perfection! Went above!</h3>
                  <p className="checkoutdiv3p">
                    Jorge is still one of the best i have{" "}
                    <span className="hidden">
                      <br />
                    </span>{" "}
                    had the pleasure of working with. Him{" "}
                    <span className="hidden">
                      <br />
                    </span>{" "}
                    professionalism and detail
                  </p>
                  <img className="star" src={checkoutstar} alt="" />
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="checkoutdiv3">
                <div className="checkoutdiv3div3">
                  <img className="checkoutimg1" src={checkoutimg3} alt="" />
                  <div className="checkoutdiv3div">
                    <h2 className="checkoutdiv3h2">Jorge Mclaughlin</h2>
                    <p className="checkoutdiv3p">Digital Marketer</p>
                  </div>
                </div>
                <div className="checkoutall1">
                  <h3 className="checkoutdiv3h3">Perfection! Went above!</h3>
                  <p className="checkoutdiv3p">
                    Jorge is still one of the best i have{" "}
                    <span className="hidden">
                      <br />
                    </span>{" "}
                    had the pleasure of working with. Him{" "}
                    <span className="hidden">
                      <br />
                    </span>{" "}
                    professionalism and detail
                  </p>
                  <img className="star" src={checkoutstar} alt="" />
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="checkoutdiv3">
                <div className="checkoutdiv3div3">
                  <img className="checkoutimg1" src={checkoutimg3} alt="" />
                  <div className="checkoutdiv3div">
                    <h2 className="checkoutdiv3h2">Jorge Mclaughlin</h2>
                    <p className="checkoutdiv3p">Digital Marketer</p>
                  </div>
                </div>
                <div className="checkoutall1">
                  <h3 className="checkoutdiv3h3">Perfection! Went above!</h3>
                  <p className="checkoutdiv3p">
                    Jorge is still one of the best i have{" "}
                    <span className="hidden">
                      <br />
                    </span>{" "}
                    had the pleasure of working with. Him{" "}
                    <span className="hidden">
                      <br />
                    </span>{" "}
                    professionalism and detail
                  </p>
                  <img className="star" src={checkoutstar} alt="" />
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="checkoutdiv3">
                <div className="checkoutdiv3div3">
                  <img className="checkoutimg1" src={checkoutimg3} alt="" />
                  <div className="checkoutdiv3div">
                    <h2 className="checkoutdiv3h2">Jorge Mclaughlin</h2>
                    <p className="checkoutdiv3p">Digital Marketer</p>
                  </div>
                </div>
                <div className="checkoutall1">
                  <h3 className="checkoutdiv3h3">Perfection! Went above!</h3>
                  <p className="checkoutdiv3p">
                    Jorge is still one of the best i have{" "}
                    <span className="hidden">
                      <br />
                    </span>{" "}
                    had the pleasure of working with. Him{" "}
                    <span className="hidden">
                      <br />
                    </span>{" "}
                    professionalism and detail
                  </p>
                  <img className="star" src={checkoutstar} alt="" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="image-all">
        <button className="forward" onClick={slideForward}></button>
        <button className="backward" onClick={slideBackward}></button>
      </div>
    </div>
    // <div className="checkout container">
    //   <h1 className="checkouth1">
    //     Check Out{" "}
    //     <span className="hidden">
    //       <br />
    //     </span>{" "}
    //     Recent Review
    //   </h1>
    //   <div className="allovercheckout">
    //     <div className="checkoutdiv1">
    //       <div className="checkoutdiv1div1">
    //         <img className="checkoutimg1" src={checkoutimg1} alt="" />
    //         <div className="checkoutdiv1div">
    //           <h2 className="checkoutdiv1h2">James Conway</h2>
    //           <p className="checkoutdiv1p">Developer</p>
    //         </div>
    //       </div>
    //       <div className="checkoutall1">
    //         <h3 className="checkoutdiv1h3">Awesome Work!!</h3>
    //         <p className="checkoutdiv1p">
    //           This is unbelievable. He is too fast and
    //           <span className="hidden">
    //             <br />
    //           </span>
    //           he work with details. I will hire him
    //           <span className="hidden">
    //             <br />
    //           </span>
    //           again.
    //         </p>
    //         <img className="star" src={checkoutstar} alt="" />
    //       </div>
    //     </div>
    //     <div className="checkoutdiv2">
    //       <div className="checkoutdiv2div2">
    //         <img className="checkoutimg2" src={checkoutimg2} alt="" />
    //         <div className="checkoutdiv2div">
    //           <h2 className="checkoutdiv2h2">Augustine Watkins</h2>
    //           <p className="checkoutdiv2p">UX/ UI Designer</p>
    //         </div>
    //       </div>
    //       <div className="checkoutall1">
    //         <h3 className="checkoutdiv2h3">Awesome UX/ UI designer</h3>
    //         <p className="checkoutdiv2p">
    //           Augustine is still one of the best i have{" "}
    //           <span className="hidden">
    //             <br />
    //           </span>{" "}
    //           had the pleasure of working with. Her{" "}
    //           <span className="hidden">
    //             <br />
    //           </span>{" "}
    //           professionalism and detail
    //         </p>
    //         <img className="star" src={checkoutstar} alt="" />
    //       </div>
    //     </div>
    //     <div className="checkoutdiv3">
    //       <div className="checkoutdiv3div3">
    //         <img className="checkoutimg1" src={checkoutimg3} alt="" />
    //         <div className="checkoutdiv3div">
    //           <h2 className="checkoutdiv3h2">Jorge Mclaughlin</h2>
    //           <p className="checkoutdiv3p">Digital Marketer</p>
    //         </div>
    //       </div>
    //       <div className="checkoutall1">
    //         <h3 className="checkoutdiv3h3">Perfection! Went above!</h3>
    //         <p className="checkoutdiv3p">
    //           Jorge is still one of the best i have{" "}
    //           <span className="hidden">
    //             <br />
    //           </span>{" "}
    //           had the pleasure of working with. Him{" "}
    //           <span className="hidden">
    //             <br />
    //           </span>{" "}
    //           professionalism and detail
    //         </p>
    //         <img className="star" src={checkoutstar} alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Checkout;
