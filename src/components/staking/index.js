import "./staking.css";
import React, { useContext, useEffect, useState } from "react";
import Web3 from 'web3';
import { Container, Row, Col } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core';
import Button from '../samples/buttons'
import WalletConnect from '../../utils/connectwallet';
import { CONTRACTS, CONTRACTS_TYPE } from '../../utils/constants';


const StakingIcon = 'images/girl_bullet.png';
let web3, scardustWeb3;
function Staking() {

    const { active, account, library, chainId, connector, activate, deactivate } = useWeb3React();
    const [loading, setLoading] = useState(false);
    // const [APY, setAPY] = useState(0);

    const onClickStake = async () => {
        if (account && chainId && library) {
            console.log(chainId)
            setLoading(true);
    
            let metadata1 = CONTRACTS[CONTRACTS_TYPE.FEESHARING_SYSTEM][chainId]?.abi;
            let addr1 = CONTRACTS[CONTRACTS_TYPE.FEESHARING_SYSTEM][chainId]?.address;
    
            web3 = new Web3(library.provider);
    
            scardustWeb3 = new web3.eth.Contract(metadata1, addr1);
    
            try
            {
                let Txn = await scardustWeb3.methods.deposit(10, true).call();
                await Txn.wait();
                console.log('successfully deposited. '+ Txn.hash());
            }
            catch(err)
            {
                console.log(err);
            }
            setLoading(false);
        }
    }

    const onClickReward = async () => {
        // feesharingsystem
        if (account && chainId && library) {
            console.log(chainId)
            setLoading(true);
    
            let metadata2 = CONTRACTS[CONTRACTS_TYPE.FEESHARING_SYSTEM][chainId]?.abi;
            let addr2 = CONTRACTS[CONTRACTS_TYPE.FEESHARING_SYSTEM][chainId]?.address;
    
            web3 = new Web3(library.provider);
    
            scardustWeb3 = new web3.eth.Contract(metadata2, addr2);
    
            try
            {
                let Txn = await scardustWeb3.methods.harvest().call();
                await Txn.wait();
                console.log('successfully harvested. '+ Txn.hash());
            }
            catch(err)
            {
                console.log(err);
            }
            setLoading(false);
        }

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
                                    <Button  value = "Stake" onClick = {onClickStake}/>
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
                                    <Button  value = "Reward" onClick = {onClickReward}/>
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