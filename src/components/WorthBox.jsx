import { useEffect, useState, useRef } from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import API from '../services/inflation';


const contentStyle = {
  height: '350px',
  width: '500px',
  lineHeight: '120px',
  textAlign: 'center',
  background: '#247881',
};

function WorthBox() {
  const [amount, setAmount] = useState('25000');
  const [startYear, setStartYear] = useState('1980');
  const [endYear, setEndYear] = useState('2022');
  const [inflatedAmount, setInflatedAmount] = useState();

  const sliderRef = useRef();
  const amountRef = useRef();
  const startYearRef = useRef();
  const endYearRef = useRef();

  const handleChange = (event, setFunction) => setFunction(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {

      if (event.target.id === 'amountField') startYearRef.current && startYearRef.current.focus();
      else if (event.target.id === 'startYearField') endYearRef.current && endYearRef.current.focus();
      else if (event.target.id === 'endYearField') {
        API.calculateInflation({
          start: startYear + '/01/01',
          end: endYear + '/01/01',
          amount: amount
        }, setInflatedAmount);
      }

      sliderRef.current.next();
    }
  }

  useEffect(() => amountRef.current && amountRef.current.focus(), []);

  return (
    <div className="WorthBox">
      <Carousel className="Carousel" effect="fade" ref={sliderRef} >
        <div>
          <div style={contentStyle} className="Input">
            <h3>How much money we're talking here?</h3>
            <input ref={amountRef} id="amountField" type="number" className="WorthInput" onKeyDown={handleKeyDown} onChange={event => handleChange(event, setAmount)} value={amount} />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <h3>...and in which year?</h3>
            <input ref={startYearRef} id="startYearField" type="number" className="WorthInput" onKeyDown={handleKeyDown} onChange={event => handleChange(event, setStartYear)} value={startYear} />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <h3>Find it's worth in year...</h3>
            <input ref={endYearRef} id="endYearField" type="number" className="WorthInput" onKeyDown={handleKeyDown} onChange={event => handleChange(event, setEndYear)} value={endYear} />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <h1>{inflatedAmount}</h1>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default WorthBox;