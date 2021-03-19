import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AlbumContainer from './features/HomeFeature/components/AlbumContainer';
import PlayMusic from './features/PlayMusic';

function App() {
	return (
		<div className="app">
			<div className="wrapper-main">
				<div className="wrapper-sidebar">
					<Sidebar />
				</div>

				<div
					className="wrapper-content">
					<Header />
  
					<AlbumContainer />
				</div>
			</div>

			<PlayMusic />
		</div>
	);
}

export default App;
