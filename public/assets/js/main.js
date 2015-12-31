$(document).ready(function() {
    var fullPageContainer = $('#fullpage');
    if (fullPageContainer) fullPageContainer.fullpage({"sectionSelector": "section"});

    mediaCheck({
        media: '(max-width: 420px)',
        entry: function() {
            console.log('starting 420');
        },
        exit: function() {
            console.log('leaving 420');
        },
        both: function() {
            console.log('changing state');
        }
    });
});