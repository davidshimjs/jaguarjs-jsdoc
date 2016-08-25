(function() {
    var counter = 0;
    var numbered;
    var source = document.getElementById('source-code');

    if (source) {
        var linenums = config.linenums;

        if (linenums) {
            source = source.getElementsByTagName('ol')[0];

            numbered = Array.prototype.slice.apply(source.children);
            numbered = numbered.map(function(item) {
                counter++;
                item.id = 'line' + counter;
            });
        } else {
            source = source.getElementsByTagName('code')[0];

            numbered = source.innerHTML.split('\n');
            numbered = numbered.map(function(item) {
                counter++;
                return '<span id="line' + counter + '"></span>' + item;
            });

            source.innerHTML = numbered.join('\n');
        }
    }
})();
