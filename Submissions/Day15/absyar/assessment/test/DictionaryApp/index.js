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

const arr = await getDefinition(this);

arr.map((element) => {
  let def = element.meanings[0].definitions;
  def.map((definition) => {
    console.log(definition.definition);
  });
});
