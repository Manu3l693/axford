import { Link } from "react-router-dom";
import './Home.css'

export default function LandingPage(){
    return( 
        <div className="landing_page">
          <div className="landing_page_1">
            <div className="axford_nav">
              <div className="color_dot"></div>
              <h3>Axford & Co.</h3>
            </div>

            <div className="empowering_1">
              <div className="empowering">
                <div className="empowering_future">
                  <div className="empowering_future_1">

                    <div className="empowering_texts_1">
                      <div className="texts_empowering">
                        <h3>Empowering Your Financial Future</h3>
                        <p>We are dedicated to helping our clients achieve financial clarity and success.</p>
                      </div>
                    </div>

                    <div className="empowering_texts_buttons">
                      <div className="button_texts">
                        <p>We have a rich history of accolades in finance and accounting, complemented by our status as a registered CPA firm, recognized worldwide for excellence.</p>
                      </div>

                      <div className="button_button">
                        <button type="button"><Link to="/signup">Get in </Link><div className="arrow_up"></div></button>
                      </div>
                    </div>

                    <div className="bunch_of_containers">
                      <div className="bunch_cont1">
                        <div className="cont1_texts">
                          <h3>Tax Preparation & Planning</h3>
                          <p>Saved over $10M in taxes.</p>
                        </div>
                      </div>

                      <div className="bunch_cont1">
                        <div className="cont1_texts">
                          <h3>Estate & Trust Planning</h3>
                          <p>Secured $50M+ in assets.</p>
                        </div>
                      </div>

                      <div className="bunch_cont1">
                        <div className="cont1_texts">
                          <h3>Mergers & Acquisitions</h3>
                          <p>Facilitated $20M+ in deals.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="empowering_image">
                  <div className="empowering_image_1">
                    <div className="image_section_1">

                      <div className="axford_image">
                        <div className="axford_image_1">
                          <div className="image_background"></div>
                        <div className="original_image"></div>
                        </div>
                      </div>


                      <div className="colors_1">
                        <div className="white__">
                          <div className="white__1">
                            <div className="white_f"></div>
                          </div>
                        </div>

                        <div className="long_fff">
                          <div className="long_f"></div>
                        </div>

                        <div className="red__">
                          <div className="red__1"></div>
                        </div>

                        <div className="blue__">
                          <div className="blue__1"></div>
                        </div>

                        <div className="green__">
                          <div className="green__1"></div>
                        </div>
                      </div>
                    </div>

                    <div className="image_section_2">
                      <div className="section_images_2">
                        <div className="subscribe">
                          <div className="subscribe_1">
                            <div className="subnum">
                              <h3>1.2k</h3>
                            </div>

                            <div className="sub_img">
                              <div className="sub_img_1">
                                <div className="image__1"></div>
                                <div className="image__2"></div>
                                <div className="image__3"></div>
                                <div className="image__4"></div>
                              </div>
                            </div>
                          </div>

                          <div className="managed">
                            <div className="managed_dot"></div>
                            <p>Managed potential clients worldwide</p>
                          </div>
                        </div>

                        
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};