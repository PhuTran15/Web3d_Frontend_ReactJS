import React from 'react';
import './cta.css';

const CTA = () => (
  <div>
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <h3>Tối ưu hóa mô hình 3D bao gồm hai phần: phân rã lưới và nén kết cấu</h3>
        <h4 className='margin'>Phần phân rã lưới của tối ưu hóa 3D loại bỏ hoặc kết hợp các đa giác để giảm tổng số đa giác. Điều này làm giảm kích thước tệp tổng thể và yêu cầu ít GPU hơn để hiển thị.</h4>
        <br/>
        <h4>Tối ưu hóa kết cấu có hai phần. Đầu tiên, các kết cấu được thay đổi kích thước để điều chỉnh kích thước của hình ảnh dựa trên lượng không gian mà chúng chiếm. Thông thường, các kết cấu lớn hơn nhiều so với mức cần thiết.</h4>
      </div>
      <div className="gpt3__cta-btn">
        <a href="https://www.graphics.rwth-aachen.de/media/papers/mingle1.pdf" target="_blank"><button type='button'>Tìm hiểu</button></a>
      </div>
    </div>
  </div>

);

export default CTA;
