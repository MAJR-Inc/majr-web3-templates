module.exports = {
  swagger: "2.0",
  info: {
    title: "MAJR Web3 API",
    description: "API documentation for MAJR Web3 API",
    version: "1.0",
  },
  basePath: "/api",
  schemes: ["http", "https"],
  paths: {
    "/membership/defaultMetadata/{contractAddress}": {
      get: {
        summary: "Get default contract metadata",
        parameters: [
          {
            name: "contractAddress",
            in: "path",
            description: "Contract address",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "Successful operation",
          },
        },
      },
    },
    "/membership/defaultMetadata/{contractAddress}/{tokenId}": {
      get: {
        summary: "Get default token metadata",
        parameters: [
          {
            name: "contractAddress",
            in: "path",
            description: "Contract address",
            required: true,
            type: "string",
          },
          {
            name: "tokenId",
            in: "path",
            description: "Token ID",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "Successful operation",
          },
        },
      },
    },
    "/membership/allContracts": {
      get: {
        summary: "Get all creator membership contracts",
        responses: {
          200: {
            description: "Successful operation",
          },
        },
      },
    },
    "/membership/contractsOfCreator/{creatorAddress}": {
      get: {
        summary: "Get membership contracts of a creator",
        parameters: [
          {
            name: "creatorAddress",
            in: "path",
            description: "Creator address",
            required: true,
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "Successful operation",
          },
        },
      },
    },
    "/membership/getMAJR": {
      get: {
        summary: "Get MAJR token address",
        responses: {
          200: {
            description: "Successful operation",
          },
        },
      },
    },
    "/membership/getDefaultBaseURI": {
      get: {
        summary: "Get default base URI",
        responses: {
          200: {
            description: "Successful operation",
          },
        },
      },
    },
    "/membership/setMAJR": {
      post: {
        summary: "Set MAJR token address",
        parameters: [
          {
            name: "newMAJRAddress",
            in: "body",
            description: "New MAJR token address",
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
            description: "Successful operation",
          },
        },
      },
    },
    "/membership/setDefaultNFTMetadataURI": {
      post: {
        summary: "Set default NFT metadata URI",
        parameters: [
          {
            name: "newDefaultBaseURI",
            in: "body",
            description: "New default NFT metadata URI",
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
            description: "Successful operation",
          },
        },
      },
    },
    "/membership/createContract": {
      post: {
        summary: "Create a membership contract",
        parameters: [
          {
            name: "creatorAddress",
            in: "body",
            description: "Creator address",
            required: true,
            schema: {
              type: "object",
              properties: {
                creatorAddress: {
                  type: "string",
                },
              },
            },
          },
          {
            name: "name",
            in: "body",
            description: "Contract name",
            required: true,
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Successful operation",
          },
        },
      },
    },
  },
};
