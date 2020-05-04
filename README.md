# Craft 3 starter Boilerplate
A simple Craft 3.X boilerplate to speed up web development.

### Craft requirements
*  PHP 7.0+ (use Apache since Fortrabbit is using it over nginx)
*  MySQL 5.5+
*  Composer 1.3+

Read more about Craft requirements [here](https://docs.craftcms.com/v3/requirements.html)

### Other requirements
*  yarn/npm (build front-end)
*  node 10 (running webpack)
*  mysqldump (sync database)
*  openssl (generate SSL certificate)

---

## Setup
Follow these instructions to get the project running.

1. There is a handy `setup.sh` script in root directory, which will install node and composer dependencies. This will also launch the Craft setup scrip to configure your new site
2. Copy `app/client/.env.example` and rename it to `.env` and replace with the appropriate settings.
3. Check `app/craft/.env` and fill in the settings that you need and are empty
    *  Find ip for `DEFAULT_MANIFEST_URL` with `ifconfig |grep inet` (last entry of inet)

### Front-end
Front-end is built with webpack, loaded with goodies. We use PostCSS for transforming our CSS and tailwind ([cheatsheat](https://nerdcave.com/tailwind-cheat-sheet)) for bootstraping the project. The client files are seperated from the Craft CMS files, but the build process outputs the production files to `app/craft/web/dist`.

*  If you are using https on the local site domain you need to make webpack also run with https:
    Run `sh ssl.sh` in the terminal inside the `app/client/internals` folder to generate a SSL certificate for `localhost`.

```
# Run development server with HMR
# webpack is run on localhost:8080 with twigpack (Craft plugin) syncing it to `yourcustomdomain.local`
yarn run dev
# or
npm run dev

# Create build files
# static files are built to app/craft/web/dist
yarn run build
# or
npm run build
```

#### Gotchas
*  Critical CSS is not loaded in dev mode