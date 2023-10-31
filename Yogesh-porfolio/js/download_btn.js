const downloadBtn = document.querySelector(".download-btn");
const fileLink = "https://drive.google.com/file/d/1k15mjkiJQhuejO7J8ZUIf3ZJDrGcNIoO/view?usp=drive_link";

const initTimer = () => {
    if(downloadBtn.classList.contains("disable-timer")) {
        return location.href = fileLink;
    }
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `Resume download will begin in <b>${timer}</b> seconds`;
    const initCounter = setInterval(() => {
        if(timer > 0) {
            timer--;
            return downloadBtn.innerHTML = `Resume download will begin in <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.innerText = "Resume is downloading...";
        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer");
            downloadBtn.innerHTML = `<span><img src="https://www.svgrepo.com/show/140007/download-button.svg" width="20px" height="20px"></span>
                                    <span class="text">Download Resume</span>`;
        }, 3000);
    }, 1000);
}

downloadBtn.addEventListener("click", initTimer);
