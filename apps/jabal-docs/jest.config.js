module.exports = {
  name: 'jabal-docs',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/jabal-docs',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
