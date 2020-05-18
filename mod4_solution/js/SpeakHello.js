(function(window) {
    var byeSpeaker = {};
    var names = window.names;
    var speakWord = "Good Bye";
    byeSpeaker.speak = function(names) {
        console.log(speakWord + " " + names);
    };
    window.byeSpeaker = byeSpeaker;
})(window);