import clsx from 'clsx';
import NavItem from './NavItem';

const navItems = [
    { link: '/', title: 'About' }, { link: '/rock', title: 'Rock' },
    { link: '/winter', title: 'Winter' }, { link: '/books', title: 'Books' },
    { link: '/other', title: 'Other' }
]

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <div id="navbarMenu" className={clsx('navbar-menu', isMenuOpen && 'is-active')}>
            <div className="navbar-end">
                {navItems.map((itemInfo, i) => <NavItem key={i} itemInfo={itemInfo} />)}
            </div>
        </div>
    )
}

export default Menu