import React from 'react';
import dashboard_icon from '../img/63e3b36927c9c709c8e76884_home 1.png';
import guarantor_icon from '../img/63e3b36912de1a338fd356b5_users 1.png';
import loans_icon from '../img/63e3b3699aaff1df2916ee4b_sack 1.png';
import decision_icon from '../img/63e3b36943813b6cf1a1ceaf_handshake-regular 1.png';
import savings_icon from '../img/63e3b36ed0229433a6ac948f_piggy-bank 1.png';
import request_icon from '../img/63e3b36e43813be2bba1cebc_Group 104.png';
import whitelist_icon from '../img/63e3b36e578d3ecebcef647a_user-check 1.png';
import karma_icon from '../img/63e3b36e3bcbd6013a5cd089_user-times 1.png';
import organization_icon from '../img/63e3b3695e80c8b31a59f15b_briefcase 1.png';
import loanprod_icon from '../img/63e3b36e43813be2bba1cebc_Group 104.png';
import savingsprod_icon from '../img/63e3b36dc65bec7dd7382fbd_Group.png';
import feesCharges_icon from '../img/63e3b36d5243feb596bf5d52_coins-solid 1.png';
import trans_icon from '../img/63e3b36d76f6461cfbe2830b_icon.png';
import services_icon from '../img/63e3b36daf3b7b04c69992b7_galaxy 1.png';
import service_icon from '../img/63e3b36c9e422f7eb39c462d_user-cog 1.png';
import settlements_icon from '../img/63e3b36c9cdc534c02fac926_scroll 1.png';
import report_icon from '../img/63e3b36c1f55e17a60fb7625_chart-bar 2.png';
import pref_icon from '../img/63e3b36c3af22dfc4b75cb05_sliders-h 1.png';
import fees_icon from '../img/63e3b36c96258f23aff94611_badge-percent 1.png';
import audit_icon from '../img/63e3b36c99c762f5ab41f906_clipboard-list 1.png';
import sysmsg_icon from '../img/63e3b36bb40e374e01bfb1d7_tire 1.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();
  return (
    <div className="sidebar">
        <ul role="list" className="w-list-unstyled">
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal'; } } to={'/dashboard'}>
                <img src={ dashboard_icon } loading="lazy" alt="" />
                <div>Dashboard</div>
            </NavLink>
            <li className="menu-heading">
                <div>Customers</div>
            </li>
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal';}} to={'/pagenotfound'}>
                <img src={ guarantor_icon } loading="lazy" alt="" className='menu-icon' /><div>Gurantors</div>
            </NavLink>
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal';}} to={'/pagenotfound'}>
                <img src={ loans_icon } loading="lazy" alt="" className='menu-icon' /><div>Loans</div>
            </NavLink>
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal';}} to={'/pagenotfound'}>
                <img src={ decision_icon } loading="lazy" alt="" className='menu-icon' /><div>Decision Models</div>
            </NavLink>
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal';}} to={'/pagenotfound'}>
                <img src={ savings_icon } loading="lazy" alt="" className='menu-icon' /><div>Savings</div>
            </NavLink>
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal';}} to={'/pagenotfound'}>
                <img src={request_icon} loading="lazy" alt="" className="menu-icon"/><div className="text-block-3">Loan Requests</div>
            </NavLink>
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal';}} to={'/pagenotfound'}>
                <img src={whitelist_icon} loading="lazy" alt="" className="menu-icon"/><div className="text-block-3">Whitelist</div>
            </NavLink>
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal';}} to={'/pagenotfound'}>
                <img src={ karma_icon } loading="lazy" alt="" className="menu-icon"/><div className="text-block-3">Karma</div>
            </NavLink>
            <li className="menu-heading"><div>Businesses</div></li>
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal';}} to={'/pagenotfound'}>
                <img src={ organization_icon } loading="lazy" alt="" className="menu-icon"/><div className="text-block-3">Organization</div>
            </NavLink>
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal';}} to={'/pagenotfound'}>
                <img src={ loanprod_icon } loading="lazy" alt="" className="menu-icon"/><div className="text-block-3">Loan Products</div>
            </NavLink>
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal';}} to={'/pagenotfound'}>
                <img src={ savingsprod_icon } loading="lazy" alt="" className="menu-icon"/><div className="text-block-3">Savings Products</div>
            </NavLink>
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal';}} to={'/pagenotfound'}>
                <img src={ feesCharges_icon } loading="lazy" alt="" className="menu-icon"/><div className="text-block-3">Fees and Charges</div>
            </NavLink>
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal';}} to={'/pagenotfound'}>
                <img src={ trans_icon} loading="lazy" alt="" className="menu-icon"/><div className="text-block-3">Transactions</div>
            </NavLink>
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal';}} to={'/pagenotfound'}>
                <img src={ services_icon } loading="lazy" alt="" className="menu-icon"/><div className="text-block-3">Services</div>
            </NavLink>
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal';}} to={'/pagenotfound'}><img src={ service_icon } loading="lazy" alt="" className="menu-icon"/><div className="text-block-3">Service Account</div>
            </NavLink>
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal';}} to={'/pagenotfound'}><img src={settlements_icon} loading="lazy" alt="" className="menu-icon"/><div className="text-block-3">Settlements</div>
            </NavLink>
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal';}} to={'/pagenotfound'}><img src={report_icon} loading="lazy" alt="" className="menu-icon"/><div className="text-block-3">Reports</div>
            </NavLink>
            <li className="menu-heading"><div>Businesses</div></li>
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal';}} to={'/pagenotfound'}><img src={pref_icon} loading="lazy" alt="" className="menu-icon"/><div className="text-block-3">Preferences</div>
            </NavLink>
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal';}} to={'/pagenotfound'}><img src={fees_icon} loading="lazy" alt="" className="menu-icon"/><div className="text-block-3">Fees and Pricing</div>
            </NavLink>
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal';}} to={'/pagenotfound'}><img src={audit_icon} loading="lazy" alt="" className="menu-icon"/><div className="text-block-3">Audit Logs</div>
            </NavLink>
            <NavLink className={(nav) => { return nav.isActive ? 'menu-item link-text-normal active' : 'menu-item link-text-normal';}} to={'/pagenotfound'}><img src={sysmsg_icon} loading="lazy" alt="" className="menu-icon"/><div className="text-block-3">System Messages</div>
            </NavLink>
        </ul>
        <div className="sidebar-bottom">
            <ul role="list" className="w-list-unstyled">
                <li className="menu-item" onClick={()=>{localStorage.setItem('lendsqr.authenticated', 'false'); navigate('/login')}}><div className='menu-icon'></div><div>Log out</div></li>
            </ul>
            <div className="version">v1.2.0</div>
        </div>
    </div>
  );
}

export default Sidebar;



