import React from 'react'
import Image from 'next/image'
import { Container } from '~/components/ui/Container'

export default function page() {
  const projectData = [
    {
      id: 1,
      name: 'association',
      link: 'https://github.com/YingCholocate/association.github.io',
      detail: '社团管理系统，功能包括课表的查询',
      onlineLink: 'https://yingcholocate.github.io/login',
      imageLink: '/Images/association.png',
      rotateValue: '-rotate-12'
    },
    {
      id: 2,
      name: '争鲜活动网站',
      link: 'https://sushiexpresshk2023.com/',
      detail: '争鲜网站表单订阅，现场登记',
      onlineLink: 'https://sushiexpresshk2023.com/',
      imageLink: '/Images/sushi.png',
      rotateValue: '-rotate-6  translate-x-20 -translate-y-8 '
    },

    {
      id: 3,
      name: '聊天室',
      link: 'http://8.138.58.125/',
      detail: '使用ssr框架结合动画库animista实现',
      onlineLink: 'http://8.138.58.125/',
      imageLink: '/Images/chat.png',
      rotateValue: '-rotate-2  translate-x-40 -translate-y-6'
    },
    {
      id: 4,
      name: '官网',
      link: 'https://www.gimcszjh.com/',
      detail: '使用ssr框架结合动画库animista实现',
      onlineLink: 'https://www.gimcszjh.com/',
      imageLink: '/Images/gimisc.png',
      rotateValue: 'rotate-6 translate-x-60 -translate-y-4 '
    },
    {
      id: 5,
      name: 'TodoList',
      link: 'https://github.com/YingCholocate/TODOLIST',
      detail: 'Figma切图实现的todolist',
      onlineLink: 'https://yingcholocate.github.io/TODOLIST/',
      imageLink: '/Images/Todolist.png',
      rotateValue: 'rotate-12 translate-x-80 -translate-y-2 '
    }
  ]
  return (
    <Container>
      <div className="flex flex-wrap m-auto justify-center -translate-x-40  translate-y-10 py-6 ">
        {projectData.map((project) => (
          <div
            key={project.id}
            id="cardProject"
            className={`absolute hover:opacity-100 transition 0.3s ease card w-98 bg-base-100 shadow-xl hover:origin-top hover:rotate-0 hover:z-10 origin-bottom-left ${project.rotateValue}`}>
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
    </Container>
  )
}
