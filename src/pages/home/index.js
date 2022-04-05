import WalletConnect from "../../components/wallet/walletconnect";
import Header from "../../components/header/header";
import Advertise from "../../components/advertise/advertise";
import Staking from "../../components/staking";
import Rewarding from "../../components/rewarding";
import GetDUST from "../../components/getdust";





function Home() {
    return (
            <div className="container_dust">
                <header className="page-header">
                    <Header />
                </header>
                <Advertise />
                <Staking/>
                <Rewarding/>
                <GetDUST/>
            </div>
    );
}

export default Home;