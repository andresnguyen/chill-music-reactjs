import './App.css';
import logo from './assets/images/logo.svg'
import { DatePicker } from 'antd';

function App() {
  return (
    <div className="app" style = {{backgroundColor: '#1db954'}}>
      Logo of my project
      <img src = {logo} alt = 'logo'>
      </img>
    </div>
  );
}

export default App;
