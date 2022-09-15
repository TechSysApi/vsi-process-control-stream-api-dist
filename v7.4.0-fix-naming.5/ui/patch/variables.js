var variables={
  "version": "7.4.0-fix-naming.5",
  "name": "@ch-post-app-atg/vsi-process-control-stream-api",
  "description": "Vsi Process Control Stream API - Interaction between Machine Control and Reading Coding System - CEN/TS 16238",
  "scripts": {
    "start": "apikana start src dist",
    "stop": "apikana stop",
    "create-sample": "apikana create-sample",
    "validate-samples": "apikana validate-samples",
    "test": "eslint src --ext .ts && apikana validate-samples",
    "lint": "eslint src --ext .ts",
    "lint-fix": "eslint src --ext .ts --fix"
  },
  "author": "Swiss Post Sorting System Development",
  "license": "Apache-2.0",
  "devDependencies": {
    "apikana": "^0.9.29",
    "apikana-defaults": "0.0.77",
    "@typescript-eslint/eslint-plugin": "^4.33.0",
    "@typescript-eslint/parser": "^4.33.0",
    "eslint": "^7.17.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.3.1",
    "prettier": "^2.2.1",
    "typescript": "^4.1.3"
  },
  "customConfig": {
    "type": "stream-api",
    "domain": "post.ch",
    "author": "Swiss Post Sorting System Development",
    "namespace": "app.atg.vsi.process.control",
    "shortName": "vsi-process-control",
    "projectName": "vsi-process-control-stream-api",
    "title": "VSI Process Control Stream API",
    "plugins": [
      "dotnet",
      "readme"
    ],
    "javaPackage": "ch.post.app.atg.vsi.process.control.v1",
    "mavenGroupId": "ch.post.app.atg.vsi.process",
    "dotnetNamespace": "Ch.Post.App.Atg.Vsi.Process.Control",
    "dotnetPackageId": "Ch.Post.App.Atg.Vsi.Process.Control.StreamApi",
    "mqs": "MQTT",
    "avro": {
      "enumAsString": true
    }
  },
  "_": [
    "start",
    "src",
    "dist"
  ]
}