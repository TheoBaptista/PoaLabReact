import React, {useState, useEffect}  from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    // eslint-disable-next-line
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                   <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                       POALAB
                    </Link> 
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to='active' to='/' spy={true} smooth={true} offset={50} duration={500}
                             className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/AboutUs' className='nav-links' onClick={closeMobileMenu}>
                                Sobre Nós
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/Space' className='nav-links' onClick={closeMobileMenu}>
                                Espaço
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/Cards' className='nav-links' onClick={closeMobileMenu}>
                                Equipamentos
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/Calendar' className='nav-links' onClick={closeMobileMenu}>
                                Calendário
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/OpenDay' className='nav-links' onClick={closeMobileMenu}>
                                Informações
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/LinksSection' className='nav-links' onClick={closeMobileMenu}>
                                Links Úteis
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav> 
        </>
    )
}

export default Navbar;
