import "./App.css"
import illustration from "./images/illustration-hero.svg"
import iconMusic from "./images/icon-music.svg"
import { Button } from "./components/Button"
import React from "react"

function App() {
  return (
    <div className="App">
      <header>
        <img className="hero-image" src={illustration} alt="hero" />
      </header>
      <main>
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, podcasts on any
          device anywhere you like!
        </p>
        <form className="form">
          <div className="form-control">
            <img src={iconMusic} alt="music icon" />
            <div className="plan-type">
              <h2>Annual Plan</h2>
              <h3>$59.99/year</h3>
            </div>
            <a className="form-choice" href="#">
              Change
            </a>
          </div>
          <Button classes={"payment-btn"} text={"Proceed to Payment"} />
          <a className="cancel-choice" href="#">
            Cancel Order
          </a>
        </form>
      </main>
    </div>
  )
}

export default App

// Order Summary

// You can now listen to millions of songs, audiobooks, and podcasts on any
// device anywhere you like!

// Annual Plan
// $59.99/year

// Change

// Proceed to Payment
// Cancel Order
