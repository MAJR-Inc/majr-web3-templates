const express = require("express");
const router = express.Router();
const creatorMembershipController = require("../controllers/creatorMembership");

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
  "/ownerOf/:contractAddress/:tokenId",
  creatorMembershipController.getOwnerOf
);
router.get(
  "/balanceOf/:contractAddress/:userAddress",
  creatorMembershipController.getBalanceOf
);
router.get(
  "/totalSupply/:contractAddress",
  creatorMembershipController.getTotalSupply
);
router.get(
  "/isApprovedForAll/:contractAddress/:ownerAddress",
  creatorMembershipController.getIsApprovedForAll
);
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
router.post(
  "/setApprovalForAll",
  creatorMembershipController.setApprovalForAll
);
router.post("/transferFrom", creatorMembershipController.transferFrom);

module.exports = router;
