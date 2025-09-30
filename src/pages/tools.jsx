import React from 'react'
import './tools.css'
import {Link} from 'react-router-dom'

function Tools(props) {
    const img1 = props.img1
    const img2 = props.img2
    const img3 = props.img3
    const img4 = props.img4
    const img5 = props.img5

    const h1 = props.h1
    const h2 = props.h2
    const h3 = props.h3
    const h4 = props.h4
    const h5 = props.h5

    const p1 = props.p1
    const p2 = props.p2
    const p3 = props.p3
    const p4 = props.p4
    const p5 = props.p5

    const l1 = props.l1
    const l2 = props.l2
    const l3 = props.l3
    const l4 = props.l4
    const l5 = props.l5
  return (
    <div>
      <div className="tools_row">
        <div className="tools_container">
            <div className="tools_1">
                <div className="tool-img">
                    <img src={img1} alt="tool_img" />
                </div>

                <div className="tool_text">
                    <h3>{h1}</h3>
                    <p>{p1}</p>
                </div>

                <div className="tool_button">
                    <button><Link>{l1}</Link></button>
                </div>
            </div>

            <div className="tools_1">
                <div className="tool-img">
                    <img src={img2} alt="tool_img" />
                </div>

                <div className="tool_text">
                    <h3>{h2}</h3>
                    <p>{p2}</p>
                </div>

                <div className="tool_button">
                    <button><Link>{l2}</Link></button>
                </div>
            </div>

            <div className="tools_1">
                <div className="tool-img">
                    <img src={img3} alt="tool_img" />
                </div>

                <div className="tool_text">
                    <h3>{h3}</h3>
                    <p>{p3}</p>
                </div>

                <div className="tool_button">
                    <button><Link>{l3}</Link></button>
                </div>
            </div>

            <div className="tools_1">
                <div className="tool-img">
                    <img src={img4} alt="tool_img" />
                </div>

                <div className="tool_text">
                    <h3>{h4}</h3>
                    <p>{p4}</p>
                </div>

                <div className="tool_button">
                    <button><Link>{l4}</Link></button>
                </div>
            </div>

            <div className="tools_1">
                <div className="tool-img">
                    <img src={img5} alt="tool_img" />
                </div>

                <div className="tool_text">
                    <h3>{h5}</h3>
                    <p>{p5}</p>
                </div>

                <div className="tool_button">
                    <button><Link>{l5}</Link></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Tools
