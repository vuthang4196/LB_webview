module.exports = {
  apps: [
    {
      name: 'Game Card Xtel',
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
