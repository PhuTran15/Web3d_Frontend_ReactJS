import React, { useState } from "react";
import './menu.css'
import {Link} from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'


function Menu() {
    const [menu3d, setMenu3d] = useState(false)
    return (
        <div>
            <div className="menu3d-button">
                {
                    menu3d ? <RiCloseLine color="#fff" size={27} onClick={() => setMenu3d(false)} />
                            :<RiMenu3Line color='#fff' size={27} onClick={() => setMenu3d(true)} />
                }
            </div>
            { menu3d && (
                <div className="menu-gpt3">
                    <ul>
                        <li style={{"--i":"6"}}>
                            <a href="#">
                                <Link to="/" >Home</Link>
                            </a>
                        </li>
                        <li style={{"--i":"5"}}>
                            <a href="#">
                                <Link to='./register'>Register</Link>
                            </a>
                        </li>
                        <li style={{"--i":"4"}}>
                            <a href="#">
                                <Link to='./category'>Category</Link>
                            </a>
                        </li>
                        <li style={{"--i":"3"}}>
                            <a href="#">
                                <Link to='./model'>Model</Link>
                            </a>
                        </li>
                        <li style={{"--i":"2"}}>
                            <a href="#">
                                <Link to='./about'>AboutMe</Link>
                            </a>
                        </li>
                        {/* <li style={{"--i":"1"}}><a href="#">Contact</a></li> */}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Menu