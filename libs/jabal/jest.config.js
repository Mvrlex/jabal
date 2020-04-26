module.exports = {
  name: 'jabal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/jabal',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
