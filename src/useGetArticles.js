import {useState,useEffect} from 'react';

export function useGetArticles(username,page){

    const [state, setState] = useState({isFetched:false,data:""})

    const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "catalinpit" ) {
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


    async function getArticles(query, variables={}) {
        const data = await fetch('https://api.hashnode.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables
            })
        });
    
        return data.json();
    }

    useEffect(() => {
        getArticles(GET_USER_ARTICLES,{page})
            .then(data =>setState({
                isFetched:true,
                data:data.data.user
            }))
            .then(console.log(state))
        
    }, [username,page]);

    return state;
}

