import React, { useState } from 'react'
import './App.css'

import slides from './slides'

function App() {
  const [slideIndex, setSlideIndex] = useState(0)
  const Slide = slides[slideIndex]

  return (
    <div>
      <Slide />

      <nav className="nav">
        <span>
          {
            slideIndex > 0 && (
              <button onClick={() => setSlideIndex(slideIndex - 1) }>←</button>
            )
          }
        </span>

        <span>
          {
            slideIndex < slides.length - 1 && (
              <button onClick={() => setSlideIndex(slideIndex + 1) }>→</button>
            )
          }
        </span>
      </nav>
    </div>
  )
}

export default App
