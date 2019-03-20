# The standardkontenrahmen.de website

> Simple static website that provides a comprehensive Algolia-powered search for “Standardkontenrahmen” (account templates)

![Searching for how to post a particular expense with SKR 49](https://cdn.baltpeter.io/img/screenshot-standardkontenrahmen.png)

This repository contains the source for the [standardkontenrahmen.de](https://www.standardkontenrahmen.de) website. The website acts as a reference for Standardkontenrahmen (accounting templates), offering an [Algolia](https://www.algolia.com/)-powered search engine for *SKR 03*, *SKR 04* and *SKR 49*. As account templates tend to be very comprehensive, it can be difficult to find the correct account. This project aims to make that process easier.

## Data source

The Standardkontenrahmen data is taken from the [GnuCash project](https://gnucash.org/) how have kindly provided freely-licensed XML versions of the data for their accounting software.

The XML data is then converted to JSON for Algolia using simple Python code. The source for that is available in the separate [skr-json](https://github.com/baltpeter/skr-json) repo.

According to a decision by the Kammergericht Berlin, Standardkontenrahmen are in the public domain and may be published without restrictions (see this [German post](https://www.standardkontenrahmen.de/urheberrecht) for reference). My publication of the data is based on that decision.

## Architecture

The website is implemented as a static site using [Hugo](https://gohugo.io/). It uses a custom theme based on the [Natrium theme](https://github.com/mobybit/hugo-natrium-theme/).

## License and contributions

The website and source code for it are licensed under the MIT License, see the `LICENSE` file for details.

Contributions of any kind are of course welcome, feel free to open issues and pull requests!
