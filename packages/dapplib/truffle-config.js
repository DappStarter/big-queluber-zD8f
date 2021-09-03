require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender title film renew stereo erosion impulse light army gate'; 
let testAccounts = [
"0x6d51af1850f578d4c9b7c594417884e7a38edfa6afefc45b1fcea2e1c11d6e6d",
"0x02e60a49cc8dd6555af5f87628c54ad9440120de3d6fa9edf456adc9ba2693c8",
"0xcd99bffc3716e1b0d9f29f02a70089ab6eb57c29fd9be9ace05bd63258ef65e3",
"0x508ebc1635cadec634d7457303ea89b86f7957f839b8f2a13ec18a80f357b4fd",
"0x347a265346e0847d596e4885bbc14d98bf78d6d4a8541f53719e63300e826d03",
"0x2a2e51ca263f7a7580c84fc0fbee54d14dcb114c0babfcebc40960a2011cf6fb",
"0x8be77b42db86a7bacb06c7755c2a26434d10925ed02d4b0319d744e1fedbf982",
"0xff4d391ce8497a96739d1af5754ba45ee955c805184be30a2f7ad2ba085444ff",
"0x237b54f9d6f1b7deb5f24b2428630f5de25bcf3803a85644e828969cf6d5b33b",
"0xec9f98e44100fa8981b61120b328ee5264d567cef64e27f8af30895d6d839033"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


