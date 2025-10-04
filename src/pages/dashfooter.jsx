import React from 'react'
import './dashfooter.css';
import footrimg1 from '../img/phone-call-phone-call-mobile-telephone 1.svg'
import footrimg2 from '../img/message 1.svg'
import footrimg3 from '../img/plus.svg';
import cancelImg from '../img/x.svg';
import forumimg1 from '../img/53e237615ff61d28221844d5f1a5a725bc4b9439.png'
import forumimg2 from '../img/e3e1981175fe6f2f75ffbfb2ff28f9f16dec7fae.png'
import forumimg3 from '../img/d1f28f14415e523e56a70409e3b78eec5c7bd363.png'

function DashFooter() {

    const discussion1 = function(){
        const discussion = document.querySelector('#discussion');

        if(discussion.classList.contains('hidden')){
            discussion.classList.remove('hidden')
        }else{
            discussion.classList.add('hidden')
        }
    }

    const cancelIcon = () =>{
        const discussion = document.querySelector('#discussion');

        if(!discussion.classList.contains('hidden')){
            discussion.classList.add('hidden')
        }
    }



  return (
    <div>
        <div className='dashfooter'>
            <div className="dashfooter_1">
                <div className="ball1" onClick={discussion1}>
                    <img src={footrimg1} alt="" />
                </div>
                <div className="ball2">
                    <img src={footrimg2} alt="" />
                </div>

                <div className="ball3" onClick={cancelIcon}>
                    <img src={footrimg3} alt="" />
                </div>
            </div>
        </div>

        <div className="discussion hidden" id='discussion'>
            <div className="discussion_1">
                <div className="discuss_forum">
                    <div className="forum_texts">
                        <div className="forum_text_1">
                            <h3>Discussion Forum</h3>
                            <p>We encourage all employees to actively participate and communicate with their colleagues on Slack and WhatsApp.</p>
                        </div>
                    </div>

                    <div className="forum_cancel">
                        <div className="cancel_icon" onClick={discussion1}>
                            <img src={cancelImg} alt="" />
                        </div>
                    </div>
                </div>

                <div className="discuss_forum_img">
                    <div className="forum_img_1">
                        <div className="forumImg">
                            <img src={forumimg1} alt="" />
                        </div>

                        <div className="forumImg">
                            <img src={forumimg2} alt="" />
                        </div>

                        <div className="forumImg">
                            <img src={forumimg3} alt="" />
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashFooter
