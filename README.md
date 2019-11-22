# GithubSearching
Angular app to search information in GitHub.

# Installation

GithubSearching requires [Node.js](https://nodejs.org/) and [Angular CLI](https://https://angular.io/cli) to run.

Install the dependencies and start the server.

```sh
$ cd gitHubSearching
$ npm install
$ ng serve --open
```

# Dependencies

GithubSearching uses [angular-fontawesome package](https://www.npmjs.com/package/@fortawesome/angular-fontawesome).


# Tech

GithubSearching uses the [GitHub API v3](https://developer.github.com/v3/) to get the repositories information.
Some endpoints of the GitHub API have a [limit rate restriction](https://developer.github.com/v3/#rate-limiting) per hour. To increase the
rate limit you must [generate an OAuth token](https://help.github.com/en/github/extending-github/git-automation-with-oauth-tokens#step-1-get-an-oauth-token) and supply it in the **enviroment.ts** file in the **githubApiKey** property of the **environment** constant.
