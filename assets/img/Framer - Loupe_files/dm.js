var _dmq=_dmq||[];!function(a){"use strict";var b="_dmsid",c=365,d="hello.devmate.com",e="_dmq",f="_setAccount",g="_setUseGoogle",h="_trackProducts",i="_setReferrer",j="_setSource",k="_setCampaign",l="_setPartner",m="_dm",n="_url_dm",o="_url_google",p={campaign:"dm_campaign",source:"dm_source",partner:"dm_partner"},q={campaign:"utm_campaign",source:"utm_source"},r=a.document,s=function(a){return a?(a^16*Math.random()>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,s)},t=function(){for(var a=r.cookie.split(";"),b={},c=0;c<a.length;c++){var d=a[c],e=d.indexOf("="),f=w(d.substr(0,e)),g=w(d.substr(e+1,d.length));b[f]=decodeURIComponent(g)}return b},u=function(b,c,d){var e="",f=v(a.location.hostname);if(d){var g=new Date;g.setTime(g.getTime()+24*d*60*60*1e3),e="; expires="+g.toUTCString()}r.cookie=b+"="+encodeURIComponent(c)+e+"; domain="+f+"; path=/"},v=function(a){if(!a)return"";for(var b=a.split("."),c=[],d=b.length-1;d>=0&&(c.push(b[d]),!(b[d].length>3));d--);return"."+c.reverse().join(".")},w=function(a){return a.replace(/^\s+/,"").replace(/\s+/,"")},x=function(){for(var b=((a.location.href||"").split("?")[1]||"").split("&"),c={},d=0,e=b.length;e>d;d++){var f=(b[d]||"").split("=")||[];""!==f[0]&&void 0!==f[0]&&(c[f[0]]="undefined"!=typeof f[1]?f[1]:"")}return c},y=function(a){var b=new Image;return b.src=a,b},z=function(b){for(var c,e=this,r={},s=0,t=b.length;t>s;s++)r[b[s][0]]=b[s][1];if("string"==typeof r[f]){c={account:r[f],sid:e.getSID(),useGoogle:r[g],products:r[h],referrer:r[i],source:r[j],campaign:r[k],partner:r[l]},e[m]=c;var u=x();e[n]={};for(var v in p)p.hasOwnProperty(v)&&(e[n][v]=u[p[v]]?decodeURIComponent(u[p[v]]):"");if(c.useGoogle===!0||1===c.useGoogle){e[o]={};for(var w in q)q.hasOwnProperty(w)&&(e[o][w]=u[q[w]]?decodeURIComponent(u[q[w]]):"")}var z=a.location.protocol+"//"+d+"/__dma.gif?";y(z+e.queryString()),e=null}else"function"==typeof(a.console||{}).warn&&a.console.warn("Wrong _setAccount value.");return this},A=z.prototype;A.getSID=function(){var a=t()||{},d=a[b];return d||(d=s(),u(b,d,c)),d},A.queryObject=function(){var b,c=this[m],d=this[n],e=this[o]||{},f=new Date;return b={_dmvid:c.account,_dmpid:c.products,_dmsid:c.sid,_dmp:d.partner||c.partner,_dmc:d.campaign||e.campaign||c.campaign,_dms:d.source||e.source||c.source,_ref:r.referrer||c.referrer,_loc:a.navigator.language,_tz:f.getTimezoneOffset(),_nocache:f.getTime()}},A.queryString=function(){var a=[],b=this.queryObject();for(var c in b){var d=b[c];("string"==typeof d||"number"==typeof d)&&a.push(encodeURIComponent(c)+"="+encodeURIComponent(d))}return a.join("&")};try{a._dmTrack=new z(a[e])}catch(B){}}(window);
/*
     FILE ARCHIVED ON 02:11:06 Sep 12, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:04:51 Dec 06, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 183.419 (3)
  esindex: 0.006
  captures_list: 205.233
  CDXLines.iter: 13.901 (3)
  PetaboxLoader3.datanode: 125.447 (4)
  exclusion.robots: 0.204
  exclusion.robots.policy: 0.192
  RedisCDXSource: 2.14
  PetaboxLoader3.resolve: 20.349
  load_resource: 81.902
*/