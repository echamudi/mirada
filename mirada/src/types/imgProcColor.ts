import { InputArray, OutputArray } from './opencv'

export interface CVImgProcColor {

  cvtColor(src: InputArray, dst: OutputArray, color?: ColorConversionCodes, dstCn?: number): void

  COLOR_BGR2BGRA: number
  COLOR_RGB2RGBA: number
  COLOR_BGRA2BGR: number
  COLOR_RGBA2RGB: number
  COLOR_BGR2RGBA: number
  COLOR_RGB2BGRA: number
  COLOR_RGBA2BGR: number
  COLOR_BGRA2RGB: number
  COLOR_BGR2RGB: number
  COLOR_RGB2BGR: number
  COLOR_BGRA2RGBA: number
  COLOR_RGBA2BGRA: number
  COLOR_BGR2GRAY: number
  COLOR_RGB2GRAY: number
  COLOR_GRAY2BGR: number
  COLOR_GRAY2RGB: number
  COLOR_GRAY2BGRA: number
  COLOR_GRAY2RGBA: number
  COLOR_BGRA2GRAY: number
  COLOR_RGBA2GRAY: number
  COLOR_BGR2BGR565: number
  COLOR_RGB2BGR565: number
  COLOR_BGR5652BGR: number
  COLOR_BGR5652RGB: number
  COLOR_BGRA2BGR565: number
  COLOR_RGBA2BGR565: number
  COLOR_BGR5652BGRA: number
  COLOR_BGR5652RGBA: number
  COLOR_GRAY2BGR565: number
  COLOR_BGR5652GRAY: number
  COLOR_BGR2BGR555: number
  COLOR_RGB2BGR555: number
  COLOR_BGR5552BGR: number
  COLOR_BGR5552RGB: number
  COLOR_BGRA2BGR555: number
  COLOR_RGBA2BGR555: number
  COLOR_BGR5552BGRA: number
  COLOR_BGR5552RGBA: number
  COLOR_GRAY2BGR555: number
  COLOR_BGR5552GRAY: number
  COLOR_BGR2XYZ: number
  COLOR_RGB2XYZ: number
  COLOR_XYZ2BGR: number
  COLOR_XYZ2RGB: number
  COLOR_BGR2YCrCb: number
  COLOR_RGB2YCrCb: number
  COLOR_YCrCb2BGR: number
  COLOR_YCrCb2RGB: number
  COLOR_BGR2HSV: number
  COLOR_RGB2HSV: number
  COLOR_BGR2Lab: number
  COLOR_RGB2Lab: number
  COLOR_BGR2Luv: number
  COLOR_RGB2Luv: number
  COLOR_BGR2HLS: number
  COLOR_RGB2HLS: number
  COLOR_HSV2BGR: number
  COLOR_HSV2RGB: number
  COLOR_Lab2BGR: number
  COLOR_Lab2RGB: number
  COLOR_Luv2BGR: number
  COLOR_Luv2RGB: number
  COLOR_HLS2BGR: number
  COLOR_HLS2RGB: number
  COLOR_BGR2HSV_FULL: number
  COLOR_RGB2HSV_FULL: number
  COLOR_BGR2HLS_FULL: number
  COLOR_RGB2HLS_FULL: number
  COLOR_HSV2BGR_FULL: number
  COLOR_HSV2RGB_FULL: number
  COLOR_HLS2BGR_FULL: number
  COLOR_HLS2RGB_FULL: number
  COLOR_LBGR2Lab: number
  COLOR_LRGB2Lab: number
  COLOR_LBGR2Luv: number
  COLOR_LRGB2Luv: number
  COLOR_Lab2LBGR: number
  COLOR_Lab2LRGB: number
  COLOR_Luv2LBGR: number
  COLOR_Luv2LRGB: number
  COLOR_BGR2YUV: number
  COLOR_RGB2YUV: number
  COLOR_YUV2BGR: number
  COLOR_YUV2RGB: number
  COLOR_YUV2RGB_NV12: number
  COLOR_YUV2BGR_NV12: number
  COLOR_YUV2RGB_NV21: number
  COLOR_YUV2BGR_NV21: number
  COLOR_YUV420sp2RGB: number
  COLOR_YUV420sp2BGR: number
  COLOR_YUV2RGBA_NV12: number
  COLOR_YUV2BGRA_NV12: number
  COLOR_YUV2RGBA_NV21: number
  COLOR_YUV2BGRA_NV21: number
  COLOR_YUV420sp2RGBA: number
  COLOR_YUV420sp2BGRA: number
  COLOR_YUV2RGB_YV12: number
  COLOR_YUV2BGR_YV12: number
  COLOR_YUV2RGB_IYUV: number
  COLOR_YUV2BGR_IYUV: number
  COLOR_YUV2RGB_I420: number
  COLOR_YUV2BGR_I420: number
  COLOR_YUV420p2RGB: number
  COLOR_YUV420p2BGR: number
  COLOR_YUV2RGBA_YV12: number
  COLOR_YUV2BGRA_YV12: number
  COLOR_YUV2RGBA_IYUV: number
  COLOR_YUV2BGRA_IYUV: number
  COLOR_YUV2RGBA_I420: number
  COLOR_YUV2BGRA_I420: number
  COLOR_YUV420p2RGBA: number
  COLOR_YUV420p2BGRA: number
  COLOR_YUV2GRAY_420: number
  COLOR_YUV2GRAY_NV21: number
  COLOR_YUV2GRAY_NV12: number
  COLOR_YUV2GRAY_YV12: number
  COLOR_YUV2GRAY_IYUV: number
  COLOR_YUV2GRAY_I420: number
  COLOR_YUV420sp2GRAY: number
  COLOR_YUV420p2GRAY: number
  COLOR_YUV2RGB_UYVY: number
  COLOR_YUV2BGR_UYVY: number
  COLOR_YUV2RGB_Y422: number
  COLOR_YUV2BGR_Y422: number
  COLOR_YUV2RGB_UYNV: number
  COLOR_YUV2BGR_UYNV: number
  COLOR_YUV2RGBA_UYVY: number
  COLOR_YUV2BGRA_UYVY: number
  COLOR_YUV2RGBA_Y422: number
  COLOR_YUV2BGRA_Y422: number
  COLOR_YUV2RGBA_UYNV: number
  COLOR_YUV2BGRA_UYNV: number
  COLOR_YUV2RGB_YUY2: number
  COLOR_YUV2BGR_YUY2: number
  COLOR_YUV2RGB_YVYU: number
  COLOR_YUV2BGR_YVYU: number
  COLOR_YUV2RGB_YUYV: number
  COLOR_YUV2BGR_YUYV: number
  COLOR_YUV2RGB_YUNV: number
  COLOR_YUV2BGR_YUNV: number
  COLOR_YUV2RGBA_YUY2: number
  COLOR_YUV2BGRA_YUY2: number
  COLOR_YUV2RGBA_YVYU: number
  COLOR_YUV2BGRA_YVYU: number
  COLOR_YUV2RGBA_YUYV: number
  COLOR_YUV2BGRA_YUYV: number
  COLOR_YUV2RGBA_YUNV: number
  COLOR_YUV2BGRA_YUNV: number
  COLOR_YUV2GRAY_UYVY: number
  COLOR_YUV2GRAY_YUY2: number
  COLOR_YUV2GRAY_Y422: number
  COLOR_YUV2GRAY_UYNV: number
  COLOR_YUV2GRAY_YVYU: number
  COLOR_YUV2GRAY_YUYV: number
  COLOR_YUV2GRAY_YUNV: number
  COLOR_RGBA2mRGBA: number
  COLOR_mRGBA2RGBA: number
  COLOR_RGB2YUV_I420: number
  COLOR_BGR2YUV_I420: number
  COLOR_RGB2YUV_IYUV: number
  COLOR_BGR2YUV_IYUV: number
  COLOR_RGBA2YUV_I420: number
  COLOR_BGRA2YUV_I420: number
  COLOR_RGBA2YUV_IYUV: number
  COLOR_BGRA2YUV_IYUV: number
  COLOR_RGB2YUV_YV12: number
  COLOR_BGR2YUV_YV12: number
  COLOR_RGBA2YUV_YV12: number
  COLOR_BGRA2YUV_YV12: number
  COLOR_BayerBG2BGR: number
  COLOR_BayerGB2BGR: number
  COLOR_BayerRG2BGR: number
  COLOR_BayerGR2BGR: number
  COLOR_BayerBG2RGB: number
  COLOR_BayerGB2RGB: number
  COLOR_BayerRG2RGB: number
  COLOR_BayerGR2RGB: number
  COLOR_BayerBG2GRAY: number
  COLOR_BayerGB2GRAY: number
  COLOR_BayerRG2GRAY: number
  COLOR_BayerGR2GRAY: number
  COLOR_BayerBG2BGR_VNG: number
  COLOR_BayerGB2BGR_VNG: number
  COLOR_BayerRG2BGR_VNG: number
  COLOR_BayerGR2BGR_VNG: number
  COLOR_BayerBG2RGB_VNG: number
  COLOR_BayerGB2RGB_VNG: number
  COLOR_BayerRG2RGB_VNG: number
  COLOR_BayerGR2RGB_VNG: number
  COLOR_BayerBG2BGR_EA: number
  COLOR_BayerGB2BGR_EA: number
  COLOR_BayerRG2BGR_EA: number
  COLOR_BayerGR2BGR_EA: number
  COLOR_BayerBG2RGB_EA: number
  COLOR_BayerGB2RGB_EA: number
  COLOR_BayerRG2RGB_EA: number
  COLOR_BayerGR2RGB_EA: number
  COLOR_BayerBG2BGRA: number
  COLOR_BayerGB2BGRA: number
  COLOR_BayerRG2BGRA: number
  COLOR_BayerGR2BGRA: number
  COLOR_BayerBG2RGBA: number
  COLOR_BayerGB2RGBA: number
  COLOR_BayerRG2RGBA: number
  COLOR_BayerGR2RGBA: number
  COLOR_COLORCVT_MAX: number
}
export type ColorConversionCodes = CVImgProcColor['COLOR_BGR2BGRA'] | CVImgProcColor['COLOR_RGB2RGBA'] | CVImgProcColor['COLOR_BGRA2BGR'] | CVImgProcColor['COLOR_RGBA2RGB'] | CVImgProcColor['COLOR_BGR2RGBA'] | CVImgProcColor['COLOR_RGB2BGRA'] | CVImgProcColor['COLOR_RGBA2BGR'] | CVImgProcColor['COLOR_BGRA2RGB'] | CVImgProcColor['COLOR_BGR2RGB'] | CVImgProcColor['COLOR_RGB2BGR'] | CVImgProcColor['COLOR_BGRA2RGBA'] | CVImgProcColor['COLOR_RGBA2BGRA'] | CVImgProcColor['COLOR_BGR2GRAY'] | CVImgProcColor['COLOR_RGB2GRAY'] | CVImgProcColor['COLOR_GRAY2BGR'] | CVImgProcColor['COLOR_GRAY2RGB'] | CVImgProcColor['COLOR_GRAY2BGRA'] | CVImgProcColor['COLOR_GRAY2RGBA'] | CVImgProcColor['COLOR_BGRA2GRAY'] | CVImgProcColor['COLOR_RGBA2GRAY'] | CVImgProcColor['COLOR_BGR2BGR565'] | CVImgProcColor['COLOR_RGB2BGR565'] | CVImgProcColor['COLOR_BGR5652BGR'] | CVImgProcColor['COLOR_BGR5652RGB'] | CVImgProcColor['COLOR_BGRA2BGR565'] | CVImgProcColor['COLOR_RGBA2BGR565'] | CVImgProcColor['COLOR_BGR5652BGRA'] | CVImgProcColor['COLOR_BGR5652RGBA'] | CVImgProcColor['COLOR_GRAY2BGR565'] | CVImgProcColor['COLOR_BGR5652GRAY'] | CVImgProcColor['COLOR_BGR2BGR555'] | CVImgProcColor['COLOR_RGB2BGR555'] | CVImgProcColor['COLOR_BGR5552BGR'] | CVImgProcColor['COLOR_BGR5552RGB'] | CVImgProcColor['COLOR_BGRA2BGR555'] | CVImgProcColor['COLOR_RGBA2BGR555'] | CVImgProcColor['COLOR_BGR5552BGRA'] | CVImgProcColor['COLOR_BGR5552RGBA'] | CVImgProcColor['COLOR_GRAY2BGR555'] | CVImgProcColor['COLOR_BGR5552GRAY'] | CVImgProcColor['COLOR_BGR2XYZ'] | CVImgProcColor['COLOR_RGB2XYZ'] | CVImgProcColor['COLOR_XYZ2BGR'] | CVImgProcColor['COLOR_XYZ2RGB'] | CVImgProcColor['COLOR_BGR2YCrCb'] | CVImgProcColor['COLOR_RGB2YCrCb'] | CVImgProcColor['COLOR_YCrCb2BGR'] | CVImgProcColor['COLOR_YCrCb2RGB'] | CVImgProcColor['COLOR_BGR2HSV'] | CVImgProcColor['COLOR_RGB2HSV'] | CVImgProcColor['COLOR_BGR2Lab'] | CVImgProcColor['COLOR_RGB2Lab'] | CVImgProcColor['COLOR_BGR2Luv'] | CVImgProcColor['COLOR_RGB2Luv'] | CVImgProcColor['COLOR_BGR2HLS'] | CVImgProcColor['COLOR_RGB2HLS'] | CVImgProcColor['COLOR_HSV2BGR'] | CVImgProcColor['COLOR_HSV2RGB'] | CVImgProcColor['COLOR_Lab2BGR'] | CVImgProcColor['COLOR_Lab2RGB'] | CVImgProcColor['COLOR_Luv2BGR'] | CVImgProcColor['COLOR_Luv2RGB'] | CVImgProcColor['COLOR_HLS2BGR'] | CVImgProcColor['COLOR_HLS2RGB'] | CVImgProcColor['COLOR_BGR2HSV_FULL'] | CVImgProcColor['COLOR_RGB2HSV_FULL'] | CVImgProcColor['COLOR_BGR2HLS_FULL'] | CVImgProcColor['COLOR_RGB2HLS_FULL'] | CVImgProcColor['COLOR_HSV2BGR_FULL'] | CVImgProcColor['COLOR_HSV2RGB_FULL'] | CVImgProcColor['COLOR_HLS2BGR_FULL'] | CVImgProcColor['COLOR_HLS2RGB_FULL'] | CVImgProcColor['COLOR_LBGR2Lab'] | CVImgProcColor['COLOR_LRGB2Lab'] | CVImgProcColor['COLOR_LBGR2Luv'] | CVImgProcColor['COLOR_LRGB2Luv'] | CVImgProcColor['COLOR_Lab2LBGR'] | CVImgProcColor['COLOR_Lab2LRGB'] | CVImgProcColor['COLOR_Luv2LBGR'] | CVImgProcColor['COLOR_Luv2LRGB'] | CVImgProcColor['COLOR_BGR2YUV'] | CVImgProcColor['COLOR_RGB2YUV'] | CVImgProcColor['COLOR_YUV2BGR'] | CVImgProcColor['COLOR_YUV2RGB'] | CVImgProcColor['COLOR_YUV2RGB_NV12'] | CVImgProcColor['COLOR_YUV2BGR_NV12'] | CVImgProcColor['COLOR_YUV2RGB_NV21'] | CVImgProcColor['COLOR_YUV2BGR_NV21'] | CVImgProcColor['COLOR_YUV420sp2RGB'] | CVImgProcColor['COLOR_YUV420sp2BGR'] | CVImgProcColor['COLOR_YUV2RGBA_NV12'] | CVImgProcColor['COLOR_YUV2BGRA_NV12'] | CVImgProcColor['COLOR_YUV2RGBA_NV21'] | CVImgProcColor['COLOR_YUV2BGRA_NV21'] | CVImgProcColor['COLOR_YUV420sp2RGBA'] | CVImgProcColor['COLOR_YUV420sp2BGRA'] | CVImgProcColor['COLOR_YUV2RGB_YV12'] | CVImgProcColor['COLOR_YUV2BGR_YV12'] | CVImgProcColor['COLOR_YUV2RGB_IYUV'] | CVImgProcColor['COLOR_YUV2BGR_IYUV'] | CVImgProcColor['COLOR_YUV2RGB_I420'] | CVImgProcColor['COLOR_YUV2BGR_I420'] | CVImgProcColor['COLOR_YUV420p2RGB'] | CVImgProcColor['COLOR_YUV420p2BGR'] | CVImgProcColor['COLOR_YUV2RGBA_YV12'] | CVImgProcColor['COLOR_YUV2BGRA_YV12'] | CVImgProcColor['COLOR_YUV2RGBA_IYUV'] | CVImgProcColor['COLOR_YUV2BGRA_IYUV'] | CVImgProcColor['COLOR_YUV2RGBA_I420'] | CVImgProcColor['COLOR_YUV2BGRA_I420'] | CVImgProcColor['COLOR_YUV420p2RGBA'] | CVImgProcColor['COLOR_YUV420p2BGRA'] | CVImgProcColor['COLOR_YUV2GRAY_420'] | CVImgProcColor['COLOR_YUV2GRAY_NV21'] | CVImgProcColor['COLOR_YUV2GRAY_NV12'] | CVImgProcColor['COLOR_YUV2GRAY_YV12'] | CVImgProcColor['COLOR_YUV2GRAY_IYUV'] | CVImgProcColor['COLOR_YUV2GRAY_I420'] | CVImgProcColor['COLOR_YUV420sp2GRAY'] | CVImgProcColor['COLOR_YUV420p2GRAY'] | CVImgProcColor['COLOR_YUV2RGB_UYVY'] | CVImgProcColor['COLOR_YUV2BGR_UYVY'] | CVImgProcColor['COLOR_YUV2RGB_Y422'] | CVImgProcColor['COLOR_YUV2BGR_Y422'] | CVImgProcColor['COLOR_YUV2RGB_UYNV'] | CVImgProcColor['COLOR_YUV2BGR_UYNV'] | CVImgProcColor['COLOR_YUV2RGBA_UYVY'] | CVImgProcColor['COLOR_YUV2BGRA_UYVY'] | CVImgProcColor['COLOR_YUV2RGBA_Y422'] | CVImgProcColor['COLOR_YUV2BGRA_Y422'] | CVImgProcColor['COLOR_YUV2RGBA_UYNV'] | CVImgProcColor['COLOR_YUV2BGRA_UYNV'] | CVImgProcColor['COLOR_YUV2RGB_YUY2'] | CVImgProcColor['COLOR_YUV2BGR_YUY2'] | CVImgProcColor['COLOR_YUV2RGB_YVYU'] | CVImgProcColor['COLOR_YUV2BGR_YVYU'] | CVImgProcColor['COLOR_YUV2RGB_YUYV'] | CVImgProcColor['COLOR_YUV2BGR_YUYV'] | CVImgProcColor['COLOR_YUV2RGB_YUNV'] | CVImgProcColor['COLOR_YUV2BGR_YUNV'] | CVImgProcColor['COLOR_YUV2RGBA_YUY2'] | CVImgProcColor['COLOR_YUV2BGRA_YUY2'] | CVImgProcColor['COLOR_YUV2RGBA_YVYU'] | CVImgProcColor['COLOR_YUV2BGRA_YVYU'] | CVImgProcColor['COLOR_YUV2RGBA_YUYV'] | CVImgProcColor['COLOR_YUV2BGRA_YUYV'] | CVImgProcColor['COLOR_YUV2RGBA_YUNV'] | CVImgProcColor['COLOR_YUV2BGRA_YUNV'] | CVImgProcColor['COLOR_YUV2GRAY_UYVY'] | CVImgProcColor['COLOR_YUV2GRAY_YUY2'] | CVImgProcColor['COLOR_YUV2GRAY_Y422'] | CVImgProcColor['COLOR_YUV2GRAY_UYNV'] | CVImgProcColor['COLOR_YUV2GRAY_YVYU'] | CVImgProcColor['COLOR_YUV2GRAY_YUYV'] | CVImgProcColor['COLOR_YUV2GRAY_YUNV'] | CVImgProcColor['COLOR_RGBA2mRGBA'] | CVImgProcColor['COLOR_mRGBA2RGBA'] | CVImgProcColor['COLOR_RGB2YUV_I420'] | CVImgProcColor['COLOR_BGR2YUV_I420'] | CVImgProcColor['COLOR_RGB2YUV_IYUV'] | CVImgProcColor['COLOR_BGR2YUV_IYUV'] | CVImgProcColor['COLOR_RGBA2YUV_I420'] | CVImgProcColor['COLOR_BGRA2YUV_I420'] | CVImgProcColor['COLOR_RGBA2YUV_IYUV'] | CVImgProcColor['COLOR_BGRA2YUV_IYUV'] | CVImgProcColor['COLOR_RGB2YUV_YV12'] | CVImgProcColor['COLOR_BGR2YUV_YV12'] | CVImgProcColor['COLOR_RGBA2YUV_YV12'] | CVImgProcColor['COLOR_BGRA2YUV_YV12'] | CVImgProcColor['COLOR_BayerBG2BGR'] | CVImgProcColor['COLOR_BayerGB2BGR'] | CVImgProcColor['COLOR_BayerRG2BGR'] | CVImgProcColor['COLOR_BayerGR2BGR'] | CVImgProcColor['COLOR_BayerBG2RGB'] | CVImgProcColor['COLOR_BayerGB2RGB'] | CVImgProcColor['COLOR_BayerRG2RGB'] | CVImgProcColor['COLOR_BayerGR2RGB'] | CVImgProcColor['COLOR_BayerBG2GRAY'] | CVImgProcColor['COLOR_BayerGB2GRAY'] | CVImgProcColor['COLOR_BayerRG2GRAY'] | CVImgProcColor['COLOR_BayerGR2GRAY'] | CVImgProcColor['COLOR_BayerBG2BGR_VNG'] | CVImgProcColor['COLOR_BayerGB2BGR_VNG'] | CVImgProcColor['COLOR_BayerRG2BGR_VNG'] | CVImgProcColor['COLOR_BayerGR2BGR_VNG'] | CVImgProcColor['COLOR_BayerBG2RGB_VNG'] | CVImgProcColor['COLOR_BayerGB2RGB_VNG'] | CVImgProcColor['COLOR_BayerRG2RGB_VNG'] | CVImgProcColor['COLOR_BayerGR2RGB_VNG'] | CVImgProcColor['COLOR_BayerBG2BGR_EA'] | CVImgProcColor['COLOR_BayerGB2BGR_EA'] | CVImgProcColor['COLOR_BayerRG2BGR_EA'] | CVImgProcColor['COLOR_BayerGR2BGR_EA'] | CVImgProcColor['COLOR_BayerBG2RGB_EA'] | CVImgProcColor['COLOR_BayerGB2RGB_EA'] | CVImgProcColor['COLOR_BayerRG2RGB_EA'] | CVImgProcColor['COLOR_BayerGR2RGB_EA'] | CVImgProcColor['COLOR_BayerBG2BGRA'] | CVImgProcColor['COLOR_BayerGB2BGRA'] | CVImgProcColor['COLOR_BayerRG2BGRA'] | CVImgProcColor['COLOR_BayerGR2BGRA'] | CVImgProcColor['COLOR_BayerBG2RGBA'] | CVImgProcColor['COLOR_BayerGB2RGBA'] | CVImgProcColor['COLOR_BayerRG2RGBA'] | CVImgProcColor['COLOR_BayerGR2RGBA'] | CVImgProcColor['COLOR_COLORCVT_MAX']