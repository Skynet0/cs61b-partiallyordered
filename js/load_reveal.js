(function () {
  "use strict";

  function init() {
    Reveal.initialize({
      controls: true,
      hash: true,
      center: false,
      height: 800,
      slideNumber: true,
      showNotes: false,
      margin: 0.1,
      preloadIframes: true,
      plugins: [
        RevealHighlight,
        RevealChalkboard,
        RevealMenu,
        RevealCustomControls,
      ],
      pdfSeparateFragments: true,

      customcontrols: {
        controls: [
          {
            icon: '<i class="fa fa-pen"></i>',
            title: "Toggle notes canvas (C)",
            action: "RevealChalkboard.toggleNotesCanvas();",
          },
          {
            icon: '<i class="fa fa-home"></i>',
            title: "Go to home page",
            action: "window.location.assign('/');",
          },
        ],
      },

      chalkboard: {
        readOnly: false,
        storage: "cs61b_partiallyordered_" + window.location.pathname.split("/")[2],
      },
    });

    Reveal.on("fragmentshown", (event) => {
      event.fragments.forEach((frag) => {
        (frag.getAttribute("data-entangled-ids") ?? "")
          .split(/\s+/)
          .filter((id) => id != "")
          .forEach((id) => {
            let elem = document.getElementById(id);
            if (elem) {
              elem.classList.add("entangled-visible");
            }
          });
      });
    });

    Reveal.on("fragmenthidden", (event) => {
      event.fragments.forEach((frag) => {
        (frag.getAttribute("data-entangled-ids") ?? "")
          .split(/\s+/)
          .filter((id) => id != "")
          .forEach((id) => {
            let elem = document.getElementById(id);
            if (elem) {
              elem.classList.remove("entangled-visible");
            }
          });
      });
    });

    window.highlightJsBadge({});
  }

  init();
})();
