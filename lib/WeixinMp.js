

function WeixinMp() {
    //判断是否是微信浏览器的函数
    this.isWeixin = function () {
        //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
        //通过正则表达式匹配ua中是否含有MicroMessenger字符串
        var ua = navigator.userAgent.toLowerCase();
        var isWeixin = ua.indexOf('micromessenger') != -1;
        return isWeixin;
    }
}

module.WeixinMp = WeixinMp;

module.exports = new WeixinMp();