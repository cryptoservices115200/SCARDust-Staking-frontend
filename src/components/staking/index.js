import "./staking.css";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core';
import Button from '../samples/buttons'
import WalletConnect from '../../utils/connectwallet';


const StakingIcon = 'images/girl_bullet.png';

function Staking() {

    const { account, chainId, activate, deactivate } = useWeb3React();

    const onClickButton = () => {
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
                            {account ? (
                                <>
                                    <p>Do a operation for Stake please...</p>
                                    <Button  value = "Stake" onClick = {onClickButton}/>
                                </>
                            ) : (
                                    <>
                                        <p>Connect to your wallet to view</p>
                                        {/* <Button  value = 'connect wallet' onClick = {onClickButButton}/> */}
                                        <WalletConnect/>
                                    </>
                            )}
                        </div>
                    </div>
                    <div className='rewards_to_collect'>
                        <p>Rewards to Collect</p>
                        <div className='staking_content'>
                        {account ? (
                                <>
                                    <p>Do a operation for Reward please...</p>
                                    <Button  value = "Reward" onClick = {onClickButton}/>
                                </>
                            ) : (
                                <>
                                    <p>Connect to your wallet to view</p>
                                    {/* <Button  value = 'connect wallet' onClick = {onClickButButton}/> */}
                                    <WalletConnect/>
                                </>
                            )}
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