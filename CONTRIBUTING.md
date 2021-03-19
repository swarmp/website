## Example workflow

1. Switch to a new branch `type/description`.
   - `type` is one of Commit Types.
   - `description` is a short description in kebab-case.
   - example: `chore/update-readme`.
2. Commit some code. Please use [conventional commit message](https://conventionalcommits.org/).
   - use lowercase for description.
   - example: `chore: update readme`.
3. Create a PR. Please follow [semantic pull request](https://github.com/zeke/semantic-pull-requests) guidelines.
   - use lowercase for description.
   - example: `chore: update readme`.
   - **notice**: semantic pull request is required and checked for merge.
     Both the PR title **and** the commit message must follow this guide.
4. PR review is required for merge.
5. Make a squash merge.

## Commit Types (Also PR Types)

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit
- `content`: Changes to the content directory
- `i18n`: Changes to support Internationalization
