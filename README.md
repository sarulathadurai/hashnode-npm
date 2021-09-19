# hashnode-api

A react function created to fetch articles which can be populated in cards for your portfolio.
And also to create posts using their hashnode api.

## Live Demo

[CodeSandBox](https://codesandbox.io/s/hashnode-api-g8s2b)

## Install

```
npm install hashnode-api
```

## Import

### For fetching articles from hashnode

```js
import {CreateArticle} from "hashnode-api";
```

## Usage

```js
const {isFetched,data} = useMedium("<your-medium-username>");
```

| _Returns_            | _Description_                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| `data` : _obj_       | an object having user's information and stories;                           |
| `isFetched` : _bool_ | `true` if username is a valid Medium username and data has been fetched; `false` for all other scenarios |