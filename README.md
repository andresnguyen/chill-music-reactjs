# Chill Music Reactjs

# How to use this project
1. Run cmd: git clone https://github.com/thuongnguyen-it78/chill-music-reactjs.git
2. Get location project and run cmd
    - yarn install
    - yarn start 
    - Chill it 

## Library
- react-router-dom 
- react-redux 
- query-string 
- classnames 
- axios 
- @reduxjs/toolkit
- node-sass@4.14.1
- antd
- @ant-design/icons

## Routes

1. HOME: / 
2. SEARCH: /search/{data}
3. LIBRARY: 
    - /library/albums (Danh sách album yêu thích)
    - /library/songs (Danh sách bài hát yêu thích)
    - /library/playlists (Danh sách playlist yêu thích)
    - /library/my-playlists (Danh sách playlist tự tạo)
    - /library/artists (Danh sách nghệ sỹ đang theo dõi)
    - /library/uploads (Danh sách bài hát đã upload)

    - /library/history (Danh sách 20 bài hát nghe gần đây)
    - /library/history/albums (Danh sách 20 album nghe gần đây)

4. ARTISTS
    - /artists/{slug} (Chọn một nghệ sỹ bất kì)

5. ALBUMS

    - /albums/{slug} (Chọn một albums bất kì)
    
4. AUTH: 
    - /auth/login
    - /auth/signup

## Convention
1. Style CSS
    - SCSS + BEM
    - Chia theo từng block
        - Block text
        - Block color 
        - Block box model 
        - Block positon  
        - Block display  
        - Others
    - Mỗi block chỉ nên 4-5 dòng
    - [Link tham khảo ](https://www.youtube.com/watch?v=iNKwWRHCeWE)
2. Style commit
    - `<type>: <description>`
    - example: docs: edit file readme
``` 
fix: pull request này thực hiện fix bug của dự án
feat (feature): pull request này thực hiện một chức năng mới của dự án
refactor: pull request này thực hiện refactor lại code hiện tại của dự án 
(refactor hiểu đơn giản là việc "làm sạch" code, loại bỏ code smells, mà 
không làm thay đổi chức năng hiện có)
docs: pull request này thực hiện thêm/sửa đổi document của dự án
style: pull request này thực hiện thay đổi UI của dự án mà không ảnh hưởng đến logic.
perf: pull request này thực hiện cải thiện hiệu năng của dự án (VD: loại bỏ duplicate query, ...)
vendor: pull request này thực hiện cập nhật phiên bản cho các packages, dependencies mà dự án đang sử dụng.
chore: từ này dịch ra tiếng Việt là việc lặt vặt nên mình đoán là nó để chỉ những thay đổi
không đáng kể trong code (ví dụ như thay đổi text chẳng hạn), vì mình cũng ít khi sử dụng type này.
```
