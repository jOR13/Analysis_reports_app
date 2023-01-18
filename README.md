# Forge Example: Jira Project Analysis Reports App

This project contains a Forge app written in JavaScript.

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

- Install dependecies (inside root directory):

```bash
npm i
```

- Install dependencies (inside of the `static/app` directory):

```bash
npm i
```

- Build app (inside of the `static/subpages-example` directory):

```bash
npm run build
```

- Deploy app by running:

```bash
forge deploy
```

- Install app in an Atlassian site by running:

```bash
forge install
```

### Notes

- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
