import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {selectAmount, ownValue} from './selectamount_actions'

const mapStateToProps = (state) => {
    return {
        value: state.selectValue.value,
        selectown: state.ownValueSelect.selectown
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateValue: (value) => dispatch(selectAmount(value)),
        updateOwnValue: (value) => dispatch(ownValue(value))
    }
}

const Text =  styled.h3 `
    margin-top: 20px;
`
const Wrapper = styled.div `
    margin-top: 10px;
    width: 100%;
    display: inline-flex;
    justify-content: flex-start;
`
const Amount = styled.input `
    font-family: 'Hind', sans-serif;
    font-size: 22px;
    font-weight: 600;
    padding: 15px;
    min-width: 10%;
    max-width: 15%;
    margin-right: 10px;
    border: var(--border);
    border-radius: var(--radius);
    text-align: center;
    background: $var(--background);
    outline:none;
    box-shadow: var(--shadow);
    cursor: pointer;
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
}`
class SelectAmount extends React.Component {

    handleChange = (e) => {
        this.props.updateOwnValue(false);
        console.log(e)
        this.props.updateValue(Number(e.target.value));
        for (var i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].style.background = 'var(--background)';
            e.target.parentNode.children[i].style.color = 'black'
        }
        e.target.style.background = 'var(--primary)';
        e.target.style.color = 'var(--on_primary)';

    }

    handleChangeOwn = (e) => {
        this.handleChange (e);
        this.props.updateOwnValue(true);
        
    }

    render() {
        return(
            <div>
                <Text>Suma, ktorou chem prispieť</Text>
                <Wrapper>
                    <Amount style={this.props.value === 5 ? {background: 'var(--primary)', color: 'var(--on_primary)'} : null} type='button' value='5' onClick={this.handleChange}></Amount>
                    <Amount style={this.props.value === 10 ? {background: 'var(--primary)', color: 'var(--on_primary)'} : null} type='button' value='10' onClick={this.handleChange}></Amount>
                    <Amount style={this.props.value === 20 ? {background: 'var(--primary)', color: 'var(--on_primary)'} : null} type='button' value='20' onClick={this.handleChange}></Amount>
                    <Amount style={this.props.value === 30 ? {background: 'var(--primary)', color: 'var(--on_primary)'} : null} type='button' value='30' onClick={this.handleChange}></Amount>
                    <Amount style={this.props.value === 50 ? {background: 'var(--primary)', color: 'var(--on_primary)'} : null} type='button' value='50' onClick={this.handleChange}></Amount>
                    <Amount style={this.props.value === 100 ? {background: 'var(--primary)', color: 'var(--on_primary)'} : null} type='button' value='100' onClick={this.handleChange}></Amount>
                    {this.props.selectown == true 
                        ? <Amount style={this.props.selectown == true ? {background: 'var(--primary)', color: 'var(--on_primary)'} : null} 
                            value={this.props.value === 0 ? '' : this.props.value} type='number' onChange={this.handleChangeOwn} placeholder='_____€' onClick={this.handleChangeOwn}></Amount>
                        : <Amount style={this.props.selectown == true ? {background: 'var(--primary)', color: 'var(--on_primary)'} : null} 
                            type='number' onChange={this.handleChangeOwn} placeholder='_____€' onClick={this.handleChangeOwn}></Amount>
                    }
                </Wrapper>
            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectAmount);