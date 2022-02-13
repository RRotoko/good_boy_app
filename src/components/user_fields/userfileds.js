import React from 'react';
import styled from 'styled-components';
import Page1 from './page1/page1';
import Page2 from './page2/page2';
import Page3 from './page3/page3';
import { connect } from 'react-redux';
import {pageNumberAction, infoMessage} from './userfields_actions'

const mapStateToProps = (state) => {
    return {
        page: state.pageNumber.page,
        contributiontype: state.contributionType.contributiontype,
        shelterID: state.selectShelter.shelterID,
        value: state.selectValue.value,
        firstName: state.userData.firstName,
        lastName: state.userData.lastName,
        email: state.userData.email,
        phone: state.userData.phone,
        useragrees: state.userAgree.useragrees,
        infomessage: state.changeMessage.infomessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPage: (value) => dispatch(pageNumberAction(value)),
        userInfo: (value) => dispatch(infoMessage(value))
    }
}

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
    width: 100%;
    height:100%;
`

const ButtonsWrapper = styled.div `
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    margin-top:60px;
`
const InfoBox = styled.h4 `
    display: ${({ hidden }) => hidden ? 'none' : 'block'};
    color: red;
    height: 1rem
`

const Button = styled.button `
    padding: 10px 15px;
    width: 8rem;
    height: 3.3rem;
    font-family: 'Hind', sans-serif;
    font-size: 15px;
    font-weight: 500;
    border-radius: 35px;
    border: var(--border_primary);
    background: ${props => props.secondary ? 'var(--background)' : 'var(--primary)'};
    color: ${props => props.secondary ? 'var(--primary-text)' : 'var(--background)'};
    box-shadow: var(--shadow);
    cursor: pointer;
`
class UserField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        }
    }

    validatePage1 = () => {
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

    validatePage2 = () => {
        const {firstName,lastName, email, phone, userInfo} = this.props;
        const mailformat = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const phoneformat = /([+]?\d{1,3}[. \s]?)?(\d{12}?)/g;
        if (!(firstName.length <= 20 && firstName.length >= 2) && firstName.length !== 0) {
            userInfo('*meno musí obsahovať 2 až 20 znakov');
            this.infoToUser();
            return (false);
        } else if (!(lastName.length <= 30 && lastName.length >= 2) || lastName.length === 0) {
            userInfo('*priezvisko musí obsahovať 2 až 30 znakov');
            this.infoToUser();
            return (false);
        } else if (email.length === 0 || !email.match(mailformat)) {
            userInfo('*prosím vložte platný e-mail');
            this.infoToUser();
            return (false);
        } else if (phone.length === 0 || !phone.match(phoneformat)) {
            userInfo('*zadajte platné telefónne číslo');
            this.infoToUser();
            return (false);
        }
        return (true);
    }

    selectedPage = (value) => {
        this.props.setPage(value);
    }

    nextPage = () => {
        const {page, setPage} = this.props;
        if (page === 1) {
            if (this.validatePage1() === true) {
                setPage(2);
            }
        } else if (page === 2) {
            if (this.validatePage2() === true) {
                console.log('form validated')
                setPage(3);
            }
        }
    }

    backPage = () => {
        const {page, setPage} = this.props;
        if (page !== 1 ) {
            setPage(page -1);
        }
    }

    submitForm = () => {
        const {useragrees,firstName, lastName, email, phone, value, shelterID, userInfo} = this.props;
        if (useragrees === 'yes') {
            console.log('submitted');
            fetch('https://frontend-assignment-api.goodrequest.com/api/v1/shelters/contribute', {
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                value: value,
                shelterID: shelterID
                })
            })
            .then(response => response.json())
            .then(response => {
                if (response.messages[0].type === 'SUCCESS') {
                    console.log();
                    userInfo('Ďakujeme, formulár bol odoslaný');
                    this.infoToUser();
            }})
            .catch(error => console.log('cannot receive data', error))
        } else {
            this.props.userInfo('*pre odoslanie musíte súhlasiť so spracovaním osobných údajov');
            this.infoToUser();
        }
    }

    infoToUser = (value) => {
        this.setState ({
            hidden: false
        })
        setTimeout(() => this.setState({
            hidden: true
        }), 2500)
    }

    render() {
        const {page, infomessage} = this.props;
        return(
            <Wrapper>
                {page === 1
                    ? <Page1/>
                    : page === 2
                        ? <Page2 />
                        : <Page3 />
                }
                <InfoBox hidden={this.state.hidden}>{infomessage}</InfoBox>
                <ButtonsWrapper>
                    <div>
                       {page !== 1 ? <Button value='back' onClick={this.backPage} secondary>Späť</Button> : false}
                    </div>
                    <div>
                        {page === 3
                            ? <Button value='next' onClick={this.submitForm} large>ODOSLAŤ</Button>
                            : <Button value='next' onClick={this.nextPage}>Pokračovať</Button>}
                    </div>
                </ButtonsWrapper>
             </Wrapper>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserField);