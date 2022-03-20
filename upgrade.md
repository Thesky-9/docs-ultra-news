# Upgrade Guide

## Upgrade to 2.0.0

There are 2 ways to update to the new version

### 1. Manually

- For developers:
    - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
    - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
    - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
    - Run `php artisan optimize:clear` to clear cache.
    - Go to Admin -> Plugins -> Pro Post and then click "Active" button to active this plugin

- For non-developers:
    - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
    - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
    - Delete all files in `storage/framework/views` and `storage/framework/cache`.
    - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
    - Go to Admin -> Plugins -> Pro Post . Please click "Deactive" and then click "Active" for it to update the changes

### 2. Automatic - via website updater

    - Access to Admin
    - Platform Administration > System Updater
    - The website will automatically detect the new version, click "Download & Install Update"

**Note : Please backup your database and script files before upgrading.**

## Upgrade to 1.2.0

There are 2 ways to update to the new version

### 1. Manually

- For developers:
    - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
    - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
    - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
    - Run `php artisan optimize:clear` to clear cache.
    - Go to Admin -> Plugins -> Pro Post and then click "Active" button to active this plugin

- For non-developers:
    - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
    - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
    - Delete all files in `storage/framework/views` and `storage/framework/cache`.
    - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
    - Go to Admin -> Plugins -> Pro Post . Please click "Deactive" and then click "Active" for it to update the changes

### 2. Automatic - via website updater

    - Access to Admin
    - Platform Administration > System Updater
    - The website will automatically detect the new version, click "Download & Install Update"

**Note : Please backup your database and script files before upgrading.**

## Upgrade to 1.1.0

There are 2 ways to update to the new version

### 1. Manually

- For developers:
    - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
    - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
    - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
    - Run `php artisan optimize:clear` to clear cache.
    - Go to Admin -> Plugins -> Pro Post and then click "Active" button to active this plugin

- For non-developers:
    - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
    - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
    - Delete all files in `storage/framework/views` and `storage/framework/cache`.
    - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
    - Go to Admin -> Plugins -> Pro Post . Please click "Deactive" and then click "Active" for it to update the changes

### 2. Automatic - via website updater

    - Access to Admin
    - Platform Administration > System Updater
    - The website will automatically detect the new version, click "Download & Install Update"

**Note : Please backup your database and script files before upgrading.**
                
## Upgrade to 1.0.1/1.0.2/1.0.3

There are 2 ways to update to the new version

### 1. Manually

- For developers:
    - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
    - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
    - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
    - Run `php artisan optimize:clear` to clear cache.
    - Go to Admin -> Plugins -> Pro Post and then click "Active" button to active this plugin

- For non-developers:
    - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
    - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
    - Delete all files in `storage/framework/views` and `storage/framework/cache`.
    - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
    - Go to Admin -> Plugins -> Pro Post . Please click "Deactive" and then click "Active" for it to update the changes

### 2. Automatic - via website updater

    - Access to Admin
    - Platform Administration > System Updater
    - The website will automatically detect the new version, click "Download & Install Update"

**Note : Please backup your database and script files before upgrading.**
                