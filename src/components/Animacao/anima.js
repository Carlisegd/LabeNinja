import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/36060-services.json';


class LottieAnima extends React.Component{

render() {

  const defaultOptions = {

    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
    preserveAspectRatio: '36060-services'

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









