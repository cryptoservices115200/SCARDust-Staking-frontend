import "./reward.css";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../samples/buttons'



const StakingIcon = 'images/girl_bullet.png';

function Rewarding() {

    const onClickButButton = () => {
        alert();
    }
    
    return (
        <div className="masthead">
            <Container>
                <div className='rewarding'>
                    <Row>
                        <Col lg={4}>
                            <div>
                                <h4>Earn with DUST</h4><br/>
                                <p className="dust_help">DUST helps you earn rewards.</p><br/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis dignissim ligula. Integer porta dictum purus id pretium. Sed turpis quam, aliquam eu enim ut, molestie elementum mi. Aliquam sed tincidunt.</p>
                                <Button icon = {''} value = 'Buy DUST' onClick = {onClickButButton}/>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className = 'earnby'>
                                <span className="head_title">Earn By Staking</span>
                                <br/><br/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis dignissim ligula. </p>
                                <br/><br/>
                                <ul>
                                    <li>Stake DUST via this page to earn:</li>
                                    <li><font>▶</font> WETH trading fees</li>
                                    <li><font>▶</font> Extra DUST</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4}>
                        <div className = 'earnby'>
                                <span className="head_title">Earn By Staking</span>
                                <br/><br/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis dignissim ligula. </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Rewarding;