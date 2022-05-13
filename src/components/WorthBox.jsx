import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { useState } from 'react';
import { useRef } from 'react';


const contentStyle = {
  height: '350px',
  width: '500px',
  lineHeight: '120px',
  textAlign: 'center',
  background: '#247881',
};

function WorthBox() {
  //1st slide of carousel (input)
  const [money, setMoney] = useState(''); 

  function getMoney(event) {
    setMoney(event.target.value);
    console.log(event.target.value);
  }

  //2nt slide of carousel (input)
  const [year, setYear] = useState('');

  function getYear(event) {
    setYear(event.target.value);
    console.log(event.target.value);
  }

  //3rd slide of carousel (input)
  const [final, finalYear] = useState('');

  function getFinalYear(event) {
    finalYear(event.target.value);
    console.log(event.target.value);
  }

  const slider = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      slider.current.next();
    }
  }

  return (
    <div className="WorthBox">
      <Carousel className="Carousel" effect="fade" ref={slider} >
        <div>
          <div style={contentStyle} className="Input">
            <h3>How much money we're talking here?</h3>
            <input className="po" type="text" onKeyDown={handleKeyDown} onChange={getMoney} value={money} ></input>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <h3>...and in which year?</h3>
            <input autoFocus type="text" className="po" onKeyDown={handleKeyDown} onChange={getYear} value={year}></input>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <h3 >Find it's worth in...</h3>
            <input type="text" className="po" onKeyDown={handleKeyDown} onChange={getFinalYear} value={final}></input>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <h3 style={contentStyle}>4</h3>
          </div>
        </div>
      </Carousel>
  </div>
  );
}

export default WorthBox;