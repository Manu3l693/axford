import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import{Navigation, EffectFade} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './firstCarousel.css';
import depimg1 from './img/57a04980f71b6b291e6b0514bc47e9731a5d9cd5.jpg';
import depimg2 from './img/482e20df1bb0658ba020189b8df31d4f0f9ffccc.jpg'
import depimg3 from './img/f742ea37743b135adcb8c0f9266611a852dab322.jpg'
import depimg4 from './img/19553ff4ed93d1cb21ed4988c3104951694f4359.jpg'


function FirstCarousel() {
  return (
    <div className='firstCarousel'>
      <Swiper
      modules={[Navigation, EffectFade]}
      navigation = {{
        nextEl: '.next-nav',
        prevEl: '.prev-nav',
      }}
      slidesPerView={1}
      effect
      loop={false}>


        <SwiperSlide>
            <div className="department">
                <div className="department-header">
                    <h2>Departments</h2>
                </div>

                <div className="department-people">
                    <div className="deparment_people_1">
                        <div className="deprtmnt">
                            <div className="finance-dprt">
                                <h3>Finance & Accounting</h3>
                            </div>
                        </div>

                        <div className="deprtmnt-ppl">
                            <div className="deprtmnt-ppl-1">
                                <div className="deprtmnt_ppl_1">
                                <div className="profile_pic">
                                    <div className="profile-img-11">
                                        <div className="profile-img">
                                            <img src={depimg1} alt="" />
                                        </div>
                                    </div>

                                    <div className="profile-for-head">
                                        <div className="profile_head">
                                            <button type="button">Head of Department</button>
                                            <h3>Michael Lee</h3>
                                            <p>Financial Officer</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="profile_text">
                                    <div className="profile_text_1">
                                        <p>This department is responsible for managing the company's financial operations, including budgeting, financial reporting, and compliance with regulatory requirements. They ensure the financial health of the company by maintaining accurate financial records, analyzing financial data, and developing strategic financial plans.</p>
                                    </div>

                                    <div className="profile_text_below">
                                        <div className="green-dot">
                                            <div className="green_dot_1"></div>
                                        </div>

                                        <div className="green_dot_content">
                                            <p>Successfully managed over $1 billion in financial transactions, maintaining impeccable accuracy and compliance.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="department">
                <div className="department-header">
                    <h2>Departments</h2>
                </div>

                <div className="department-people">
                    <div className="deparment_people_1">
                        <div className="deprtmnt">
                            <div className="finance-dprt">
                                <h3>Marketing & Sales</h3>
                            </div>
                        </div>

                        <div className="deprtmnt-ppl">
                            <div className="deprtmnt-ppl-1">
                                <div className="deprtmnt_ppl_1">
                                <div className="profile_pic">
                                    <div className="profile-img-11">
                                        <div className="profile-img">
                                            <img src={depimg2} alt="" />
                                        </div>
                                    </div>

                                    <div className="profile-for-head">
                                        <div className="profile_head">
                                            <button type="button">Head of Department</button>
                                            <h3>Sarah Johnson</h3>
                                            <p>Marketing Officer</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="profile_text">
                                    <div className="profile_text_1">
                                        <p>This department drives the company's market strategies, brand management, and customer outreach. They are responsible for increasing brand awareness, generating leads, and converting those leads into sales. This department plays a crucial role in promoting the company's products and services.</p>
                                    </div>

                                    <div className="profile_text_below">
                                        <div className="green-dot">
                                            <div className="green_dot_1"></div>
                                        </div>

                                        <div className="green_dot_content">
                                            <p>Increased annual revenue by 50% through innovative marketing strategies and exceptional sales performance.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="department">
                <div className="department-header">
                    <h2>Departments</h2>
                </div>

                <div className="department-people">
                    <div className="deparment_people_1">
                        <div className="deprtmnt">
                            <div className="finance-dprt">
                                <h3>Human Resources</h3>
                            </div>
                        </div>

                        <div className="deprtmnt-ppl">
                            <div className="deprtmnt-ppl-1">
                                <div className="deprtmnt_ppl_1">
                                <div className="profile_pic">
                                    <div className="profile-img-11">
                                        <div className="profile-img">
                                            <img src={depimg3} alt="" />
                                        </div>
                                    </div>

                                    <div className="profile-for-head">
                                        <div className="profile_head">
                                            <button type="button">Head of Department</button>
                                            <h3>Layla Baker</h3>
                                            <p>Human Resources Officer</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="profile_text">
                                    <div className="profile_text_1">
                                        <p>Human Resources (HR) focuses on recruitment, employee relations, and organizational development. They are responsible for hiring the right talent, managing employee benefits, ensuring compliance with labor laws, and fostering a positive workplace culture.</p>
                                    </div>

                                    <div className="profile_text_below">
                                        <div className="green-dot">
                                            <div className="green_dot_1"></div>
                                        </div>

                                        <div className="green_dot_content">
                                            <p>Achieved a 95% employee retention rate by fostering a supportive and engaging workplace environment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="department">
                <div className="department-header">
                    <h2>Departments</h2>
                </div>

                <div className="department-people">
                    <div className="deparment_people_1">
                        <div className="deprtmnt">
                            <div className="finance-dprt">
                                <h3>Research & Development</h3>
                            </div>
                        </div>

                        <div className="deprtmnt-ppl">
                            <div className="deprtmnt-ppl-1">
                                <div className="deprtmnt_ppl_1">
                                <div className="profile_pic">
                                    <div className="profile-img-11">
                                        <div className="profile-img">
                                            <img src={depimg4} alt="" />
                                        </div>
                                    </div>

                                    <div className="profile-for-head">
                                        <div className="profile_head">
                                            <button type="button">Head of Department</button>
                                            <h3>David Clark</h3>
                                            <p>Technology Officer</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="profile_text">
                                    <div className="profile_text_1">
                                        <p>This department innovates new products and improves existing services. They focus on developing cutting-edge solutions to meet market demands and stay ahead of the competition. This department is vital for driving the company's technological advancement and product quality.</p>
                                    </div>

                                    <div className="profile_text_below">
                                        <div className="green-dot">
                                            <div className="green_dot_1"></div>
                                        </div>

                                        <div className="green_dot_content">
                                            <p>Developed and launched 20+ groundbreaking products that significantly enhanced our market position.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>

        
        
      </Swiper>

      <div className="custom-nav">
         <div className="custom-na-1">
            <div className="next-nav"></div>
            <div className="prev-nav"></div>
         </div>
      </div>
    </div>
  )
}

export default FirstCarousel
