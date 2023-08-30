import React from 'react';
import possibilityImage from '../../../assets/possibility.png';
import ai from '../../../assets/ai.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={ai} alt="ai" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Tối ưu hóa mô hình 3D</h4>
      <h1 className="gradient__text">Nguyên lý tối ưu hóa <br /> Mô hình 3D</h1>
      <p>Kích thước của mô hình 3D đến từ hai nơi: hình học và kết cấu. Hình học đề cập đến lưới hoặc cấu trúc thực tế của mô hình 3D được tạo thành từ các đa giác. Các họa tiết chỉ đơn giản là những hình ảnh được sử dụng để tạo da cho mô hình 3D.</p>
      <h4>Tối ưu hóa mô hình 3D</h4>
    </div>
  </div>
);

export default Possibility;
