import React from 'react'

export default function JSvAPI() {
  return (
    <section className="slide">
      <h2>JavaScript v. Browser APIs</h2>
      <div className="flex-columns">
        <div>
          <div>
            <h3>JavaScript</h3>
            <ul>
              <li><code>Array.map</code></li>
              <li><code>Object.keys</code></li>
            </ul>
          </div>
        </div>

        <div>
          <div>
            <h3>Browser APIs</h3>
            <ul>
              <li><code>window.location</code></li>
              <li><code>document.querySelector</code></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}