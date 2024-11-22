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

    var initialLoad = true;
    $(document).ready(function () {
        // Load Portfolio by default
        if (initialLoad){
            loadContent('menu/portfolio');
        }
        initialLoad = false;
    });

    // Function to dynamically load content into #main-content
    function loadContent(page) {
        $('#main-content').removeClass('show');

        setTimeout(function () {
            $.get(`${page}.html`, function (data) {
                $('#main-content').html(data);
                $('#main-content').addClass('show');

                // Initialize nested dynamic loading within the newly loaded content
                initNestedLoader();
            }).fail(function () {
                $('#main-content').html('<p>Error loading content. Please try again later.</p>');
            });
        }, 500);
    }

    // Sidebar click listener for main content loading
    $('.nav-link').on('click', function (e) {
        e.preventDefault();
        const page = $(this).data('page');
        loadContent(page);
    });

    // Function to handle nested dynamic loading (second-level loader)
    function initNestedLoader() {
        $('.categorybtn').on('click', function (e) {
            e.preventDefault();
            const subPage = $(this).data('page'); // e.g., 3d_character_models.html

            $('#category-div').removeClass('show');
            $('#categories').hide();
            setTimeout(function () {
                $.get(`${subPage}.html`, function (data) {
                    $('#category-div').html(data);
                    $('#category-div').addClass('show');
                }).fail(function () {
                    $('#category-div').html('<p>Error loading subcontent.</p>');
                });
            }, 500);
        });
    }

    $('.nav-link').on('click', function (event) {
        event.preventDefault();
        const page = $(this).data('page');
        loadContent(page);
    });

    $('.categorybtn').on('click', function (event) {
        event.preventDefault();
        const page = $(this).data('page');
        loadCategoryContent(page);
    });
});

