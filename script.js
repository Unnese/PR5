function highlightMatches() {
    var searchText = document.getElementById('searchText').value;
    var content = document.getElementById('content').innerHTML;
    var matches = content.match(new RegExp(searchText, 'gi'));
            
    if (matches) {
        var highlightedContent = content.replace(new RegExp(searchText, 'gi'), '<span class="highlight">' + searchText + '</span>');
        document.getElementById('content').innerHTML = highlightedContent;
        document.getElementById('matchesCount').textContent = 'Количество совпадений: ' + matches.length;
    } else {
        document.getElementById('content').innerHTML = content;
        document.getElementById('matchesCount').textContent = 'Количество совпадений: 0';
    }
}