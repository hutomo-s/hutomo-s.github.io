import { useState } from 'react';
import {handleClickHash} from '../../../utils/Navigation/navigation';

function Navbar() {
    
    const navStyle = {
        backgroundColor: '#fff',
    }

    // reference: https://johnotu.medium.com/how-to-toggle-bootstrap-navbar-collapse-button-in-react-without-jquery-1d5c2fb0751c
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const handleClick = (e, sectionId) => {
        
        handleClickHash(e, sectionId)

        // collapse the navbar
        // short circuit operator
        isNavCollapsed === true || setIsNavCollapsed(true)
    };

    return (
        <>
            {/* navbar section */}
            <nav className="navbar navbar-expand-lg navbar-light sticky-top shadow-sm" style={navStyle}>
                <div class="container-fluid container">
                    <a class="navbar-brand" href="">Hutomo Sugianto</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleNavCollapse}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto me-auto- mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-body" aria-current="page" onClick={(e) => handleClick(e, "about")} href="#" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-body" onClick={(e) => handleClick(e, "education")} href="#">Education</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-body" onClick={(e) => handleClick(e, "experience")} href="#">Experience</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-body" onClick={(e) => handleClick(e, "skills")} href="#">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-body" onClick={(e) => handleClick(e, "portfolio")} href="#">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-body" onClick={(e) => handleClick(e, "connect")} href="#">Connect</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;