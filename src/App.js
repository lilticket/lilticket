import './App.css';

import './fonts/Bold_Italic.otf';
import './fonts/Bold.otf';
import './fonts/DemiBold_Italic.otf';
import './fonts/DemiBold.otf';
import './fonts/ExtraBold_Italic.otf';
import './fonts/ExtraBold.otf';
import './fonts/ExtraLight_Italic.otf';
import './fonts/ExtraLight.otf';
import './fonts/Italic.otf';
import './fonts/Light.otf';
import './fonts/Medium_Italic.otf';
import './fonts/Medium.otf';
import './fonts/Regular.otf';

import Top from './components/Top';
import First from './components/First';
import Products from './components/Products';
import Bottom from './components/Bottom';
import Connect from './components/Connect';

function App() {
  return (
    <div className="App">
      <First />
      <Top />
      <Products />
      {/* <Connect /> */}
      <Bottom />
    </div>
  );
}

export default App;
