import React from 'react';
import styled from 'styled-components';
import Contribution from './contribution/contribution';
import SelectType from './selecttype/selecttype';
import SelectAmount from './selectamount/selectamount';

const Wrapper = styled.div `
    position: relative;
    width: 100%;
`

const Page1 = () => {
    return(
        <Wrapper>
            <Contribution />
            <SelectType />
            <SelectAmount />
        </Wrapper>
    )
}

export default Page1;