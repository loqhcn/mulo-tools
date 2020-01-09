function Url() {
    this.parseURL = function (url) {
        var a = document.createElement('a');
        a.href = url;
        return {
            source: url,
            protocol: a.protocol.replace(':', ''),
            host: a.hostname,
            port: a.port,
            query: a.search,
            params: (function () {
                var ret = {},
                    seg = a.search.replace(/^\?/, '').split('&'),
                    len = seg.length, i = 0, s;
                for (; i < len; i++) {
                    if (!seg[i]) { continue; }
                    s = seg[i].split('=');
                    ret[s[0]] = s[1];
                }
                return ret;
            })(),
            file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
            hash: a.hash.replace('#', ''),
            path: a.pathname.replace(/^([^\/])/, '/$1'),
            relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
            segments: a.pathname.replace(/^\//, '').split('/'),
            toLink: function () {
                var params = [];
                for (var x in this.params) {
                    params.push(x + '=' + this.params[x].toString())
                }
                return this.protocol + '://' + this.host + (this.port ? (':' + this.post) : '') + this.path
                    + (params.length ? ('?' + params.join('&')) : '')
                    + (this.hash ? '#' + this.hash : '')
            }
        };

    }
}
module.exports = new Url();