/** CUSTOM COMPONENTS */
// must extend HTMLElement
class CustomComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>Hello world</h1>`;
  }
}

customElements.define("custom-component", CustomComponent);

/** SHADOW DOM */
const shadowRoot = document
  .getElementById("shadow")
  .attachShadow({ mode: "open" });
shadowRoot.innerHTML = `<style>
button {
  background: tomato;
  color: white;
}
</style>
<button><slot></slot> tomato</button>`;

/** TEMPLATES */
const fragment = document.getElementById("book-template");
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "A Farewell to Arms", author: "Ernest Hemingway" },
  { title: "Catch 22", author: "Joseph Heller" },
];

books.forEach(book => {
  // Create an instance of the template content
  const instance = document.importNode(fragment.content, true);
  // Add relevant content to the template
  instance.querySelector(".title").innerHTML = book.title;
  instance.querySelector(".author").innerHTML = book.author;
  // Append the instance ot the DOM
  document.getElementById("books").appendChild(instance);
});
