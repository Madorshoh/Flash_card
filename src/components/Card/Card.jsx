import React from 'react'
import './card.scss'

const Card = () => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-content">
          <div className="card-front">
            <p className="card-sub-title">DC Universe</p>
            <h1 className="card-title">The Flash</h1>
            <p className="card-sub-title">2023</p>
          </div>
          <div className="card-back">
            <h2 className="card-back-title">The Flash</h2>
            <p className="card-movie-description">
              <span>Synopsis: </span> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ad dolores, culpa maiores vero illo fugiat sed
              eum impedit ratione provident modi libero? Repellendus, non
              voluptatem.
            </p>
            <p className="card_genre">
              <span>Genre: </span> Action, adventure, Sci_Fi
            </p>
            <p className="card_release-date">
              <span>Release Date: </span>16 june, 2023
            </p>
            <a href="https://www.google.com" className="card-back_btn">
              Watch Trailer
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Card
