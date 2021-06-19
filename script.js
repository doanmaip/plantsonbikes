if (document) {
    document.addEventListener('scroll', function() {
        if (checkView()) count()
    });
}

function checkView() {
    const numbers = document.getElementById('numbers')
    if (numbers) {
        const rect = numbers.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}

function count() {
    setTimeout(() => {
        const counters = document.querySelectorAll('.value');
        const speed = 20;

        counters.forEach(counter => {
            const animate = () => {
                const value = +counter.getAttribute('akhi');
                const data = +counter.innerText;

                const time = value / speed;

                setTimeout(() => {
                    if (data < value) {
                        counter.innerText = Math.ceil(data + time);
                        setTimeout(animate, 1);
                    } else {
                        counter.innerText = value;
                    }
                }, 100);
            }
            animate();
        });
    }, 600);

}