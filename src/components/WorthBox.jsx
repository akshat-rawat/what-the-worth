import { useEffect, useState, useRef } from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import API from '../services/inflation';


const contentStyle = {
  height: '350px',
  width: '500px',
  lineHeight: '100px',
  textAlign: 'center',
  background: '#A79AD5',
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
            <h3 className='Questions'>How much money we're talking here?</h3>
            <input ref={amountRef} id="amountField" type="number" className="WorthInput" onKeyDown={handleKeyDown} onChange={event => handleChange(event, setAmount)} value={amount} />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <h3 className='Questions'>...and in which year?</h3>
            <input ref={startYearRef} id="startYearField" type="number" className="WorthInput" onKeyDown={handleKeyDown} onChange={event => handleChange(event, setStartYear)} value={startYear} />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <h3 className='Questions'>Find it's worth in year...</h3>
            <input ref={endYearRef} id="endYearField" type="number" className="WorthInput" onKeyDown={handleKeyDown} onChange={event => handleChange(event, setEndYear)} value={endYear} />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <h3 className='Questions'><span>{amount}</span> of <span>{startYear}</span>, in <span>{endYear}</span> worths</h3> 
            <h3 danger className='Questions' style={{ fontSize: '50px', color: '#8BDB81'}}>{inflatedAmount}</h3>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default WorthBox;