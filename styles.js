import { html } from "lit-html";

export function styles() {
  return html`
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

      main {
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
        margin: 0 1rem;
        display: flex;
        flex-flow: column;
        gap: 1rem;
        max-width: calc(100vw - 2rem);
        --flamingo-500: #f15a24;
        --grey-050: #efefef;
        --grey-100: #d9d9da;
        --grey-200: #c3c3c4;
        --grey-300: #adadaf;
        --grey-400: #979799;
        --grey-500: #818284;
        --grey-600: #6b6c6e;
        --grey-700: #555659;
        --grey-800: #3f4043;
        --grey-900: #292a2e;

        --text-color: var(--grey-900);
        --background-color: #fff;
        --primary: black;
        --secondary: #cdcdcd;
        --accent: #323232;
        background: var(--background-color);
        color: var(--text-color);
        box-sizing: border-box;
      }
      .container {
        padding: 3.5rem 2.5rem 2rem 2.5rem;
        max-width: 365px;
        min-width: 300px;
        flex: 0 0 auto;
        display: flex;
        gap: 1rem;
        flex-direction: column;
      }

      p {
        line-height: 22px;
        color: var(--grey-700);
        font-size: 1rem;
        margin: 1rem 0;
      }

      input,
      button,
      div,
      section,
      span {
        font-size: 1.2rem;
        color: var(--text-color);
      }

      input {
        margin-bottom: 1rem;
        padding: 0.4rem 1rem;
        border-radius: 4px;
        border: 2px var(--grey-100) solid;
        width: auto;
        background-color: var(--background-color);

        line-height: 1.25rem;
        letter-spacing: 0.005em;
      }

      #whoami {
        width: 100%;
        display: block;
        resize: none;
      }

      input.errored {
        border: double 2px var(--flamingo-500);
      }
      input.errored::placeholder {
        color: var(--flamingo-500);
      }

      h1 {
        margin-top: 0;
        font-size: 1.8rem;
        margin: auto;
      }
      @media (min-width: 1024px) {
        h1 {
          margin: inherit;
        }
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0 0 1rem;
      }

      textarea {
        padding: 0;
      }

      button {
        border: 1px solid var(--grey-200);
        background: var(--background-color);
        display: flex;
        text-align: center;
        justify-content: center;
        margin-bottom: 1rem;
        padding: 0.6rem 1rem;
        border-radius: 4px;

        line-height: 1.25rem;
        letter-spacing: 0.005em;
      }

      button:hover,
      button:focus,
      a:focus {
        opacity: 0.9;
        box-shadow: 0 0 0 2px #ffffff, 0 0 3px 5px #29abe2;
        outline: 2px dotted transparent;
        outline-offset: 2px;
      }

      img {
        min-width: 500px;
        width: 50vw;
        max-width: 800px;
        display: block;
        margin: auto;
      }

      ul {
        width: 100%;
        padding: 0;
      }

      form,
      label {
        display: flex;
      }

      form {
        margin-bottom: 2rem;
        flex-direction: column;
      }

      button.primary {
        background-color: var(--primary);
        color: var(--background-color);
        border: none;
      }

      button.linkStyle {
        cursor: pointer;
        display: inline;
        border: none;
        padding: 0;
        margin: 0;
      }

      label {
        font-size: 1rem;
        font-weight: 500;
        flex-direction: column;
        margin-bottom: 0.5rem;
      }

      main::before {
        content: "";
        display: block;
        flex-grow: 1;
        height: 24px;
      }

      main::after {
        content: "";
        display: block;
        flex-grow: 2;
        height: 24px;
      }

      @media (min-width: 512px) {
        .container {
          border: 2px var(--grey-100) solid;
          border-radius: 4px;
        }
      }

      #logout-button {
        display: flex;
        padding: 8px;
        margin: 1rem 1rem 1rem auto;
        font-size: 0.8rem;
        width: fit-content;
      }

      .highlightBox {
        background-color: var(--grey-100);
        padding: 0.7rem 0rem;
        text-align: center;
        border-radius: 4px;
        margin-bottom: 1rem;
        overflow-wrap: break-word;
        font-size: 1.5rem;
        font-weight: 500;
      }

      .warningBox {
        border: 1px var(--grey-200) solid;
        border-radius: 4px;
        padding: 1rem 2rem;
      }

      hr {
        margin-bottom: 1rem;
        width: 100%;
        border-top: 1px solid var(--grey-400);
      }

      #icLogo {
        width: 80%;
        align-self: center;
        margin-top: -3rem;
      }

      #aboutLink {
        text-decoration: none;
        color: var(--grey-600);
        margin-top: 1rem;
        font-size: 0.875rem;
      }

      .deviceItem {
        display: flex;
        width: 100%;
      }

      .deviceItemAlias {
        border: 1px solid var(--grey-200);
        border-radius: 2px;
        height: 40px;
        display: flex;
        align-items: center;
        flex: 1 1 auto;
        margin-right: 0.5rem;
        padding-left: 1rem;
      }

      .deviceItemRemove {
        border-radius: 2px;
        padding: 0;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  `;
}
