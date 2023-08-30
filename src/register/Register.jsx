import React, { useEffect } from "react";
import './register.css'

function Register() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div className="register_parent">
            <div className="register">
                <div className="box">
                    <div className="cover" />
                    <div className="shadow" />
                    <div className="content">
                        <div className="form">
                        <h3 className="logo"><i className="fa-solid fa-key" /></h3>
                        <h2 className="rotate">Sign in</h2>
                        <div className="inputBox">
                            <input type="text" required />
                            <i className="fa-solid fa-user" />
                            <span>Tài khoản</span>
                        </div>
                        <div className="inputBox">
                            <input type="password" required />
                            <i className="fa-solid fa-lock" />
                            <span>Mật khẩu</span>
                        </div>
                        <div className="links">
                            <a href="#"><i className="fa-solid fa-question" /> Quên mật khẩu</a>
                            <a href="#"><i className="fa-solid fa-user-plus" /> Đăng ký</a>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value='Đăng nhập' defaultValue="Login" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register