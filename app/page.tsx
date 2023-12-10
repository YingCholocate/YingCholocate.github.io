'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import '../styles/globals.css'
import '../styles/devices.min.css'
import BlogTag from '../components/BlogTag'
import Scale from '~/components/Scale'
import { map, constrain } from '~/utils/math'
import { useKeepLiveScrollProgress } from '~/hooks/useKeepLiveScrollProgress'
import { useElementBox } from '~/hooks/useElementBox'
import { useWindowSize } from '~/hooks/useWindowSize'
import FullScreen from '~/components/FullScreen/FullScreen'
import Myself from '~/components/Myself'
import { Container } from '~/components/ui/Container'
export default function Home() {
  //progress鼠标滚动条滚动的距离
  const { progress } = useKeepLiveScrollProgress(200)
  const deviceContainer = useRef(null)
  const { deviceContainerX, deviceContainerY, deviceContainerWidth, deviceContainerHeight } = useElementBox(
    'deviceContainer',
    deviceContainer.current
  )
  const [showHomepage, setShowHomepage] = useState(true)
  const [visitedHomepage, setVisitedHomepage] = useState(false)
  const [screenSize, setScreenSize] = useState({
    width: 375,
    height: 812
  })
  const { windowWidth, windowHeight } = useWindowSize()
  const macProgress = useMemo(() => map(constrain(progress, 0, 0.8), 0, 0.8, 0, 1), [progress])
  const position = useMemo(() => {
    const macAspect = 0.625
    const ratio = 0.7
    const deviceContainerAspect = deviceContainerHeight / deviceContainerWidth
    let deviceWidth = 0
    let deviceHeight = 0
    if (deviceContainerAspect > macAspect) {
      deviceWidth = deviceContainerWidth * ratio
      deviceHeight = deviceWidth * macAspect
    } else {
      deviceHeight = deviceContainerHeight * ratio
      deviceWidth = deviceHeight / macAspect
    }

    return {
      from: {
        x: 0,
        y: 0,
        scale: 1
      },
      to: {
        x: deviceContainerX + (deviceContainerWidth - deviceWidth) / 2,
        y: deviceContainerY + (deviceContainerHeight - deviceHeight) / 2,
        scale: Number(deviceWidth) / Number(windowWidth)
      },
      offsetY: (deviceContainerHeight - deviceHeight) / 2,
      offsetX: (deviceContainerWidth - deviceWidth) / 2
    }
  }, [deviceContainerHeight, deviceContainerWidth, deviceContainerX, deviceContainerY, windowWidth])

  const handleResize = (width: number, height: number): void => {
    setScreenSize({
      width,
      height
    })
  }

  useEffect(() => {
    const computedScreenSize = () => {
      const macAspect = 0.625
      const macHeight: number = windowWidth * macAspect
      const sourceHeight = windowHeight
      const targetHeight = Number(macHeight)
      const height: number = macProgress <= 0 ? sourceHeight : macProgress >= 1 ? targetHeight : screenSize.height

      setScreenSize({
        width: windowWidth,
        height
      })

      return [screenSize.width, screenSize.height]
    }
    computedScreenSize()
  }, [macProgress, progress, screenSize.height, screenSize.width, windowHeight, windowWidth])

  const getStart = () => {
    setShowHomepage(false)

    localStorage.setItem('visited', 'true')
  }
  useEffect(() => {
    if (localStorage.getItem('visited')) setVisitedHomepage(true)
  }, [])
  return (
    <>
      {/* <div ref={deviceContainer} className="device-container">
        111
      </div> */}
      {!visitedHomepage && (
        <div
          id="homepage"
          className={`absolute top-0 left-0 right-0 w-full h-full m-0 p-0 z-40 ${showHomepage ? '' : 'swiper-slide'}`}>
          <Scale
            progress={macProgress}
            from={position.from}
            to={position.to}
            fixed={true}
            offset-y={progress >= 1 ? 200 : 0}
            onResize={handleResize}>
            <FullScreen width={screenSize.width} height={screenSize.height}>
              <Myself getStart={getStart} />
            </FullScreen>
          </Scale>
        </div>
      )}
      <Container>
        <div className="mx-auto grid max-w-xl lg:max-w-none ">
          <div className="flex flex-col gap-6 pt-6">
            <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <span className="ml-2">近期文章</span>
            </h2>
            <BlogTag />
          </div>
          <aside className="space-y-10 lg:sticky lg:top-8 lg:h-fit lg:pl-16 xl:pl-20">
            {/* <Newsletter /> */}
            {/* <Resume /> */}
          </aside>
        </div>
      </Container>
    </>
  )
}
