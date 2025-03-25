var variables={
  "version": "8.2.0-feature-add-recirculation-information.6",
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
    "@typescript-eslint/eslint-plugin": "^4.33.0",
    "@typescript-eslint/parser": "^4.33.0",
    "apikana": "^0.11.2",
    "eslint": "^7.32.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.4.1",
    "prettier": "^2.7.1",
    "typescript": "^4.8.4"
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
      "maven",
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