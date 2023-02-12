import React from 'react';
import logo from "../logo.svg";
import avartar from "../img/63e3b36ab1e1f8fde77479b8_avatar.png"

function Navbar() {
  return (
    <div className="navbar-logo-left wf-section">
            <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar-logo-left-container shadow-three w-nav">
                <div className="navbar-wrapper">
                    <a href="/" className="navbar-brand w-nav-brand">
                        <img src={logo} loading="lazy" alt=""/></a>
                        <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
                            <div className="form-block w-form">
                                <form id="search-form" name="search-form" data-name="Search Form" method="get" className="form-search" aria-label="Search Form">
                                    <input type="text" className="form-field search w-input" maxLength={256} name="search" data-name="search" placeholder="Search for anything" id="search"/>
                                    <input type="submit" value="" data-wait="Please wait..." className="submit-button font-icon w-button"/>
                                </form>
                            </div>

                            <ul role="list" className="nav-menu-two w-list-unstyled">
                                <li>
                                    <div className="nav-divider"></div>
                                </li>
                                <li>
                                    <a href="/" className="nav-link-accent">Docs</a>
                                </li>
                                <li className="notification">
                                    <div></div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <div className="nav-username-avartar">
                                            <img src={ avartar } loading="lazy" alt="" />
                                        </div>
                                        <div data-hover="false" data-delay='0' className='w-dropdown'>
                                            <div className='nav-username w-dropdown-toggle' id='w-dropdown-toggle-1' aria-controls='w-dropdown-list-1' aria-haspopup='menu' aria-aria-expanded='false' role='button' tabIndex={0}>
                                                <div>Adedeji</div>
                                                <div className='font-icon'></div>
                                            </div>
                                        </div>
                                        <nav className='dropdown-menu w-dropdown-list' id='w-dropdown-list-1' aria-labelledby='w-dropdown-toggle-1'>
                                            <a href='' className='link-text-normal w-inline-block' tabIndex={0}>
                                                <div className='font-icon'></div>
                                                <div>Logout</div>
                                            </a>
                                        </nav>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <div className="menu-button w-nav-button" aria-label="menu" role="button" tabIndex={0} aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
                            <div className="w-icon-nav-menu"></div>
                        </div>
                    </div>
                    <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
                </div>
            </div>
  );
}

export default Navbar;
