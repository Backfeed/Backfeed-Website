$(document).ready(function() {

    var fullPageContainer = $('#fullpage');
    if (fullPageContainer) initFullPage(fullPageContainer);

    mediaCheck({
        media: '(min-width: 768px)',
        entry: function() {
            $.fn.fullpage.destroy('all');

            var protocolSection = $('#infrastructure-for-decentralized-cooperation');
            var protocolSectionRow = $('<div class="row"></div>').appendTo(protocolSection);

            var protocolSectionNextCol = $('<div class="col-sm-4"></div>').appendTo(protocolSectionRow);
            protocolSection.next().find('.protocol-feature').appendTo(protocolSectionNextCol);
            protocolSection.next().remove();

            protocolSectionNextCol = $('<div class="col-sm-4"></div>').appendTo(protocolSectionRow);
            protocolSection.next().find('.protocol-feature').appendTo(protocolSectionNextCol);
            protocolSection.next().remove();

            protocolSectionNextCol = $('<div class="col-sm-4"></div>').appendTo(protocolSectionRow);
            protocolSection.next().find('.protocol-feature').appendTo(protocolSectionNextCol);
            protocolSection.next().remove();

            initFullPage(fullPageContainer);
        },
        exit: function() {
            console.log('leaving 420');
        },
        both: function() {
            console.log('changing state');
        }
    });

    function initFullPage() {
        fullPageContainer.fullpage({
            "sectionSelector": "section",
            "navigation": true
        });
    }
});