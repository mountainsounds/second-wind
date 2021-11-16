import { useState } from 'react';
import clsx from 'clsx';

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section id='homePage' className="hero is-info is-fullheight">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <span
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={clsx('navbar-burger', 'burger', isMenuOpen && 'is-active')}
                dataTarget="navbarMenu"
              >
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>

            <div id="navbarMenu" className={clsx('navbar-menu', isMenuOpen && 'is-active')}>
              <div className="navbar-end">
                <span className="navbar-item">
                  <a className="button is-white is-outlined" href="#">
                    <span>About</span>
                  </a>
                </span>
                <span className="navbar-item">
                  <a className="button is-white is-outlined" href="#">
                    <span>Rock</span>
                  </a>
                </span>
                <span className="navbar-item">
                  <a className="button is-white is-outlined" href="#">
                    <span>Winter</span>
                  </a>
                </span>
                <span className="navbar-item">
                  <a className="button is-white is-outlined" href="#">
                    <span>Books</span>
                  </a>
                </span>
                <span className="navbar-item">
                  <a className="button is-white is-outlined" href="#">
                    <span>Van</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <div id='welcomeInfo' className="column is-6 is-offset-3">
            <h1 className="title"> Welcome </h1>
            <h2 className="subtitle"> My name is Zack. I am a climber currently residing in Boston. </h2>
            <h2 className="subtitle"> I am selling some gear, including an outfitted Ford Transit Connect! </h2>
            <h2 className="subtitle"> Please email me at mountainsounds15@gmail.com if interested or with questions. </h2>

          </div>
        </div>
      </div>

    </section >
  )
}
