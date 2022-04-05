import "./getdust.css";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../samples/buttons'



const StakingIcon = 'images/girl_bullet.png';

function GetDUST() {

    const onClickButButton = () => {
        alert();
    }
    
    return (
        <div className="masthead">
            <Container>
                <div className='getdust'>
                    <Row>
                        <Col lg={4}>
                        </Col>
                        {/* <Col lg={4}>
                        <div style={{width:"100%"}}>
                            <font class = "getdusttext">GET DUST</font><br/>
                            <Button icon = {'boxArrowUpRight'} value = 'handsome'/><br/>
                            <p>Learn how to get DUST</p>
                        </div>
                        </Col> */}
                        <Col lg={4}>
                            <div className = ''>
                                <font class = "getdusttext">GET DUST</font><br/><br/>
                                <div style={{marginLeft:'20%'}}><Button icon = {'boxArrowUpRight'} value = 'Buy On Uniswap'/><br/></div>
                                <br/><br/>
                                <p style={{marginLeft:'25%', color:'#339ede'}}>Learn how to get DUST</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default GetDUST;