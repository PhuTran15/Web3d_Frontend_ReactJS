import React from 'react'
import Feature from '../../../components2/feature/Feature'
import './features.css'

const featuresData = [
  {
    title: 'Thiết bị',
    text: 'Nếu không có các mô hình 3D nhỏ được tối ưu hóa, AR sẽ không tồn tại vì điện thoại di động và tai nghe AR không thể xử lý các tệp lớn',
  },
  {
    title: 'Sản phẩm',
    text: 'Vì AR giúp người tiêu dùng hiểu rõ hơn về sản phẩm, nên việc có hình ảnh hấp dẫn được tối ưu hóa phù hợp là điều bắt buộc để bán sản phẩm trực tuyến. ',
  },
  {
    title: 'Thương mại điện tử',
    text: 'Mỗi mili giây bị lãng phí để tải một hình ảnh hoặc mô hình 3D có thể khiến doanh thu bị mất hàng triệu đô la, theo Shopify.',
  },
  {
    title: 'Thống kê thực tế',
    text: '71% người tiêu dùng nói rằng họ sẽ mua sắm thường xuyên hơn nếu sử dụng AR vì AR cho phép đưa ra quyết định mua hàng một cách tự tin.',
  },
];

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
        <div className='gpt3__features-heading'>
          <h1 className='gradient__text'>Tối ưu hóa mô hình 3D là rất quan trọng đối với trải nghiệm AR và 3D dựa trên Web</h1>
          <a href="https://www.softwaretestinghelp.com/what-is-augmented-reality/" target="_blank"><p>Tìm hiểu thêm về công nghệ AR</p></a>
        </div>
        <div className='gpt3__features-container'>
          {featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index} />
          ))}
        </div>
    </div>
  )
}

export default Features