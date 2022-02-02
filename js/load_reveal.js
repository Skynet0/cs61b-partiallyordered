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
          { icon: '<i class="fa fa-pen"></i>',
            title: 'Toggle notes canvas (C)',
            action: 'RevealChalkboard.toggleNotesCanvas();'
          }
        ]
      },

      chalkboard: {
        readOnly: false,
        storage: "disc_" + window.location.pathname.split("/")[2],
      },
    });

    window.highlightJsBadge({});
  }

  init();
})();
