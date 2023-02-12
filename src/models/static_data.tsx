import { UserProfile } from "./user_profile";

const users: UserProfile[] = [
    {
        id: 1,
        organization: 'Lendsqr',
        username: 'Adedeji',
        email: 'adedeji@lendsqr.com',
        phone: '08083829740',
        date_joined: new Date('5 May 2020'),
        status: 'inactive'
    },
    {
        id: 2,
        organization: 'Lendsqr',
        username: 'Sam Smith',
        email: 'samsmith@lendsqr.com',
        phone: '080298302827',
        date_joined: new Date('28 January 2021'),
        status: 'active'
    },
    {
        id: 3,
        organization: 'Cocacola',
        username: 'Janet Andrews',
        email: 'jane.andrews@cocacola.com',
        phone: '0817382974028',
        date_joined: new Date('3 February 2020'),
        status: 'pending'
    },
    {
        id: 4,
        organization: 'Cocacola',
        username: 'Adeyemi Justine',
        email: 'justine234@cocacola.com',
        phone: '08302834710',
        date_joined: new Date('30 March 2019'),
        status: 'inactive'
    },
    {
        id: 5,
        organization: 'Nestle',
        username: 'Cyrstabel Ugwu',
        email: 'crystabel@nestle.com',
        phone: '0813298704983',
        date_joined: new Date('28 February 2020'),
        status: 'active'
    },
    {
        id: 6,
        organization: 'NNPC',
        username: 'Brenda Anikwe',
        email: 'anikwe@email.com',
        phone: '081384369028',
        date_joined: new Date('18 July 2022'),
        status: 'blacklisted'
    },
    {
        id: 6,
        organization: 'Lendsqr',
        username: 'Sandra Akinwumi',
        email: 'sandy.akinwumi@lendsqr.com',
        phone: '080382987793',
        date_joined: new Date('19 August 2021'),
        status: 'pending'
    }
]

export default users