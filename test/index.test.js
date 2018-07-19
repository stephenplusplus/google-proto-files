'use strict';

var assert = require('assert');
var path = require('path');
var googleProtoFiles = require('../');

function resolve(protoPath) {
  return path.join(__dirname, '../google', protoPath);
}

describe('google-proto-files', function() {
  it('should export appengine', function() {
    assert(googleProtoFiles.appengine);
    assert.strictEqual(
      googleProtoFiles.appengine.v1,
      resolve('appengine/v1/appengine.proto')
    );
  });
  it('should export bigtable', function() {
    assert(googleProtoFiles.bigtable);
    assert.strictEqual(
      googleProtoFiles.bigtable.v1,
      resolve('bigtable/v1/bigtable_service.proto')
    );
    assert.strictEqual(
      googleProtoFiles.bigtable.v2,
      resolve('bigtable/v2/bigtable.proto')
    );
  });
  it('should export bigtable admin', function() {
    assert(googleProtoFiles.bigtable.admin);
    assert.strictEqual(
      googleProtoFiles.bigtable.admin.v1,
      resolve('bigtable/admin/table/v1/bigtable_table_service.proto')
    );
    assert.strictEqual(
      googleProtoFiles.bigtable.admin.v2.instance,
      resolve('bigtable/admin/v2/bigtable_instance_admin.proto')
    );
    assert.strictEqual(
      googleProtoFiles.bigtable.admin.v2.table,
      resolve('bigtable/admin/v2/bigtable_table_admin.proto')
    );
  });
  it('should export cloudtrace', function() {
    assert(googleProtoFiles.cloudtrace);
    assert.strictEqual(
      googleProtoFiles.cloudtrace.v1,
      resolve('devtools/cloudtrace/v1/trace.proto')
    );
  });
  it('should export container', function() {
    assert(googleProtoFiles.container);
    assert.strictEqual(
      googleProtoFiles.container.v1,
      resolve('container/v1/cluster_service.proto')
    );
  });
  it('should export datastore', function() {
    assert(googleProtoFiles.datastore);
    assert.strictEqual(
      googleProtoFiles.datastore.v1,
      resolve('datastore/v1/datastore.proto')
    );
    assert.strictEqual(
      googleProtoFiles.datastore.v1beta3,
      resolve('datastore/v1beta3/datastore.proto')
    );
  });
  it('should export dlp', function() {
    assert(googleProtoFiles.dlp);
    assert.strictEqual(
      googleProtoFiles.dlp.v2beta1,
      resolve('privacy/dlp/v2beta1/dlp.proto')
    );
  });
  it('should export embeddedAssistant', function() {
    assert(googleProtoFiles.embeddedAssistant);
    assert.strictEqual(
      googleProtoFiles.embeddedAssistant.v1alpha1,
      resolve('assistant/embedded/v1alpha1/embedded_assistant.proto')
    );
    assert.strictEqual(
      googleProtoFiles.embeddedAssistant.v1alpha2,
      resolve('assistant/embedded/v1alpha2/embedded_assistant.proto')
    );
  });
  it('should export firestore', function() {
    assert(googleProtoFiles.firestore);
    assert.strictEqual(
      googleProtoFiles.firestore.v1beta1,
      resolve('firestore/v1beta1/firestore.proto')
    );
  });
  it('should export firestore admin', function() {
    assert(googleProtoFiles.firestore.admin);
    assert.strictEqual(
      googleProtoFiles.firestore.admin.v1beta1,
      resolve('firestore/admin/v1beta1/firestore_admin.proto')
    );
  });
  it('should export functions', function() {
    assert(googleProtoFiles.functions);
    assert.strictEqual(
      googleProtoFiles.functions.v1beta2,
      resolve('cloud/functions/v1beta2/functions.proto')
    );
  });
  it('should export iam', function() {
    assert(googleProtoFiles.iam);
    assert.strictEqual(
      googleProtoFiles.iam.v1,
      resolve('iam/v1/iam_policy.proto')
    );
  });
  it('should export iam admin', function() {
    assert(googleProtoFiles.iam.admin);
    assert.strictEqual(
      googleProtoFiles.iam.admin.v1,
      resolve('iam/admin/v1/iam.proto')
    );
  });
  it('should export language', function() {
    assert(googleProtoFiles.language);
    assert.strictEqual(
      googleProtoFiles.language.v1beta1,
      resolve('cloud/language/v1beta1/language_service.proto')
    );
    assert.strictEqual(
      googleProtoFiles.language.v1,
      resolve('cloud/language/v1/language_service.proto')
    );
  });
  it('should export logging', function() {
    assert(googleProtoFiles.logging);
    assert.strictEqual(
      googleProtoFiles.logging.v2,
      resolve('logging/v2/logging.proto')
    );
  });
  it('should export monitoring', function() {
    assert(googleProtoFiles.monitoring);
    assert(googleProtoFiles.monitoring.v3);
    assert.strictEqual(
      googleProtoFiles.monitoring.v3.group,
      resolve('monitoring/v3/group_service.proto')
    );
    assert.strictEqual(
      googleProtoFiles.monitoring.v3.metric,
      resolve('monitoring/v3/metric_service.proto')
    );
  });
  it('should export pubsub', function() {
    assert(googleProtoFiles.pubsub);
    assert.strictEqual(
      googleProtoFiles.pubsub.v1,
      resolve('pubsub/v1/pubsub.proto')
    );
    assert.strictEqual(
      googleProtoFiles.pubsub.v1beta2,
      resolve('pubsub/v1beta2/pubsub.proto')
    );
  });
  it('should export spanner', function() {
    assert(googleProtoFiles.spanner);
    assert.strictEqual(
      googleProtoFiles.spanner.v1,
      resolve('spanner/v1/spanner.proto')
    );
    assert.strictEqual(
      googleProtoFiles.spanner.admin.v1.database,
      resolve('spanner/admin/database/v1/spanner_database_admin.proto')
    );
    assert.strictEqual(
      googleProtoFiles.spanner.admin.v1.instance,
      resolve('spanner/admin/instance/v1/spanner_instance_admin.proto')
    );
  });
  it('should export speech', function() {
    assert(googleProtoFiles.speech);
    assert.strictEqual(
      googleProtoFiles.speech.v1beta1,
      resolve('cloud/speech/v1beta1/cloud_speech.proto')
    );
    assert.strictEqual(
      googleProtoFiles.speech.v1,
      resolve('cloud/speech/v1/cloud_speech.proto')
    );
    assert.strictEqual(
      googleProtoFiles.speech.v2,
      resolve('cloud/speech/v2/cloud_speech.proto')
    );
  });
  it('should export storagetransfer', function() {
    assert(googleProtoFiles.storagetransfer);
    assert.strictEqual(
      googleProtoFiles.storagetransfer.v1,
      resolve('storagetransfer/v1/transfer.proto')
    );
  });
  it('should export videointelligence', function() {
    assert(googleProtoFiles.videointelligence);
    assert.strictEqual(
      googleProtoFiles.videointelligence.v1beta1,
      resolve('cloud/videointelligence/v1beta1/video_intelligence.proto')
    );
  });
  it('should export vision', function() {
    assert(googleProtoFiles.vision);
    assert.strictEqual(
      googleProtoFiles.vision.v1,
      resolve('cloud/vision/v1/image_annotator.proto')
    );
  });
});
