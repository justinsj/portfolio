<div align="center">
  <img alt="Logo" src="https://github.com/justinsj/portfolio/blob/master/icon.png" width="100px" />
</div>
<h1 align="center">
  <a href="https://justinsj.com" target="_blank">
    justinsj.com
  </a>
</h1>
<p align="center">
  My portfolio built with <a href="https://nextjs.org/" target="_blank">Nextjs</a> and hosted on AWS.
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
npm install
```

## Developer

```
npm run dev
```

## Production

```
npm run build
npm run start
```

## Deploy
```
docker build --network=host -t justinsj/portfolio:latest . && docker push justinsj/portfolio:latest
```
