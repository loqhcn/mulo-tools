/**
 * 用户操作方法合集
 * 
 * 
 */
module.exports = function () {

    /**
     * 复制文本
     * @todo 通过创建一个隐形的input实现复制
     * 
     * @param {String} text 复制的内容
     * @param {Function} 复制后的回调
     * 
     */
    this.copyText = function (text, callback) {
        
        let input = document.createElement('input')
        input.type = 'text'
        input.value = text;
        input.className = 'copy-temp'
        document.body.appendChild(input);
        input.select();
        // let js=input.createTextRange();
        selectText(input)
        document.execCommand("copy")
        input.style.display = 'none';
        input.blur();
        // zooPopup.toast({ msg: '复制成功' })
        callback && callback();
        setTimeout(() => {
            input.remove();
        }, 3000);
        function selectText(oInput) {
            if (oInput.createTextRange) {
                //ie
                oInput.select();
            } else {
                //firefox/chrome
                oInput.setSelectionRange(0, oInput.value.length);
                oInput.focus();
            }
        }
      
    }


}