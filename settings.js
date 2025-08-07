require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAK2RB1u5BGjn*gQAANUIAAAKAAAAY3JlZHMuanNvbpVV2ZKqSBD9l3rVvrLJYkRHDCICIori0jgxDyUUi6wWBYo3*PcJ2u7pjrhze3p4qqAqM0+eynPqJ8iLuEImasHoJyhx3ECCuiVpSwRGYFwHAcKgD3xIIBgBz1KijbucWGMLi9KqvJbHZqPrPVtxPB5vEpYpV03Dre1t8QzufVDWxzT2vkgYlMuTpZxvy*R4s0NtPiEJb+9Rtt5cXSqxJ2NS1lFYSPTL6hncu4wwxnEeqmWEMoRhaqLWhjH+HvxW2S+5gadwWUIdXgSRgjF38TUkHW4EFbdrS9VupmXxi2p9D76*muyhg819FtTLKSvN*Am7GGtJHLFLeg93EjFLb+vWRDMe8Ks4zJFv+CgnMWm*zbsyn8+dtXVCjMZxwmK3w4NeUhZu7reVrzbp3tveMqE1Cl38HnBViZxyh2XZThrZ2p748jpcZet0KnOYop0Lpc2lvDezM2r1GbiN32cl+T+8e4Z*0OcZN1XNTc4f5Bk3j67oxVbZ3XljrOmw47+N2GVSfQ*+Sh6q+i7N*dtwrlJ5m1WGMBbTZrgbO8fj8GjM5+vjQhlj6vIBH5Iaf4WSUVKSu1EUZWvXHFDzcU3U85DowtlduYNiIJXMBhpbLB9IqbNUiRRWpPe9JFg3E97cGcr4GCfmfm9qNjOj89BvzFa5PL92lKDW8MGIvvcBRmFcEQxJXOTdP47qA+g3DvIwIq*sgmg98*DpZcMspPFB7xlBstxkGpMmW1deuutWm8rOeYs54eI+gz4oceGhqkK+HlekwK2FqgqGqAKjP18vqusZo6wgaBb7XaMsJ9I8JTASzbF*VD8uESQVLMsfOSKgDwJcZBYCI4Jr1AevEaw8pCleFRVGGk+GsjjlFb5rK3tU2sQZqgjMSjCihSE3lCiOEu5*9UGOruQxM12nLN0HQYwrss3rMi2g*z5Q75vQ84o6J06be0q3QBiMPv1GhMR5WHXt1DnEXhQ3SOmwg1EA0wrd+8BHTeyhLh8I10FtaMVpIz5hakZUGF6tIOzoior8cQTyUPIEynsKPCp44niEniAawida9Hw6EIcsxUHQUfCQaxfze0Vljru92pSa5JWkz9A6wc4k93mBfVjh49oRRv4b2j44Qi+py02RoPwrj1lImpgGKyo3ghjSXj1pPMLu94FrfUr8mCcw+nn*h68up48IjNOqsxBbh9GQm6lz+0CJK02Tw1BWQhl88PuukccQ0pxwNOe9LC2scqcPLqdJmONqAi*64kSJ+W2IcWMKrdljkud*SQJG4HhjVlOn2FW+Fh3WM3p5Lhh05lNeFKf1rK6q+loazF5ENkOn+0IqXH5IbqLO7mStXZtb5+AwiMu9hLev6d6r5VqV5fC5q*a458*Fpj2VSXbGwY4PR8bSFw19rVNdO4hM7s2uqrA3neJUFtPDObCCI09Vq8UcyqTNlOvU4gY9f0Bvw3bhph69VJLUOkoFN5Yf6s1ebeNX7Yxo*lf55LA7DkzUxDnog*Q1jGY5UZCGokQLEs9IXWC38e5M6duLEL+J9jFxQYxeDfYt43+X*ph+6t7*lOTNs38zYGMfLZk2HpQlnJi79UA0LtyMF2SmGt9cyZ6JPcgLbS3GDSnBvZN1mUISFDgDI1Blxxj0AS7qTptGHhRfPWNyaIxXD05TWBH5Q++*WggrSY9TNi5KHVZRR4FNu1EA+iBr5bJ0CCTv9gHk7lvQS3D*G1BLAQIUAxQAAAgIAK2RB1u5BGjn*gQAANUIAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAACYFAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '2348160729143',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'KevinBoattt',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
