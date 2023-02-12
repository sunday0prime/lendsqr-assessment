export default interface User {
    id: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    activeStatus: string;
    lastActiveDate: string;
    accountBalance: string;
    accountNumber: string;
    profile: {
        firstName: string;
        lastName: string;
        phoneNumber: string;
        avartar: string;
        gender: string;
        bvn: string;
        address: string;
    },
    guarantor: {
        firstName: string;
        lastName: string;
        phoneNumber: string;
        gender: string;
        address: string;
    },
    education: {
        level: string;
        employmentStatus: string;
        sector: string;
        duration: string;
        officeEmail: string;
        monthlyIncome: string[],
        loanRepayment: string;
    },
    socials: {
        facebook: string;
        instagram: string;
        twitter: string;
    }
}