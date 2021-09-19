# hashnode-api

![hashnode-cover](https://res.cloudinary.com/practicaldev/image/fetch/s--ByKpo_Aw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/lxil6ifcwdx3fkukypc1.png)

A react function created to fetch articles which can be populated in cards for your portfolio.
And also to create posts using their hashnode api.

![Npm](https://img.shields.io/npm/v/react-use-medium?logo=npm&style=flat-square)
![GitHub](https://img.shields.io/github/license/dheerajmahra/react-use-medium?style=flat-square)


## Live Demo

[CodeSandBox](https://codesandbox.io/s/hashnode-api-g8s2b)

## Install

```
npm install hashnode-api
```

## Import

### For fetching articles from hashnode

```js
import {GetArticles} from "hashnode-api";
```

## Usage

```js
const {isFetched,data,error} = GetArticles("<USERNAME>",page);
```

| _Argument_            | _Description_                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| `USERNAME` : _String_       | Your hashnode username                           |
| `page` : _Int_       | The page number that you want to retrieve                           |



| _Returns_            | _Description_                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| `data` : _object_       | an object having user's information and stories;                           |
| `isFetched` : _boolean_ | `true` if username is a valid username and data has been fetched; `false` for all other scenarios |
| `error` : _boolean_ | `true` if username is not valid username and data has been fetched; `false` if data is fetched |

### For creating articles in hashnode

```js
import {CreateArticle} from "hashnode-api";
```

## Usage

```js
CreateArticle(input,TOKEN);
```

| _Argument_            | _Description_                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| `input` : _object_       | Object data required to create story|
| `TOKEN` : _string_       | Token string of your account that you can get from developer options in hashnode                        |

### Sample Input
```
const input = {
    title: "New Blog", //Title of your blog
    contentMarkdown: `# This is my first Blog`, //Blog content added as markdown
    tags: [
      {
        _id: "56744723958ef13879b9549b",
        slug: "testing",
        name: "Testing"
      }
    ],//tags that you want to include for your blog
    coverImageURL: "https://codybontecou.com/images/header-meta-component.png"
  };

```  