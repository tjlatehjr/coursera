(function(window) {
    var helloSpeaker = {};
    var names = window.names;;
    var speakWord = "Hello";
    helloSpeaker.speak = function(names) {
        console.log(speakWord + " " + names);
    };
    window.helloSpeaker = helloSpeaker;
})(window);