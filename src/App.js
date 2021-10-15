import './styles/mainStyles.css'
import Post from './components/Post';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    ReactGA.initialize('G-CM05KLPND2');
    ReactGA.pageview('/');
  },[])
  

  return (
    <div className='main-div'>
      <Post/>
    </div>
  );
}

export default App;
