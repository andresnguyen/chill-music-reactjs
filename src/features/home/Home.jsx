import PlaylistSection from '../../components/home/PlaylistSection'
import './style/HomeStyle.scss'
function Home() {
	return (
		<div className="home-main">
			<div className='home-playlist-title'>Gợi ý cho hôm nay</div>
			<PlaylistSection></PlaylistSection>
		</div>
	);
}
export default Home;