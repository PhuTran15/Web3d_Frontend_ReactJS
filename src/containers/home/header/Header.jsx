import React from 'react';
import people from '../../../assets/people.png';
import ai from '../../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className='gradient__text'>3D Model</h1>
      <div className="smoke">
        <span style={{"--im": "2"}} />
        <span style={{"--im": "8"}} />
        <span style={{"--im": "6"}} />
        <span style={{"--im": "1"}} />
        <span style={{"--im": "3"}} />
        <span style={{"--im": "9"}} />
        <span style={{"--im": "10"}} />
        <span style={{"--im": "5"}} />
        <span style={{"--im": "7"}} />
        <span style={{"--im": "4"}} />
        <span style={{"--im": "7"}} />
        <span style={{"--im": "8"}} />
        <span style={{"--im": "11"}} />
      </div>
      <p>Là các mô hình 3D dùng để mô phỏng một đối tượng vật lý cụ thể nào đó. Nó được sử dụng trong nhiều phương tiện khác nhau, bao gồm trò chơi điện tử, điện ảnh, kiến trúc, kỹ thuật, quảng cáo.</p>
      <p>Là một cái nhìn tổng thể nhất giúp người khác hay là khách hàng nắm rõ được cái họ cần, họ sẽ biết rõ được kết cấu và hình dáng của nó qua thông qua một mô hình 3d, là cách thức để truyền đạt ý tưởng nổi bật hơn bất kì phương thức nào khác</p>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="123@gmail.com" />
        <div className='light-button'>
          <button type="button">Get<br/>Started</button>
        </div>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>Hơn 1,600 người quan tâm đến công nghệ 3D mỗi giờ</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <div className="first">
        <div className="cube">
          <div className="top" />
          <div>
            <span style={{"--i":"0"}} />
            <span style={{"--i":"1"}} />
            <span style={{"--i":"2"}} />
            <span style={{"--i":"3"}} />
          </div>
        </div>
        <div className="cube2">
          <div className="springs">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
