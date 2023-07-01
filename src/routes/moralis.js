const { EvmChain } = require("@moralisweb3/common-evm-utils");
const router = require("express").Router();
const Moralis = require("moralis").default;

(async () => {
    await Moralis.start({
        apiKey: process.env.MORALIS_TOKEN,
    });
})()

router.get("/nfts/:address", async (req, res) => {
    try {
        const address = req.params.address;
        const chain = EvmChain.FANTOM;
        const response = await Moralis.EvmApi.nft.getWalletNFTs({
            address,
            chain,
        });

        res.send(response.toJSON());
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

router.get("/tokens/:address", async (req, res) => {
    try {
        const address = req.params.address;
        const chain = EvmChain.FANTOM;
        const response = await Moralis.EvmApi.token.getWalletTokenBalances({
            address,
            chain,
        });

        res.send(response.toJSON());
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

module.exports = router;
