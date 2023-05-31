# Top Social App - Client Side

## Description

This is the client side of the Top Social App. It is a social media app that allows users to create posts and comment on other users' posts. It is built with Vite.

## Installation

0. install YARN https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable
	brew install yarn
   yarn --version
      1.22.19

1. Vscode or any code editor

2. Vite https://vitejs.dev/guide/

## Steps

1. Scaffolding Your First Vite Project
   With yarn:

```
❯ yarn create vite
               yarn create v1.22.19
               [1/4] 🔍  Resolving packages...
               [2/4] 🚚  Fetching packages...
               [3/4] 🔗  Linking dependencies...
               [4/4] 🔨  Building fresh packages...

               success Installed "create-vite@4.3.1" with binaries:
                     - create-vite
                     - cva
               ✔ Project name: … top_social_client
               ✔ Select a framework: › Vanilla
               ✔ Select a variant: › JavaScript

               Scaffolding project in /Users/zhan_shi/Documents/Developer/TopSocial/frontend/top_social_client...

               Done. Now run:

               cd top_social_client
               yarn
               yarn dev

❯ yarn

❯ yarn add normalize.css 

❯ yarn add axios 
```

2. Delete the following files:

```
counter.js/ javascript.svg / main.js / style.css
```

3.  Add the following files:

```
index.js/index.css
```

4.  Add the following files:

```
index.js: import "./index.css"
index.css : @import "normalize.css";
```

5.  Add src folder and add images folder inside src folder

6.  Add the following files:

```
jsconfig.json/ vite.config.js
```
