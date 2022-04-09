import 'antd/dist/antd.css';
import { Carousel } from 'antd';

const contentStyle = {
    height: '200px',
    color: '#FFEEEE',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#247881',
  };

function WorthBox() {
    return (
      <div className="WorthBox">
        <Carousel effect="fade" arrows>
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