// managed to fecth, can search unlimited as definition list is being rest, able to save in local storage

let error = document.getElementById("bigError");
let wordReplace = document.getElementById("wordReplace");
let wordDef = document.getElementById("word-def");
let rightSide = document.getElementById("rightside");
let wordStorage = document.getElementsByClassName("wordstorage");
let word;

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
  // console.log(e.target[0].value);
  e.preventDefault();
  // console.log(await getDefinition(e.target[0].value));
  word = e.target[0].value;
  let pattern = /^[a-z]+$/;
  let test = pattern.test(word);

  if (test) {
    wordReplace.innerHTML = word;
    const arr = await getDefinition(word);
    wordDef.innerHTML = "";

    arr.map((element) => {
      let def = element.meanings[0].definitions;
      def.map((definition) => {
        // console.log(definition.definition);

        let li = document.createElement("li");
        li.innerText = definition.definition;
        wordDef.appendChild(li);
      });
    });
    // error.classList.remove("error");
  }
  // else {
  // test.classList.remove("error");
  // }
};

const checkError = (e) => {
  let word = e.target[0].value;
  let pattern = /^[a-z]+$/;
  let test = pattern.test(word);
  if (test) {
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
};

const save = async () => {
  let storage = localStorage.getItem(word);

  if (storage == null) {
    storage = [];
  } else {
    storage = JSON.parse(storage);
  }
  const arr = await getDefinition(word);

  arr.map((element) => {
    let def = element.meanings[0].definitions;
    def.map((definition) => {
      // console.log(definition.definition);
      storage.push(definition.definition);
    });
  });
  storage = JSON.stringify(storage);
  localStorage.setItem(word, storage);
};
