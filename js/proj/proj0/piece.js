(function () {
  "use strict";

  function buildGridFromUrlParam() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    let pieceStr = params.piece;
    document.getElementById("piece-input").value = pieceStr;

    if (!/(\s*([\s*.]+))+\s*$/.test(pieceStr)) return;

    let grid = document.getElementById("piece-grid");
    let rows = pieceStr.trim().split(/(?:\t|\n|\r\n| )+/);
    let ncols = rows[0].length;

    let ri = 0;

    rows.forEach(r => {
      let ci = 0;
      if (r.length != ncols) {
        let err = document.getElementById("piece-error");
        err.classList.remove("hidden");
        err.textContent = "Error: rows with different number of columns";
        grid.classList.add("hidden");
        return;
      }
      let row = document.createElement("div");
      row.classList.add("piece-row");
      let rowText = document.createElement("span");
      rowText.innerHTML = `<code>[${ri}]</code>`
      row.appendChild(rowText);
      [...r].forEach(c => {
        let cell = document.createElement("div");
        cell.classList.add("piece-cell");
        if (c == "*") {
          cell.classList.add("filled-cell");
        }
        let cellText = document.createElement("span");
        cellText.innerHTML = `<code>[${ri}][${ci}]</code>`
        cell.appendChild(cellText);
        row.appendChild(cell);
        ci++
      });
      grid.appendChild(row);
      ri++;
    });

  }

  function init() {
    document.getElementById("submit-piece").addEventListener("click", () => {
      const params = new URLSearchParams();
      params.append("piece", document.getElementById("piece-input").value);
      window.location.assign(window.location.pathname + "?" + params.toString());
    });
    buildGridFromUrlParam();
  }


  init();
})();