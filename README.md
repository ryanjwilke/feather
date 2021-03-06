# Feather CSS
An incredibly lightweight, atomic CSS framework that's based entirely in Sass.

## Status
[![Release Workflow Status](https://github.com/ryanjwilke/feather/workflows/Release/badge.svg)](https://github.com/ryanjwilke/feather/actions)
[![Production Workflow Status](https://github.com/ryanjwilke/feather/workflows/Production/badge.svg)](https://github.com/ryanjwilke/feather/actions)
[![Test Workflow Status](https://github.com/ryanjwilke/feather/workflows/Test/badge.svg)](https://github.com/ryanjwilke/feather/actions)

## Installation
Installation with Yarn
```
yarn add @ryanwilke/feather-css
```

Installation with NPM:
```
npm install @ryanwilke/feather-css
```

Adding Feather to your project is simply a matter of importing it in your application's sass files.
```
@import "node_modules/@ryanwilke/feather-css/dist/sass/feather.sass"
```

You can also make use of the pre-compiled CSS:
```
@import "node_modules/@ryanwilke/feather-css/dist/css/feather.css"
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
