# Feather CSS
An incredibly lightweight, atomic CSS framework that's based entirely in Sass.

## Status
[![Release Workflow Status](https://github.com/ryanjwilke/feather/workflows/Release/badge.svg)](https://github.com/ryanjwilke/feather/actions)
[![Template Status](https://github.com/ryanjwilke/vue-cli-template/workflows/Production/badge.svg)](https://github.com/ryanjwilke/vue-cli-template/actions)

## Installation
```
yarn add @ryanwilke/feather-css
```

## Publishing a new version
Publishing is handled automatically by the [Publish workflow](https://github.com/ryanjwilke/feather/actions?query=workflow%3APublish) in GitHub Actions, but if you need to publish manually you can use the following command. Please note that you need to bump the version number in the `package.json` file before publishing a new version.
```
yarn npm:publish
```

## Documentation
The docs based in Vue CLI and are using a [git subtree](https://medium.com/@porteneuve/mastering-git-subtrees-943d29a798ec) module in order to make use of the [Vue CLI Template](https://github.com/ryanjwilke/vue-cli-template).

#### Pulling Updates to the Subtree
You can use the following commands to pull updates to the subtree as long as template has been registered as a remote.
```
# Refresh the remote.
git fetch template

# Option A: The default way to merge in new changes.
git merge -s subtree --squash template/master

# Option B: The backup way to merge in new changes if the subtree heuristics lose their marbles.
git merge -X subtree=docs --squash template/master
```
