import React from 'react'

export default function WebAudio() {
  return (
    <section className="slide">
      <h2>Web Audio API</h2>

      <ul>
        <li>API for generating and playing audio</li>
        <li>Provides low-level primatives</li>
          <ul>
            <li><code>OscillatorNode</code></li>
            <li><code>GainNode</code></li>
            <li><code>DelayNode</code></li>
          </ul>
        <li>A modular synthesizer is in every browser</li>
      </ul>
    </section>
  )
}