import { Link } from "react-router-dom";
import './Home.css'

export default function LandingPage(){
    return(
        
        <div className="first_slide_page">
          <div className="first_page_slide">
            <div className="top-text">
            <div className="dot"></div>
            <h3>Axford & Co.</h3>
            </div>

           <div className="landing_f_f">
           <div className="landing_f_f_1">
             <div className="first-container">
                <div className="empowering_f">
                    <h2>Empowering Your Financial Future</h2>
                    <p>We are dedicated to helping our clients achieve financial clarity and success</p>
                </div>

                <div className="text_button">
                  <div className="texts">
                    <p>We have a rich history of accolades in finance and accounting, complemented by our status as a registered CPA firm, recognized worldwide for excellence.</p>
                  </div>

                 <button className='get_in'><Link className="Get-In" to={"/signup"}>Get in</Link><div className="arrow"></div></button>
                </div>

                <div className="planning_div">
                  <div className="planning_div_1">
                    <div className="tax_p">
                      <h3>Tax Preparation & Planning</h3>
                      <p>Saved over $10M in taxes.</p>
                    </div>

                    <div className="tax_p">
                      <h3>Estate & Trust Planning</h3>
                      <p>Secured $50M+ in assets.</p>
                    </div>

                    <div className="tax_p">
                      <h3>Mergers & Acquisitions</h3>
                      <p>Facilitated $20M+ in deals.</p>
                    </div>
                  </div>
                </div>
             </div>

             <div className="second_container_1">
                 <div className="second-container">
                    <div className="victoy_image">
                    <div className="gradient_image"></div>
                    <div className="man_image_1"></div>
                  </div>

                  <div className="line_color">
                    <div className="whitee_1">
                      <div className="fff_1"></div>
                    </div>
                    <div className="straight_linee">
                      <div className="linee__"></div>
                    </div>
                    <div className="primary_color">
                      <div className="red__"></div>
                      <div className="blue__"></div>
                      <div className="green__"></div>
                    </div>
                  </div>
                 </div>

                 <div className="beloww_1">
                  <div className="beloww_sub">
                    <div className="sub_1">
                      <h1>1.2k</h1>
                    </div>

                    <div className="ppl_img">
                      <div className="ppl_img_">
                        <div className="ppl_img_1"></div>
                        <div className="ppl_img_2"></div>
                        <div className="ppl_img_3"></div>
                        <div className="ppl_img_4"></div>
                      </div>
                    </div>
                  </div>

                  <div className="manage_1">
                        <div className="bluee_1"></div>
                        <p>Managed potential clients worldwide</p>
                  </div>
                 </div>
             </div>

            </div>
           </div>
          </div>
        </div>

        
    );
};