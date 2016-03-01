function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
        	//replace changes the + sign to a regular space
            return decodeURIComponent(pair[1].replace(/\+/g, ' '));
        }
    }
    
    return undefined;
}