import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Wrapper = styled.div `
    display: inline-flex;
`

const Page = styled.div `
    width: ${props => props.current ? '60px' : '25px'};
    height: 8px;
    background: ${props => props.current ? 'var(--primary)' : 'var(--subtle)'};
    border-radius: 4px;
    margin: 2px;
    box-shadow: 3px 5px 4px var(--subtle);
`

const mapStateToProps = (state) => {
    return {
        page: state.pageNumber.page,
    }
}

class PageIndicator extends React.Component {
    render() {
        const {page} = this.props;
        return(
            <Wrapper>
                {page === 1? <Page current/> : <Page/> }
                {page === 2 ? <Page current/> : <Page/> }
                {page === 3 ? <Page current/> : <Page/> }
            </Wrapper>
        )
    }
}

export default connect(mapStateToProps, null)(PageIndicator);