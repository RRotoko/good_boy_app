import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Icon1 from '../../../../img/icon1.png';
import Icon2 from '../../../../img/icon2.png';
import {selectType} from './cont_actions';

const mapStateToProps = (state) => {
    return {
        contributiontype: state.contributionType.contributiontype
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        contributionValue: (e) => dispatch(selectType(e))
    }
}

const Container = styled.div `
    width: 100%;
    height: 190px;
    margin-top: 30px;
    display: flex;
    border-radius: 24px;
    box-shadow: var(--shadow)
`

const Option1 = styled.div `
    cursor: pointer;
    width:50%;
    padding: 20px;
    box-sizing: border-box;
    background: ${({ active }) => active ? 'var(--primary)' : 'var(--background)'};
    border-radius: 24px 0px 0px 24px;
    border: ${({ active }) => active ? '0' : 'var(--border_primary)'};
    color: ${({ active }) => active ? 'var(--background)' : 'var(--border_primary)'};
`

const Option2 = styled.div `
    cursor: pointer;
    width:50%;
    padding: 20px;
    box-sizing: border-box;
    background: ${({ active }) => active ? "var(--primary)" : "var(--background)"};
    border-radius: 0px 24px  24px 0px;
    border: ${({ active }) => active ? '0' : 'var(--border_primary)'};
    color: ${({ active }) => active ? 'var(--background)' : 'black'};
`

const Image = styled.img `
    max-width: 80px;
    border-radius: 50%;
    background: var(--subtle)
`

const Text = styled.p `
    font-weight:500;
    font-size: 1.2rem;
    margin: 0px 0px 10px 0px;
`

class Contribution extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activeOption1: this.props.contributiontype === 'single' ? true : false,
          activeOption2: this.props.contributiontype === 'whole' ? true : false,
        };
      }

    option1 = (e) => {
        this.setState({
            activeOption1: true,
            activeOption2: false,
        });
        this.props.contributionValue('single');
    }

    option2 = (e) => {
        this.setState({
            activeOption1: false,
            activeOption2: true,
        });
        this.props.contributionValue('whole');
    }

    render() {
        const {contributiontype} = this.props;
            return (
                <Container>
                <Option1 id='1' onClick={this.option1} active={this.state.activeOption1}>
                    {contributiontype === 'single' ? <Image src={Icon1}/> : <Image src={Icon2}/>}
                    <Text>Chcem finančne prispieť konkrétnemu útulku</Text>
                </Option1>
                <Option2 id='2' onClick={this.option2} active={this.state.activeOption2}>
                    {contributiontype === 'whole' ? <Image src={Icon1}/> : <Image src={Icon2}/>}
                    <Text>Chcem finančne prispieť celej nadácii</Text>
                </Option2>
            </Container>
            )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contribution);