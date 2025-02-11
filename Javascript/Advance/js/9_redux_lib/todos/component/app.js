import html from "../core.js";
import { connect } from "../store.js";

const connector = connect(); // chi lay thuoc tinh cars (nho code selector trong core)
function App({ todos, filters }) {
  return html`
    <header class="header">
      <h1>Diep - todo-list</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
        id="task_inp"
        onkeyup="(event.keyCode === 13 && this.value.trim()) && dispatch('ADD', this.value.trim())"
      />
    </header>

    <section class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        ${todos.every((todo) => todo.completed) && "checked"}
        onchange="dispatch('ALL-COMPLETED', this.checked)"
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${todos.map((todo) => {
          if (todo.completed) {
            return html`
              <li class="completed" id="task-${todo.id}">
                <div class="view">
                  <input
                    class="toggle"
                    type="checkbox"
                    checked
                    onclick="dispatch('UNCOMPLETED', ${todo.id})"
                  />
                  <label>${todo.name}</label>
                  <button
                    class="destroy"
                    onclick="dispatch('DEL', ${todo.id})"
                  ></button>
                </div>
              </li>
            `;
          } else {
            return html`
              <li>
                <div class="view">
                  <input
                    class="toggle"
                    type="checkbox"
                    onclick="dispatch('COMPLETED', ${todo.id})"
                  />
                  <label
                    ondblclick="event.target.closest('li').classList.add('editing')"
                    >${todo.name}</label
                  >
                  <button
                    class="destroy"
                    onclick="dispatch('DEL', ${todo.id})"
                  ></button>
                </div>
                <input
                  class="edit"
                  value="${todo.name}"
                  onblur="dispatch('EDIT', this.value.trim(), ${todo.id})"
                  onkeyup="(event.keyCode === 13 || event.keyCode === 27) && dispatch('EDIT', this.value.trim(), ${todo.id})"
                />
              </li>
            `;
          }
        })}
      </ul>
    </section>

    <footer class="footer">
      <span class="todo-count"
        ><strong>${todos.filter((todo) => !todo.completed).length}</strong> item
        left</span
      >
      <ul class="filters">
        ${filters.map((tag) => {
          const [key, value] = Object.entries(tag)[0];
          return html`
            <li>
              <a
                class="${value && "selected"}"
                href="#/"
                onclick="dispatch('FILTER', '${key}')"
              >
                ${key.toUpperCase()}
              </a>
            </li>
          `;
        })}
      </ul>
      <button
        class="clear-completed"
        onclick="dispatch('CLEAR-COMPLETED', null)"
      >
        Clear completed
      </button>
    </footer>
  `;
}

export default connector(App);

/**
 * x Hien thi danh sach viec can lam
 * x Phan theo loai completed - no
 * x Them viec can lam
 * x Tich viec da lam (chuyen trang thai da hoan thanh)
 * x Dem so luong viec can lam trong danh sach (chua completed)
 * x Xoa viec can lam
 * x Chinh sua viec can lam hien tai (double click - chi cho uncompleted)
 * x Tich completed full
 * x Bo tich completed full
 * x Xoa task completed (clear completed)
 * x Loc theo all, active, completed
 * - Fix loi mat du lieu khi filter
 */
