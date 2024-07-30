// components/Preloader.tsx
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player'

const Preloader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader"></div>
      <Player
        src='https://lottie.host/4d113c66-ae4d-458d-8b9c-3494bc8449b3/DCAHhA1Ide.json'
        className="w-80 h-80 z-100 "
        loop
        autoplay
        speed={0.5}
/>
    </div>
  );
};

export default Preloader;
