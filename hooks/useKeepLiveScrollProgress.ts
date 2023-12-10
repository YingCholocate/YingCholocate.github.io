import { useCallback, useEffect, useMemo, useState } from 'react'
import { constrain, map } from '../utils/math'

export const useKeepLiveScrollProgress = (maxY: number) => {
  const [scrollY, setScrollY] = useState(0)

  const [realScrollY] = useState(0)
  const progress = useMemo(() => map(scrollY, 0, maxY, 0, 1), [maxY, scrollY])

  const handleMousewheel = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop //获取当前页面滚动条纵坐标的位置
    setScrollY(constrain(scrollTop, 0, maxY))
    const container = document.getElementById('app-container')
    const app = document.getElementById('app')
    if (app !== null && container !== null) {
      if (scrollTop < maxY) {
        app.style.width = '100%'
        app.style.height = window.innerHeight + maxY + 'px'
        container.style.position = 'fixed'
        container.style.width = '100%'
        container.style.marginTop = '0px'
      } else {
        app.style.width = 'auto'
        app.style.height = 'auto'
        container.style.position = 'static'
        container.style.marginTop = maxY + 'px'
      }
    }
  }, [maxY])
  useEffect(() => {
    window.scrollTo(0, 0)
    const container = document.getElementById('app-container')
    const app = document.getElementById('app')
    if (app !== null && container !== null) {
      if (scrollY < maxY) {
        app.style.width = '100%'
        app.style.height = window.innerHeight + maxY + 'px'
        container.style.position = 'fixed'
        container.style.width = '100%'
        container.style.marginTop = '0px'
        window.scrollTo(0, scrollY)
      } else {
        container.style.marginTop = maxY + 'px'
        window.scrollTo(0, maxY)
      }
    }

    window.addEventListener('wheel', handleMousewheel)

    return () => {
      window.scrollTo(0, 0)
      const app = document.getElementById('app')
      const container = document.getElementById('app-container')
      if (app !== null && container !== null) {
        app.style.width = 'auto'
        app.style.height = 'auto'
        container.style.position = 'static'
        container.style.marginTop = '0px'
        window.removeEventListener('wheel', handleMousewheel)
      }
    }
  }, [handleMousewheel, maxY, scrollY])

  return { realScrollY: realScrollY, progress: progress }
}
