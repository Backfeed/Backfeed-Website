$(function() {

    var fullPageContainer = $('#fullpage');
    if (fullPageContainer) {
        initFullPage(fullPageContainer);

        mediaCheck({
            media: '(min-width: 768px)',
            entry: desktopizeProtocolSection
        });

        mediaCheck({
            media: '(min-width: 768px)',
            entry: desktopizeFooter
        });
    }

    function initFullPage() {
        fullPageContainer.fullpage({
            "sectionSelector": "main>section",
            "navigation": true,
            "lockAnchors": true,
            "paddingTop": "55px",
            "recordHistory": true,
            onLeave: function(index, nextIndex, direction) {
                if (direction == "down") {
                    mediaCheck({
                        media: '(max-width: 768px)',
                        entry: function () {
                            var protocolSectionTitle = $('body>.protocol-title');
                            if (index == 2) protocolSectionTitle.css('opacity', '0');
                            if (index == 3) protocolSectionTitle.css('opacity', '1');
                        }
                    });
                }
            }
        });
    }

    function desktopizeFooter() {
        $.fn.fullpage.destroy('all');

        $('#partners').prependTo('#footer');

        initFullPage(fullPageContainer);
    }

    function desktopizeProtocolSection() {
        $.fn.fullpage.destroy('all');

        var protocolSection = $('#protocol');
        var protocolSectionRow = protocolSection.find('.protocol-features');

        protocolSection.next().find('.protocol-feature').removeClass('homepage-section-wrapper').appendTo(protocolSectionRow);
        protocolSection.next().remove();

        protocolSection.next().find('.protocol-feature').removeClass('homepage-section-wrapper').appendTo(protocolSectionRow);
        protocolSection.next().remove();

        protocolSection.next().find('.protocol-feature').removeClass('homepage-section-wrapper').appendTo(protocolSectionRow);
        protocolSection.next().remove();

        var stickyProtocolTitle = $('body>.protocol-title');
        if (stickyProtocolTitle) stickyProtocolTitle.remove();

        protocolSection.find('.protocol-title').prependTo(protocolSection.find('.protocol-section'));

        initFullPage(fullPageContainer);
    }

    var menuTriggerButton = document.getElementById('trigger-menu'),
        menu = $('.menu');

    if (menuTriggerButton) {
        menuTriggerButton.addEventListener('click', toggleMenu);
        document.body.addEventListener('click', closeMenu);
    }

    function closeMenu(e) {
        if ($(e.target).is('#trigger-menu, #trigger-menu>span, .menu')) return;

        if (menu && menu.hasClass('open')) {
            menuTriggerButton.classList.toggle('open');

            menu.removeClass('open').animate({
                width: "0",
                height: "0"
            }, function() {
                menu.hide();
            });
        }
    }

    function toggleMenu() {
        menuTriggerButton.classList.toggle('open');

        if (menu) {
            if (menu.hasClass('open')) {
                menu.removeClass('open').animate({
                    width: "0",
                    height: "0"
                }, function() {
                    menu.hide();
                });
            } else {
                menu.addClass('open').animate({
                    width: "320px",
                    height: "385px"
                }).show();
            }
        }
    }

    $('.next-section').on('click', function() {
        $.fn.fullpage.moveSectionDown();
    });

});