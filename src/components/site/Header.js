import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    return (
        <header>
            <Navbar className='header'>
                <NavbarBrand href='/'>React Library</NavbarBrand>
                <NavItem>
                    <NavLink href='https://github.com/NBarnes94/ReactModule.git'>
                    </NavLink>
                </NavItem>
            </Navbar>
        </header>
    );
};

export default Header;