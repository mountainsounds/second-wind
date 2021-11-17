
const NavItem = ({ itemInfo }) => {
    return (
        <span className="navbar-item">
            <Link href={itemInfo.link}>
                <a className="button is-white is-outlined">
                    <span>{itemInfo.title}</span>
                </a>
            </Link>
        </span >
    )
}

export default NavItem;