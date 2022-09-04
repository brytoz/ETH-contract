import {MutantAbi} from './MutantAbi.json';
// import {Web3} from 'web3';

let MyOwnAccount;

let erc20Contract;

let isInitialized = false;

export const init = async () => {
	let provider = window.ethereum;

	// if (typeof provider !== 'undefined') {
	// 	provider
	// 		.request({ method: 'eth_requestAccounts' })
	// 		.then((accounts) => {
	// 			MyOwnAccount = accounts[0]; 
	// 			console.log(`Selected account is ${MyOwnAccount}`); 
	// 		})
	// 		.catch((err) => {
	// 			console.log(err); 
	// 			return;
	// 		});

	// 	window.ethereum.on('accountsChanged', function (accounts) {
	// 		MyOwnAccount = accounts[0];
	// 		console.log(`Selected account changed to ${MyOwnAccount}`); 
	// 	});
	// }

	//  const web3 = new Web3(provider);

	// const networkId = await web3.eth.net.getId();


	const erc20Abi = [
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "account",
					"type": "address"
				}
			],
			"name": "balanceOf",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	];

	 erc20Contract = new web3.eth.Contract(
		erc20Abi,
		// Harmony contract on Testnet
		'0xCe9B44D3bB40d6b1cA3C7E0Ed5EDb9B59AcD01fd'
	);

	isInitialized = true;
};

// export const mintNftToken = async () => {
// 	if (!isInitialized) {
// 		await init();
// 	}

// 	return erc20Contract.methods
// 		.balanceOf(MyOwnAccount)
// 		.call()
// 		.then((balance) => {
// 			return Web3.utils.fromWei(balance);
// 		});
// };

 





