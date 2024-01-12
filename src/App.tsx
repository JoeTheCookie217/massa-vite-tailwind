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
        <div className="h-full w-full grid place-items-center bg-gray-900 text-white">
            <div>
                <button onClick={getAddress}>Get Address</button>
                <div>{account?.address}</div>
            </div>
        </div>
    );
}

export default App;
