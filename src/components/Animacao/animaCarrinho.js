import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/lf30_editor_u7vruzzo.json';


class LottieAnima extends React.Component{

render() {

  const defaultOptions = {

    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
    preserveAspectRatio: 'lf30_editor_u7vruzzo'

    }
    
  };
    return (
    <div>
        <Lottie options={defaultOptions} height={500} width={500}/>
    </div>
    );
  }
};
export default LottieAnima;
