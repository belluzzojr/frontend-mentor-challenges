document.body.addEventListener(
    "click",
    (e) => {
    if (e.target.closest("button.invite")) alert("System in development!");
    },
    { passive: true }
);
