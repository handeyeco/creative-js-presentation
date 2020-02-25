import React from 'react'
import bookOfShaders from './images/book-of-shaders.png'

export default function WebGLResource() {
  return (
    <section className="slide">
      <figure>
        <img src={bookOfShaders} alt="Book of Shaders cover" />
        <figcaption>
          <a href="https://thebookofshaders.com/"
            target="_blank"
            rel="noopener noreferrer">
            The Book of Shaders by Patricio Gonzalez Vivo and Jen Lowe
          </a>
        </figcaption>
    </figure>
    </section>
  )
}