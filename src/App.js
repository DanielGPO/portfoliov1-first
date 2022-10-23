import { Route, Routes } from 'react-router-dom';
import Content from './Components/Content';
import Amzclone from './Components/pages/AmzClone';
import DigitalX from './Components/pages/DigitalX';
import Lenux from './Components/pages/Lenux';
import Netflix from './Components/pages/Netflix';
import Webshop from './Components/pages/Webshop';

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Content/>}/>
      <Route path='/amzclone' element={<Amzclone/>}/>
      <Route path='/lenux' element={<Lenux/>}/>
      <Route path='/webshop' element={<Webshop/>}/>
      <Route path='/netflix' element={<Netflix/>}/>
      <Route path='/digitalx' element={<DigitalX/>}/>
    </Routes>
  </>
  );
}

export default App;
