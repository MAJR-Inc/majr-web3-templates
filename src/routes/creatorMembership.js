const express = require("express");
const router = express.Router();
const creatorMembershipController = require("../controllers/creatorMembership");

// http://localhost:3000/api/membership

// Test Creator: 0x2cD3d676F4C53D645aa523cadBf00BA049f4E8eB

// New Owner: 0x2e7b6533641b120e88bd9d97aa2d7fd0091cf32e

// Test Membership Contract: 0x733e2d2C3B83604F4E629237689D9F4A26Ae250E

// 0xb5bFa83A822aCd50D71b610cE0218013916f3495

router.get(
  "/defaultMetadata/:contractAddress",
  creatorMembershipController.getDefaultContractMetadata
);
router.get(
  "/defaultMetadata/:contractAddress/:tokenId",
  creatorMembershipController.getDefaultTokenMetadata
);

router.get(
  "/allContracts",
  creatorMembershipController.getAllCreatorMembershipContracts
);
router.get(
  "/contractsOfCreator/:creatorAddress",
  creatorMembershipController.getMembershipContractsOfCreator
);
router.get("/getMAJR", creatorMembershipController.getMAJR);
router.get("/getDefaultBaseURI", creatorMembershipController.getDefaultBaseURI);
router.post("/setMAJR", creatorMembershipController.setMAJR);
router.post(
  "/setDefaultNFTMetadataURI",
  creatorMembershipController.setDefaultBaseURI
);
router.post(
  "/createContract",
  creatorMembershipController.createMembershipContract
);

router.get("/name/:contractAddress", creatorMembershipController.getName);
router.get("/symbol/:contractAddress", creatorMembershipController.getSymbol);
router.get("/paused/:contractAddress", creatorMembershipController.getPaused);
router.get("/price/:contractAddress", creatorMembershipController.getPrice);
router.get("/owner/:contractAddress", creatorMembershipController.getOwner);
router.get(
  "/getMAJRAddress/:contractAddress",
  creatorMembershipController.getMAJRAddress
);
router.get(
  "/splitAddressesAndAmounts/:contractAddress",
  creatorMembershipController.getSplitAddressesAndAmounts
);
router.get(
  "/referralAddressesAndAmounts/:contractAddress",
  creatorMembershipController.getReferralAddressesAndAmounts
);
router.get(
  "/exists/:contractAddress/:tokenId",
  creatorMembershipController.getExists
);
router.get(
  "/tokenURI/:contractAddress/:tokenId",
  creatorMembershipController.getTokenURI
);
router.get("/baseURI/:contractAddress", creatorMembershipController.getBaseURI);
router.get(
  "/contractURI/:contractAddress",
  creatorMembershipController.getContractURI
);

router.post("/pause", creatorMembershipController.pause);
router.post("/unpause", creatorMembershipController.unpause);
router.post("/setPrice", creatorMembershipController.setPrice);
router.post("/setBaseURI", creatorMembershipController.setBaseURI);
router.post("/setSplit", creatorMembershipController.setSplit);
router.post("/setReferral", creatorMembershipController.setReferral);
router.post(
  "/transferOwnership",
  creatorMembershipController.transferOwnership
);
router.post(
  "/renounceOwnership",
  creatorMembershipController.renounceOwnership
);
router.post("/setMAJRAddress", creatorMembershipController.setMAJRAddress);
router.post("/mint", creatorMembershipController.mint);
router.post("/mintWithReferrer", creatorMembershipController.mintWithReferrer);
router.post("/burn", creatorMembershipController.burn);

module.exports = router;
