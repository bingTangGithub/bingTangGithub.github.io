(function (web) {
// function getDomainId (web) {
    

    var web = 'https://bingtanggithub.github.io/'; 
    var domainId;  
    var idname = [
        {
            domain: 'bingtanggithub.github.io',
            id: '34768c7d19ded3468fdbe770ecddf230'
        }, //我的博客
        {
            domain: 'user.qzone.qq.com/1569025161/infocenter',
            id: '593440c1b190e9b67f240ce3e1ee537c'
        }, //qq空间
        {
            domain: 'sjyx.xinguang.com',
            id: '9bb005298bfaa0db19d6b3e84688da74'
        } //四季严选
    ];

    for (let i=0; i<idname.length; i++) {
            if (web.indexOf(idname[i].domain) != -1) {
                domainId = idname[i].id;
            }
    }

    console.log('domainId:',domainId);

    (function() {
          var _hmt = _hmt || [];
          var hm = document.createElement("script");
          console.log('domainId:',domainId);
          hm.src = "https://hm.baidu.com/hm.js?" + domainId;
          console.log('hm.src:',hm.src);
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);

        console.log("hm:",hm);
        console.log("1222333");
 
    })();

})()
