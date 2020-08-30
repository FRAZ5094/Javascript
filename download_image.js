let htmldata;

function getSourceAsDOM(url)
{
    xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET",url,false);
    xmlhttp.send();
    parser=new DOMParser();
    return parser.parseFromString(xmlhttp.responseText,"text/html");      
}



const URLs="https://4nijd8.smartapps.cn/pages/detail/detail?aid=7051055133002125&senddate=20200331&oauthType=search&_fav_ukey=baiduapp_swan%3A%2F%2F9e40b679856c14f667ac35ef7c3ebb22&hostname=baiduboxapp&_swebfr=1";
domobj=getSourceAsDOM(URLs);
console.log(domobj);
