import React from 'react'

export default function Canvas() {
  return (
    <section className="slide">
      <h2>Canvas API</h2>

      <ul>
        <li>API for 2D graphics (raster)</li>
        <li>JavaScript drawing primatives</li>
          <ul>
            <li><code>arc</code></li>
            <li><code>fillRect</code></li>
            <li><code>beginPath</code> / <code>endPath</code></li>
          </ul>
        <li>Pixel-by-pixel image manipulation</li>
        <li>Think MS Paint or Photoshop</li>
      </ul>
    </section>
  )
}