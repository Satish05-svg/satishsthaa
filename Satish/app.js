document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');
    const sectBtns = document.querySelectorAll('.controlls .control');
    const allSections = document.querySelector('.main-content');
    const themeBtn = document.querySelector('.theme-btn');
    const nameElement = document.querySelector('.name .typed-text');
    const cursorSpan = document.querySelector('.cursor');
    const typedTextSpan = document.getElementById('auto-typing-animation');

    let texts = ["Satish Shrestha", "Student", "Unlocker", "Freelancer"];
    let idx = 0;
    let textIdx = 0;
    let typingInterval;

    function typeText() {
        if (textIdx < texts[idx].length) {
            if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
            nameElement.textContent += texts[idx].charAt(textIdx);
            textIdx++;
            setTimeout(typeText, 150);
        } else {
            clearInterval(typingInterval);
            cursorSpan.classList.remove('typing');
            setTimeout(eraseText, 2000);
        }
    }

    function eraseText() {
        if (textIdx > 0) {
            if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
            nameElement.textContent = texts[idx].substring(0, textIdx - 1);
            textIdx--;
            setTimeout(eraseText, 100);
        } else {
            cursorSpan.classList.remove('typing');
            idx = 0;
            textIdx = 0;
            setTimeout(startTypingAnimation, 1000);
        }
    }

    function startTypingAnimation() {
        typingInterval = setInterval(typeText, 150);
    }

    function changeText() {
        textIdx = 0;
        nameElement.textContent = "";
        idx = (idx + 1) % texts.length;
        startTypingAnimation();
    }

    function scrollToSection(id) {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    }

    function setActiveState(id) {
        sectBtns.forEach(btn => {
            btn.classList.remove('active-btn');
            btn.style.backgroundColor = 'transparent'; // Reset button color
            if (btn.dataset.id === id) {
                btn.classList.add('active-btn');
                btn.style.backgroundColor = getButtonColor(); // Set button color
            }
        });

        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === id) {
                section.classList.add('active');
            }
        });
    }

    function getButtonColor() {
        return document.body.classList.contains('light-mode') ? '#a6d1e6' : '#2fae60'; // Adjusted color for both light and dark mode
    }

    sectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            setActiveState(id);
            scrollToSection(id);
        });

        btn.addEventListener('mouseenter', () => {
            if (!btn.classList.contains('active-btn')) {
                btn.style.backgroundColor = getButtonColor();
            }
        });

        btn.addEventListener('mouseleave', () => {
            if (!btn.classList.contains('active-btn')) {
                btn.style.backgroundColor = 'transparent';
            }
        });
    });

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        setActiveState(document.querySelector('.control.active-btn').dataset.id);
    });

    startTypingAnimation();
    setInterval(changeText, 5000);

    const textArray = ["Satish Shrestha", "A Student", "A Unlocker", "A Learner"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function typeAutoText() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeAutoText, typingDelay);
        } else {
            cursorSpan.classList.remove('typing');
            setTimeout(eraseAutoText, newTextDelay);
        }
    }

    function eraseAutoText() {
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseAutoText, erasingDelay);
        } else {
            cursorSpan.classList.remove('typing');
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(typeAutoText, typingDelay + 1100);
        }
    }

    if (textArray.length) setTimeout(typeAutoText, newTextDelay + 250);
});
