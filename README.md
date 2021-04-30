# Newmoji
> New Emoji Slack bot

Newmoji bot will post whenever a user creates a new Emoji to specified channels

## Configuration

Environment variables required to run the bot

| Environment Variable | Description                                                               |
|----------------------|---------------------------------------------------------------------------|
| BOT_TOKEN            | Slack [Bot User token](https://api.slack.com/authentication/token-types#bot) |
| SLACK_APP_TOKEN      | Slack [Application Level Token](https://api.slack.com/apis/connections/socket#token) |
| TARGET_CHANNELS      | Comma separated list of channels to post messages (eg: `test-channel` or `test-1,test-2`) |

## Development

View the [Slack Intro to Socket Mode](https://api.slack.com/apis/connections/socket#setup) to set up
your application and all other configurations.

```shell
# Install dependencies
$ npm i
# Copy the dummy env to a local and fill in your variables
$ cp .env .env.local
$ npm run dev
```

## Deployment

Ensure your environment is configured, then run

```shell
$ npm run serve
```

If using pm2:

```shell
$ pm2 start pm2.config.js
```
