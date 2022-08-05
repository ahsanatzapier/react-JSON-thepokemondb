import React, { useRef } from "react";
import { generateToken } from "@the-collab-lab/shopping-list-utils";

const Party = () => {
  const token = generateToken();

  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    const btn = document.getElementById("copy");
    btn.textContent = "Copied!";
  }

  return (
    <div className="container">
      <div className="text-center mt-5 mb-5">
        <h1 className="title-font mb-3">Pokedex Party</h1>

        {/* <div class="row justify-content-md-center mt-4">
          <div class="col-md-auto border rounded">
            <h2 className="text-white">Party Token</h2>

            <div className="d-flex align-items-center">
              <input
                className="text-center h3 left-rounded"
                type="text"
                id="token"
                name="token"
                ref={textAreaRef}
                value={token}
                readOnly
              ></input>
              <button
                className="btn btn-secondary h3 right-rounded"
                id="copy"
                onClick={copyToClipboard}
              >
                Copy
              </button>
            </div>
          </div>
        </div> */}

        <nav class="nav nav-pills nav-justified mt-5 gap-4">
          <a class="nav-link bg-white text-dark" href="/pokedex">
            <p className="h4 mb-0 mt-0">Pokedex</p>
          </a>
          <a class="nav-link active" href="/party">
            <p className="h4 mb-0 mt-0">Party</p>
          </a>
        </nav>
      </div>

      <h1>Party Page</h1>
    </div>
  );
};

export default Party;
