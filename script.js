const list = document.getElementById("list");

function saveItem() {
  const key = document.getElementById("key").value.trim();
  const value = document.getElementById("value").value.trim();
  if (!key || !value) return;

  localStorage.setItem(key, value);
  document.getElementById("key").value = "";
  document.getElementById("value").value = "";
  render();
}

function deleteItem(key) {
  localStorage.removeItem(key);
  render();
}

function render() {
  list.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    const li = document.createElement("li");
    li.innerHTML = `
      <span><b>${key}</b>: ${value}</span>
      <button onclick="deleteItem('${key}')">X</button>
    `;
    list.appendChild(li);
  }
}

render();
