const emails = document.getElementById(`emails`);

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".net", ".io", ".com"];

for (let i = 0; i < pronoun.length; i++) {
  for (let e = 0; e < adj.length; e++) {
    for (let j = 0; j < noun.length; j++) {
      for (let k = 0; k < extensions.length; k++) {
        let result = pronoun[i] + adj[e] + noun[j] + extensions[k];
        console.log(result);
        emails.innerHTML += `<li>${result}</li>`;
      }
    }
  }
}
