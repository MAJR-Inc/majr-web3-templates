const abis = require("../../abi.json");
const {
  getAlchemyProvider,
  getWallet,
  getMAJRWallet,
  getContract,
  toWei,
  mainnetFactoryAddress,
} = require("../../utils");

function getAbi(req, res) {
  const { type } = req.body;

  if (type === "factory") {
    return res.status(200).json(abis.factory);
  } else if (type === "membership") {
    return res.status(200).json(abis.membership);
  } else {
    console.error("Invalid contract type");
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function getAllCreatorMembershipContracts(req, res) {
  try {
    const provider = getAlchemyProvider("mainnet");
    const factory = getContract(
      mainnetFactoryAddress,
      getAbi("factory"),
      provider
    );
    const allContracts = await factory.getAllCreatorMembershipContracts();
    return res.status(200).json(allContracts);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function getMembershipContractsOfCreator(req, res) {
  try {
    const { creatorAddress } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const factory = getContract(
      mainnetFactoryAddress,
      getAbi("factory"),
      provider
    );
    const allContracts = await factory.getMembershipContractsOfCreator(
      creatorAddress
    );
    return res.status(200).json(allContracts);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function createMembershipContract(req, res) {
  try {
    const {
      creatorAddress,
      name,
      price,
      splitAddresses,
      splitAmounts,
      referralAddresses,
      referralAmounts,
    } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const majrAdminWallet = getMAJRWallet(provider);
    const factory = getContract(
      mainnetFactoryAddress,
      getAbi("factory"),
      provider
    );

    const tx = await factory
      .connect(majrAdminWallet)
      .createMembershipContract(
        majrAdminWallet.address,
        creatorAddress,
        name,
        toWei(price.toString()),
        splitAddresses,
        splitAmounts,
        referralAddresses,
        referralAmounts
      );
    await tx.wait(1);
    return res.status(200).json(tx);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function name(req, res) {
  try {
    const { contractAddress } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );
    const name = await contract.name();
    return res.status(200).json(name);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function symbol(req, res) {
  try {
    const { contractAddress } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );
    const symbol = await contract.symbol();
    return res.status(200).json(symbol);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function paused(req, res) {
  try {
    const { contractAddress } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );
    const paused = await contract.paused();
    return res.status(200).json(paused);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function price(req, res) {
  try {
    const { contractAddress } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );
    const price = await contract.price();
    return res.status(200).json(price);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function owner(req, res) {
  try {
    const { contractAddress } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );
    const owner = await contract.owner();
    return res.status(200).json(owner);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function getSplitAddressesAndAmounts(req, res) {
  try {
    const { contractAddress } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );
    const splitAddressesAndAmounts =
      await contract.getSplitAddressesAndAmounts();
    return res.status(200).json(splitAddressesAndAmounts);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function getReferralAddressesAndAmounts(req, res) {
  try {
    const { contractAddress } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );
    const referralAddressesAndAmounts =
      await contract.getReferralAddressesAndAmounts();
    return res.status(200).json(referralAddressesAndAmounts);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function exists(req, res) {
  try {
    const { contractAddress, tokenId } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );
    const exists = await contract.exists(tokenId);
    return res.status(200).json(exists);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function tokenURI(req, res) {
  try {
    const { contractAddress, tokenId } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );
    let tokenURI = await contract.tokenURI(tokenId);
    return res.status(200).json(tokenURI);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function baseURI(req, res) {
  try {
    const { contractAddress } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );

    const baseURI = await contract.baseURI();
    return res.status(200).json(baseURI);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function contractMetadataURI(req, res) {
  try {
    const { contractAddress } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );

    const contractMetadataURI = await contract.contractURI();
    return res.status(200).json(contractMetadataURI);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function pause(req, res) {
  try {
    const { contractAddress } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const majrAdminWallet = getMAJRWallet(provider);
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );

    const tx = await contract.connect(majrAdminWallet).pause();
    await tx.wait(1);
    return res.status(200).json(tx);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function unpause(req, res) {
  try {
    const { contractAddress } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const majrAdminWallet = getMAJRWallet(provider);
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );

    const tx = await contract.connect(majrAdminWallet).unpause();
    await tx.wait(1);
    return res.status(200).json(tx);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function setPrice(req, res) {
  try {
    const { contractAddress, newPrice } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const majrAdminWallet = getMAJRWallet(provider);
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );

    const price = toWei(newPrice.toString());

    const tx = await contract.connect(majrAdminWallet).setPrice(price);
    await tx.wait(1);
    return res.status(200).json(tx);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function setBaseURI(req, res) {
  try {
    const { contractAddress, newBaseURI } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const majrAdminWallet = getMAJRWallet(provider);
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );

    const tx = await contract.connect(majrAdminWallet).setBaseURI(newBaseURI);
    await tx.wait(1);
    return res.status(200).json(tx);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function setSplit(req, res) {
  try {
    const { contractAddress, newSplitAddresses, newSplitAmounts } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const majrAdminWallet = getMAJRWallet(provider);
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );

    const tx = await contract
      .connect(majrAdminWallet)
      .setSplit(newSplitAddresses, newSplitAmounts);
    await tx.wait(1);
    return res.status(200).json(tx);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function setReferral(req, res) {
  try {
    const { contractAddress, newReferralAddresses, newReferralAmounts } =
      req.body;

    const provider = getAlchemyProvider("mainnet");
    const majrAdminWallet = getMAJRWallet(provider);
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );

    const tx = await contract
      .connect(majrAdminWallet)
      .setReferral(newReferralAddresses, newReferralAmounts);
    await tx.wait(1);
    return res.status(200).json(tx);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function transferOwnership(req, res) {
  try {
    const { contractAddress, newOwner } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const majrAdminWallet = getMAJRWallet(provider);
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );

    const tx = await contract
      .connect(majrAdminWallet)
      .transferOwnership(newOwner);
    await tx.wait(1);
    return res.status(200).json(tx);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function renounceOwnership(req, res) {
  try {
    const { contractAddress } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const majrAdminWallet = getMAJRWallet(provider);
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );

    const tx = await contract.connect(majrAdminWallet).renounceOwnership();
    await tx.wait(1);
    return res.status(200).json(tx);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function mint(req, res) {
  try {
    const { contractAddress, privateKey, to, quantity } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const wallet = getWallet(privateKey, provider);
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );

    const tx = await contract.connect(wallet).mint(to, quantity);
    await tx.wait(1);
    return res.status(200).json(tx);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function mintWithReferrer(req, res) {
  try {
    const { contractAddress, privateKey, to, quantity, referrer } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const wallet = getWallet(privateKey, provider);
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );

    const tx = await contract
      .connect(wallet)
      .mintWithReferrer(to, quantity, referrer);
    await tx.wait(1);
    return res.status(200).json(tx);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function burn(req, res) {
  try {
    const { contractAddress, privateKey, tokenId } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const wallet = getWallet(privateKey, provider);
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );

    const tx = await contract.connect(wallet).burn(tokenId);
    await tx.wait(1);
    return res.status(200).json(tx);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

module.exports = {
  getAbi,
  getAllCreatorMembershipContracts,
  getMembershipContractsOfCreator,
  createMembershipContract,
  name,
  symbol,
  paused,
  price,
  owner,
  getSplitAddressesAndAmounts,
  getReferralAddressesAndAmounts,
  exists,
  tokenURI,
  baseURI,
  contractMetadataURI,
  pause,
  unpause,
  setPrice,
  setBaseURI,
  setSplit,
  setReferral,
  transferOwnership,
  renounceOwnership,
  mint,
  mintWithReferrer,
  burn,
};
