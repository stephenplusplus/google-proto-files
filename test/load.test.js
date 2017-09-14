'use strict'

var assert = require('assert')
var googleProtoFiles = require('../')
var path = require('path')
var protobuf = require('protobufjs')
var proxyquire = require('proxyquire')

var TEST_FILE = path.join(
    __dirname, 'fixtures', 'example', 'library', 'v1', 'library.proto')

describe('load', function () {
  it('should not be able to load test file using protobufjs directly', function (done) {
    protobuf.load(TEST_FILE).then(function () {
      done(Error('should not get here'))
    }).catch(function () {
      done()
    })
  })

  it('should load a test file that relies on common protos', function (done) {
    googleProtoFiles.load(TEST_FILE).then(function (root) {
      assert(root instanceof protobuf.Root)
      assert(root.lookup('google.example.library.v1.LibraryService') instanceof protobuf.Service)
      assert(root.lookup('test.TestMessage') instanceof protobuf.Type)
      done()
    }).catch(done)
  })
})

describe('loadSync', function () {
  it('should not be able to load test file using protobufjs directly', function () {
    var root = protobuf.loadSync(TEST_FILE)
    // Common proto that should not have been loaded.
    assert.equal(root.lookup('google.api.Http', null))
  })

  it('should load a test file that relies on common protos', function () {
    var root = googleProtoFiles.loadSync(TEST_FILE)
    assert(root instanceof protobuf.Root)
    assert(root.lookup('google.example.library.v1.LibraryService') instanceof protobuf.Service)
    assert(root.lookup('test.TestMessage') instanceof protobuf.Type)
  })
})

describe('GoogleProtoFilesRoot', function () {
  describe('_findIncludePath', function () {
    it('should throw an error if a file is not found', function () {
      var findIncludePath = proxyquire('../load', {
        fs: {
          existsSync: function () { return false }
        }
      }).GoogleProtoFilesRoot._findIncludePath

      assert.throws(
          findIncludePath.bind(null, '/test/path/location', 'test/import.proto'))
    })

    it('should return the correct resolved import path', function () {
      var correctPath = '/test/example/import.proto'
      var findIncludePath = proxyquire('../load', {
        fs: {
          existsSync: function (path) {
            return path === correctPath
          }
        }
      }).GoogleProtoFilesRoot._findIncludePath

      assert.equal(
          findIncludePath('/test/path/location/', 'example/import.proto'),
          correctPath)
    })
  })
})
