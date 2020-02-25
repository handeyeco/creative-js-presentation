import React from 'react'

export default function Tone() {
  return (
    <section className="slide">
      <h2>Tone - Web Audio Library</h2>

      <ul>
        <li>Free and Open Source (MIT)</li>
        <li>Adds essential synthesis tools</li>
        <ul>
          <li><code>Envelope</code></li>
          <li><code>PWMOscillator</code></li>
          <li><code>PitchShift</code></li>
        </ul>
        <li>Note / timing notation</li>
        <li>Includes several pre-designed instruments</li>
      </ul>

      <a href="https://tonejs.github.io/examples/polySynth.html"
        target="_blank"
        rel="noopener noreferrer">
          tonejs.github.io
      </a>
    </section>
  )
}