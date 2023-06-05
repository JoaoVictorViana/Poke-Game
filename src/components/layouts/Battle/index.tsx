import { FC, PropsWithChildren } from 'react'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      Aqui é um exemplo
      {children}
    </div>
  )
}
