module.exports = {
  swagger: "2.0",
  info: {
    title: "MAJR Web3 API",
    description: "MAJR Web3 API Documentation",
    version: "2.0",
  },
  basePath: "/api",
  tags: [{ name: "Factory" }, { name: "Membership" }],
  paths: {
    "/defaultMetadata/{contractAddress}": {
      get: {
        tags: ["Membership"],
        summary: "Get default contract metadata",
        parameters: [
          {
            name: "contractAddress",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/defaultMetadata/{contractAddress}/{tokenId}": {
      get: {
        tags: ["Membership"],
        summary: "Get default token metadata",
        parameters: [
          {
            name: "contractAddress",
            in: "path",
            required: true,
            type: "string",
          },
          {
            name: "tokenId",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          404: {
            description:
              "Not Found - The NFT you are looking for has not been minted yet or has been burned by its owner. Please try again with a different token ID.",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/allContracts": {
      get: {
        tags: ["Factory"],
        summary: "Get all creator membership contracts",
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/contractsOfCreator/{creatorAddress}": {
      get: {
        tags: ["Factory"],
        summary: "Get membership contracts of a creator",
        parameters: [
          {
            name: "creatorAddress",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/getMAJR": {
      get: {
        tags: ["Factory"],
        summary: "Get MAJR admin wallet address on factory contract",
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/getDefaultBaseURI": {
      get: {
        tags: ["Factory"],
        summary: "Get default base URI",
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/setMAJR": {
      post: {
        tags: ["Factory"],
        summary: "Set MAJR admin wallet address on factory contract",
        parameters: [
          {
            name: "newMAJRAddress",
            in: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                newMAJRAddress: {
                  type: "string",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/setDefaultNFTMetadataURI": {
      post: {
        tags: ["Factory"],
        summary: "Set default NFT metadata URI",
        parameters: [
          {
            name: "newDefaultBaseURI",
            in: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                newDefaultBaseURI: {
                  type: "string",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/createContract": {
      post: {
        tags: ["Factory"],
        summary: "Create a membership contract",
        parameters: [
          {
            name: "createContractRequest",
            in: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                creatorAddress: {
                  type: "string",
                },
                name: {
                  type: "string",
                },
                price: {
                  type: "number",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/name/{contractAddress}": {
      get: {
        tags: ["Membership"],
        summary: "Get NFT name",
        parameters: [
          {
            name: "contractAddress",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/symbol/{contractAddress}": {
      get: {
        tags: ["Membership"],
        summary: "Get NFT symbol",
        parameters: [
          {
            name: "contractAddress",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/paused/{contractAddress}": {
      get: {
        tags: ["Membership"],
        summary: "Check if contract is paused",
        parameters: [
          {
            name: "contractAddress",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/price/{contractAddress}": {
      get: {
        tags: ["Membership"],
        summary: "Get NFT mint price",
        parameters: [
          {
            name: "contractAddress",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/owner/{contractAddress}": {
      get: {
        tags: ["Membership"],
        summary: "Get contract owner",
        parameters: [
          {
            name: "contractAddress",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/getOwnerOf/{contractAddress}/{tokenId}": {
      get: {
        tags: ["Membership"],
        summary: "Get the owner of an NFT",
        parameters: [
          {
            name: "contractAddress",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "tokenId",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful operation",
          },
          500: {
            description: "Unexpected server error",
          },
        },
      },
    },
    "/getBalanceOf/{contractAddress}/{userAddress}": {
      get: {
        tags: ["Membership"],
        summary: "Get the balance of NFTs for a user",
        parameters: [
          {
            name: "contractAddress",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "userAddress",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful operation",
          },
          500: {
            description: "Unexpected server error",
          },
        },
      },
    },
    "/getTotalSupply/{contractAddress}": {
      get: {
        tags: ["Membership"],
        summary: "Get the total supply of NFTs",
        parameters: [
          {
            name: "contractAddress",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful operation",
          },
          500: {
            description: "Unexpected server error",
          },
        },
      },
    },
    "/getIsApprovedForAll/{contractAddress}/{ownerAddress}": {
      get: {
        tags: ["Membership"],
        summary: "Check if an owner has approved the MAJR admin wallet",
        parameters: [
          {
            name: "contractAddress",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "ownerAddress",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Successful operation",
          },
          500: {
            description: "Unexpected server error",
          },
        },
      },
    },
    "/getMAJRAddress/{contractAddress}": {
      get: {
        tags: ["Membership"],
        summary: "Get MAJR admin wallet address on a membership contract",
        parameters: [
          {
            name: "contractAddress",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/splitAddressesAndAmounts/{contractAddress}": {
      get: {
        tags: ["Membership"],
        summary: "Get split addresses and amounts",
        parameters: [
          {
            name: "contractAddress",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/referralAddressesAndAmounts/{contractAddress}": {
      get: {
        tags: ["Membership"],
        summary: "Get referral addresses and amounts",
        parameters: [
          {
            name: "contractAddress",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/exists/{contractAddress}/{tokenId}": {
      get: {
        tags: ["Membership"],
        summary: "Check if an NFT exists",
        parameters: [
          {
            name: "contractAddress",
            in: "path",
            required: true,
            type: "string",
          },
          {
            name: "tokenId",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/tokenURI/{contractAddress}/{tokenId}": {
      get: {
        tags: ["Membership"],
        summary: "Get the token URI of an NFT",
        parameters: [
          {
            name: "contractAddress",
            in: "path",
            required: true,
            type: "string",
          },
          {
            name: "tokenId",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/baseURI/{contractAddress}": {
      get: {
        tags: ["Membership"],
        summary: "Get the base URI of the contract",
        parameters: [
          {
            name: "contractAddress",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/contractURI/{contractAddress}": {
      get: {
        tags: ["Membership"],
        summary: "Get the contract URI",
        parameters: [
          {
            name: "contractAddress",
            in: "path",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/pause": {
      post: {
        tags: ["Membership"],
        summary: "Pause the contract",
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/unpause": {
      post: {
        tags: ["Membership"],
        summary: "Unpause the contract",
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/setPrice": {
      post: {
        tags: ["Membership"],
        summary: "Set the new NFT mint price",
        parameters: [
          {
            name: "newPrice",
            in: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: {
                  type: "string",
                },
                newPrice: {
                  type: "number",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/setBaseURI": {
      post: {
        tags: ["Membership"],
        summary: "Set the base URI of the contract",
        parameters: [
          {
            name: "newBaseURI",
            in: "body",
            required: true,
            schema: {
              type: "object",
              properties: {
                contractAddress: {
                  type: "string",
                },
                newBaseURI: {
                  type: "string",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
          },
          500: {
            description: "Failed! Unexpected server error",
          },
        },
      },
    },
    "/setSplit": {
      post: {
        tags: ["Membership"],
        summary: "Set split addresses and amounts",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  contractAddress: {
                    type: "string",
                  },
                  newSplitAddresses: {
                    type: "array",
                    items: {
                      type: "string",
                    },
                  },
                  newSplitAmounts: {
                    type: "array",
                    items: {
                      type: "integer",
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successful operation",
          },
          400: {
            description: "Bad request",
          },
          500: {
            description: "Unexpected server error",
          },
        },
      },
    },
    "/setReferral": {
      post: {
        tags: ["Membership"],
        summary: "Set referral addresses and amounts",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  contractAddress: {
                    type: "string",
                  },
                  newReferralAddresses: {
                    type: "array",
                    items: {
                      type: "string",
                    },
                  },
                  newReferralAmounts: {
                    type: "array",
                    items: {
                      type: "integer",
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successful operation",
          },
          400: {
            description: "Bad request",
          },
          500: {
            description: "Unexpected server error",
          },
        },
      },
    },
    "/transferOwnership": {
      post: {
        tags: ["Membership"],
        summary:
          "Transfer ownership of the contract to a new address (cannot be undone - use with caution!)",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  contractAddress: {
                    type: "string",
                  },
                  newOwner: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successful operation",
          },
          400: {
            description: "Bad request",
          },
          500: {
            description: "Unexpected server error",
          },
        },
      },
    },
    "/renounceOwnership": {
      post: {
        tags: ["Membership"],
        summary:
          "Renounce ownership of the contract (cannot be undone - use with caution!)",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  contractAddress: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successful operation",
          },
          400: {
            description: "Bad request",
          },
          500: {
            description: "Unexpected server error",
          },
        },
      },
    },
    "/setMAJRAddress": {
      post: {
        tags: ["Membership"],
        summary: "Set the MAJR admin wallet address on a membership contract",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  contractAddress: {
                    type: "string",
                  },
                  newMAJRAddress: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successful operation",
          },
          500: {
            description: "Unexpected server error",
          },
        },
      },
    },
    "/mint": {
      post: {
        tags: ["Membership"],
        summary: "Mint new NFTs",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  contractAddress: {
                    type: "string",
                  },
                  to: {
                    type: "string",
                  },
                  quantity: {
                    type: "integer",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successful operation",
          },
          400: {
            description: "Bad request",
          },
          500: {
            description: "Unexpected server error",
          },
        },
      },
    },
    "/mintWithReferrer": {
      post: {
        tags: ["Membership"],
        summary: "Mint new NFTs with a referrer",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  contractAddress: {
                    type: "string",
                  },
                  to: {
                    type: "string",
                  },
                  quantity: {
                    type: "integer",
                  },
                  referrer: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successful operation",
          },
          400: {
            description: "Bad request",
          },
          500: {
            description: "Unexpected server error",
          },
        },
      },
    },
    "/burn": {
      post: {
        tags: ["Membership"],
        summary: "Burn an NFT",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  contractAddress: {
                    type: "string",
                  },
                  tokenId: {
                    type: "integer",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successful operation",
          },
          400: {
            description: "Bad request",
          },
          500: {
            description: "Unexpected server error",
          },
        },
      },
    },
    "/setApprovalForAll": {
      post: {
        tags: ["Membership"],
        summary: "Set approval for the MAJR admin wallet",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  contractAddress: {
                    type: "string",
                  },
                  approved: {
                    type: "boolean",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successful operation",
          },
          500: {
            description: "Unexpected server error",
          },
        },
      },
    },
    "/transferFrom": {
      post: {
        tags: ["Membership"],
        summary:
          "Transfer an NFT from one address to another, using MAJR admin wallet as an operator",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  contractAddress: {
                    type: "string",
                  },
                  from: {
                    type: "string",
                  },
                  to: {
                    type: "string",
                  },
                  tokenId: {
                    type: "integer",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successful operation",
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "Not found",
          },
          500: {
            description: "Unexpected server error",
          },
        },
      },
    },
  },
};
