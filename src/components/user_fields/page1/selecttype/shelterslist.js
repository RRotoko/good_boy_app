import React from 'react';
import { connect } from 'react-redux';
import {requestLinks, selectShelter2} from './selecttype_actions';


const mapStateToProps = (state) => {
    return {
        isPending: state.selectShelter.isPending,
        shelters: state.selectShelter.shelters,
        shelterID: state.selectShelter.shelterID,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selected: (id) => dispatch(selectShelter2(id)),
        request: () => dispatch(requestLinks())
    }
}

class SheltersList extends React.Component {

    selector = {
        'width': '100%',
        'border' : '0px'
    }

    componentDidMount() {
        if (this.props.shelters.length === 0) {
            this.props.request()
        }  
    }


    sendId = (e) => {
        console.log(e);
        const id = e.target[e.target.selectedIndex].id;
        this.props.selected(Number(id))
    }

    render() {
        const {isPending, shelters, shelterID} = this.props;
        var listOfShelters = shelters.shelters;
        if (isPending === true ) {
            return (
                <select style={this.selector} name="útulky" onChange={this.sendId}>
                    <option id='0'> Nahravam Data... </option>
                </select>
        )} else if (shelterID === '') {
            return (
                <>
                <select style={this.selector} name="útulky" onChange={this.sendId}>
                    <option >Vyberte útulok so zoznamu</option>
                    { listOfShelters.map((shelter, i) => (
                        <option key={i} id={shelter.id}>{shelter.name}</option>
                     ))}
                </select>
                </>
        )} else if (shelterID !== '') {
            return (
                <>
                <select style={this.selector} name="útulky" onChange={this.sendId} accessKey={listOfShelters[5]}>
                    { listOfShelters.map((shelter, i) => (
                        <option key={i} id={shelter.id} selected={shelterID === i ? true : false}>{shelter.name} </option>
                    ))}
                </select>
                </>
            )
  
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SheltersList);