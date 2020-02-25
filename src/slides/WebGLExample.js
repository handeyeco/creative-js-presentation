import React from 'react'
import bellwoods from './images/bellwoods.png'

export default function WebGLExample() {
  return (
    <section className="slide">
      <figure>
        <img src={bellwoods} alt="Bellwoods WebGL example" />
        <figcaption>
          <a href="https://bellwoods.xyz/"
            target="_blank"
            rel="noopener noreferrer">
            Bellwoods by Matt DesLauriers
          </a>
        </figcaption>
    </figure>
    </section>
  )
}