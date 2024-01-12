import React, { useEffect, useState } from "react";
import { IAccount, WalletClient } from "@massalabs/massa-web3";
import { providers } from "@massalabs/wallet-provider";

function App() {
    const [account, setAccount] = useState<IAccount>();

    const getAddress = () => {
        WalletClient.walletGenerateNewAccount().then(setAccount);
    };

    useEffect(() => {
        const fetchProviders = async () => {
            await providers().then(console.log);
        };

        fetchProviders();
    }, []);

    return (
        <>
            <button onClick={getAddress}>Get Address</button>
            <div>{account?.address}</div>
            <div className="bg-red-500">TEST</div>
        </>
    );
}

export default App;
