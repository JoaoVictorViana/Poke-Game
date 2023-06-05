import { FC, ReactNode, useMemo } from 'react'
import { Options } from 'react-lottie'

type AnimationParams = {
  options: Options
}

type AnimationProps = {
  data: any
  children(params: AnimationParams): ReactNode
}

export const LottieAnimation: FC<AnimationProps> = ({ children, data }) => {
  const options = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      animationData: data,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }),
    []
  )

  if (!children) throw Error('Pass Animation Component')

  return <div>{children({ options })}</div>
}
