import clsx from 'clsx';

const Hamburger = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
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
    )
}

export default Hamburger;