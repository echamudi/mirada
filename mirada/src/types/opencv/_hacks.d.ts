// Scalar, Point, Rect, etc are defined by opencv.js (helpers.js) and we need to declare them manually:

export declare class Range {
  public start: number
  public end: number
  public constructor(start: number, end: number)
}

export declare class Scalar extends Array<number> {
  public static all(...v: number[]): Scalar;
}
export { Scalar as GScalar }

export declare class Point {
  public constructor(x: number, y: number);
  public x: number;
  public y: number;
}

export { Point as Point2f }
export { Point as KeyPoint }
export { Point as Point2l }

export declare class Size {
  public constructor(width: number, height: number);
  public width: number;
  public height: number;
}

export { Size as Point2d }
export { Size as Size2d }
export { Size as Size2f }
export { Size as Size2l }

export declare class Rect {
  public constructor(x: number, y: number, width: number, height: number);
  public x: number;
  public y: number;
  public width: number;
  public height: number;
}

export { Rect as Rect_ }

export declare class TermCriteria {
  public type: number
  public maxCount: number
  public epsilon: number
  public constructor()
  public constructor(type: number, maxCount: number, epsilon: number)
}

export declare class MinMaxLoc {
  public minVal: number
  public maxVal: number
  public minLoc: Point
  public maxLoc: Point
  public constructor()
  public constructor(minVal: number, maxVal: number, minLoc: Point, maxLoc: Point)
}

// expose emscripten / opencv.js specifics

export declare function exceptionFromPtr(err: number): any
export declare function onRuntimeInitialized(): any
export declare function FS_createDataFile(arg0: string, path: string, data: Uint8Array, arg3: boolean, arg4: boolean, arg5: boolean): any

declare class Vector<T> {
  get(i: number): T
  set(i: number, t: T): void
  size(): number
  push_back(n: T): any
  resize(count: number, value?: T): void
  delete(): void
}

export declare class Vec3d extends Vector<any> { }
export declare class IntVector extends Vector<number> { }
export declare class FloatVector extends Vector<number> { }
export declare class DoubleVector extends Vector<number>{ }
export declare class PointVector extends Vector<Point> { }
export declare class RectVector extends Vector<Rect> { }
export declare class KeyPointVector extends Vector<any> { }
export declare class DMatchVector extends Vector<any> { }
export declare class DMatchVectorVector extends Vector<Vector<any>> { }

import {Mat} from '.'

export declare function  matFromImageData(imageData: ImageData): Mat

// Hack: expose Mat super classes like Mat_, InputArray, Vector, OutputArray we make them alias of Mat to
// simplify and make it work
export { Mat as InputArray } from './Mat'
export { Mat as InputArrayOfArrays } from './Mat'
export { Mat as InputOutputArray } from './Mat'
export { Mat as InputOutputArrayOfArrays } from './Mat'
export { Mat as MatVector } from './Mat'
export { Mat as OutputArray } from './Mat'
export { Mat as OutputArrayOfArrays } from './Mat'

/** since we don't support inheritance yet we force Mat to extend Mat_ which type defined here: */
export declare class Mat_ extends Vector<Mat> {
  public delete(): void
  public data: ImageData
  public ucharPtr(i: number, j: number): any
  public roi(rect: Rect): Mat
}

export declare class ImageData {
  data: ArrayBufferView
  width: number
  height: number
}

// TODO this types should be exposed by the tool - want to make it work:
export declare const CV_8UC1: number
export declare const CV_8U: number
export declare const CV_16S: number
export declare const CV_8UC3: any
export declare const CV_32S: number
export declare const CV_8S: number
export declare const CV_8UC4: number
export declare const CV_32F: number

// Missing imports: 
export type Mat4 = any
export type Mat3 = any
export type Vec3 = any
export type float_type = any
export type int = any
export type bool = any
export type FileNode = any
export type FileStorage = any
export type Ptr = any
export type size_t = any
export type double = any
export type DMatch = any
export type float = any
export type UMat = any
export type DetectionROI = any
export type Matrix = any
export type BucketKey = any
export type Bucket = any
export type LshStats = any
export type MatAllocator = any
export type uchar = any
export type MatSize = any
export type MatStep = any
export type UMatData = any
export type typename = any
export type Vec = any
export type Point_ = any
export type Point3_ = any
export type MatCommaInitializer_ = any
export type MatIterator_ = any
export type MatConstIterator_ = any
export type AccessFlag = any
export type UMatUsageFlags = any
export type _Tp = any
export type Matx_AddOp = any
export type Matx_SubOp = any
export type _T2 = any
export type Matx_ScaleOp = any
export type Matx_MulOp = any
export type Matx_DivOp = any
export type Matx_MatMulOp = any
export type Matx_TOp = any
export type diag_type = any
export type _EqPredicate = any
export type cvhalDFT = any
export type schar = any
export type ushort = any
export type short = any
export type int64 = any
export type ErrorCallback = any
export type unsigned = any
export type uint64 = any
export type float16_t = any
export type AsyncArray = any
export type Net = any
export type Moments = any
export type uint64_t = any
export type uint32_t = any
export type int32_t = any
export type int64_t = any

import {RotatedRect, LineTypes} from '.'
export declare function ellipse1(dst: Mat, rotatedRect: RotatedRect, ellipseColor: Scalar, arg0: number, line: LineTypes): void
