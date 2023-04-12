import { useState } from "preact/hooks";

import styles from "./app.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://bun.sh" target="_blank">
          <img src="/favicon.ico" class="logo" alt="Bun logo" />
        </a>
      </div>
      <h1 onClick={() => console.log("asdfas")}>Bun +asdfasdfasdfasfd </h1>
      <div class={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Bun and Preact logos to learn more
      </p>
    </>
  );
}
