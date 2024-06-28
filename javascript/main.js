document.addEventListener('DOMContentLoaded', function() {
    // Курсор
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');
    document.body.appendChild(customCursor);

    document.addEventListener('mousemove', function(e) {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });

    const buttons = document.querySelectorAll('.content-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            customCursor.style.display = 'none';
        });

        button.addEventListener('mouseleave', () => {
            customCursor.style.display = 'block';
        });
    });

    // Поп-ап
    const respectButton = document.getElementById('respectButton');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    respectButton.addEventListener('click', function() {
        popup.style.display = 'block';
    });

    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
