const date_today = new Date();
const date_future = new Date();

// date_future.setFullYear(2025, 1, 1);
// date_today.setHours(0, 0, 0, 0);
// date_future.setHours(0, 0, 0, 0);

module.exports = {
  swagger: "2.0",
  info: {
    title: "MAJR Web3 Templates",
    version: "1.0",
    description: "MAJR Web3 Templates API Documentation",
  },
  tags: [
    { name: "ABI" },
    { name: "Factory" },
    { name: "Membership" },
    { name: "Membership Admin" },
  ],
  paths: {
    "/membership/abis": {
      get: {
        tags: ["ABI"],
        summary: "Get ABI",
        description: "Method for retrieving the ABI of a contract",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                type: { type: "string", required: true },
              },
            },
          },
        ],
        responses: {
          200: {
            description:
              "Success. Returns the ABI of the requested contract type",
          },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/allContracts": {
      get: {
        tags: ["Factory"],
        summary: "Get all creator membership contracts",
        description:
          "Method for retrieving all membership contracts created by all creators",
        responses: {
          200: {
            description:
              "Success. Returns an array of all creator membership contracts",
          },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/contractsOfCreator": {
      get: {
        tags: ["Factory"],
        summary: "Get creator membership contracts",
        description:
          "Method for retrieving membership contracts created by a specific creator",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                creatorAddress: { type: "string", required: true },
              },
            },
          },
        ],
        responses: {
          200: {
            description:
              "Success. Returns an array of membership contracts created by the specified creator",
          },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/createContract": {
      post: {
        tags: ["Factory"],
        summary: "Create membership contract",
        description: "Method for creating a new membership contract",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                creatorAddress: { type: "string", required: true },
                name: { type: "string", required: true },
                price: { type: "number", required: true },
                splitAddresses: { type: "array", required: true },
                splitAmounts: { type: "array", required: true },
                referralAddresses: { type: "array" },
                referralAmounts: { type: "array" },
              },
            },
          },
        ],
        responses: {
          200: { description: "Success. Returns the transaction details" },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/name": {
      get: {
        tags: ["Membership"],
        summary: "Get membership contract name",
        description: "Method for retrieving the name of a membership contract",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Success. Returns the name of the membership contract",
          },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/symbol": {
      get: {
        tags: ["Membership"],
        summary: "Get membership contract symbol",
        description:
          "Method for retrieving the symbol of a membership contract",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
              },
            },
          },
        ],
        responses: {
          200: {
            description:
              "Success. Returns the symbol of the membership contract",
          },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/paused": {
      get: {
        tags: ["Membership"],
        summary: "Check if membership contract is paused",
        description: "Method for checking if a membership contract is paused",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
              },
            },
          },
        ],
        responses: {
          200: {
            description:
              "Success. Returns true if the membership contract is paused, false otherwise",
          },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/price": {
      get: {
        tags: ["Membership"],
        summary: "Get membership contract mint price",
        description: "Method for retrieving the price of a membership contract",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
              },
            },
          },
        ],
        responses: {
          200: {
            description:
              "Success. Returns the price of the membership contract",
          },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/owner": {
      get: {
        tags: ["Membership"],
        summary: "Get membership contract owner",
        description: "Method for retrieving the owner of a membership contract",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
              },
            },
          },
        ],
        responses: {
          200: {
            description:
              "Success. Returns the owner address of the membership contract",
          },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/splitAddressesAndAmounts": {
      get: {
        tags: ["Membership"],
        summary: "Get split addresses and amounts",
        description:
          "Method for retrieving the split addresses and amounts of a membership contract",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
              },
            },
          },
        ],
        responses: {
          200: {
            description:
              "Success. Returns an array of split addresses and amounts",
          },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/referralAddressesAndAmounts": {
      get: {
        tags: ["Membership"],
        summary: "Get referral addresses and amounts",
        description:
          "Method for retrieving the referral addresses and amounts of a membership contract",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
              },
            },
          },
        ],
        responses: {
          200: {
            description:
              "Success. Returns an array of referral addresses and amounts",
          },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/exists": {
      get: {
        tags: ["Membership"],
        summary: "Check if membership NFT of a given token Id exists",
        description:
          "Method for checking if a membership token exists in a membership contract",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
                tokenId: { type: "string", required: true },
              },
            },
          },
        ],
        responses: {
          200: {
            description:
              "Success. Returns true if the membership token exists, false otherwise",
          },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/tokenURI": {
      get: {
        tags: ["Membership"],
        summary: "Get membership token metadata URI",
        description:
          "Method for retrieving the URI of a membership token in a membership contract",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
                tokenId: { type: "string", required: true },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Success. Returns the URI of the membership token",
          },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/baseURI": {
      get: {
        tags: ["Membership"],
        summary: "Get membership base metadata URI",
        description:
          "Method for retrieving the base metadata URI of a membership contract",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
              },
            },
          },
        ],
        responses: {
          200: {
            description:
              "Success. Returns the base URI of the membership contract",
          },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/contractmMetadataURI": {
      get: {
        tags: ["Membership"],
        summary: "Get membership contract-level metadata URI",
        description:
          "Method for retrieving the contract-level metadata URI of a membership contract",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
              },
            },
          },
        ],
        responses: {
          200: {
            description:
              "Success. Returns the metadata URI of the membership contract",
          },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/pause": {
      post: {
        tags: ["Membership Admin"],
        summary: "Pause membership contract",
        description: "Method for pausing a membership contract",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
              },
            },
          },
        ],
        responses: {
          200: { description: "Success. Returns the transaction details" },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/unpause": {
      post: {
        tags: ["Membership Admin"],
        summary: "Unpause membership contract",
        description: "Method for unpausing a membership contract",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
              },
            },
          },
        ],
        responses: {
          200: { description: "Success. Returns the transaction details" },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/setPrice": {
      post: {
        tags: ["Membership Admin"],
        summary: "Set membership contract NFT mint price",
        description: "Method for setting the mint price of a membership NFT",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
                newPrice: { type: "number", required: true },
              },
            },
          },
        ],
        responses: {
          200: { description: "Success. Returns the transaction details" },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/setBaseURI": {
      post: {
        tags: ["Membership Admin"],
        summary: "Set membership contract base URI",
        description: "Method for setting the base URI of a membership contract",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
                newBaseURI: { type: "string", required: true },
              },
            },
          },
        ],
        responses: {
          200: { description: "Success. Returns the transaction details" },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/setSplit": {
      post: {
        tags: ["Membership Admin"],
        summary: "Set membership contract split addresses and amounts",
        description:
          "Method for setting the split addresses and amounts of a membership contract",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
                newSplitAddresses: { type: "array", required: true },
                newSplitAmounts: { type: "array", required: true },
              },
            },
          },
        ],
        responses: {
          200: { description: "Success. Returns the transaction details" },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/setReferral": {
      post: {
        tags: ["Membership Admin"],
        summary: "Set membership contract referral addresses and amounts",
        description:
          "Method for setting the referral addresses and amounts of a membership contract",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
                newReferralAddresses: { type: "array", required: true },
                newReferralAmounts: { type: "array", required: true },
              },
            },
          },
        ],
        responses: {
          200: { description: "Success. Returns the transaction details" },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/transferOwnership": {
      post: {
        tags: ["Membership Admin"],
        summary: "Transfer ownership of membership contract",
        description:
          "Method for transferring the ownership of a membership contract",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
                newOwner: { type: "string", required: true },
              },
            },
          },
        ],
        responses: {
          200: { description: "Success. Returns the transaction details" },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },

    "/membership/renounceOwnership": {
      post: {
        tags: ["Membership Admin"],
        summary: "Renounce ownership of membership contract",
        description:
          "Method for renouncing the ownership of a membership contract",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
              },
            },
          },
        ],
        responses: {
          200: { description: "Success. Returns the transaction details" },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/mint": {
      post: {
        tags: ["Membership Admin"],
        summary: "Mint membership NFTs",
        description: "Method for minting new membership NFTs",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
                privateKey: { type: "string", required: true },
                to: { type: "string", required: true },
                quantity: { type: "number", required: true },
              },
            },
          },
        ],
        responses: {
          200: { description: "Success. Returns the transaction details" },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/mintWithReferrer": {
      post: {
        tags: ["Membership Admin"],
        summary: "Mint membership NFTs with referrer",
        description: "Method for minting new membership NFTs with a referrer",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
                privateKey: { type: "string", required: true },
                to: { type: "string", required: true },
                quantity: { type: "number", required: true },
                referrer: { type: "string", required: true },
              },
            },
          },
        ],
        responses: {
          200: { description: "Success. Returns the transaction details" },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
    "/membership/burn": {
      post: {
        tags: ["Membership Admin"],
        summary: "Burn membership NFT",
        description: "Method for burning a membership NFT",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: { type: "string", required: true },
                privateKey: { type: "string", required: true },
                tokenId: { type: "string", required: true },
              },
            },
          },
        ],
        responses: {
          200: { description: "Success. Returns the transaction details" },
          500: { description: "Failed! Unexpected server error" },
        },
      },
    },
  },
};
