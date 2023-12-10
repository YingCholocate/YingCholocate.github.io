import React, { useEffect, useMemo } from 'react'
import { map } from '~/utils/math'
type Props = {
  from: { x: number; y: number; scale: number }
  to: {
    x: number
    y: number
    scale: number
  }
  progress: number
  styles?: object
  fixed: boolean
  zIndex?: {
    default: 10
    type: number
  }
  offsetY?: number
  children?: React.ReactNode
  onResize: (width: number, height: number) => void
}

type Ttransformd = {
  x: number
  y: number
  width?: number
  height?: number
  scale: number
}
export default function Scale(props: Props) {
  const { from, to, progress, fixed, onResize } = props
  const transformed = useMemo<Ttransformd>(() => {
    const { x: fromX, y: fromY, scale: fromS } = from
    const { x: toX, y: toY, scale: toS } = to
    const boundingBox = {
      ...(fixed && { x: map(progress, 0, 1, fromX, toX) }),
      ...(fixed && { y: map(progress, 0, 1, fromY, toY) + props.offsetY }),
      scale: map(progress, 0, 1, fromS, toS)
    }
    return boundingBox
  }, [fixed, from, progress, props.offsetY, to])
  const fixedStyle = () => {
    const { fixed, zIndex } = props
    return (
      fixed && {
        position: 'absolute',
        left: transformed.x + 'px',
        top: transformed.y + 'px',
        zIndex
      }
    )
  }
  useEffect(() => {
    function handleResize() {
      onResize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)
  }, [onResize])

  return (
    <div
      style={{
        ...props.styles,
        ...fixedStyle,
        transformOrigin: 'left top',
        transform: `scale(${transformed.scale}, ${transformed.scale})`,
        width: transformed.width + 'px',
        height: transformed.height + 'px'
      }}>
      {props.children}
    </div>
  )
}
