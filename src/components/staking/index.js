import './staking.css'
import React, { useContext, useEffect, useState } from 'react'
import Web3 from 'web3'
import { Container, Row, Col } from 'react-bootstrap'
import { useWeb3React } from '@web3-react/core'
import Button from '../samples/buttons'
import WalletConnect from '../../utils/connectwallet'
import { CONTRACTS, CONTRACTS_TYPE } from '../../utils/constants'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { ethers } from 'ethers';
import BigNumber from 'bignumber.js';

const StakingIcon = 'images/girl_bullet.png'
let web3, contractObject1, contractObject2
function Staking() {
  const {
    active,
    account,
    library,
    chainId,
    connector,
    activate,
    deactivate,
  } = useWeb3React()

  const [loading, setLoading] = useState(false)
  const [stakeValue, setStakeValue] = useState()
  const [withdrawValue, setWithdrawValue] = useState()
  const [selectedIndex, setSelectedIndex] = useState()
  const [totalStake, setTotalStake] = useState('0')

  let metadata0 = CONTRACTS[CONTRACTS_TYPE.SCARDUST_TOKEN][chainId]?.abi
  let addr0 = CONTRACTS[CONTRACTS_TYPE.SCARDUST_TOKEN][chainId]?.address

  //TOKEN_DISTRIBUTOR
  let metadata1 = CONTRACTS[CONTRACTS_TYPE.TOKEN_DISTRIBUTOR][chainId]?.abi
  let addr1 = CONTRACTS[CONTRACTS_TYPE.TOKEN_DISTRIBUTOR][chainId]?.address


  let metadata2 = CONTRACTS[CONTRACTS_TYPE.FEESHARING_SYSTEM][chainId]?.abi
  let addr2 = CONTRACTS[CONTRACTS_TYPE.FEESHARING_SYSTEM][chainId]?.address




  // const [APY, setAPY] = useState(0);

  useEffect(() => {
    (async () => {
      console.log(library);
      console.log(account, chainId);
        try
        {
            if (account && chainId && library) {
              web3 = new Web3(library.provider)
              contractObject2 = new web3.eth.Contract(metadata2, addr2)
              console.log(contractObject2);

              // await v1alphaBalanceWeb3.methods.approve(addr, new BigNumber(200000).multipliedBy(10 ** 18)).send({from: account});
              try {
                let value = await contractObject2.methods.totalShares().call();


                  value = new BigNumber(value).dividedBy(10 ** 18).toString();
                setTotalStake(value);
                // console.log(value);
              } catch (err) {
                console.log(err);
                console.log('failed get.');
                NotificationManager.error('Error occured during approve!');
                return;
              }
              setLoading(false)
            }
        } catch (err) {
            console.log(err)
            return;
          }
    })();
}, [chainId])

  const onClickStake = async () => {
    if (account && chainId && library) {

      setLoading(true)
      const { ethereum } = window;

      web3 = new Web3(library.provider)
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      // contractObject1 = new web3.eth.Contract(metadata0, addr0);
      contractObject2 = new web3.eth.Contract(metadata2, addr2);
      contractObject1 = new ethers.Contract(addr0, metadata0, signer);

      



      let depositValue = new BigNumber(stakeValue).multipliedBy(10 ** 18)
      console.log(depositValue.toString())

      let allowanceAmount = await contractObject1.allowance(account, addr2);

      console.log(allowanceAmount);
      console.log('console.log(amountWillDeposit);console.log(amountWillDeposit);');
      

      if(allowanceAmount <= depositValue)
      {
        let Txn = await contractObject1.approve(addr2, depositValue.toString());   //set approve function as Feesharing contract.
        console.log("Approving...please wait.");
        await Txn.wait()

        console.log(Txn)
        
            let a = await contractObject1.allowance(account, addr2);
            console.log('------------------' + a);
      }


      try {
        let Txn = await contractObject2.methods.deposit(depositValue, false).send({from: account});//multipliedBy(10 ** 18)).send({from: account});
        console.log(Txn)
        console.log('successfully deposited. ')
        NotificationManager.success('successfully deposited!');
      } catch (err) {
        console.log(err);
        console.log('err');
        NotificationManager.error('Error occured during stake!');
        return;
      }
      setLoading(false)
    }
  }



  const onClickWithdraw = async () => {
    if (account && chainId && library) {
        console.log(chainId)
        setLoading(true)

        

  
        web3 = new Web3(library.provider)
        contractObject2 = new web3.eth.Contract(metadata2, addr2)
  
        try {
            let Txn = await contractObject2.methods.withdraw(withdrawValue, true).send({from: account})
          console.log('successfully withdrawed. ')
          NotificationManager.success('successfully withdrawed!');
        } catch (err) {
          console.log(err.message)
          NotificationManager.error('Error occured during withdraw!');
          return
        }
        setLoading(false)
      }
  }

  const onClickReward = async () => {
    // feesharingsystem
    if (account && chainId && library) {
      console.log(chainId)
      setLoading(true)


      contractObject2 = new web3.eth.Contract(metadata2, addr2)

      try {
        let Txn = await contractObject2.methods.harvest().call()
        console.log('successfully harvested. ')
      } catch (err) {
        console.log(err.message)
        NotificationManager.error('Error occured during Reward!');
        return
      }
      setLoading(false)
    }
  }

  const onChangeStake = async (e) => {
    setStakeValue(e.target.value)
  }

  const onChangeWithdraw = async (e) => {
    setWithdrawValue(e.target.value)
  }

  const onClickPercent = async (e) => {
    let rate = e.target.value;
    if (account && chainId && library) {

      setLoading(true)



      web3 = new Web3(library.provider)
      contractObject2 = new web3.eth.Contract(metadata0, addr0)


      let depositValue = new BigNumber(stakeValue).multipliedBy(10 ** 18)
      console.log(depositValue.toString())


      try {
        let balance = await contractObject2.methods.balanceOf(account).call({from: account});//multipliedBy(10 ** 18)).send({from: account});
        let rate_balance = new BigNumber(balance / 4 * rate).dividedBy( 10 ** 18);
        setStakeValue(rate_balance);
      } catch (err) {
        console.log(err);
        return;
      }
      setLoading(false)
    }
  }

  return (
    <div className="masthead">
      <Container>
        <div className="staking">
          <Row>
            <Col lg={6}>
              <div style={{ display: 'flex' }}>
                <div>
                  <img
                    src={StakingIcon}
                    width={'50px'}
                    height={'40px'}
                    style={{ marginRight: '20px' }}
                  />
                </div>
                <div>
                  <p>SCRD staking</p>
                  <p>Stake SCRD | Earn SCRD & WETH</p>
                  <p>Total SCRD staked: {totalStake}</p>
                  <p>
                    <b>134.85% APR</b>
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="your_contract">
                <p>Your Stake</p>
                <div className="staking_content">
                  {account ? (
                    <>
                    <div className='percentContainer'>
                      <input
                        type="number"
                        className="stakingText"
                        value={stakeValue}
                        onChange={onChangeStake}
                      />
                            <button className='percentButton' value={1} onClick = {onClickPercent}>25%</button>
                            <button className='percentButton' value={2} onClick = {onClickPercent}>50%</button>
                            <button className='percentButton' value={3} onClick = {onClickPercent}>75%</button>
                            <button className='percentButton' value={4} onClick = {onClickPercent}>100%</button>
                      </div>
                      <Button value="Stake" onClick={onClickStake} />
                    </>
                  ) : (
                    <>
                      <p>Connect to your wallet to view</p>
                      {/* <Button  value = 'connect wallet' onClick = {onClickButButton}/> */}
                      <WalletConnect />
                    </>
                  )}
                </div>
              </div>
              <div className="rewards_to_collect">
                <p>Your Withdraw</p>
                <div className="staking_content">
                  {account ? (
                    <>
                      <input
                        type="number"
                        className="withdrawText"
                        value={withdrawValue}
                        onChange={onChangeWithdraw}
                      />
                      <Button value="Withraw" onClick={onClickWithdraw} />
                    </>
                  ) : (
                    <>
                      <p>Connect to your wallet to view</p>
                      {/* <Button  value = 'connect wallet' onClick = {onClickButButton}/> */}
                      <WalletConnect />
                    </>
                  )}
                </div>
              </div>


              <div className="your_contract">
                <p>Your Reward</p>
                <div className="staking_content">
                  {account ? (
                    <>
                    <div className="withdrawText"></div>
                      <Button value="Reward" onClick={onClickReward} />
                    </>
                  ) : (
                    <>
                      <p>Connect to your wallet to view</p>
                      {/* <Button  value = 'connect wallet' onClick = {onClickButButton}/> */}
                      <WalletConnect />
                    </>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <NotificationContainer/>
    </div>
  )
}

export default Staking
