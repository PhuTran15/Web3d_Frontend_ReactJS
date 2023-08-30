const categories = [
    {
      id: 1,
      image: 'https://img2.cgtrader.com/items/3602071/18ce52e429/jackrabbit-3d-model-stl.jpg',
      name: 'Jackrabbit',
      category: 'Animals',
      title: 'office manager',
      vote: 'good',
      cost: '$10.00',
      des: 'Được tạo ra trong Zbrush. Mô hình là kín nước. Mô hình cao 7 cm/2,7 inch, có thể thay đổi kích thước trong bất kỳ phần mềm 3D nào. Ngoài ra còn có một phiên bản được hỗ trợ trước!',
      url: 'https://www.cgtrader.com/3d-print-models/art/sculptures/jackrabbit',
    },
    {
      id: 2,
      image:
        'https://img1.cgtrader.com/items/3635440/425661edde/flying-squirrel-for-3d-printing-3d-model-stl.jpg',
      name: 'Flying Squirrel',
      category: 'Animals',
      title: 'regular guy',
      vote: 'bad',
      cost: '$10.00',
      des:
        'Được tạo ra trong Zbrush. Mô hình là kín nước. Mô hình được hỗ trợ trước (phiên bản treo) dài khoảng 18 cm/7 inch, có thể thay đổi kích thước trong bất kỳ phần mềm 3D nào và cắt thành ba phần.',
      url: 'https://www.cgtrader.com/3d-print-models/art/sculptures/flying-squirrel-for-3d-printing',
    },
    {
      id: 3,
      image:
        'https://img2.cgtrader.com/items/4069676/300e160bda/maxtree-plant-models-vol-60-mesh-3d-model-300e160bda.jpg',
      name: 'Maxtree Plant',
      category: 'Plant',
      title: 'product designer',
      vote: 'good',
      cost: 'Free',
      des:
        'Maxtree Plant Model Vol 60 là một tập hợp các mô hình nhà máy 3D miễn phí chất lượng cao. Bao gồm 15 loài (một số từ các bộ sưu tập khác mẫu miễn phí), tổng số 90 mô hình đơn lẻ.',
      url: 'https://www.cgtrader.com/free-3d-models/plant/grass/maxtree-plant-models-vol-60-mesh',
    },
    {
      id: 4,
      image:
        'https://img2.cgtrader.com/items/1967650/4b3904b09e/moss-7-species-and-stones-pbr-asset-kit-3d-model-4b3904b09e.jpg',
      name: 'Moss 7 Species and Stones',
      category: 'Plant',
      title: 'the boss',
      vote: 'good',
      cost: '$16.10',
      des:
        'Tất cả các mắt lưới đều sạch sẽ và sẵn sàng cho phân khu, các biến thể poly thấp được tam giác cho động cơ trò chơi. Những tài sản này là một công cụ tuyệt vời để thêm trực tiếp và chi tiết vào các cảnh.',
      url: 'https://www.cgtrader.com/3d-models/plant/other/moss-7-species-and-stones-pbr-asset-kit',
    },
    {
      id: 5,
      image:
        'https://img1.cgtrader.com/items/711246/7f4c220138/mercedes-benz-s-class-amg-sports-c217-coupe-hq-interior-2014-3d-model-7f4c220138.jpg',
      name: 'Mercedes-Benz Sports C217',
      category: 'Car',
      title: 'the boss',
      vote: 'great',
      cost: '$399.00',
      des:
        'Mô hình 3D được tạo ra trên cơ sở xe thật. Nó đã tạo ra một cách chính xác, trong các đơn vị đo lường thực sự, định tính và tối đa với bản gốc. Có thể chỉnh sửa trên nhiều định dạng tệp.',
      url: 'https://www.cgtrader.com/3d-models/car/luxury-car/mercedes-benz-s-class-amg-sports-c217-coupe-hq-interior-2014',
    },
    {
      id: 6,
      image:
        'https://img2.cgtrader.com/items/3963654/4fb460c3f9/mercedes-benz-amg-g63-3d-model-obj-fbx-blend.jpg',
      name: 'Mercedes-Benz AMG G63',
      category: 'Car',
      title: 'the boss',
      vote: 'good',
      cost: '$7.00',
      des:
        'Một chiếc xe chất lượng cao từ Mercedes-Benz G63 2019. Máy này được sản xuất trong Blender 3.2. Máy được thực hiện chính xác theo bản vẽ. Không có chi tiết nội thất trong mô hình này.',
      url: 'https://www.cgtrader.com/3d-models/car/suv/mercedes-benz-amg-g63-47643a19-bd03-4e0d-918c-c65f9ba56012',
    },
    {
      id: 7,
      image:
        'https://img2.cgtrader.com/items/4015350/927c31fd22/bolt-table-by-italia-3d-model-max-obj-fbx.jpg',
      name: 'BOLT TABLE BY ITALIA',
      category: 'Furniture',
      title: 'the boss',
      vote: 'great',
      cost: '$20.30',
      des: 'Được lấy cảm hứng dựa vào đời thật. Kết cấu và đa giác đã được kiểm tra bằng các plugin đặc biệt. Có thể chỉnh sửa ở nhiều định dạng khác nhau. Polys: 2 374 Verts: 2 430, X 1676 Y 1666 Z 740',
      url: 'https://www.cgtrader.com/3d-models/furniture/other/bolt-table-by-italia',
    },
    {
      id: 8,
      image:
        'https://img-new.cgtrader.com/items/2290341/3b8a40fcb9/double-cheeseburger-hq-3d-model-max-obj-fbx.jpg',
      name: 'Double Cheeseburger HQ',
      category: 'Food',
      title: 'the boss',
      vote: 'bad',
      cost: '$39.99',
      des:
        'Mô hình chất lượng cao Double Double Cheeseburger HQ. Bánh mì kẹp thịt sành điệu cho bất kỳ nhà hàng và bàn. Lưu trữ có tất cả các tệp cần thiết cho công việc - CORONA, VRAY, FBX, OBJ + textures',
      url: 'https://www.cgtrader.com/3d-models/food/miscellaneous/double-cheeseburger-hq',
    },
    {
      id: 9,
      image:
        'https://img1.cgtrader.com/items/4280039/70f2a81481/cyberpunk-stylized-gas-station-blender-3-to-ue55-3d-building-3d-model-70f2a81481.jpg',
      name: 'Cyberpunk Gas Station',
      category: 'Exterior',
      title: 'the boss',
      vote: 'good',
      cost: '$3.49',
      des:
        'Đây là một tệp Blend được đóng gói và đã được dọn sạch. Điều này đảm bảo không có tệp, tài liệu không cần thiết. Mọi thứ trong tệp .blend cũng được sắp xếp thành các bộ sưu tập và được đặt tên chính xác.',
      url: 'https://www.cgtrader.com/3d-models/exterior/cityscape/cyberpunk-stylized-gas-station-blender-3-to-ue55-3d-building',
    },
  ];
  
  export default categories;
  