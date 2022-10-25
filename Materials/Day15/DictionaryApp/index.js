import fetch from "node-fetch";

const getDefinition = async (word) => {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res) => {
      const data = res.json();
      if (res.status === 200) {
        return data;
      } else {
        throw data;
      }
    })
    .catch((err) => err);
};

// const word = getDefinition("hello");

const arr = await getDefinition("hello");

console.log(arr[0].meanings[0].definitions);
