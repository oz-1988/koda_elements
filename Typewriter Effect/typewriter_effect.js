document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".typewriter-container");
    const originalText = container.textContent;
    container.textContent = "";

    let index = 0;
    const typeWriter = () => {
        if (index < originalText.length) {
            container.textContent += originalText.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    };

    typeWriter();
});