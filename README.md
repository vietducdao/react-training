## Khởi chạy Dự Án

- Install Dependencies

```bash
npm install
```
- Start Dev

```bash
npm install
```

## Cấu Trúc Dự Án
```
my-app/
│
├── public/               # Các file tĩnh cho ứng dụng (index.html, favicon, v.v.)
│
├── src/                  # Mã nguồn chính của ứng dụng
│   ├── assets/           # Các tài nguyên tĩnh như hình ảnh, fonts, v.v.
│   ├── components/       # Các component tái sử dụng trong ứng dụng (ví dụ: buttons, headers, v.v.)
│   ├── pages/            # Các trang chính của ứng dụng (Home, Login, v.v.)
│   ├── utils/            # Các hàm tiện ích sử dụng trong toàn bộ ứng dụng
│   ├── styles/           # Các file CSS/SCSS toàn cục và module
│   ├── constants/        # Các hằng số như API endpoints, action types, v.v.
│   ├── App.js            # Component chính của ứng dụng
│   ├── index.js          # Điểm bắt đầu của ứng dụng
│   └── routes.js         # Quản lý các route trong ứng dụng
│
├── package.json          # Danh sách dependencies và scripts
└── README.md             # Tài liệu hướng dẫn (tệp này)
```

## Giải Thích Chi Tiết Về Các Thư Mục

- public/: Chứa các tệp tĩnh như index.html và hình ảnh. Các tệp này được server phục vụ trực tiếp mà không qua xử lý của Webpack.

- src/: Thư mục chính chứa toàn bộ mã nguồn của ứng dụng.

- assets/: Chứa các tài nguyên tĩnh như hình ảnh và fonts mà có thể sử dụng xuyên suốt dự án.

- components/: Chứa các component có thể tái sử dụng trong React như các nút, biểu mẫu, tiêu đề, v.v. Đây thường là các component nhỏ được sử dụng trong nhiều trang khác nhau.

- pages/: Chứa các trang chính của ứng dụng. Mỗi trang thường bao gồm nhiều component và đại diện cho một màn hình cụ thể (ví dụ: HomePage, LoginPage).

- utils/: Chứa các hàm tiện ích sử dụng trong toàn bộ ứng dụng, chẳng hạn như xử lý ngày giờ, thao tác chuỗi, v.v.

-styles/: Chứa các tệp CSS hoặc SCSS để quản lý style cho ứng dụng. Bao gồm cả style toàn cục (global.css) và style riêng cho từng component.

- constants/: Chứa các hằng số dùng chung trong ứng dụng như API endpoints, action types cho Redux (nếu dùng), và các đường dẫn route.

- App.js: Component chính của ứng dụng nơi tích hợp AppRoutes và là gốc của ứng dụng.

- index.js: Điểm bắt đầu của ứng dụng, nơi render component App vào DOM.

- routes.js: Quản lý tất cả các route của ứng dụng bằng react-router-dom.

## Cấu Hình Routing
- Các route được quản lý trong component AppRoutes tại tệp src/routes.js. Đây là cách bạn có thể thêm một route mới:

- 1.Mở src/routes.js.
- 2. Thêm một route mới như sau:

```
import AboutPage from './pages/AboutPage';

<Route path="/about" element={<AboutPage />} />
```