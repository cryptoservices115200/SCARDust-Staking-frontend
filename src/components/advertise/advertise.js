import React, { useContext, useEffect, useState } from "react";
import Web3 from 'web3';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../samples/buttons';
import { useWeb3React } from '@web3-react/core';
import { CONTRACTS, CONTRACTS_TYPE } from '../../utils/constants';


const Logo = 'images/logo.png';
const boxArrowUpRight = 'images/boxrrrowupright.svg';
const warriors = 'images/warriors.png';

let web3, _depoAddress;

function Advertise() {

    const { active, account, library, chainId, connector, activate, deactivate } = useWeb3React();
    const [loading, setLoading] = useState(false);
    const [APY, setAPY] = useState(0);
    const [a,setA] = useState();


    useEffect(() => {
        (async () => {
            if (account && chainId && library) {
                console.log(chainId)
                setLoading(true);
        
                let metadata1 = CONTRACTS[CONTRACTS_TYPE.SCARDUST_TOKEN][chainId]?.abi;
                let addr1 = CONTRACTS[CONTRACTS_TYPE.SCARDUST_TOKEN][chainId]?.address;
        
                web3 = new Web3(library.provider);
        
                let scardustWeb3 = new web3.eth.Contract(metadata1, addr1);
        
                try
                {
                    APY = await scardustWeb3.methods.balanceOf(account).call();
                }
                catch(err)
                {
                    console.log(err);
                }
                setLoading(false);
            }
            setLoading(false);
        })();
    }, [account])


    

    const onClickBuyDUST = async () => {
        // TOKEN_DISTRIBUTOR
        if (account && chainId && library) {
            console.log(chainId)
            setLoading(true);
    
            let metadata2 = CONTRACTS[CONTRACTS_TYPE.TOKEN_DISTRIBUTOR][chainId]?.abi;
            let addr2 = CONTRACTS[CONTRACTS_TYPE.TOKEN_DISTRIBUTOR][chainId]?.address;
    
            web3 = new Web3(library.provider);
    
            let scardustWeb3 = new web3.eth.Contract(metadata2, addr2);
    
            try
            {
                let Txn = await scardustWeb3.methods.deposit(10).call();
                await Txn.wait();
                console.log('deposit performed successfully. '+ Txn.hash());
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
                <div className='masthead-content'>
                <Row>
                    <Col lg={4}>
                    <div >
                        <p>Stake DUST, earn up to </p>
                        <p className='apy_value'>{APY}</p>
                        <Button icon = {'boxArrowUpRight'} value = 'Buy DUST' onClick = {onClickBuyDUST}/>
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