import "./staking.css";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../samples/buttons'



const StakingIcon = 'images/girl_bullet.png';

function Staking() {

    const onClickButButton = () => {
        alert();
    }
    
    return (
        <div className="masthead">
            <Container>
                <div className='staking'>
                <Row>
                    <Col lg={6}>
                        <div style={{display:'flex'}}>
                            <div>
                                <img src = {StakingIcon} width = {'50px'} height = {'40px'} style = {{marginRight:'20px'}}/>
                            </div>
                            <div>
                                <p>DUST staking</p>
                                <p>Stake DUST  |  Earn DUST & WETH</p>
                                <p>Total DUST staked: 301,236, 162 ($846,473,615)</p>
                                <p><b>134.85% APR</b></p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                    <div className='your_contract'>
                        <p>Your Stake</p>
                        <div className='staking_content'>
                            <p>Connect to your wallet to view</p>
                            <Button  value = 'connect wallet' onClick = {onClickButButton}/>
                        </div>
                    </div>
                    <div className='rewards_to_collect'>
                        <p>Rewards to Collect</p>
                        <div className='staking_content'>
                            <p>Connect to your wallet to view</p>
                            <Button  value = 'connect wallet' onClick = {onClickButButton}/>
                        </div> 
                    </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    );
}

export default Staking;