import React, { useEffect } from "react";
import './model3d.css';

function Model3d(){
    useEffect(() => {
      window.scrollTo(0, 0)
    })
    return(
        <div>
        <div className="inter">
          <h2>Welcome to CanTho University</h2>
          <h2>COLLEGE OF INFORMATION &amp; COMMUNICATION TECHNOLOGY</h2>
          <hr size="1px" width="50%" />
          <h3 style={{marginTop: '10px', textTransform: 'uppercase', fontWeight: 'bold'}}>3d model</h3>
        </div>
        <h2 className="text">Mô hình trước khi tối ưu</h2>
        <hr size="1px" width="5%" />
        <div className="present">
          <model-viewer src="version_old.glb" alt="VR Headset" auto-rotate camera-controls ar ios-src="../src/assets/scene2.glb" />
          <div className="detail">
            <h2>Thống kê chi tiết mô hình</h2>
            <br />
            <h3>Số lượng mặt phẳng: 795.341</h3>
            <h3>Số lượng đỉnh: 453.911</h3>
            <h3>Số lượng đường thẳng: 1.257.851</h3>
            <h3>Số lượng tam giác: 902.401</h3>
            <br />
            <h2>Kích cỡ tệp GLB: 70Mb</h2>
          </div>
        </div>
        <h2 className="text">Mô hình sau khi tối ưu</h2>
        <hr size="1px" width="5%" />
        <div className="present">
          <model-viewer src="scenetest1.glb" alt="VR Headset" auto-rotate camera-controls ar ios-src="scene2.glb" />
          <div className="detail">
            <h2>Thống kê chi tiết mô hình</h2>
            <br />
            <h3>Số lượng mặt phẳng: 110.192</h3>
            <h3>Số lượng đỉnh: 69.338</h3>
            <h3>Số lượng đường thẳng: 187.515</h3>
            <h3>Số lượng tam giác: 150.027</h3>
            <br />
            <h2>Kích cỡ tệp GLB: 11.1Mb</h2>
          </div>
        </div>
      </div>
    )
}

export default Model3d