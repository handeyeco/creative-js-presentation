import React from 'react'

export default function Library() {
  return (
    <section className="slide">
      <h2>So what's a library?</h2>

      <ul>
        <li>JavaScript is an interpretted language</li>
        <li>Browsers are environments that run JavaScript</li>
        <li>Browser APIs let JS devs access browser-specific features</li>
        <li>A library is code written by devs to help other devs</li>
        <ul>
          <li>Can be used to augment JavaScript</li>
          <li>Can be used for abstractions over Browser APIs</li>
        </ul>
      </ul>
    </section>
  )
}