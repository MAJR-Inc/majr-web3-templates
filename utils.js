const { ethers } = require('ethers');

exports.getInfuraProvider = (type) => {
	if (type === 'mainnet') {
		return new ethers.providers.JsonRpcProvider(
			`https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
		);
	} else if (type === 'testnet') {
		return new ethers.providers.JsonRpcProvider(
			`https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`
		);
	}
};

exports.getAlchemyProvider = (type) => {
	if (type === 'mainnet') {
		return new ethers.providers.JsonRpcProvider(
			`https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
		);
	} else if (type === 'testnet') {
		return new ethers.providers.JsonRpcProvider(
			`https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
		);
	}
};

exports.getPublicProvider = (type) => {
	if (type === 'mainnet') {
		return new ethers.providers.JsonRpcProvider(
			process.env.POLYGON_MAINNET_PUBLIC_RPC
		);
	} else if (type === 'testnet') {
		return new ethers.providers.JsonRpcProvider(
			process.env.POLYGON_TESTNET_PUBLIC_RPC
		);
	}
};

exports.getWallet = (privateKey, provider) => {
	return new ethers.Wallet(privateKey, provider);
};

exports.getMAJRWallet = (provider) => {
	return new ethers.Wallet(process.env.MAJR_ADMIN_PRIVATE_KEY, provider);
};

exports.getContract = (address, abi, provider) => {
	return new ethers.Contract(address, abi, provider);
};

exports.toEther = (amount) => {
	return ethers.utils.formatEther(amount);
};

exports.toWei = (amount) => {
	return ethers.utils.parseEther(amount);
};

exports.mainnetFactoryAddress = process.env.FACTORY_CONTRACT_ADDRESS_MAINNET;

exports.testnetFactoryAddress = process.env.FACTORY_CONTRACT_ADDRESS_TESTNET;
