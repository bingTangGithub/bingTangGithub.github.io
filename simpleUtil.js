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

    for (let i=0; i < idname.length; i++) {
        try {
          if (web.indexOf(idname[i].domain) != -1) {
              domainId = idname[i].id;
          }
        } catch(e) {
          throw new Error(e);
        }
    }

    console.log('domainId:',domainId);

    var _hmt = _hmt || [];
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?"+ domainId;
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);

})()
