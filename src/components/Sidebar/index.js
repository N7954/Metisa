import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import Logo from '../../assets/images/bar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <h2>Metisa</h2>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d44e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="news-link" to="/news">
                <FontAwesomeIcon icon={faNewspaper} color="#4d44e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d44e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://instagram.com/metisa_2022?igshid=N2ZiY2E3YmU='>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
);

export default Sidebar;