import 'antd/dist/antd.css';
import { Carousel } from 'antd';

const contentStyle = {
    height: '350px',
    color: '#FFEEEE',
    lineHeight: '200px',
    textAlign: 'center',
    background: '#247881',
  };

function WorthBox() {
    return (
      <div className="WorthBox">
      
        <Carousel className="Carousel" effect="fade" >
            <div>
            <h3 style={contentStyle}>1</h3>
            </div>
            <div>
            <h3 style={contentStyle}>2</h3>
            </div>
            <div>
            <h3 style={contentStyle}>3</h3>
            </div>
            <div>
            <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
       
      </div>
    );
  }
  
  export default WorthBox;