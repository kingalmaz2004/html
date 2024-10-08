document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');

    // Функция для плавного перехода при клике на ссылку
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href');
            document.body.classList.add('fade-out');
            setTimeout(function() {
                window.location.href = target;
            }, 500); // Задержка для плавного перехода
        });
    });

    // Убираем класс fade-out после загрузки новой страницы
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            document.body.classList.remove('fade-out');
        }
    });
});
