'use strict';

var should = require('chai').should();
var cryptorescuecore = require('../');

describe('Library', function() {
  it('should export primatives', function() {
    should.exist(cryptorescuecore.crypto);
    should.exist(cryptorescuecore.encoding);
    should.exist(cryptorescuecore.util);
    should.exist(cryptorescuecore.errors);
    should.exist(cryptorescuecore.Address);
    should.exist(cryptorescuecore.Block);
    should.exist(cryptorescuecore.MerkleBlock);
    should.exist(cryptorescuecore.BlockHeader);
    should.exist(cryptorescuecore.HDPrivateKey);
    should.exist(cryptorescuecore.HDPublicKey);
    should.exist(cryptorescuecore.Networks);
    should.exist(cryptorescuecore.Opcode);
    should.exist(cryptorescuecore.PrivateKey);
    should.exist(cryptorescuecore.PublicKey);
    should.exist(cryptorescuecore.Script);
    should.exist(cryptorescuecore.Transaction);
    should.exist(cryptorescuecore.URI);
    should.exist(cryptorescuecore.Unit);
  });
});
