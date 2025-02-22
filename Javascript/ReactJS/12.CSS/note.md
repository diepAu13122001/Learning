# CSS
## Cách vận hành CSS trong React
- Khi run app, CSS `external` sẽ được viết lại dưới dạng `internal` (kiểm tra tại `<head>` => `<style>`)
- khi build app, CSS vẫn sẽ ở dạng `external` => gom tất cả lại 1 file và minimize code 
- Mỗi một CSS file được link vào => 1 request HTTP gửi đi (thực hiện đóng - mở kết nối) => time sẽ dài nếu quá nhiều CSS
>`Dev source`: chia thành nhiều file nhỏ để dễ quản lí code

> `Production`: gom và mini lại để tăng hiệu năng + tiết kiệm thời gian duyệt web.
- **Lưu ý**: khi chia nhiều file nhỏ cần <u> kiểm soát </u> được <u>**tên**</u> các class sẽ <u>**bị trùng**</u> vì index.js sẽ gọi lại tất cả css (do cần gom file khi chạy) nên sẽ ảnh hưởng nếu đặt tên trùng.
- Cấu trúc file nên có:
    ```
    |_src
        |_components
            |_nav
                |index.js
                |_nav.css
                |_...
            |_footer
            |_...  
    ```