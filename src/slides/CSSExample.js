import React from 'react'
import singleDiv from './images/single-div.png'

export default function CSSExample() {
  return (
    <section className="slide">
      <figure>
        <img src={singleDiv} alt="A Single Div CSS example" />
        <figcaption>
          <a href="https://a.singlediv.com/"
            target="_blank"
            rel="noopener noreferrer">
            A Single Div by Lynn Fisher
          </a>
        </figcaption>
    </figure>
    </section>
  )
}