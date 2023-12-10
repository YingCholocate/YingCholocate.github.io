import React from 'react'
import styles from './FullScreen.module.css'
interface IProps {
  width: number
  height: number
  children?: React.ReactNode
}
export default function FullScreen(props: IProps) {
  // const { width, height } = props
  // const transformStyles = useMemo(() => {
  //   const deviceScreenWidth = 576
  //   const deviceScreenHeight = 360
  //   const tx = 83
  //   const ty = 29
  //   const sx = (width as number) / deviceScreenWidth
  //   const sy = (height as number) / deviceScreenHeight
  //   return {
  //     container: {
  //       transformOrigin: `${tx}px ${ty}px`,
  //       transform: `translate(${-tx}px, ${-ty}px) scale(${sx}, ${sy})`
  //     },
  //     content: {
  //       transformOrigin: 'left top',
  //       transform: `scale(${1 / sx}, ${1 / sy})`
  //     }
  //   }
  // }, [height, width])
  return (
    <div className="screen-container transition z-40 items-center">
      <div className="device-frame transition" style={{ overflow: 'scroll' }}>
        <div className={styles.transition}>{props.children}</div>
      </div>
      <div className="device-stripe transition"></div>
      <div className="device-header transition"></div>
      <div className="device-sensors transition"></div>
      <div className="device-btns transition"></div>
      <div className="device-power transition"></div>
    </div>
  )
}
