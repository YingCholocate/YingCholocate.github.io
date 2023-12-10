import { useEffect, useState } from 'react'

interface IkeyValue {
  [key: string]: number
}
export const useElementBox = (refName: string, element: HTMLElement) => {
  const [refNameObj, setRefNameObj] = useState<IkeyValue>({
    [refName + 'X']: 0,
    [refName + 'Y']: 0,
    [refName + 'Width']: 0,
    [refName + 'Height']: 0
  })

  useEffect(() => {
    if (!element) return
    const { top, left, right, bottom } = element.getBoundingClientRect() //返回的是矩形的集合，表示了当前盒子在浏览器中的位置以及自身占据的空间的大小，除了 width 和 height 以外的属性是相对于 视图窗口的左上角 来计算的。
    setRefNameObj({
      [refName + 'X']: left,
      [refName + 'Y']: top,
      [refName + 'Width']: right - left,
      [refName + 'Height']: bottom - top
    })
  }, [element])

  return {
    [refName + 'X']: refNameObj[refName + 'X'],
    [refName + 'Y']: refNameObj[refName + 'Y'],
    [refName + 'Width']: refNameObj[refName + 'Width'],
    [refName + 'Height']: refNameObj[refName + 'Height']
  }
}
