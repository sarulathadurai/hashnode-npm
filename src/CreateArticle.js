export function CreateArticle(input,token) {
    const query = `mutation createStory($input: CreateStoryInput!){ 
      createStory(input: $input){ 
        code 
        success 
        message 
      } 
    }`;
    
    fetch("https://api.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        query,
        variables: { input }
      })
    })
      .then((res) => res.json())
      .then((res) => console.log(JSON.stringify(res)))
      .catch((err) => console.log(err));
  }
  