import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player';

// components to show Loading status while images being loaded
const Loading = () => {
  return (

    <div className=' h-screen w-full flex flex-col items-center justify-center'>

      <Player
        autoplay
        loop
        src="https://lottie.host/73622732-aeec-4a78-8e50-7a1c0b495d53/WgtLws4nVQ.json"
        style={{ height: '300px', width: '300px' }}
      >
      </Player>

      <span className=' max-w-[250px] text-center text-xl font-poppins font-bold text-slate-400'>
        Loading some awesome Images...
      </span>
    </div>

  )
}

export default Loading