import React from 'react'

export default function MoreLibraries() {
  return (
    <section className="slide">
      <h2>Machine Learning for Web Artists</h2>

      <ul>
        <li>
          ML5 -&nbsp;
          <a href="https://ml5js.org/"
            target="_blank"
            rel="noopener noreferrer">
              ml5js.org
          </a>
        </li>
        <ul>
          <li>Affiliated with P5</li>
          <li>Built on Google's TensorFlow</li>
          <li>Designed to be accessible to beginners</li>
        </ul>
        <li>
          Magenta -&nbsp;
          <a href="https://magenta.tensorflow.org/"
            target="_blank"
            rel="noopener noreferrer">
              magenta.tensorflow.org
          </a>
        </li>
        <ul>
          <li>Created by Google</li>
          <li>Built on Google's TensorFlow</li>
          <li>Heavy focus on ML for music</li>
        </ul>
      </ul>
    </section>
  )
}