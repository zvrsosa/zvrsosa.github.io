$(document).ready(function () {
    const hamburgerBtn = $('#hamburger-btn');
    const modalNav = $('#modal-nav');

    // Toggle Hamburger Menu and Modal Nav
    hamburgerBtn.on('click', function () {
        const expanded = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded', !expanded);
        $(this).toggleClass('active');
        modalNav.toggleClass('active');
    });

    // Close Modal Nav when a link is clicked
    modalNav.find('.nav-link').on('click', function () {
        hamburgerBtn.removeClass('active').attr('aria-expanded', false);
        modalNav.removeClass('active');
    });

    // Dynamic Content Loading (same as before)
    function loadContent(page) {
        $('#main-content').removeClass('show');
        setTimeout(() => {
            $.get(`${page}.html`, function (data) {
                $('#main-content').html(data);
                $('#main-content').addClass('show');
            });
        }, 500);
    }

    // Load Portfolio by default
    loadContent('portfolio');

    $('.nav-link').on('click', function (event) {
        event.preventDefault();
        const page = $(this).data('page');
        loadContent(page);
    });
});

