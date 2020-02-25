import React from 'react'
import codingTrain from './images/coding-train.png'

export default function CanvasResource() {
  return (
    <section className="slide">
      <figure>
        <img src={codingTrain} alt="Coding Train snapshot" />
        <figcaption>
          <a href="https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw"
            target="_blank"
            rel="noopener noreferrer">
            The Coding Train by Dan Shiffman
          </a>
        </figcaption>
    </figure>
    </section>
  )
}