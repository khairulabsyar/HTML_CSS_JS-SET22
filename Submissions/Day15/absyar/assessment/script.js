// import { fetch } from "./node-fetch";
function delete_row(e) {
  console.log(e);
  console.log(e.parentNode);
  console.log(e.parentNode.parentNode);
  console.log(e.parentNode.parentNode.parentNode);
  console.log(e.parentNode.parentNode.parentNode.parentNode);
  e.parentNode.parentNode.remove();
}

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

const arr = await getDefinition("morning");

// console.log(arr[0].meanings[0].definitions);

arr.map((element) => {
  let def = element.meanings[0].definitions;
  def.map((definition) => {
    console.log(definition.definition);
  });
});
