// https://eth-ropsten.alchemyapi.io/v2/SqhEPRYgV3OiMZI-a6RLOQJkjOAL881j

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/SqhEPRYgV3OiMZI-a6RLOQJkjOAL881j',
      accounts: ['3d37499441625617ee3a27a15a947cdc79efd1543bcdf3d2bdef53b71c8afe5b']
    }
  }
}