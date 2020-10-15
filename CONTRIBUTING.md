# Contributing

## Steps to submit a PR

- Clone/Fork the repo
- Install dependencies: `npm install`
- Ensure tests pass: `npm test`
- Make changes and then make sure the tests still pass
- Push your branch/fork and [submit a PR][pr]
- Assign a [sparkboxer][contributors] to review your PR

## Commit Style
We use [Conventional Commits] and [Standard Version] to automate versioning of this package. Commit messages must be prefixed with a valid commit type and the commit type cannot be prefixed with any additional text.

Supported commit types include `feat`, `fix`, `docs`, `style`, `refactor`, and `test`.

Valid example:
```sh
feat: add new linting rule for ...
```

Invalid examples:
```sh
feature: add new linting rule for ...
```

```sh
:sparkles: feat: add new linting rule for ...
```

ℹ️ See the [Conventional Commits] page for further details on available commit types and how to handle breaking changes.

## Creating a Release
When making a change that requires a new version to be published, you'll want to run the release task before merging to master.

```sh
$ npm run release
```

This will:
- Use all commit messages since the latest version tag to determine the correct new version
- Increment the version in package.json and package-lock.json
- Create a tagged commit with the new version
- Push your branch (and new tag) to the remote

After your branch is merged, CI will take care of publishing to the npm registry.

ℹ️ See the [Standard Version][standard cli] documentation for details on how to control versioning behavior.

[pr]: https://github.com/sparkbox/safe-focus/compare
[contributors]: https://github.com/sparkbox/safe-focus/graphs/contributors
[Conventional Commits]: https://www.conventionalcommits.org/en/v1.0.0/
[Standard Version]: https://github.com/conventional-changelog/standard-version
[standard cli]: https://github.com/conventional-changelog/standard-version#cli-usage