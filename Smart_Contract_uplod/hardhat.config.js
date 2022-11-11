// https://eth-goerli.g.alchemy.com/v2/YNvCDaXYqufFDL1oYBrIt5V6yfls_OJ0


require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-waffle')
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
     goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/YNvCDaXYqufFDL1oYBrIt5V6yfls_OJ0',
      accounts: ['10133aabeea884c85f3844d11e71dca0de61531ac3d6c210b648e169f2aae686'],
    },
  },
};


