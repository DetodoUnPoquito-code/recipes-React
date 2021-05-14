import './App.css';
import images from './constants/images';

function App() {
  const {image1} = images;
  return (
    <div className="App">
  <img src={image1} alt="" />
    </div>
  );
}

export default App;
