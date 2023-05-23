const defaultContractMetadata = require("../../json/defaultContractMetadata.json");
const {
  getAlchemyProvider,
  getMAJRWallet,
  getContract,
  toWei,
  toEther,
  mainnetFactoryAddress,
  testnetFactoryAddress,
  getAbi,
} = require("../../utils");

function getDefaultContractMetadata(req, res) {
  try {
    const { contractAddress } = req.params;

    // Verify that the contractAddress is valid, i.e. that it is a contract address included in a database

    return res.status(200).json(defaultContractMetadata);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function getDefaultTokenMetadata(req, res) {
  try {
    const { contractAddress, tokenId } = req.params;

    // Verify that the contractAddress is valid, i.e. that it is a contract address included in a database

    const membershipContract = getContract(
      contractAddress,
      getAbi("membership"),
      getAlchemyProvider("mainnet")
    );

    const tokenIdExists = await membershipContract.exists(tokenId);

    if (!tokenIdExists) {
      return res.status(404).json({
        title: "Not Found",
        message:
          "The NFT you are looking for has not been minted yet or has been burned by its owner. Please try again with a different token ID.",
      });
    }

    const name = await membershipContract.name();

    const defaultTokenMetadata = {
      name: `${name} #${tokenId}`,
      description: "Membership Everything. Join. Share. Earn.",
      external_url: `${process.env.BACKEND_URL_PROD}/membership/defaultMetadata/${contractAddress}/${tokenId}`,
      image: `${process.env.DEFAULT_ART_URL}`,
      attributes: [
        {
          trait_type: "Id",
          value: tokenId,
        },
        {
          trait_type: "Type",
          value: "Standard Membership",
        },
        {
          trait_type: "Payment Type",
          value: "Subscription",
        },
      ],
    };

    return res.status(200).json(defaultTokenMetadata);
  } catch (error) {
    console.error(error);
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
    return res.status(200).json(allContracts[1]); // allContracts[0] is an array length
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function getMembershipContractsOfCreator(req, res) {
  try {
    const { creatorAddress } = req.params;

    const provider = getAlchemyProvider("testnet");
    const factory = getContract(
      testnetFactoryAddress,
      getAbi("factory"),
      provider
    );
    const allContracts = await factory.getMembershipContractsOfCreator(
      creatorAddress
    );
    return res.status(200).json(allContracts[1]); // allContracts[0] is an array length
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function getMAJR(req, res) {
  try {
    const provider = getAlchemyProvider("mainnet");
    const factory = getContract(
      mainnetFactoryAddress,
      getAbi("factory"),
      provider
    );
    const majrAddress = await factory.MAJR();
    return res.status(200).json(majrAddress);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function getDefaultBaseURI(req, res) {
  try {
    const provider = getAlchemyProvider("mainnet");
    const factory = getContract(
      mainnetFactoryAddress,
      getAbi("factory"),
      provider
    );
    const defaultBaseURI = await factory.defaultBaseURI();
    return res.status(200).json(defaultBaseURI);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function setMAJR(req, res) {
  try {
    const { newMAJRAddress } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const majrAdminWallet = getMAJRWallet(provider);
    const factory = getContract(
      mainnetFactoryAddress,
      getAbi("factory"),
      provider
    );

    const tx = await factory.connect(majrAdminWallet).setMAJR(newMAJRAddress);
    await tx.wait(1);
    return res.status(200).json(tx);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function setDefaultBaseURI(req, res) {
  try {
    const { newDefaultBaseURI } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const majrAdminWallet = getMAJRWallet(provider);
    const factory = getContract(
      mainnetFactoryAddress,
      getAbi("factory"),
      provider
    );

    const tx = await factory
      .connect(majrAdminWallet)
      .setDefaultBaseURI(newDefaultBaseURI);
    await tx.wait(1);
    return res.status(200).json(tx);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function createMembershipContract(req, res) {
  try {
    const { creatorAddress, name, price } = req.body;

    const provider = getAlchemyProvider("testnet");
    const majrAdminWallet = getMAJRWallet(provider);
    const factory = getContract(
      testnetFactoryAddress,
      getAbi("factory"),
      provider
    );

    const newContractAddress = await factory
      .connect(majrAdminWallet)
      .createMembershipContract(creatorAddress, name, toWei(price.toString()));
    return res.status(200).json({
      newContractAddress,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function getName(req, res) {
  try {
    const { contractAddress } = req.params;

    const provider = getAlchemyProvider("testnet");
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

async function getSymbol(req, res) {
  try {
    const { contractAddress } = req.params;

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

async function getPaused(req, res) {
  try {
    const { contractAddress } = req.params;

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

async function getPrice(req, res) {
  try {
    const { contractAddress } = req.params;

    const provider = getAlchemyProvider("mainnet");
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );
    const price = await contract.price();
    const formattedPrice = toEther(price);
    return res.status(200).json(formattedPrice);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function getOwner(req, res) {
  try {
    const { contractAddress } = req.params;

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

async function getMAJRAddress(req, res) {
  try {
    const { contractAddress } = req.params;

    const provider = getAlchemyProvider("mainnet");
    const factory = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );
    const majrAddress = await factory.MAJR();
    return res.status(200).json(majrAddress);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function getSplitAddressesAndAmounts(req, res) {
  try {
    const { contractAddress } = req.params;

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
    const { contractAddress } = req.params;

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

async function getExists(req, res) {
  try {
    const { contractAddress, tokenId } = req.params;

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

async function getTokenURI(req, res) {
  try {
    const { contractAddress, tokenId } = req.params;

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

async function getBaseURI(req, res) {
  try {
    const { contractAddress } = req.params;

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

async function getContractURI(req, res) {
  try {
    const { contractAddress } = req.params;

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

async function setMAJRAddress(req, res) {
  try {
    const { contractAddress, newMAJRAddress } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const majrAdminWallet = getMAJRWallet(provider);
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );

    const tx = await contract
      .connect(majrAdminWallet)
      .setMAJRAddress(newMAJRAddress);
    await tx.wait(1);
    return res.status(200).json(tx);
  } catch (error) {
    console.error(error);
  }
}

async function mint(req, res) {
  try {
    const { contractAddress, to, quantity } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const majrAdminWallet = getMAJRWallet(provider);
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );

    const tx = await contract.connect(majrAdminWallet).mint(to, quantity);
    await tx.wait(1);
    return res.status(200).json(tx);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

async function mintWithReferrer(req, res) {
  try {
    const { contractAddress, to, quantity, referrer } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const majrAdminWallet = getMAJRWallet(provider);
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );

    const tx = await contract
      .connect(majrAdminWallet)
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
    const { contractAddress, tokenId } = req.body;

    const provider = getAlchemyProvider("mainnet");
    const majrAdminWallet = getMAJRWallet(provider);
    const contract = getContract(
      contractAddress,
      getAbi("membership"),
      provider
    );

    const tx = await contract.connect(majrAdminWallet).burn(tokenId);
    await tx.wait(1);
    return res.status(200).json(tx);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed! Unexpected server error");
  }
}

module.exports = {
  getDefaultContractMetadata,
  getDefaultTokenMetadata,
  getAbi,
  getAllCreatorMembershipContracts,
  getMembershipContractsOfCreator,
  getMAJR,
  getDefaultBaseURI,
  setMAJR,
  setDefaultBaseURI,
  createMembershipContract,
  getName,
  getSymbol,
  getPaused,
  getPrice,
  getOwner,
  getMAJRAddress,
  getSplitAddressesAndAmounts,
  getReferralAddressesAndAmounts,
  getExists,
  getTokenURI,
  getBaseURI,
  getContractURI,
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
  setMAJRAddress,
};
