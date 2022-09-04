 import MutantAbi from 'MutAbi.json';
import Web3 from 'web3';

let MyOwnAccount;

 

let isInitialized = false;

export const init = async () => {
	let MetaMask = window.ethereum;

	if (typeof MetaMask !== 'undefined') {
		MetaMask
			.request({ method: 'eth_requestAccounts' })
			.then((accounts) => {
				MyOwnAccount = accounts[0];
				console.log(`Selected account is ${MyOwnAccount}`);
			})
			.catch((err) => {
				console.log(err);
				return;
			});

		window.ethereum.on('accountsChanged', function (accounts) {
			MyOwnAccount = accounts[0];
			console.log(`Selected account changed to ${MyOwnAccount}`);
		});
	}

	const web3 = new Web3(MetaMask);

	const networkId = await web3.eth.net.getId();


	const MyAbi = [
		// Your contract Abi
	];

	 MyContracts = new web3.eth.Contract(
		MyAbi,
		// Harmony contract on Testnet
		// 'Your Contract address'
	);

	isInitialized = true;
};

 


export const MintMyToken = async () => {

	if (!isInitialized) {
		await init();
	}

		return MyContracts.methods.mint(MyOwnAccount).send({from: MyOwnAccount});
 
};

 





