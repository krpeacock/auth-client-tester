import { html } from "lit-html";
import { useState, component, useEffect } from "haunted";
import { AuthClient } from "@dfinity/auth-client";
import { styles } from "./styles";

function App({ identityProvider }) {
  const [init, setInit] = useState(false);
  const [fromStorage, setFromStorage] = useState(false);
  const [authClient, setAuthClient] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    AuthClient.create().then(async (client) => {
      setAuthClient(client);
      if (await client.isAuthenticated()) {
        setIsAuthenticated(true);
        setFromStorage(true);
        console.log("setFromStorage");
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [init]);

  const reset = () => {
    setAuthClient(null);
    setIsAuthenticated(false);
    setInit(false);
    setFromStorage(false);
  };

  if (isAuthenticated && authClient) {
    return html`${LoggedIn({ authClient, reset, fromStorage })}`;
  }

  const login = async () => {
    await authClient?.login({
      identityProvider,
      onSuccess: handleSuccess,
    });
  };

  const handleSuccess = async () => {
    setIsAuthenticated(await authClient.isAuthenticated());
  };

  return html`
    <main>
      ${styles()}
      <div class="container">
        <h1>Internet Identity Client</h1>
        <h2>You are not authenticated</h2>
        <p>To log in, click this button!</p>
        <button type="button" id="loginButton" @click=${login}>Log in</button>
      </div>
    </main>
  `;
}

function LoggedIn({ authClient, reset, fromStorage }) {
  const principal = authClient.getIdentity().getPrincipal().toText();

  const logout = async () => {
    await authClient.logout();
    reset();
  };

  return html`<main>
    ${styles()}
    <div class="container">
      <h1>You are logged in!</h1>
      ${fromStorage ? html`<h4>(From Storage)</h4>` : ""}
      <textarea type="text" readonly id="whoami">${principal}</textarea>
      <button id="logout" @click=${logout}>log out</button>
    </div>
  </main>`;
}

customElements.define("auth-client-tester", component(App));
