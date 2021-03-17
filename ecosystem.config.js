module.exports = {
  apps: [
    {
      name: 'LuckyBest',
      autorestart: true,
      script: 'npm',
      arg: 'start'
      // env: {
      //   HOST: '0.0.0.0',
      //   PORT: 10402
      // }
    }
  ]
}
