# Chill Music Reactjs

## Library
- react-router-dom 
- react-redux 
- query-string 
- classnames 
- axios 
- @reduxjs/toolkit
- node-sass@4.14.1

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
