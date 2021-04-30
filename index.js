const { App } = require('@slack/bolt');
const { name, version } = require('./package.json');

const {
  BOT_TOKEN,
  SLACK_APP_TOKEN,
  TARGET_CHANNELS,
} = process.env;

const app = new App({
  token: BOT_TOKEN,
  appToken: SLACK_APP_TOKEN,
  socketMode: true,
});

const CHANNELS = TARGET_CHANNELS.split(',');

(async () => {
  await app.start();
  console.log(`⚡️ ${name}@${version} started\n\ttargets=${CHANNELS}`);
})();

app.event('emoji_changed', async ({ event, context, client }) => {
  if (event.subtype === 'add') {
    for (let cIdx = 0; cIdx < CHANNELS.length; cIdx++) {
      const channel = CHANNELS[cIdx];
      try {
        // ignore no-await-in-loop due to Promise.all implementation
        await client.chat.postMessage({
          blocks: [
            {
              text: {
                text: `New Emoji added: \`:${event.name}:\``,
                type: 'mrkdwn',
              },
              type: 'section',
            },
            {
              text: {
                text: `:${event.name}:`,
                type: 'mrkdwn',
              },
              type: 'section',
            },
            {
              alt_text: `${event.name}`,
              image_url: event.value,
              type: 'image',
            }
          ],
          channel,
        });
      } catch (error) {
        console.error(`Failed to post to channel=${channel}`, error);
      }
    }
  }
});
