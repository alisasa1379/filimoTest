async function menu() {
  let mainMenu = "";
  let data = await fetch("https://alisasa1379.github.io/dbJson/db.json");
  let res = await data.json();
  mainMenu = res.mainMenu.map((item) => {
    return `<li>
               ${item.icon ? ` <img src=${item.icon} alt="icon">` : ""}
                <a href=${item.href}>${item.title}</a>
              </li>`;
  });

  document
    .querySelector("#mainMenu > ul")
    .insertAdjacentHTML("afterbegin", mainMenu.join(""));
}

async function mainBtns() {
  let mainBtns = "";
  let data = await fetch("https://alisasa1379.github.io/dbJson/db.json");
  let res = await data.json();
  mainBtns = res.menuBtns.map((item) => {
    return `                    <button class=${
      item.id ==="1" ? "subscribe" : "login"
    }>
                        <a href=${item.href}>${item.title}</a>
                    </button>`;
  });

  document
    .querySelector("#groupBtns")
    .insertAdjacentHTML("afterbegin", mainBtns.join(""));
}

export default {menu,mainBtns};
