import React from 'react'
import latentCycles from './images/latent-cycles.png'

export default function WebAudioExample() {
  return (
    <section className="slide">
      <figure>
        <img src={latentCycles} alt="Latent Cycles Web Audio example" />
        <figcaption>
          <a href="https://codepen.io/teropa/full/rdoPbG"
            target="_blank"
            rel="noopener noreferrer">
            Latent Cycles by Tero Parviainen
          </a>
        </figcaption>
    </figure>
    </section>
  )
}