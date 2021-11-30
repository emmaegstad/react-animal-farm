import React from 'react'
import './Animal.css'

export default function Animal({ top, left, name, type, says }) {
  return (
    <>
      <div className="animal" style={{ top: top, left: left }}>
        <img height="100" src={`${process.env.PUBLIC_URL}/animals/${type}.svg`} />
        <span className="name">{name}</span>
        <span>{says}</span>
      </div>
    </>
  )
}
