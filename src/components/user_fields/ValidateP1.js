import React from 'react';

const validatePage1 = () => {
    const {contributiontype, shelterID, value, userInfo} = this.props;
    if (contributiontype === 'single' && (shelterID === '' || value === 0)) {
        userInfo('*zvoľte útulok a sumu príspevku');
        this.infoToUser();
        return (false);
    } else if (contributiontype === 'whole' && value === 0) {
        userInfo('*zvoľte sumu prispevku');
        this.infoToUser();
        return (false);
    }
    return (true);
}

export default validatePage1;