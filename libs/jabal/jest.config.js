module.exports = {
  name: 'jabal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/jabal',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
