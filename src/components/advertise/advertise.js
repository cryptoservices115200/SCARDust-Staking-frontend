import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../samples/buttons'

const Logo = 'images/logo.png';
const boxArrowUpRight = 'images/boxrrrowupright.svg';
const warriors = 'images/warriors.png'

function Advertise() {

    const onClickButButton = () => {
        alert();
    }
    
    return (
        <div className="masthead">
            <Container>
                <div className='masthead-content'>
                <Row>
                    <Col lg={4}>
                    <div >
                        <p>Stake DUST, earn up to </p>
                        <p className='apy_value'>234.81% APY</p>
                        <Button icon = {'boxArrowUpRight'} value = 'Buy DUST' onClick = {onClickButButton}/>
                    </div>
                    </Col>
                    <Col lg={8}>
                    <div >
                        <img src = {warriors}/>
                    </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    );
}

export default Advertise;