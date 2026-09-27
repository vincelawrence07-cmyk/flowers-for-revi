window.onload = () => {
    const loader = document.getElementById("loader");
    const bar = document.getElementById("loader-bar-fill");
    const percentText = document.getElementById("loader-percent");
    const subtitle = document.getElementById("loader-subtitle");

    const duration = 2200;

    const messages = [
        { at: 0, text: "Generating flowers..." },
        { at: 35, text: "Prepare ready to be amazed..." },
        { at: 70, text: "Blooming..." },
    ];

    let start = null;
    let shownIndex = 0;

    function fillBar(timestamp) {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const percent = Math.min((elapsed / duration) * 100, 100);

        bar.style.width = percent + "%";
        percentText.textContent = Math.floor(percent) + "%";

        if (shownIndex < messages.length - 1 && percent >= messages[shownIndex + 1].at) {
            shownIndex++;
            subtitle.textContent = messages[shownIndex].text;
        }

        if (percent < 100) {
            requestAnimationFrame(fillBar);
        } else {
            finishLoading();
        }
    }

    function finishLoading() {
        loader.classList.add("hide");
        setTimeout(() => {
            document.body.classList.remove("container");
        }, 800);
    }

    requestAnimationFrame(fillBar);
};