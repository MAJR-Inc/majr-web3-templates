const express = require("express");
const router = express.Router();
const creatorMembershipController = require("../controllers/creatorMembership");

router.get("/abis", creatorMembershipController.getAbi);

router.get(
  "/allContracts",
  creatorMembershipController.getAllCreatorMembershipContracts
);
router.get(
  "/contractsOfCreator",
  creatorMembershipController.getMembershipContractsOfCreator
);
router.post(
  "/createContract",
  creatorMembershipController.createMembershipContract
);

router.get("/name", creatorMembershipController.name);
router.get("/symbol", creatorMembershipController.symbol);
router.get("/paused", creatorMembershipController.paused);
router.get("/price", creatorMembershipController.price);
router.get("/owner", creatorMembershipController.owner);
router.get(
  "/splitAddressesAndAmounts",
  creatorMembershipController.getSplitAddressesAndAmounts
);
router.get(
  "/referralAddressesAndAmounts",
  creatorMembershipController.getReferralAddressesAndAmounts
);
router.get("/exists", creatorMembershipController.exists);
router.get("/tokenURI", creatorMembershipController.tokenURI);
router.get("/baseURI", creatorMembershipController.baseURI);
router.get(
  "/contractMetadataURI",
  creatorMembershipController.contractMetadataURI
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
router.post("/mint", creatorMembershipController.mint);
router.post("/mintWithReferrer", creatorMembershipController.mintWithReferrer);
router.post("/burn", creatorMembershipController.burn);

module.exports = router;
