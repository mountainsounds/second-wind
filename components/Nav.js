import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="hero-head">
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <span
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={clsx('navbar-burger', 'burger', isMenuOpen && 'is-active')}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>

                    <div id="navbarMenu" className={clsx('navbar-menu', isMenuOpen && 'is-active')}>
                        <div className="navbar-end">
                            <span className="navbar-item">
                                <Link href='/'>
                                    <a className="button is-white is-outlined">
                                        <span>About</span>
                                    </a>
                                </Link>
                            </span>
                            <span className="navbar-item">
                                <Link href='/rock'>
                                    <a className="button is-white is-outlined">
                                        <span>Rock</span>
                                    </a>
                                </Link>
                            </span>
                            <span className="navbar-item">
                                <Link href='/winter'>
                                    <a className="button is-white is-outlined">
                                        <span>Winter</span>
                                    </a>
                                </Link>
                            </span>
                            <span className="navbar-item">
                                <Link href='/books'>
                                    <a className="button is-white is-outlined">
                                        <span>Books</span>
                                    </a>
                                </Link>
                            </span>
                            <span className="navbar-item">
                                <Link href='/van'>
                                    <a className="button is-white is-outlined">
                                        <span>Van</span>
                                    </a>
                                </Link>
                            </span>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;