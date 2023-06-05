'use client'

import * as CloudAnimation from '@/assets/animations/battle/clouds.json'
import Lottie from 'react-lottie-player'

export default function BattlePage() {
  return (
    CloudAnimation && (
      <Lottie
        loop
        play
        animationData={CloudAnimation}
        // rendererSettings: {
        //   preserveAspectRatio: 'xMidYMid slice',
        // },
        // isStopped={this.state.isStopped}
        // isPaused={this.state.isPaused}
      />
    )
  )
}
