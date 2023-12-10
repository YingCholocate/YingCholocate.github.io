// 遍历
export const map = (v: number, d0: number, d1: number, r0: number, r1: number): number => {
  const t = (v - d0) / (d1 - d0)
  return r0 * (1 - t) + r1 * t
}

export function constrain(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

export function createMatrix(scale: number, rotation: number): object {
  const radian = (rotation * Math.PI) / 180
  const martix = {
    a: Math.cos(radian) * scale,
    b: Math.sin(radian) * scale,
    c: -Math.sin(radian) * scale,
    d: Math.cos(radian) * scale,
    e: 0,
    f: 0
  }

  return martix
}
