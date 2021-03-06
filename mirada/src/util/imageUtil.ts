import { isNode } from 'misc-utils-of-mine-generic'
import { File } from '../file'
import { EmscriptenEmbindInstance, Mat, Point, Scalar, Size } from '../types/opencv'

/**
 * Creates an CV ImageData object from given image.
 */
export function toImageData(img: Mat) {
  return {
    data: new Uint8ClampedArray(img.data),
    width: img.cols,
    height: img.rows
  }
}

export const asImageData = toImageData

export function isMat(m: any): m is Mat {
  return m && typeof m.rows === 'number' && typeof m.cols === 'number' && typeof m.data === 'object' && typeof m.copyTo === 'function'
}

/**
 * Returns a new image that is identical to given (1, 3 or 4 channels) but has 4 RGBA channels.
 */
export function toRgba(mat: Mat, dst = new cv.Mat()) {
  const depth = mat.type() % 8
  const scale = depth <= cv.CV_8S ? 1.0 : (depth <= cv.CV_32S ? 1.0 / 256.0 : 255.0)
  const shift = (depth === cv.CV_8S || depth === cv.CV_16S) ? 128.0 : 0.0
  mat.convertTo(dst, cv.CV_8U, scale, shift)
  switch (dst.type()) {
    case cv.CV_8UC1:
      cv.cvtColor(dst, dst, cv.COLOR_GRAY2RGBA)
      break
    case cv.CV_8UC3:
      cv.cvtColor(dst, dst, cv.COLOR_RGB2RGBA)
      break
    case cv.CV_8UC4:
      break
    default:
      throw new Error('Bad number of channels (Source image must have 1, 3 or 4 channels)')
  }
  return dst
}

export async function fromFile(f: string) {
  const file = await File.fromFile(f)
  return file.asMat()
}

export async function fromArrayBuffer(a: ArrayBuffer) {
  const file = await File.fromArrayBuffer(a)
  return file.asMat()
}

export async function fromUrl(f: string) {
  const file = await File.fromUrl(f)
  return file.asMat()
}

/** 
 * Compare two images by getting the L2 error (square-root of sum of squared error). The lower the result the more similar are the images. 
 */
export function compareL2(f1: Mat | File, f2: Mat | File, destroyBoth = false) {
  const a = asMat(f1), b = asMat(f2)
  if (a.rows > 0 && a.rows == b.rows && a.cols > 0 && a.cols == a.cols) {
    // Calculate the L2 relative error between images.
    const errorL2 = cv.norm1(a, b, cv.NORM_L2)
    // Convert to a reasonable scale, since L2 error is summed across all pixels of the image.
    const similarity = errorL2 / (a.rows * a.cols)
    destroyBoth && del(a, b)
    return similarity
  }
  else {
    //Images have a different size
    return 1.0
  }
}

export function asMat(f: File | Mat) {
  return File.isFile(f) ? f.asMat() : f
}

export function del(...m: (EmscriptenEmbindInstance)[]) {
  m.filter(m => !m.isDeleted()).forEach(m => m.delete())
}

/**
 * sets the color of pixel at coords (x,y) 
 */
export function set(m: Mat, x: number, y: number, val: Scalar) {
  const c = m.channels()
  let view = m.data
  for (let i = 0; i < val.length; i++) {
    view[y * c * m.cols + x * c + i] = val[i]
  }
}

/**
 * gets the color of pixel at coords (x,y) 
 */
export function get(m: Mat, x: number, y: number) {
  const c = m.channels()
  let view = m.data
  const v = []
  for (let i = 0; i < c; i++) {
    v.push(view[y * c * m.cols + x * c + i])
  }
  return v
}

export function map(mat: Mat, dst: Mat, fn: (p: Scalar, x: number, y: number) => Scalar) {
  for (let y = 0; y < mat.rows; y++) {
    for (let x = 0; x < mat.cols; x++) {
      const v = fn(get(mat, x, y), x, y)
      set(dst, x, y, v)
    }
  }
}

let _noArray: Mat
/**
 * for overload methods that won't accept undefined as argument, like 'mask' cv.add()
 */
export function noArray() {
  if (!_noArray) {
    _noArray = cv.Mat.ones(0, 0, cv.CV_8U)
  }
  return _noArray
}

export function pointToSize(p: Point) {
  return new cv.Size(p.x, p.y)
}

export function sizeToPoint(s: Size) {
  return new cv.Point(s.width, s.height)
}

export function isSize(size: any): size is Size {
  return typeof size === 'object' && typeof size.width === 'number'
}

/**
 * a serializable (as in JSON.stringify) representation of Mat instances
 */
export interface MatData {
  cols: number,
  rows: number,
  data: string,
  type: any
}

export function mat2data(m: Mat): MatData {
  return {
    rows: m.rows,
    cols: m.cols,
    type: m.type(),
    data: ab2str(m.data)
  }
}

export function data2mat(d: MatData): Mat {
  return cv.matFromArray(d.rows, d.cols, d.type, str2ab(d.data))
}

export function isMatData(d: any): d is MatData {
  return d && typeof d === 'object' && typeof d.rows === 'number' && typeof d.cols === 'number' && typeof d.type !== 'undefined' && Object.keys(d).sort().join(',') === 'cols,data,rows,type'
}

let _Buffer = require('buffer/').Buffer as typeof Buffer

if (isNode() && typeof _Buffer !== 'undefined') {
  _Buffer = Buffer
}

function ab2str(buf: Uint8Array) {
  return _Buffer.from(buf).toString('base64')
}

function str2ab(str: string) {
  return new Uint8Array(_Buffer.from(str, 'base64'))
}

/**
 * Executes JSON.stringify on JSON containing Mat instances.
 */
export function jsonStringifyWithMat(s: any): string {
  return JSON.stringify(s, (key, value) => {
    if (isMat(value)) {
      return mat2data(value)
    }
    else {
      return value
    }
  })
}

/**
 * Executes JSON.parse on JSON containing Mat instances.
 */
export function jsonParseWithMat(d: string) {
  return JSON.parse(d, (key, value) => {
    if (isMatData(value)) {
      return data2mat(value)
    }
    else {
      return value
    }
  })
}
