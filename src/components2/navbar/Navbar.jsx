import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/imageCTU2.png'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
        <div className='gpt3__navbar-links'>
            <div className='gpt3__navbar-links_logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='gpt3__navbar-links_container first2'>
                <p><a href='#home'>3D Model</a></p>
                <p><a href='#wgpt3'>Tối ưu hóa ?</a></p>
                <p><a href='#possibility'>Nguyên lý</a></p>
                <p><a href='#features'>Công nghệ AR</a></p>
                <p><a href='#blog'>Tài liệu</a></p>
            </div>
        </div>
        <div className='gpt3__navbar-sign'>
            <div className='test1'>
                <p>3D MODEL</p>
                <p>3D MODEL</p>
            </div>
            <button type='button'>OPTIMIZED</button>
        </div>
        <div className='gpt3__navbar-menu'>
            {
                toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                            :<RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (
                    <div className='gpt3__navbar-menu_container scale-up-center'>
                        <div className='gpt3__navbar-menu_container-links'>
                            <p><a href="#home">3D Model</a></p>
                            <p><a href="#wgpt3">Tối ưu hóa?</a></p>
                            <p><a href="#possibility">Nguyên lý</a></p>
                            <p><a href="#features">Công nghệ AR</a></p>
                            <p><a href="#blog">Tài liệu</a></p>
                        </div>
                        <div className="gpt3__navbar-menu_container-links-sign">
                            <p>3D MODEL</p>
                            <button type="button">OPTIMIZED</button>
                        </div>
                    </div>
                )}
        </div>
    </div>
  )
}

export default Navbar