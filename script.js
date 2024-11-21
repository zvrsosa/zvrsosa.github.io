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

    // Dynamic Content Loading (with smooth transition)
    function loadContent(page) {
        // Hide current content and prepare for new content
        $('#main-content').removeClass('show');
        setTimeout(() => {
            $.get(`${page}.html`, function (data) {
                $('#main-content').html(data); // Inject new content
                $('#main-content').addClass('show'); // Show content with animation

                // Ensure hover is triggered by forcing reflow/repaint
                forceHoverStyles();
            });
        }, 500); // Allow time for the current content to fade
    }

    // Force hover styles to be applied after content load
    function forceHoverStyles() {
        // Trigger a reflow to ensure hover styles are applied
        $('#main-content').get(0).offsetHeight; // This forces the browser to reflow/repaint the elements

        // Optional: Re-add the hover class dynamically
        $('.nav-link').addClass('ready-hover');
    }

    // Load Portfolio by default
    loadContent('portfolio');

    // Handle click events on navigation links
    $('.nav-link').on('click', function (event) {
        event.preventDefault();
        const page = $(this).data('page');
        loadContent(page); // Load new page content
    });
});
