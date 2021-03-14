import './App.css';
import Button from './components/Button';
import ButtonPlay from './components/ButtonPlay';
import Sidebar from './components/Sidebar';
import Album from './features/HomeFeature/components/Album';
import img1 from './assets/albums/1.jpg'
import Header from './components/Header';
import PlayMusic from './features/PlayMusic';



function App() {
  return (
    <div className="app">
      <div className="wrapper-main">

        <div className="wrapper-sidebar">
          <Sidebar />
        </div>

        <div className="wrapper-content" style = {{backgroundColor: '#121212'}}>
          <Header />

          <Album album = {{img: img1, title: 'Top Nhạc Việt 2019 abcccc', desc: 'Dòng chảy của rap Việt luôn cuồn cuộn với các tên tuổi Binz, Đen, Suboi, Wowy...'}} />

        </div>

      </div>

      <PlayMusic />

    </div>


  );
}

export default App;
