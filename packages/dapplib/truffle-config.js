require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture street rifle saddle minor grace canoe army gas'; 
let testAccounts = [
"0xfee60fed59e0b1cfb8e67a7216717465a9abd46135a527b8f6f3ba679aebfda8",
"0xa73e34f5756ee138fc3172737623ccbca7c07705b34d72e996b96b6bdb556fb9",
"0x69998b678cfdc05a5c081dc5dcaab85540229f31e571eef0773c36c1eeaeffdc",
"0x40953c2062095db676cc42acfe1c77760ea56bb751d521f257f34c5d63161993",
"0x9a3b6e868a55366e7b4c1f665d06bc7a18d436d269e2b32fbe75201a4751b285",
"0x29fd48036c40a536f1293acbbf3f96527ba21fbd01af268bb7a2811ddec07a25",
"0x49ec885e1f35a1df3038116735bcb86669076fcddfd2c1bd01a6a8945fb84bdc",
"0x938a9194edf54d89d8a2c1f7ea0a0d767970174bcc4b1bd2959b2daca1269b2e",
"0xf433428c7469caca03bfa249344a798bb9b523bae958546e0cfd28cca89493f9",
"0x8dfa9834dd268ae3cb4b03f92302bf7198b6c69218a1702b75ac0ed861e213dc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

