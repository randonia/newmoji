const { name, main } = require('./package.json');

module.exports = {
  apps: [
    {
      name,
      script: main,
      node_args: '-r dotenv/config',
      instances: 1,
      exec_mode: 'fork',
      watch: true,
    },
  ],
};
