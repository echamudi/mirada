import { ImageData } from './opencv'
export { FS } from './emscripten'

/**
 * Important: this options will be applied only in the first call to [loadOpencv] or when [force] is given.
 */
export interface LoadOptions {
  /**
   * Callback function to be called when library is ready to be used. (equivalent to promise resolve).
   */
  onloadCallback?: () => void

  /**
   * The location of opencv.js file to load. In the case of browser it can be a relative or absolute URL.
   */
  opencvJsLocation?: string

  /**
   * (Node.js only): current working dir. By default is '.'.
   */
  cwd?: string

  /**
   * Loads opencv_exception.js instead of default opencv.js file which has better exception handling for 
   * development at some cost on speed.
   */
  opencvJsExceptions?: boolean

  /**
   * Format proxies to be installed and loaded.
   */
  formatProxies?: FormatProxy[]

  /**
   * It will force the library loading - reloading it if it's already loaded
   */
  force?: boolean
}

/**
 * User provided image formats encode/decode implementation. The proxy is responsible of creating codec
 * instances
 *
 *  This is particularly useful in this library so it can actually contain the implementation of concrete
 *  Codecs (see [JimpCodec]) without actually being responsible of loading / instantiating the library which
 *  will have to be handled by a JimpProxy provided by a third party (test, playground/user) . In other words,
 *  mirada provides codecs implementations for several libraries and at the while keeping agnostic/independent
 *
 *  This is probably called only once and after obtaining a codec the same instance is used by the manager.
 *
 */
export type FormatProxy = FormatProxyClass | (() => FormatCodec) | (() => Promise<FormatCodec>)

/** 
 * a class-like representation for format proxy instead functions 
 * */
export interface FormatProxyClass {
  /**
   * This is probably called only once and after obtaining a codec the same instance is used by the manager.
   */
  create(): Promise<FormatCodec>
}

/**
 * Codec instances are created by format proxies and are responsible of encode and decode certain set of image
 * formats. See IMPORTANT: formats are lowercase and in general the common extension of files
 */
export interface FormatCodec {
  /**
 * Given an array buffer that contains the content of an encoded image it will return a decoded ImageData
 * object. The format parameter could be needed by some poor decoders that don't support file type sniffing.
 * For example, magica or jimp libraries don't need this.
 */
  decode(buffer: ArrayBuffer, format?: string): Promise<ImageData | undefined>
  /**
   * given an image data representing an unencoded raw image it will return an array buffer containing the
   * enconcoded image content in given format.
   */
  encode(data: ImageData, format: string, quality?: number): Promise<ArrayBuffer | undefined>
  /**
   * if provided an error will be thrown in case users request to decode to a format not included in this
   * list.
   */
  getSupportedDecodeFormats?(): string[]
  /**
   * if provided an error will be thrown in case users request to encode to a format not included in this
   * list.
   */
  getSupportedEncodeFormats?(): string[]
}
