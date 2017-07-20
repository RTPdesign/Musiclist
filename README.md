# Musiclist
Music Album Wishlist site<br>
Creates login, authentication, and wishlists.<br>
Pulling from the Discogs API, allow users to manage and create their own wishlist of albums.


## Installation
---
In order to get the app to run, please make sure you have mongodb installed. As well as the service, mongod running.

    npm install

Create two terminals. Run<br>
    ENVIRONMENT=dev npm start

... to get the server started.

Then Run<br>
    npm run build

... to get Webpack listening to your changes.

## Testing
---
**Unit Tests**
This project uses `jest` by Facebook to test the application. Files that we test belong in the `__tests__` directory.

**End-to-End**
The end-to-end tests belong in a different project folder. Please look at this repo here: [RTP] (https://github.com/RTPdesign/e2e)

### Notes
When deploying Heroku, be sure to pass in your own `DB` environment variable, so the app has access to a database. This app does require `mongod` service to be running.