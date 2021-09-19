import { useState, useEffect } from "react";

export function GetArticles(username, page) {
  const [state, setState] = useState({ isFetched: false, data: "",error:false });
  
  const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!,$username: String!) {
        user(username: $username ) {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    totalReactions
                    popularity
                }
            },
            numFollowers
        }
    }
    `;

  async function getArticles(query, variables = {}) {
    const data = await fetch("https://api.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query,
        variables
      })
    });

    return data.json();
  }

  useEffect(() => {
    getArticles(GET_USER_ARTICLES, { page,username })
      .then((data) =>{
        if (data.data.user.publication === null) {
            setState({
              error: true,
              isFetched: false,
              data: {}
            });
          } else {
            setState({
              isFetched: true,
              data: data.data.user
            });
          }
        })
      .then(console.log(state))
      .catch(err=>console.log(err));
  }, [username, page]);
  return state
}
