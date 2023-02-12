import React, { useEffect, useState } from 'react';
import User from './models';
import users_img from "../img/63e3b36cc65bec01b2382fb2_icon (1).png";
import activeUsers_img from "../img/63e3b36c8ac6e52c5d1a0a80_icon (2).png";
import loanUsers_img from "../img/63e3b36bcb23218dad24b476_icon (4).png";
import savingsUser_img from "../img/63e3b36b76f64644d5e28302_icon (3).png";
import { useNavigate } from 'react-router-dom';


function Dashboard() {
    const [ users, setUsers ] = useState<User[]|undefined>([]);
    const [ activeUsers, setActiveUsers ] = useState<number>(0);
    const [ loanUsers, setLoanUsers ] = useState<number>(0);
    const [ accountUsers, setAccountUsers ] = useState<number>(0);
    const [ range, setRange ] = useState<number>(10);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
            const data:User[] = await response.json();
            setUsers(data);
            let activeUsers = 0,
            loanUsers = 0,
            accountUsers = 0,
            now = new Date('2094-07-07T04:04:50.090Z');
            users?.forEach((user)=>{
                if ((new Date(user.lastActiveDate)).getTime() < now.getTime()) activeUsers++
                if (Number(user.education.loanRepayment)) loanUsers++
                if (Number(user.accountBalance) > 0) accountUsers++
            })
            setActiveUsers(activeUsers); setLoanUsers(loanUsers); setAccountUsers(accountUsers);
        }

        fetchData();
    });

    function setViewRange():User[]|void {
        return users?.slice(0, range)
    }


  return (
    <div className="col col-py-4">
        <div className="container w-container">
            <div className="dashboard">
                <div className="_2-column">
                    <h1 className="heading-2">Users</h1>
                </div>
                <div className="_4-col-grid">
                    <div className="dashboard-card">
                        <div className="card-content-wrapper">
                            <img src={users_img} loading="lazy" alt="" className="dashboard-card-icon"/>
                            <div className="dashboard-card-title">Users</div>
                            <div className="dashboard-card-display">{ (users)? users.length : 0 }</div>
                        </div>
                    </div>
                    <div className="dashboard-card">
                        <div className="card-content-wrapper">
                            <img src={activeUsers_img} loading="lazy" alt="" className="dashboard-card-icon"/>
                            <div className="dashboard-card-title">Active Users</div>
                            <div className="dashboard-card-display">{ activeUsers }</div>
                        </div>
                    </div>
                    <div className="dashboard-card">
                        <div className="card-content-wrapper">
                            <img src={loanUsers_img} loading="lazy" alt="" className="dashboard-card-icon"/>
                            <div className="dashboard-card-title">Users With Loan</div>
                            <div className="dashboard-card-display">{ loanUsers }</div>
                        </div>
                    </div>
                    <div className="dashboard-card">
                        <div className="card-content-wrapper">
                            <img src={savingsUser_img} loading="lazy" alt="" className="dashboard-card-icon"/>
                            <div className="dashboard-card-title">Users with Savings</div>
                            <div className="dashboard-card-display">{ accountUsers }</div>
                        </div>
                    </div>
                </div>
            </div>

        {
            (users && users?.length > 0)?
            (<div className='content-wrapper table'>
                <table className="">
                <thead>
                    <tr className='tr-th'>
                        <th  className="">
                            <div className='th w-dropdown-toggle' id='w-dropdown-toggle-2' aria-controls='w-dropdown-list-2' aria-haspopup='menu' aria-expanded='false' role='button' tabIndex={0}>
                                <div>Organization </div><div className='font-icon'></div>
                            </div>
                            <nav className='dropdown-menu w-dropdown-list' id='w-dropdown-list-2' aria-labelledby='w-dropdown-toggle-2'>
                                <div className='filter-wrapper filters'>
                                    <div className='w-form'>
                                        <form id='email-form-3' name='email-form-3' data-name='Email Form 3' method='get' aria-label='Email Form 3'>
                                            <label>Organization</label>
                                            <select id='organization' name='organization' data-className='organization' className='form-field w-select'>

                                            </select>
                                            <label>Username</label>
                                            <input type='text' className='form-field w-input' maxLength={256} name='username' data-name='username' placeholder='User' id='username' />
                                            <label>Email</label>
                                        </form>
                                    </div>
                                </div>
                            </nav>
                        </th>
                        <th  className="">
                            <div className='col'>Username</div>
                            <div className="font-icon"></div>
                        </th>
                        <th className="">
                            <div className='col'>Email</div>
                            <div className="font-icon"></div>
                        </th>
                        <th  className="">
                            <div className='col'>Phone number</div>
                            <div className="font-icon"></div>
                        </th>
                        <th className="">
                            <div className='col'>Date joined</div>
                            <div className="font-icon"></div>
                        </th>
                        <th  className="">
                            <div className='col'>status</div>
                            <div className="font-icon"></div>
                        </th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        setViewRange()?.map((user)=>{
                            return (
                                <tr className='tr-th' key={user.id} onClick={()=>{ navigate(`/users/${user.id}`)}}>
                                    <td>{ user.orgName}</td>
                                    <td>{ user.userName }</td>
                                    <td>{ user.email }</td>
                                    <td>{ user.phoneNumber }</td>
                                    <td>{ new Date(user.lastActiveDate).toLocaleDateString() }</td>
                                    <td><div className='badge badge-success'>active</div></td>
                                    <td><div data-hover='false' data-delay='0' className='w-dropdown'>
                                            <div id='w-dropdown-toggle-3' className='dropdown-toggle w-dropdown-toggle' aria-controls='w-dropdown-list-3' aria-haspopup='menu' aria-expanded='false' role='button' tabIndex={0}>
                                                <div className='font-icon'></div>
                                            </div>
                                            <nav className='dropdown-menu w-dropdown-list' id='w-dropdown-list-3' aria-labelledby='w-dropdown-toggle-3'>
                                                <a href='' className='link-text-normal w-inline-block' tabIndex={0}>
                                                    <div className='font-icon'></div> View details
                                                </a>
                                                <a href='' className='link-text-normal w-inline-block' tabIndex={0}>
                                                    <div className='font-icon'></div> Activate user
                                                </a>
                                                <a href='' className='link-text-normal w-inline-block' tabIndex={0}>
                                                    <div className='font-icon'></div> Blacklist user
                                                </a>
                                            </nav>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>):(<div className='col col-py-2'><div className='align-center px-4'>Loading...</div></div>)
        }
        
        
        
        <div className="_2-column my-2">
            <div className="col d-flex">
                <div>Showing</div>
                <div className="w-form">
                    <form id="queryQuantity" name="queryQuantity" data-name="Query Quantity" method="get" aria-label="Query Quantity">
                        <select id="field" name="field" data-name="Field" className="w-select" onChange={(e)=>{ setRange(Number(e.target.value)); setViewRange(); }}>
                            <option value="10">10</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                        </select>
                    </form>
                </div>
                <div>out of 100</div>
            </div>

            <div className="col">
                <ul role="list" className="pagination w-list-unstyled">
                    <li className="pg_btn">
                        <div><div></div></div>
                    </li>
                    <li><a href="https://lendsqr-project.webflow.io/dashboard#">1</a>
                    </li>
                    <li><a href="https://lendsqr-project.webflow.io/dashboard#">2</a></li>
                    <li><a href="https://lendsqr-project.webflow.io/dashboard#">3</a></li>
                    <li><a href="https://lendsqr-project.webflow.io/dashboard#">4</a></li>
                    <li><a href="https://lendsqr-project.webflow.io/dashboard#">5</a></li>
                    <li className="pg_btn">
                        <div><div></div></div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </div>

  );
}

export default Dashboard;
