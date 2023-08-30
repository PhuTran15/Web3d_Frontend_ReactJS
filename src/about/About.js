
import React, { useState, useEffect } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'
import './about.css'
import logo from '../assets/imageCTU2.png'
import face from '../assets/Myface.jpg'


function About(){

    const [info, setInfo] = useState(true)
    const [edu, setEdu] = useState(false)

    const handleInfo = () => {
        setInfo(true)
        setEdu(false)
    }
    const handleEdu = () => {
        setInfo(false)
        setEdu(true)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <main className='about-container'>
            <section className='menu section'>
                <div className='title'>
                    <h2>About Me</h2>
                    <div className='underline'></div>
                </div>
                <div className="btn-container">
                    <button
                        type="button"
                        className="filter-btn"
                        onClick={handleInfo}
                    >
                        Information
                    </button>
                    <button
                        type="button"
                        className="filter-btn"
                        onClick={handleEdu}
                    >
                        Education
                    </button>
                </div>
                <article className='menu-item'>
                    <img src={face} className='photo' />
                    { info && (
                            <div className="item-info">
                                <header>
                                    <h4>THÔNG TIN</h4>'
                                </header>
                                <p className="item-text"><b>Trần Ngọc Phú</b></p>
                                <p className="item-text">Ngày sinh: 28/10/2000</p>
                                <p className='item-text'>Quê quán: Cà Mau</p>
                                <p className='item-text'>Nghề nghiệp: Sinh viên</p>
                                <p className='item-text'>Sở thích: Nghiên cứu và sáng tạo</p>
                            </div>
                        
                    )}
                    { edu && (
                            <div className="item-info">
                                <header>
                                    <h4>HỌC VẤN</h4>'
                                </header>
                                <p className="item-text"><b>Tốt nghiệp Trường Đại học Cần Thơ</b></p>
                                <p className="item-text">Ngành Khoa học máy tính (Computer Sciences)</p>
                                <p className="item-text">Điểm GPA: 2.83/ 4.00</p>
                                <p className='item-text'>Xếp loại: Khá</p>
                                <p className='item-text'>Khóa 44, Từ 2018 - 2022</p>
                            </div>
                    )}
                </article>
                
            </section>
        </main>
    )
}

export default About;


//       <section className="section about-section">
//         <h1 className="section-title">about me</h1>
//         <p>Họ tên: Trần Ngọc Phú</p>
//         <p>Năm sinh: 28/10/2000</p>
//         <p>Số điện thoại: 0947 28 39 29</p>
//         <p>Quê quán: Phường 6 Thành phố Cà Mau</p>
//         <p>Trường tốt nghiệp: Đại học Cần Thơ</p>
//         <p>Ngành: Khoa học máy tính</p>
//         <p>Loại: Khá</p>
//         <p>Sở thích: Sáng tạo và học hỏi</p>
//         <p>Khuyết điểm: Kĩ năng và kiến thức còn hạn chế</p>
//         <p>Ưu điểm: Thẳng thắn, cần cù, điều gì không biết sẽ nói không biết, những chắc chắn sẽ tìm ra câu trả lời</p>
//       </section>