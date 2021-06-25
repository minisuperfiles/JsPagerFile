/* @minisuperfiles
 * JsPagerFile v1.0
 * Copyright (c) 2021 Mini Super Files | https://github.com/minisuperfiles/JsPagerFile/blob/master/LICENSE
 * https://github.com/minisuperfiles/JsPagerFile
 */
class JsPagerFile {
    constructor(title = '', style = [], script = []) {
        this.title = title;
        this.style = style;
        this.script = script;
        this.bodyElement = '';
        this.innerJs = '';
        this.innerStyle = '';
    }
    setBody(elm) {
        this.bodyElement += elm;
    }
    setJS(code) {
        this.innerJs += "\n" + code;
    }
    setStyle(sty) {
        this.innerStyle += "\n" + sty;
    }
    docChange(selector = 'body') {
        document.querySelector('title').innerText = this.title;
        let head = document.querySelector('head');
        for (let i = 0; i < this.style.length; i++) {
            let link = document.createElement('link');
            link.href = this.style[i];
            link.rel = 'stylesheet';
            head.appendChild(link);
        }
        for (let i = 0; i < this.script.length; i++) {
            let script = document.createElement('script');
            script.src = this.script[i];
            head.appendChild(script);
        }
        let msfArea = document.querySelector(selector);
        let body = (msfArea) ? msfArea :document.querySelector('body');
        body.innerHTML = this.bodyElement;
        let innerStyle = document.createElement('style');
        innerStyle.appendChild(document.createTextNode(this.innerStyle));
        body.appendChild(innerStyle);
        let innerJs = document.createElement('script');
        innerJs.appendChild(document.createTextNode(this.innerJs));
        body.appendChild(innerJs);
    }
    HttpReq(url, method = 'GET', data = null, async = false, callback = function(r){}, ctype = 'application/x-www-form-urlencoded') {	 
        var request = new XMLHttpRequest(),res;
        request.open(method, url, async); 
        request.setRequestHeader("Content-Type", ctype);
        request.onreadystatechange = function() { 
            if (this.readyState == 4) { 
                res = this.responseText; 
                callback(res);
            } 
        };
        request.send(data);	
        return res;
    }
}

/*
class JsPagerTemplete extends JsPagerFile {
    constructor(title, style = [], script = []) {
        super(title,style,script);
        this.header = '';
        this.footer = '';
        this.baseURL = '';
    }
    setHeader(elm) {
        this.header = elm;
    }
    setFooter(elm) {
        this.footer = elm;
    }
}
*/