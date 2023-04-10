import React from 'react'
import Draggable from 'react-draggable';
import './css/Play.css';

import img1 from '../components/res/photos/play/1.png';
import img2 from '../components/res/photos/play/2.png';
import img3 from '../components/res/photos/play/3.png';
import img4 from '../components/res/photos/play/4.png';
import img5 from '../components/res/photos/play/5.png';
import img6 from '../components/res/photos/play/6.png';
import img7 from '../components/res/photos/play/7.png';
import img8 from '../components/res/photos/play/8.png';
import img9 from '../components/res/photos/play/9.png';
import img10 from '../components/res/photos/play/10.png';
import img11 from '../components/res/photos/play/11.png';
import img12 from '../components/res/photos/play/12.png';
import img13 from '../components/res/photos/play/13.png';
import img14 from '../components/res/photos/play/14.png';
import img15 from '../components/res/photos/play/15.png';
import img16 from '../components/res/photos/play/16.png';

const images = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
  { id: 8, src: img8 },
  { id: 9, src: img9 },
  { id: 10, src: img10 },
  { id: 11, src: img11 },
  { id: 12, src: img12 },
  { id: 13, src: img13 },
  { id: 14, src: img14 },
  { id: 15, src: img15 },
  { id: 16, src: img16 },
];


const Play = () => {
    const onStart = (event, data) => {
        event.stopPropagation();
      };
    
      const onStop = (event, data) => {
        event.stopPropagation();
      };
    
      const getTransformStyle = (id) => {
        const rotationMap = {
            1: 'rotate(5deg)',
            2: 'rotate(-6deg)',
            3: 'rotate(-8deg)',
            4: 'rotate(5deg)',
            5: 'rotate(-6deg)',
            6: 'rotate(-8deg)',
            7: 'rotate(5deg)',
            8: 'rotate(-6deg)',
            9: 'rotate(-8deg)',
            10: 'rotate(5deg)',
            11: 'rotate(-6deg)',
            12: 'rotate(-8deg)',
            13: 'rotate(5deg)',
            14: 'rotate(-6deg)',
            15: 'rotate(-8deg)',
            16: 'rotate(5deg)'
          };
    
        return {
          transform: rotationMap[id],
        };
      };
    
      return (
        <div className="play">
          {images.map((image) => (
            <Draggable
              key={image.id}
              onStart={onStart}
              onStop={onStop}
            >
              <div className={`drag${image.id}`}>
                <img
                  src={image.src}
                  alt=""
                  draggable="false"
                  style={getTransformStyle(image.id)}
                />
              </div>
            </Draggable>
          ))}
        </div>
      );
    };
    
    export default Play;