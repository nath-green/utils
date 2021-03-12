# npm-package-starter

Template using Rollup and Babel

1. Clone using template
2. `yarn install`
3. `yarn start` or `yarn build`

## Publishing package

1. Test locally
2. Run `yarn build`
3. Commit and push updates to GH repo
4. `npm version {major, minor, patch}`
5. `git push —-tags`
6. `npm publish` (runs build before publishing)
7. `git push`

## Linking

`yarn link` in the package folder

### Unlink

To unlink all packages, use `unlink` (custom Fish function)

```
function unlink
 rm -rf ~/.config/yarn/link
end
```

## Linking React and React-DOM

Useful for when the package is using React Hooks (caused by version mismatch)

1. cd PACKAGE_YOU_DEBUG_LOCALLY
2. `yarn link`
3. `yarn install`
4. `cd node_modules/react`
5. `yarn link`
6. `cd ../../node_modules/react-dom`
7. `yarn link`
8. `cd YOUR_PROJECT`
9. `yarn link PACKAGE_YOU_DEBUG_LOCALLY`
10. `yarn link react`
11. `yarn link react-dom`

When finished testing use `unlink`