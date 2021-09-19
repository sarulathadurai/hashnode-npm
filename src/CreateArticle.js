export function CreateArticle(input) {
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
        Authorization: "e3e87ac1-e995-442c-b572-55011db7c9c9"
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
  