import React from 'react'

export default function page() {
  const projectData = [
    {
      id: 1,
      name: 'association',
      link: 'https://github.com/YingCholocate/association.github.io',
      detail: '社团管理系统，功能包括课表的查询',
      onlineLink: 'https://yingcholocate.github.io/login'
    }
  ]
  return (
    <div className="flex">
      {projectData.map((project) => (
        <div key={project.id} className="card w-98 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{project.name}</h2>
            <label className="text-gray">线上地址</label>
            <a
              className="text-gray underline flex-wrap"
              href="https://yingcholocate.github.io/association.github.io"
              target="_blank"
              rel="noreferrer">
              https://yingcholocate.github.io/association.github.io
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
  )
}
