import React, {
  useState,
  useEffect,
  useRef
} from 'react'
import {
  Switch,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import './App.css'

import slides from './slides'

function App({
  location,
  history
}) {
  let currSlide = location.pathname.match(/^\/(\d+)/)
  currSlide = currSlide ? +currSlide[1] : 0
  currSlide = currSlide <= slides.length ? currSlide : 0
  
  const Slide = slides[currSlide]
  const progress = (currSlide / (slides.length - 1)) * 100
  
  const containerRef = useRef()
  useEffect(() => {
    function handleKeyPress(e) {
      switch (e.key) {
        case 'ArrowRight': {
          if (currSlide < slides.length - 1) {
            history.push(`${currSlide + 1}`)
          }
          break
        }
        case 'ArrowLeft': {
          if (currSlide > 0) {
            history.push(`${currSlide - 1}`)
          }
          break
        }
        case 'ArrowUp': {
          const curr = containerRef.current
          if (curr) {
            if (!document.fullscreenElement) {
              curr
                .requestFullscreen()
                .catch(err => console.error(err))
            } else {
              document.exitFullscreen()
            }
          }
          break
        }
        default: {}
      }
    }

    window.addEventListener('keyup', handleKeyPress)

    return () => {
      window.removeEventListener('keyup', handleKeyPress)
    }
  }, [currSlide, history])

  return (
    <div className="container" ref={containerRef}>
      <Switch>
        <Route exact path="/secret">
          <div className="secret">
            {
              slides.map((Slide, i) => (
                <Link to={`/${i}`} key={Slide.name + i}>
                  { `${i}. ${Slide.name}` }
                </Link>
              ))
            }
          </div>
        </Route>

        <Route>
          <div className="progress" style={{ width: `${progress}%`}}></div>

          <Slide />

          <nav className="nav">
            <span>
              {
                currSlide > 0 && (
                  <Link to={`/${currSlide - 1}`}>
                    <button type="button">←</button>
                  </Link>
                )
              }
            </span>

            <span>
              {
                currSlide < slides.length - 1 && (
                  <Link to={`/${currSlide + 1}`}>
                    <button type="button">→</button>
                  </Link>
                )
              }
            </span>
          </nav>
        </Route>
      </Switch>
    </div>
  )
}

export default withRouter(App)
