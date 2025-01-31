<div align="center">
  <img alt="Logo" src="https://github.com/justinsj/portfolio/blob/master/icon.png" width="100px" />
</div>
<h1 align="center">
  <a href="https://justinsj.com" target="_blank">
    justinsj.com
  </a>
</h1>
<p align="center">
  My portfolio built with <a rel="nofollow" href="https://nextjs.org/" target="_blank">Nextjs</a> and hosted on <a rel="nofollow" href="https://www.vercel.com/" target="_blank">Vercel</a>
</p>
<p align="center">
  <a href="https://justinsj.com" target="_blank">
    <img src="http://therealsujitk-vercel-badge.vercel.app/?app=portfolio&style=for-the-badge" alt="Vercel Status" />
  </a>
</p>


## Make it your own!

This was written to be configurable since the start, so you can simply override all the interfaces present in `config` folder which contains all the config for `projects`, `articles`, `videos`.

Custom providers can also be easily implemented. For example if you'd like to render articles from `medium.com` rather than `dev.to`.

## Contributions
[@justinsj](https://github.com/justinsj) [Justin's portfolio](https://justinsj.com)
- Refactored article provider to use Strategy Design Pattern
- Added support for rendering articles from Medium

## Install

```
yarn install
```

## Developer

```
yarn dev
```

## Production

```
yarn build
yarn start
```

## Deploy
On a build worker:
```
docker build --network=host -t justinsj/portfolio:latest . && docker push justinsj/portfolio:latest
```

On the host server:
```
docker pull justinsj/portfolio:latest && docker-compose pull && docker-compose up -d --remove-orphans && docker image prune -f
```
