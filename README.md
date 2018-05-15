CryptoRescueCore
=======

We want to thank [UnderDarkSkies](https://www.github.com/underdarkskies/) for the opportunity to fork this to further the production of x16s versions. To see  the original product, go to the [Ravencoin by DarkUnderSkies](https://github.com/underdarkskies/ravencore) and support the efforts of the creator.

----
Getting Started
=====================================
Deploying CryptoRescueCore full-stack manually:
----
````
##(add Mafalate's key)##
$gpg --keyserver hkp://pgp.mit.edu:80 --recv-key 7ED9D83515721F77
$sudo apt-get update
$sudo apt-get -y install libevent-dev libboost-all-dev libminiupnpc10 libzmq5 software-properties-common curl git build-essential libzmq3-dev
$sudo add-apt-repository ppa:bitcoin/bitcoin
$sudo apt-get update
$sudo apt-get -y install libdb4.8-dev libdb4.8++-dev
$curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
##(restart your shell/os)##
$nvm install stable
$nvm install-latest-npm
$nvm use stable
$git clone https://github.com/cryptorescue-project/cryptorescuecore.git
$npm install -g cryptorescuecore --production
````
Copy the following into a file named cryptorescuecore-node.json and place it in ~/.cryptorescuecore/
````json
{
  "network": "livenet",
  "port": 3001,
  "services": [
    "cryptorescued",
    "web",
    "insight-api",
    "insight-ui"
  ],
  "servicesConfig": {
    "cryptorescued": {
      "spawn": {
        "datadir": "/home/<yourusername>/.cryptorescuecore/data",
        "exec": "/home/<yourusername>/cryptorescuecore/node_modules/cryptorescuecore-node/bin/cryptorescued"
      }
    },
    "insight-ui": {
      "routePrefix": "",
      "apiPrefix": "api"
    },
    "insight-api": {
      "routePrefix": "api"
    }
  }
}
````
Launch your copy of cryptorescuecore:
````
$cryptorescuecored
````
You can then view the CryptoRescue block explorer at the location: `http://localhost:3001`

Undeploying CryptoRescueCore full-stack manually:
----
````
$nvm deactivate
$nvm uninstall stable
$rm -rf .npm .node-gyp cryptorescuecore
$rm .cryptorescuecore/data/cryptorescue.conf .cryptorescuecore/cryptorescuecore-node.json
````

## Documentation

The complete docs are hosted here: [bitcore documentation](http://bitcore.io/guide/). There's also a [bitcore API reference](http://bitcore.io/api/) available generated from the JSDocs of the project, where you'll find low-level details on each bitcore utility.

- [Read the Developer Guide](http://bitcore.io/guide/)
- [Read the API Reference](http://bitcore.io/api/)

To get community assistance and ask for help with implementation questions, please use our [community forums](http://bitpaylabs.com/c/bitcore).

## Security

We're using CryptoRescueCore in production, as are [many others](http://bitcore.io#projects), but please use common sense when doing anything related to finances! We take no responsibility for your implementation decisions.

If you find a security issue, please email security@bitpay.com.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/cryptorescue-project/cryptorescuecore/blob/master/CONTRIBUTING.md) file.

To verify signatures, use the following PGP keys:
- @underdarkskies: http://pgp.mit.edu/pks/lookup?op=get&search=0x009BAB88B3BD190C `EE6F 9673 1EF6 ED85 B12B  0A3F 009B AB88 B3BD 190C`

## License

Code released under [the MIT license](https://github.com/cryptorescue-project/cryptorescuecore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2018 Ravencoin Developers
