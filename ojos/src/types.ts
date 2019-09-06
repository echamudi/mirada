export enum SolveMethodEnum {
  SOLVEPNP_ITERATIVE = 'SOLVEPNP_ITERATIVE',
  SOLVEPNP_EPNP = 'SOLVEPNP_EPNP',
  SOLVEPNP_P3P = 'SOLVEPNP_P3P',
  SOLVEPNP_DLS = 'SOLVEPNP_DLS',
  SOLVEPNP_UPNP = 'SOLVEPNP_UPNP',
  SOLVEPNP_AP3P = 'SOLVEPNP_AP3P',
  SOLVEPNP_IPPE = 'SOLVEPNP_IPPE',
  SOLVEPNP_IPPE_SQUARE = 'SOLVEPNP_IPPE_SQUARE',
}

export enum ThresholdEnum {
  THRESH_BINARY = 'THRESH_BINARY',
  THRESH_BINARY_INV = 'THRESH_BINARY_INV',
  THRESH_TRUNC = 'THRESH_TRUNC',
  THRESH_TOZERO = 'THRESH_TOZERO',
  THRESH_TOZERO_INV = 'THRESH_TOZERO_INV',
  THRESH_MASK = 'THRESH_MASK',
  THRESH_OTSU = 'THRESH_OTSU',
  THRESH_TRIANGLE = 'THRESH_TRIANGLE',
}

export enum AdaptiveThresholdEnum {
  ADAPTIVE_THRESH_GAUSSIAN_C = 'ADAPTIVE_THRESH_GAUSSIAN_C',
  ADAPTIVE_THRESH_MEAN_C = 'ADAPTIVE_THRESH_MEAN_C'
}

export enum MorphTypesEnum {
  MORPH_ERODE = 'MORPH_ERODE',
  MORPH_DILATE = 'MORPH_DILATE',
  MORPH_OPEN = 'MORPH_OPEN',
  MORPH_CLOSE = 'MORPH_CLOSE',
  MORPH_GRADIENT = 'MORPH_GRADIENT',
  MORPH_TOPHAT = 'MORPH_TOPHAT',
  MORPH_BLACKHAT = 'MORPH_BLACKHAT',
}
