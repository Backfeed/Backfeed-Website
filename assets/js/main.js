$(function() {

    var fullPageContainer = $('#fullpage');

    if (fullPageContainer) {
        initFullPage();

        mediaCheck({
            media: '(min-width: 768px)',
            entry: desktopizeHomepage
        });
    }

    function initFullPage() {
        fullPageContainer.fullpage({
            "sectionSelector": "main>section",
            "navigation": true,
            "lockAnchors": true,
            "paddingTop": "55px",
            afterLoad: function(anchorLink, index) {
                switch (anchorLink) {
                    case 'protocol':
                        var icons = this.find('.protocol-icon'),
                            firstIcon = icons[0],
                            secondIcon = icons[1],
                            thirdIcon = icons[2];

                        if (icons.length !== 0) {
                            firstIcon.classList.add('animated');
                            prefixedEventListener(firstIcon, 'animationend', function(e) {
                                secondIcon.classList.add('animated');
                                prefixedEventListener(secondIcon, 'animationend', function(e) {
                                    thirdIcon.classList.add('animated');
                                });
                            });
                        }
                        break;
                    case 'protocol-feature-a':
                        $('.icon-beehive').addClass('animated');
                        break;
                    case 'protocol-feature-b':
                        $('.icon-heart').addClass('animated');
                        break;
                    case 'protocol-feature-c':
                        $('.icon-fractal').addClass('animated');
                        break;
                }
            },
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

    function desktopizeHomepage() {
        $.fn.fullpage.destroy('all');

        desktopizeFooter();
        desktopizeProtocolSection();

        initFullPage();
    }

    function desktopizeFooter() {
        $('#partners').prependTo('#footer');
    }

    function desktopizeProtocolSection() {
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

    var pfx = ["webkit", "moz", "MS", "o", ""];
    function prefixedEventListener(element, type, callback) {
        for (var p = 0; p < pfx.length; p++) {
            if (!pfx[p]) type = type.toLowerCase();
            element.addEventListener(pfx[p]+type, callback, false);
        }
    }

});