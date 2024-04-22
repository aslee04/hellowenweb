import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'
import heroImage from './assets/hero-image.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <header className="header">
          <div className="logo">
            <a href="/" className='header__logo'>
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <nav className="navbar">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" className="nav__link">Home</a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">Services</a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">Success Stories</a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">Blog</a>
              </li>
            </ul>
          </nav>
          <button type='button' className='button'>Contact Us</button>
        </header>

        <section className="hero">
          <div className="hero__body">
            <h2 className="section__title">Designer FoxenStein</h2>
            <p className="section__description">We  create solutions that have top notch ui/ux designs and software development standards, suitable for best web products &  iOS & Android apps, crafted with love & passion.</p>

            <button type='button' className='section__button button'>Contact Us</button>
          </div>
          <div className="hero__image">
            <img src={heroImage} alt="Image" />
          </div>
        </section>
      </div>
    </>
  )
}

export default App
