import React from 'react'
import patatap from './images/patatap.jpg'

export default function CanvasExample() {
  return (
    <section className="slide">
      <figure>
        <img src={patatap} alt="Patatap Canvas example" />
        <figcaption>
          <a href="https://patatap.com/"
            target="_blank"
            rel="noopener noreferrer">
            Patatap by Jono Brandel
          </a>
        </figcaption>
    </figure>
    </section>
  )
}