$(document).ready(function() {

    var fullPageContainer = $('#fullpage');
    if (fullPageContainer) initFullPage(fullPageContainer);

    mediaCheck({
        media: '(min-width: 768px)',
        entry: mobilizeProtocolSection,
        exit: function() {
            console.log('leaving 420');
        },
        both: function() {
            console.log('changing state');
        }
    });

    function mobilizeProtocolSection() {
        $.fn.fullpage.destroy('all');

        var protocolSection = $('#protocol');
        var protocolSectionRow = protocolSection.find('.protocol-features');

        protocolSection.next().find('.protocol-feature').appendTo(protocolSectionRow);
        protocolSection.next().remove();

        protocolSection.next().find('.protocol-feature').appendTo(protocolSectionRow);
        protocolSection.next().remove();

        protocolSection.next().find('.protocol-feature').appendTo(protocolSectionRow);
        protocolSection.next().remove();

        initFullPage(fullPageContainer);
    }

    function initFullPage() {
        fullPageContainer.fullpage({
            "sectionSelector": "section",
            "navigation": true,
            onLeave: function(index, nextIndex, direction) {
                var mainHeader = $('body>header');
                if (direction == "up") mainHeader.slideDown();
                if (direction == "down") mainHeader.slideUp();

                var protocolSectionTitle = $('body>.protocol-title');
                if (direction == "down") {
                    if (index == 2) protocolSectionTitle.hide();
                    if (index == 3) protocolSectionTitle.show();
                }
            }
        });
    }

    var triggerBttn = document.getElementById('trigger-overlay'),
        overlay = document.querySelector('.overlay'),
        closeBttn = overlay.querySelector('button.overlay-close');

    if (triggerBttn) triggerBttn.addEventListener( 'click', toggleOverlay );
    if (closeBttn) closeBttn.addEventListener( 'click', toggleOverlay );

    function toggleOverlay() {
        if (overlay) {
            if (overlay.classList.contains('open')) {
                overlay.classList.remove('open');
                overlay.classList.add('close');
                var onEndTransitionFn = function(ev) {
                    if (ev.propertyName !== 'visibility') return;
                    this.removeEventListener('transitionend', onEndTransitionFn);
                    overlay.classList.remove('close');
                };
                overlay.addEventListener('transitionend', onEndTransitionFn);
            } else if (!overlay.classList.contains('close')) {
                overlay.classList.add('open');
            }
        }
    }
});