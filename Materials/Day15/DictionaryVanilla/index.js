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

const searchWord = async (e) => {
  // e.preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  // For example, this can be useful when:
  // - Clicking on a "Submit" button, prevent it from submitting a form
  // - Clicking on a link, prevent the link from following the URL
  e.preventDefault();
  console.log(await getDefinition("world"));
};
