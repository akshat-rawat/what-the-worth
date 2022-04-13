import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { Input } from 'antd';

const contentStyle = {
    height: '350px',
    width: '500px',
    color: '',
    lineHeight: '150px',
    textAlign: 'center',
    background: '#247881',
  };

function WorthBox() {
    return (
      <div className="WorthBox">
      
        <Carousel className="Carousel" effect="fade" >
            <div>
              <div style={contentStyle} className="Input">
                <h3 style={{color: "black"}}>How much money we're talking here?</h3>
                
                <input className="po" type="text"></input>
              </div>
            </div>
            <div>
              <div style={contentStyle}>
                <h3 >...and in which year?</h3>
                <input type="text"className="po"></input>
              </div>
            </div>
            <div>
              <div style={contentStyle}>
                <h3 >Find it's worth in...</h3>
                <input type="text" className="po"></input>
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