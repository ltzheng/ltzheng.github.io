(function () {
    const target = document.querySelector('[data-typing]');
    if (!target) return;

    const phrases = [
        'I build real-world environments for computer agents.',
        'I study agent harnesses for long-horizon computer tasks.',
        'I train self-evolving agents with reinforcement learning.',
        'I develop asynchronous RL systems for any harness.'
    ];

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        target.textContent = phrases[0];
        return;
    }

    let phraseIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeNext() {
        const phrase = phrases[phraseIndex];

        if (!deleting) {
            characterIndex += 1;
            target.textContent = phrase.slice(0, characterIndex);

            if (characterIndex === phrase.length) {
                deleting = true;
                window.setTimeout(typeNext, 1500);
                return;
            }

            window.setTimeout(typeNext, 48 + Math.random() * 34);
            return;
        }

        characterIndex -= 1;
        target.textContent = phrase.slice(0, characterIndex);

        if (characterIndex === 0) {
            deleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            window.setTimeout(typeNext, 360);
            return;
        }

        window.setTimeout(typeNext, 24 + Math.random() * 18);
    }

    target.textContent = '';
    window.setTimeout(typeNext, 500);
})();
