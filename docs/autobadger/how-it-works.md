---
id: how-it-works
title: How it works
---

### How it works?

1. It looks for different file in your project root directory. To decide what tools are you using. And generates badges based on it.

   e.g. If you have .travis.yml then it assumes you are using travis for CI/CD and it creates a dynamic badge for travis latest build status

   or

   if you have appveyor.yml then it assumes you are using appveyor for CI/CD and it creates a dynamic badge for appveyor latest build status

### Defaults

| Badge Type | Default                                       |
| ---------- | --------------------------------------------- |
| Size       | Bundle phobia (if browser only package)       |
| Size       | package phobia (if node only package e.g cli) |
