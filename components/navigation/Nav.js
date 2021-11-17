import { useState } from 'react';
import Link from 'next/link';
import Hamburger from './Hamburger';
import Menu from './Menu';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="hero-head">
            <nav className="navbar">
                <div className="container">
                    <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                    <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                </div>
            </nav>
        </div>
    )
}

export default Nav;