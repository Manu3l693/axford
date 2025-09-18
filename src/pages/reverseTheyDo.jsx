import React from 'react';
import './reverseTheyDo.css';

function ReverseTheyDo(props){
    const image = props.image;
    const header = props.header;
    const member = props.member
    const theyDo = props.theyDo;
    const audit = props.audit;
    const keyy = props.keyy;
    const conducted = props.conducted;
    const headOf = props.headOf;
    const lee = props.lee;


    return(
        <div>
            <div className="first_people">
                <div className="first_people_1">
                    <div className="people_content_box1">
                    <div className="people_content_11">
                        <div className="they_do">
                            <h3>{theyDo}</h3>
                        </div>

                        <div className="audit">
                            <p>{audit}</p>
                        </div>

                        <div className="key_achievement">
                            <h3>{keyy}</h3>
                        </div>

                        <div className="conducted">
                            <p>{conducted}</p>
                        </div>

                        <div className="head_f_department">
                            <h3>{headOf}</h3>
                        </div>

                        <div className="david_lee">
                            <p>{lee}</p>
                        </div>
                    </div>
                    </div>

                    <div className="people_img_box">
                        <div className="people_img_box_1">
                            <div className="people_img">
                                <img src={image} alt="" />
                            </div>
                            <div className="people_name">
                                <div className="people_name_1">
                                    <h2>{header}</h2>

                                    <div className="members">
                                        <div className="member-dot"></div>
                                        <p>{member}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReverseTheyDo