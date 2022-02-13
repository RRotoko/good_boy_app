import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        page: state.pageNumber.page
    }
}

const Text = styled.h1 `
    margin: 50px 0px;
    font-size: 46px;
    font-weight: 800;
    line-height: 1;
    letter-spacing: 1px;
`

class Header extends React.Component{
    render() {
        const {page} = this.props;
        return(
            <div>
            { page === 1 ? <Text>Vyberte si možnosť, ako chcete pomôcť</Text>
                : page === 2 ? <Text>Potrebujeme od Vás zopár informácií</Text>
                    : <Text>Skontrolujte si zadané údaje</Text>
            }
            </div>
        )
    }
}

export default connect(mapStateToProps)(Header);