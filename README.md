# check-insights-wip

> A GitHub App built with [Probot](https://github.com/probot/probot) that Something to mess around with surfacing Insights in Checks

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t check-insights-wip .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> check-insights-wip
```

## Contributing

If you have suggestions for how check-insights-wip could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2022 bglynn
