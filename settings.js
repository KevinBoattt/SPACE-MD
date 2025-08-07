require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAAyKB1u6eH21VgQAAIAHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGMGWi0Z0xHKx5SIqIq32xj6UUEIpFFhVoDDhv29gT0*Pw+5sL09FXfKczHMyvwNSYIZc1IDJd1BSXEOOuiVvSgQmQK+OR0RBH8SQQzAB0ctuIa8d9ya79uWys5ZO5Ar6RvDW9k1ogtnIt91k9Zpgy38G9z4oq0OGo98EFMId8uPa1A8wVvTqbApHr7gc3Wh3EYrxfDk4reVTnuNpKzyDexcRYopJMi1TlCMKMxc1K4jp1+h7y5jquvQyaHomhiVvhVBWcsWSrOS07JnDBOHRxhbGErG*Rj*uSQdeTS9l0e4EsvWMKD4omn8YDvz9Nd6YF6fJnfYcVpn9Tp*hhKDYjhHhmDdfrjvSX+ArecLeKh2rnpNtHYiILhNvEcygW9bX6zpdNteIZOevEc*eztJ2rwRusQ2ihcyVtzVjC0IIehJaK*RnBlzPc0MMNP9X4iv64ZXz*6m74DaF766lc1i8DYzliZ*5qV1RlV9326AxQxpVW37NNxFJvkh*w5OLQPcrKpotXZghrud+MN14kffWysV8Mx*47kzQ7Zv2SR*yiv6OZYsyz+29bthGWKVboyfV3t7dZQ7lt1C*8qankqvWS*IyGDWl5j+Np+mmlkzG4SnShCIrX2eZOxZlKhtrcbQIz0sHGdrzI6MzauwYTMR7H1CUYMYp5Lggjz1x2AcwrgMUUcQf5QXTQmhLiSvWakrnkeYf4iDYXRyLL8Mi9WBF0Lm2dlot6toz6IOSFhFiDMUWZrygjYcYgwliYPLnX31A0I2*C9fByWIfHDFlPCRVmRUw*lD14xBGUVERHjQkMroFomAifG4jzjFJWFfHikAapbhGRgo5A5MjzBj6mSGiKAYTTiv0s2uNIu4K7+xWliF5e9AH+UMQHIMJGD6NVFEWlOFYHD1NxNEf7Nu1iwvL8htBHPQBgd114KIaE9AH2eOZ+DRSlbGkjkVlLA*H3cPu4P6TcQcQIw5xxsAEGCsLptLImS6XPUH1ZzNtn2hGooHPDD+s8i6FOFIO7ryXZ4VXvlqD68lMCGUmvFqLk6CSVqK0dpXG7Q3Pz*8QBEzAjVJ0CCW9xdpy8RIyI9rh0d57k+aO4oeHOK8u5VjEi6BVjkhTc4krDJ7R0Tqdrzg1I7Eyp3acDpN1QGcZgazF0Lg+d2gxqnGEfgXzY1MzlzyYy9fZrphfHEPJedn6My*J1FQdIXs4a*SihYs0oTWLT9T16UsbNC3bbta5wVubhQrz22Uivt5CmMuq+AD7aKLsx*DCD3t12nW*R4wes+CHRP+t5TvzznPCvf9LkB*j5V9aVI*RctjgQVlC031dD1T7OnJkRRsyvd2PV47ag7LSVCqueQnu97*6oMwgPxY0BxPA8gMGfUCLqnOwTY7Fb5AMLbF1*z3vDDKufXbFBueIcZiXYCIq0khS5bH69H5rRYvSgiztSrAS9+mxs3ijlWXAIf9oMqB130J8Afe*AVBLAQIUAxQAAAgIAAyKB1u6eH21VgQAAIAHAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAH4EAAAAAA==',
  
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
