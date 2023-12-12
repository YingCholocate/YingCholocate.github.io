/* eslint-disable react/no-unknown-property */
'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { Container } from '~/components/ui/Container'
import Carousel from '~/components/ui/Carousel'
export default function Page() {
  const projectData = [
    {
      id: 1,
      name: 'association',
      link: 'https://github.com/YingCholocate/association.github.io',
      detail: '社团管理系统，功能包括课表的查询',
      onlineLink: 'https://yingcholocate.github.io/login',
      imageLink: '/Images/association.png',
      rotateValue: ' lg:-rotate-12 '
    },
    {
      id: 2,
      name: '争鲜活动网站',
      link: 'https://sushiexpresshk2023.com/',
      detail: '争鲜网站表单订阅，现场登记',
      onlineLink: 'https://sushiexpresshk2023.com/',
      imageLink: '/Images/sushi.png',
      rotateValue: 'lg:-rotate-6  lg:translate-x-20 lg:-translate-y-8 '
    },

    {
      id: 3,
      name: '聊天室',
      link: 'http://8.138.58.125/',
      detail: '使用ssr框架结合动画库animista实现',
      onlineLink: 'http://8.138.58.125/',
      imageLink: '/Images/chat.png',
      rotateValue: 'lg:-rotate-2  lg:translate-x-40 lg:-translate-y-6'
    },
    {
      id: 4,
      name: '官网',
      link: 'https://www.gimcszjh.com/',
      detail: '使用ssr框架结合动画库animista实现',
      onlineLink: 'https://www.gimcszjh.com/',
      imageLink: '/Images/gimisc.png',
      rotateValue: 'lg:rotate-6 lg:translate-x-60 lg:-translate-y-4 '
    },
    {
      id: 5,
      name: 'TodoList',
      link: 'https://github.com/YingCholocate/TODOLIST',
      detail: 'Figma切图实现的todolist',
      onlineLink: 'https://yingcholocate.github.io/TODOLIST/',
      imageLink: '/Images/Todolist.png',
      rotateValue: 'lg:rotate-12 lg:translate-x-80 lg:-translate-y-2 '
    }
  ]
  const [gameUrl, setgameUrl] = useState<string>('')
  const [showBorder, setShowBorder] = useState(true)
  const iframeRef = useRef(null)
  return (
    <Container>
      <style jsx scoped>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css');
      `}</style>
      <h2 className="text-lg py-2">
        <strong>web 项目作品集</strong>
      </h2>

      <div className="flex flex-wrap m-auto justify-center lg:-translate-x-40  lg:translate-y-10 lg:mt-4 lg:mb-40 ">
        {projectData.map((project) => (
          <div
            key={project.id}
            id="cardProject"
            className={`lg:absolute flex space-x-1 my-2 hover:opacity-100 transition 0.3s ease card w-98 bg-base-100 shadow-xl hover:origin-top hover:rotate-0 hover:z-10 origin-bottom-left rotate-0 ${project.rotateValue}`}>
            <figure className="py-2">
              <Image src={project.imageLink} alt="Shoes" width={300} height={100} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <label className="text-gray">线上地址</label>
              <a className="text-gray underline flex-wrap" href={project.link} target="_blank" rel="noreferrer">
                {project.onlineLink}
              </a>
              <p>{project.detail}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    查看
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className=" text-lg m-2 lg:mt-96 lg:translate-y-96">
        <strong>数据可视化</strong>
      </h2>
      <div className="lg:mt-96 mb-24 flex-col items-center justify-center cursor-pointer relative">
        <Carousel />
      </div>

      <h2 className="text-lg mt-2 flex justify-between ">
        <strong>Coscos game</strong>
        <button
          className="btn btn-neutral"
          onClick={() => {
            setShowBorder(!showBorder)
            gameUrl === '' && setgameUrl('https://yingcholocate.github.io/CocosGame.github.io/')
            gameUrl !== '' && setgameUrl('')
          }}>
          加载
        </button>
      </h2>

      <div className="mockup-browser border border-base-300  mb-8">
        <div className="mockup-browser-toolbar">
          <div className="input border border-base-300">https://yingcholocate.github.io/CocosGame.github.io/</div>
        </div>
        <div className="flex justify-center px-4 py-16 border-t border-base-300">
          <div className="overflow-hidden">
            <iframe
              ref={iframeRef}
              src={gameUrl}
              width={showBorder ? 100 : 500}
              height={showBorder ? 100 : 810}
              className={`${showBorder && 'border-solid border-2 border-indigo-600 mt-2 '}`}></iframe>
          </div>
        </div>
      </div>
    </Container>
  )
}
