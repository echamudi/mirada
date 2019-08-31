
export const videoDisplay_ts: string = "import * as Mirada from 'mirada'\ndeclare var cv: Mirada.CV\n\n(async () => {\n  const video = document.getElementById('videoInput')! as HTMLVideoElement\n  const src = new cv.Mat(video.height, video.width, cv.CV_8UC4)\n  const dst = new cv.Mat(video.height, video.width, cv.CV_8UC1)\n  const FPS = 30\n  const canvas = document.getElementById('outputCanvas')! as HTMLCanvasElement\n  const cap = new cv.VideoCapture(video)\n  const processVideo = () => {\n    try {\n      if (!v.streaming) {\n        src.delete()\n        dst.delete()\n        return\n      } else {\n        const begin = Date.now()\n        cap.read(src)\n        cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY)\n        cv.imshow(canvas, dst)\n        const delay = 1000 / FPS - (Date.now() - begin)\n        setTimeout(processVideo, delay)\n      }\n    } catch (err) {\n      console.error(err)\n    }\n  }\n  const v = new Mirada.CameraHelper(video, canvas, processVideo)\n  setTimeout(v.start, 0)\n  setTimeout(v.stop, 10060)\n})()\n";
