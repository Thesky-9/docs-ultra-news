# Upgrade Guide

- Option 1 (Auto update): Go to Admin -> System Administration -> System Updater and click "Download & install update".

- Option 2 (Manual update):
  - For developers:
    - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
    - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
    - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
    - Run `php artisan migrate` to clear cache.
    - Run `php artisan optimize:clear` to clear cache.

  - For non-developers:
    - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
    - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
    - Delete all files in `storage/framework/views` and `storage/framework/cache`.
    - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
    - Go to Admin -> Plugins -> Real Estate Plugin . Please click "Deactive" and then click "Active" for it to update the changes