var xhr = new XMLHttpRequest();
xhr.onload = function() {
    var base = document.createElement('base');
    base.href = 'https://github.com';

    var newHead = document.adoptNode(this.responseXML.head);
    newHead.appendChild(base);
    document.documentElement.replaceChild(newHead, document.head);

    var newBody = document.adoptNode(this.responseXML.body);
    document.documentElement.replaceChild(newBody, document.body);

    document.URL = this.responseXML.URL;
}
xhr.open("GET", "https://github.com/issues");
xhr.responseType = "document";
xhr.send();
