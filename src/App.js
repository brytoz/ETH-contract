import React, { Fragment, useEffect, useState } from 'react';
//import { mintNftToken } from './Contract'
let MyOwnAccount;
let provider = window.ethereum;
// let isInitialized = false;

export default function App() {

  const [start, setStartApp] = useState(false);
  const [connect, setConnect] = useState('undefined');
  const [Minted, setMinted] = useState(false);
  //const [isMinted, setisMinted] = useState(false);

  useEffect(() => {

    checks(); 

  }, [start, connect])

  const checks = () => {
    if (connect !== 'undefined') {
      setStartApp(true);
    } else {
      setStartApp(false);
    }
  }

  // const mintNFT = () => {
  //   MintMyToken().then((trx) => {
  //     console.log("minted");
  //     setMinted(true);
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }

  const startApp = async () => { 

    if (typeof provider !== 'undefined') {
      provider
        .request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          MyOwnAccount = accounts[0];
          setConnect(MyOwnAccount);
          setStartApp(true);
          console.log(`Selected account is ${MyOwnAccount}`);

        })
        .catch((err) => {
          console.log(err);
        });

      provider.on('accountsChanged', function (accounts) {
        MyOwnAccount = accounts[0];
        console.log(`Selected account changed to ${MyOwnAccount}`);
        setStartApp(true);
      });

      // isInitialized = true;
    }

  }


  return (
    <div className="flex-wrap  h-screen flex justify-center items-center text-black">
      <div className="  justify-center font-extrabold text-center text-6xl">
        Harmony
        <div className='block text-xl'>
          Testing-
        </div>
        <div className='pt-24 block text-xl'>

          {start ?
            (
              <Fragment>
                <button disabled className='p-3 bg-green-400 rounded-md text-white hover:text-green-900 hover:bg-white hover:border hover:border-green-600' >
                  Connected
                </button>
                <div>
                  <button className='p-3 bg-purple-400 rounded-md  mt-4 hover:text-green-900 hover:bg-white hover:border hover:border-purple-600' >
                    Mint Token
                  </button>
                </div>
              </Fragment>
            )
            :
            (
              <Fragment>
                <button onClick={startApp} className='p-3 bg-green-400 rounded-md hover:text-green-900 hover:bg-white hover:border hover:border-green-600' >
                  Connect
                </button>
              </Fragment>
            )}

        </div>
      </div>
    </div>
  )
}
