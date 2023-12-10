import React from 'react'
interface Iprops {
  getStart: () => void
}
export default function Myself(props: Iprops) {
  return (
    <div className="hero w-full min-h-screen bg-base-200">
      <div className="hero-content flex-col items-start justify-start w-30 lg:flex-row-reverse">
        <div>
          <h1 className="text-5xl font-bold">Hi,I am YingCholocate!</h1>

          <p className="py-4">A Front-end developer.</p>
          {/* <p>Hope to become a full stack development engineer.</p> */}
          <strong className="py-2">My Skill </strong>
          <p>
            <strong>Main:</strong> React+Vue3+Typescript
          </p>
          <p>
            <strong>Mini program:</strong> Taro、Uniapp
          </p>
          <p>
            <strong>SSR:</strong> Next.js、Nuxt.js
          </p>
          <p>
            <strong>animaton:</strong> animista
          </p>

          <div className="flex space-x-2 py-6">
            <div className="flex align-middle space-x-2">
              <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
              </svg>
              <a href="https://github.com/YingCholocate" target="_blank" rel="noreferrer">
                <p>Github</p>
              </a>
            </div>
            <div className="flex align-middle space-x-2 ">
              <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path d="M32 96l960 0 0 64-960 0 0-64z" fill="#000000"></path>
                <path d="M32 864l960 0 0 64-960 0 0-64z" fill="#000000"></path>
                <path d="M128 192l64 0 0 64-64 0 0-64z" fill="#000000"></path>
                <path d="M224 192l64 0 0 64-64 0 0-64z" fill="#000000"></path>
                <path d="M320 192l64 0 0 64-64 0 0-64z" fill="#000000"></path>
                <path d="M384 768l-256 0 0-320 256 0 0 320zM192 704l128 0 0-192-128 0 0 192z" fill="#000000"></path>
                <path d="M448 448l224 0 0 64-224 0 0-64z" fill="#000000"></path>
                <path d="M1024 352l-1024 0 0-256 1024 0 0 256zM64 288l896 0 0-128-896 0 0 128z" fill="#000000"></path>
                <path d="M1024 928l-1024 0 0-479.84 64 0 0 415.84 896 0 0-447.264 64 0z" fill="#000000"></path>
                <path d="M448 576l448 0 0 64-448 0 0-64z" fill="#000000"></path>
                <path d="M448 704l448 0 0 64-448 0 0-64z" fill="#000000"></path>
              </svg>
              <a href="https://github.com/YingCholocate" target="_blank" rel="noreferrer">
                <p>Blog</p>
              </a>
            </div>
          </div>

          <p>About the website: </p>
          <p className="py-2">
            Use next.js+dasyui+tailwindcss to implement the website. I will show you the project I have done and the
            notes I wrote. Thank you for your watcing.
          </p>
          <button className="btn btn-neutral" onClick={props.getStart}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
