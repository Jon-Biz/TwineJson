window.storyFormat({
	"name":"TwineJson",
	"version":"0.0.3",
	"author":"<a href='http://www.papricacomunicacao.com.br'>Páprica Comunicação</a>",
	"description":"Free utility format to export your story into json format. Based on Entweedle by Michael McCollum",
	"image":"icon.svg",
	"url":"http://www.papricacomunicacao.com.br",
	"license":"<a href='http://opensource.org/licenses/MIT'>MIT License</a>",
	"proofing":false,
	"source":"<html><head><title>{{STORY_NAME}}</title></head><body><script type=text/javascript>window.onload=function(){\"undefined\"==typeof window.TwineJson&&(window.TwineJson={convert:function(){var e=window.document.getElementById(\"output\");e.innerHTML=this[\"export\"]()},\"export\":function(){var e=[];e.push(\"[\\r\\n\");var n=window.document.getElementsByTagName(\"tw-storydata\");n&&e.push(this.buildPassage(\"StoryTitle\",\"\",n[0].getAttribute(\"name\")));var t=window.document.getElementById(\"twine-user-script\");t&&e.push(this.buildPassage(\"UserScript\",\"script\",t.innerHTML));var r=window.document.getElementById(\"twine-user-stylesheet\");r&&e.push(this.buildPassage(\"UserStylesheet\",\"stylesheet\",r.innerHTML));for(var s=window.document.getElementsByTagName(\"tw-passagedata\"),i=0;i<s.length;++i)e.push(this.buildPassageFromElement(s[i],i,s.length));return e.push(\"]\\r\\n\"),e.join(\"\")},buildPassageFromElement:function(e,n,t){var r=!1;n+1==t&&(r=!0);var s=e.getAttribute(\"name\");s||(s=\"Untitled Passage\");var i=e.getAttribute(\"tags\"),u=e.textContent;return this.buildPassage(s,i,u,r)},buildPassage:function(e,n,t,r){var s=[];return s.push(\"{\\r\\n\"),s.push('\t\"name\" : '),s.push('\"',e,'\"'),n&&(s.push(\",\\r\\n\"),s.push('\t\"tags\" : '),s.push('\"[',n,']\"')),s.push(\",\\r\\n\"),s.push('\t\"content\" : '),s.push('\"',this.scrub(t),'\",\\r\\n'),s.push('\t\"children\" : '),s.push('\"',this.findChildren(t),'\"\\r\\n'),s.push(r?\"}\\r\\n\":\"},\\r\\n\"),s.join(\"\")},scrub:function(e){return e&&(e=e.replace(/^\\\"/gm,\"'\"),e=e.replace(/(\\r\\n|\\n|\\r)/gm,\"  \")),e},findChildren:function(e){var n=/\\[\\[(.+)\\]\\]/gm.execAll(e);return n}}),window.TwineJson.convert()},RegExp.prototype.execAll=function(e){for(var n=null,t=new Array;n=this.exec(e);){var r=[];for(i in n)parseInt(i)==i&&r.push(n[i]);t.push(r)}return t};</script><pre id=output></pre><div id=storyData style=\"display: none;\">{{STORY_DATA}}</div></body></html>"
});