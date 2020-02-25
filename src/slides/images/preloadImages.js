import bellwoods from './bellwoods.png'
import bookofShaders from './book-of-shaders.png'
import codingTrain from './coding-train.png'
import latentCycles from './latent-cycles.png'
import patatap from './patatap.jpg'
import singleDiv from './single-div.png'
import tangaraFastuosa from './tangara-fastuosa.png'
import webAudioApi from './web-audio-api.jpg'

export default function preloadImages() {
  [
    bellwoods,
    bookofShaders,
    codingTrain,
    latentCycles,
    patatap,
    singleDiv,
    tangaraFastuosa,
    webAudioApi,
  ].forEach(url => {
    const img = new Image()
    img.src = url
  })
}