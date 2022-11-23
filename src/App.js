import './App.scss';
import logo from '../src/assets/images/logo.png';
import pic from '../src/assets/images/pic.png';
import {CiTwitter} from 'react-icons/ci';
function App() {
  return (
    <>
<div className='body'>
  <div className="wrapper">
    <div className='logo'>
        <img src={logo}></img>
  </div>
  <div className='nav'>
<a href>HOME</a>
<a href>ABOUT</a>
<a href>PORTFOLIO</a>
<a href>PAGE</a>
<a href>BLOG</a>
<a href>CONTACT</a>
</div>
</div>
<div className='banner'>
  <div className='iamjo'>
<h3>HEY THERE !</h3>
<h1>I AM JO BREED</h1>
<h5>CREATIVE ART DIRECTOR & DESIGNER</h5>
<CiTwitter/></div>
  <div className='pic'>
    <img src={pic}></img>
  </div>
</div>
</div>
</>
  );
}

export default App;
