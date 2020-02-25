import React from 'react'
import webAudioAPI from './images/web-audio-api.jpg'

export default function WebAudioResource() {
  return (
    <section className="slide">
      <figure>
        <img src={webAudioAPI} alt="Web Audio API cover" />
        <figcaption>
          <a href="https://webaudioapi.com/book/"
            target="_blank"
            rel="noopener noreferrer">
            Web Audio API by Boris Smus
          </a>
        </figcaption>
    </figure>
    </section>
  )
}