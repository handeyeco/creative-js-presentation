import React from 'react'
import tangaraFastuosa from './images/tangara-fastuosa.png'

export default function SVGExample() {
  return (
    <section className="slide">
      <figure>
        <img src={tangaraFastuosa} alt="Tangara Fastuosa SVG example" />
        <figcaption>
          <a href="https://vimeo.com/282220342"
            target="_blank"
            rel="noopener noreferrer">
            Tangara Fastuosa by Sarah GHP
          </a>
        </figcaption>
    </figure>
    </section>
  )
}