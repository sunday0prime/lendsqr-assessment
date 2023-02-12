import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import User from './models';
import default_avatar from '../img/63e4e7c97b0b6b543c32cafb_Ellipse 1.png';

function UserSummary() {

    const [ user, setUser ] = useState<User|undefined>();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`);
            const data:User = await response.json();
            setUser(data);
        }

        fetchData();
    })

    if (user) {
              return (
            <div className="col col-py-4">
                <div className='container w-container'>
                    <Link className="dashboard-nav w-inline-block" to='' onClick={()=> { navigate(-1)}}>
                        <div className="font-icon"></div>
                        <div className="text-block-7">Back to users</div>
                    </Link>
                    <div className="_2-column">
                        <h1 className="heading-2">Users</h1>
                        <div>
                            <button className='btn btn-danger w-button'>Blacklist User</button>
                            <button className='btn w-button'>Activate User</button>
                        </div>
                    </div>
                <div className="usersummary content-wrapper px-2">
                    <div className="d-flex align-middle">
                        <img src={ user?.profile.avartar||default_avatar } loading="lazy" alt="" className="user-summary-dp"/>
                        <div>
                            <div className="user-summary-title">{ user?.profile.firstName} { user?.profile.lastName }</div>
                            <div>{ user?.accountNumber}</div>
                        </div>
                        <div>
                            <div>User's Tier</div>
                            <div className="d-flex"><div className="font-icon"></div>
                            <div className="font-icon"></div>
                            <div className="font-icon"></div>
                        </div>
                    </div>
                    <div>
                        <div className="user-summary-title">N{ user?.accountBalance }</div>
                        <div>{ user?.profile.bvn} / Providus Bank</div>
                    </div>
                </div>
                <div className="tabs">
                    <div className="tab-item active">
                        <div>General details</div>
                    </div>
                    <div className="tab-item">
                        <div>Documents</div>
                    </div>
                    <div className="tab-item">
                        <div>Bank details</div>
                    </div>
                    <div className="tab-item">
                        <div>Loans</div>
                    </div>
                    <div className="tab-item">
                        <div>Savings</div>
                    </div>
                    <div className="tab-item">
                        <div>App and system</div>
                    </div>
                </div>
            </div>
            
            <div className="content-wrapper px-2 py-2">
                <div className="detail-section">
                    <div className="detail-section-title">Personal Information</div>
                    <div className="detail-grid py-2">
                        <div>
                            <div className="dashboard-card-title">Full name</div>
                            <div className="detail-section-title">{ user?.profile.firstName} { user?.profile.lastName}</div>
                        </div>
                        <div>
                            <div className="dashboard-card-title">Phone Number</div>
                            <div className="detail-section-title">{ user?.profile.phoneNumber }</div>
                        </div>
                        <div>
                            <div className="dashboard-card-title">Email Address</div>
                            <div className="detail-section-title">{ user?.email}</div>
                        </div>
                        <div>
                            <div className="dashboard-card-title">BVN</div>
                            <div className="detail-section-title">{ user?.profile.bvn}</div>
                        </div>
                        <div>
                            <div className="dashboard-card-title">Gender</div>
                            <div className="detail-section-title">{ user?.profile.gender}</div>
                        </div>
                        <div>
                            <div className="dashboard-card-title">Marital Status</div>
                            <div className="detail-section-title">Single</div>
                        </div>
                        <div>
                            <div className="dashboard-card-title">Childrren</div>
                            <div className="detail-section-title">None</div>
                        </div>
                    </div>
                </div>
                <div className="separator"><div className="hr"></div></div>
                <div className="detail-section">
                    <div className="detail-section-title">Education and Employment</div>
                    <div className="detail-grid py-2">
                        <div>
                            <div className="dashboard-card-title">Level of Eduction</div>
                            <div className="detail-section-title">{ user?.education.level }</div>
                        </div>
                        <div>
                            <div className="dashboard-card-title">Employment Status</div>
                            <div className="detail-section-title">{ user?.education.employmentStatus }</div>
                        </div>
                        <div>
                            <div className="dashboard-card-title">Sector of Employment</div>
                            <div className="detail-section-title">{ user?.education.sector } </div>
                        </div>
                        <div>
                            <div className="dashboard-card-title">Duration of employment</div>
                            <div className="detail-section-title">{ user?.education.duration }</div>
                        </div>
                        <div>
                            <div className="dashboard-card-title">Office Email</div>
                            <div className="detail-section-title">{ user?.education.officeEmail }</div>
                        </div>
                        <div>
                            <div className="dashboard-card-title">Monthly income</div>
                            <div className="detail-section-title">N{ (user?.education.monthlyIncome && user?.education.monthlyIncome.length < 2) ? user.education.monthlyIncome[0]: (user?.education.monthlyIncome[0]+' - N'+user?.education.monthlyIncome[user?.education.monthlyIncome?.length-1])
                            }</div>
                        </div>
                        <div>
                            <div className="dashboard-card-title">Loan Repayment</div>
                            <div className="detail-section-title">N{ user?.education.loanRepayment}</div>
                        </div>
                    </div>
                </div>
                <div className="separator"><div className="hr"></div></div>
                <div className="detail-section">
                    <div className="detail-section-title">Socials</div>
                    <div className="detail-grid py-2">
                        <div>
                            <div className="dashboard-card-title">Twitter</div>
                            <div className="detail-section-title">{ user?.socials.twitter }</div>
                        </div>
                        <div>
                            <div className="dashboard-card-title">Facebook</div>
                            <div className="detail-section-title">{ user?.socials.facebook}</div>
                        </div>
                        <div>
                            <div className="dashboard-card-title">Instagram</div>
                            <div className="detail-section-title">{ user?.socials.instagram}</div>
                        </div>
                    </div>
                </div>
                <div className="separator"><div className="hr"></div></div>
                <div className="detail-section">
                    <div className="detail-section-title">Guarantor</div>
                    <div className="detail-grid py-2">
                        <div>
                            <div className="dashboard-card-title">Full name</div>
                            <div className="detail-section-title">{ user?.guarantor.firstName} { user?.guarantor.lastName }</div>
                        </div>
                        <div>
                            <div className="dashboard-card-title">Phone Number</div>
                            <div className="detail-section-title">{ user?.guarantor.phoneNumber}</div>
                        </div>
                        <div>
                            <div className="dashboard-card-title">Address</div>
                            <div className="detail-section-title">{ user?.guarantor.address}</div>
                        </div>
                        <div>
                            <div className="dashboard-card-title">relatioship</div>
                            <div className="detail-section-title">Sister</div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
    else {
        return (<div className='col col-py-4'>
            <div className='align-center py-4'>
                Loading...
            </div>
        </div>)
    }
}

export default UserSummary;
