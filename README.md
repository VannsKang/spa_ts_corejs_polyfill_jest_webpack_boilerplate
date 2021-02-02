# spa_ts_corejs_polyfill_jest_webpack_boilerplate

> 본 스타터팩은 Babel / TypeScript / Jest Study에서 정리한 내용으로 구성하였습니다.

## 1. 설치

- `npm install`을 통해 패키지를 설치합니다.

```console
$ npm install
```

## 2. 실행

- `npm run dev`를 통해 `dev server`를 실행합니다.
- `npm run build`를 통해 빌드를 실행합니다.

```console
// dev server
$ npm run dev

// build
$ npm run build
```

## 3. 테스트

- `npm run test` 를 통해 `jest`를 실행합니다.

```console
$ npm run test
```

## 4. 프로젝트 트리

```console
.
├── src/
│   ├── components/
│   │   ├── Header.ts
│   │   └── User.ts
│   ├── interface/
│   │   └── index.ts
│   ├── store/
│   │   └── index.ts
│   ├── test/
│   │   └── index.test.ts
│   ├── App.ts
│   ├── config.ts
│   ├── index.ts
│   └── utils.ts
├── .babelrc
├── .gitignore
├── README.md
├── index.html
├── package.json
├── tsconfig.json
└── webpack.config.js
```

1. `components` 폴더 안에 개별 컴포넌트를 관리합니다.
2. `interface` 에서 타입을 관리합니다.
3. `store` 에서 전역 스토어를 관리합니다.
4. `test`에서 테스트를 관리합니다.
5. `config.ts`는 API Adresss나 필요한 정보를 관리합니다.
6. `utils.ts`는 공통 함수 로직을 관리합니다.

## 5. 설치된 패키지

```json
  "dependencies": {
    "core-js": "^3.7.0"
  },
  "devDependencies": {
    "@babel/core": "^7.11.6",
    "@babel/plugin-transform-runtime": "^7.11.5",
    "@babel/preset-env": "^7.11.5",
    "@babel/preset-typescript": "^7.10.4",
    "@babel/runtime-corejs3": "^7.11.2",
    "@types/jest": "^25.2.3",
    "babel-loader": "^8.1.0",
    "jest": "^26.6.3",
    "ts-loader": "^7.0.5",
    "typescript": "^3.9.7",
    "webpack": "^4.44.2",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.1",
    "whatwg-fetch": "^3.5.0"
  },
```

1. `core-js`를 통해 `babel`을 관리합니다.
2. `whatwg-fetch`를 통해 인터넷 익스플로러에서 `fetch` compatibility를 확보합니다.
