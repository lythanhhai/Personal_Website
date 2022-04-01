import React, { Fragment } from 'react';
import { Audio, BallTriangle, Bars, Hearts } from  'react-loader-spinner';
import styled from "styled-components"

const Div = styled.div({
    width: '100vw',
    height: '100vh',
    color: 'white',
    backgroundColor: 'rgb(2,92,178)',
    margin: "0 auto"
});

const Loader = () => {
    return(
        <Fragment>
            <Div>
                <Bars color="#FFFFFF" height={100} width={100}/>
            </Div>  
        </Fragment>
    );
}

export default React.memo(Loader);