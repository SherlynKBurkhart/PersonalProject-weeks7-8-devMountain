(function(a){a.fn.extend({autocomplete:function(b,c){var d=typeof b=="string";c=a.extend({},a.Autocompleter.defaults,{url:d?b:null,data:d?null:b,delay:d?a.Autocompleter.defaults.delay:10,max:c&&!c.scroll?10:150,noRecord:"No Records."},c);c.highlight=c.highlight||function(e){return e};c.formatMatch=c.formatMatch||c.formatItem;return this.each(function(){new a.Autocompleter(this,c)})},result:function(b){return this.bind("result",b)},search:function(b){return this.trigger("search",[b])},flushCache:function(){return this.trigger("flushCache")},setOptions:function(b){return this.trigger("setOptions",[b])},unautocomplete:function(){return this.trigger("unautocomplete")}});a.Autocompleter=function(m,g){var c={UP:38,DOWN:40,DEL:46,TAB:9,RETURN:13,ESC:27,COMMA:188,PAGEUP:33,PAGEDOWN:34,BACKSPACE:8};var i=null;if(g.failure!=null&&typeof g.failure=="function"){i=g.failure}var b=a(m).attr("autocomplete","off").addClass(g.inputClass);var k;var r="";var n=a.Autocompleter.Cache(g);var e=0;var v;var y={mouseDownOnSelect:false};var s=a.Autocompleter.Select(g,m,d,y);var x;navigator.userAgent.indexOf("Opera")!=-1&&a(m.form).bind("submit.autocomplete",function(){if(x){x=false;return false}});b.bind((navigator.userAgent.indexOf("Opera")!=-1&&!"KeyboardEvent" in window?"keypress":"keydown")+".autocomplete",function(z){e=1;v=z.keyCode;switch(z.keyCode){case c.UP:if(s.visible()){z.preventDefault();s.prev()}else{u(0,true)}break;case c.DOWN:if(s.visible()){z.preventDefault();s.next()}else{u(0,true)}break;case c.PAGEUP:if(s.visible()){z.preventDefault();s.pageUp()}else{u(0,true)}break;case c.PAGEDOWN:if(s.visible()){z.preventDefault();s.pageDown()}else{u(0,true)}break;case g.multiple&&a.trim(g.multipleSeparator)==","&&c.COMMA:case c.TAB:case c.RETURN:if(d()){z.preventDefault();x=true;return false}break;case c.ESC:s.hide();break;default:clearTimeout(k);k=setTimeout(u,g.delay);break}}).focus(function(){e++}).blur(function(){e=0;if(!y.mouseDownOnSelect){t()}}).click(function(){if(g.clickFire){if(!s.visible()){u(0,true)}}else{if(e++>1&&!s.visible()){u(0,true)}}}).bind("search",function(){var z=(arguments.length>1)?arguments[1]:null;function A(E,D){var B;if(D&&D.length){for(var C=0;C<D.length;C++){if(D[C].result.toLowerCase()==E.toLowerCase()){B=D[C];break}}}if(typeof z=="function"){z(B)}else{b.trigger("result",B&&[B.data,B.value])}}a.each(h(b.val()),function(B,C){f(C,A,A)})}).bind("flushCache",function(){n.flush()}).bind("setOptions",function(){a.extend(true,g,arguments[1]);if("data" in arguments[1]){n.populate()}}).bind("unautocomplete",function(){s.unbind();b.unbind();a(m.form).unbind(".autocomplete")});function d(){var C=s.selected();if(!C){return false}var z=C.result;r=z;if(g.multiple){var F=h(b.val());if(F.length>1){var B=g.multipleSeparator.length;var E=a(m).selection().start;var D,A=0;a.each(F,function(G,H){A+=H.length;if(E<=A){D=G;return false}A+=B});F[D]=z;z=F.join(g.multipleSeparator)}z+=g.multipleSeparator}b.val(z);w();b.trigger("result",[C.data,C.value]);return true}function u(B,A){if(v==c.DEL){s.hide();return}var z=b.val();if(!A&&z==r){return}r=z;z=j(z);if(z.length>=g.minChars){b.addClass(g.loadingClass);if(!g.matchCase){z=z.toLowerCase()}f(z,l,w)}else{o();s.hide()}}function h(z){if(!z){return[""]}if(!g.multiple){return[a.trim(z)]}return a.map(z.split(g.multipleSeparator),function(A){return a.trim(z).length?a.trim(A):null})}function j(z){if(!g.multiple){return z}var B=h(z);if(B.length==1){return B[0]}var A=a(m).selection().start;if(A==z.length){B=h(z)}else{B=h(z.replace(z.substring(A),""))}return B[B.length-1]}function q(z,A){if(g.autoFill&&(j(b.val()).toLowerCase()==z.toLowerCase())&&v!=c.BACKSPACE){b.val(b.val()+A.substring(j(r).length));a(m).selection(r.length,r.length+A.length)}}function t(){clearTimeout(k);k=setTimeout(w,200)}function w(){var z=s.visible();s.hide();clearTimeout(k);o();if(g.mustMatch){b.search(function(A){if(!A){if(g.multiple){var B=h(b.val()).slice(0,-1);b.val(B.join(g.multipleSeparator)+(B.length?g.multipleSeparator:""))}else{b.val("");b.trigger("result",null)}}})}}function l(A,z){if(z&&z.length&&e){o();s.display(z,A);q(A,z[0].value);s.show()}else{w()}}function f(A,C,z){if(!g.matchCase){A=A.toLowerCase()}var B=n.load(A);if(B){if(B.length){C(A,B)}else{s.hide()}}else{if((typeof g.url=="string")&&(g.url.length>0)){var D={timestamp:+new Date()};a.each(g.extraParams,function(E,F){D[E]=typeof F=="function"?F():F});a.ajax({mode:"abort",port:"autocomplete"+m.name,dataType:g.dataType,url:g.url,data:a.extend({q:j(A),limit:g.max},D),success:function(F){var E=g.parse&&g.parse(F)||p(F);n.add(A,E);C(A,E)}})}else{s.emptyList();if(i!=null){i()}else{z(A)}}}}function p(C){var z=[];var B=C.split("\n");for(var A=0;A<B.length;A++){var D=a.trim(B[A]);if(D){D=D.split("|");z[z.length]={data:D,value:D[0],result:g.formatResult&&g.formatResult(D,D[0])||D[0]}}}return z}function o(){b.removeClass(g.loadingClass)}};a.Autocompleter.defaults={inputClass:"ac_input",resultsClass:"ac_results",loadingClass:"ac_loading",minChars:1,delay:400,matchCase:false,matchSubset:true,matchContains:false,cacheLength:100,max:1000,mustMatch:false,extraParams:{},selectFirst:true,formatItem:function(b){return b[0]},formatMatch:null,autoFill:false,width:0,multiple:false,multipleSeparator:" ",inputFocus:true,clickFire:false,highlight:function(c,b){return c.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+b.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi,"\\$1")+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong>$1</strong>")},scroll:true,scrollHeight:180,scrollJumpPosition:true};a.Autocompleter.Cache=function(c){var f={};var d=0;function h(l,k){if(!c.matchCase){l=l.toLowerCase()}var j=l.indexOf(k);if(c.matchContains=="word"){j=l.toLowerCase().search("\\b"+k.toLowerCase())}if(j==-1){return false}return j==0||c.matchContains}function g(j,i){if(d>c.cacheLength){b()}if(!f[j]){d++}f[j]=i}function e(){if(!c.data){return false}var k={},j=0;if(!c.url){c.cacheLength=1}k[""]=[];for(var m=0,l=c.data.length;m<l;m++){var p=c.data[m];p=(typeof p=="string")?[p]:p;var o=c.formatMatch(p,m+1,c.data.length);if(typeof(o)==="undefined"||o===false){continue}var n=o.charAt(0).toLowerCase();if(!k[n]){k[n]=[]}var q={value:o,data:p,result:c.formatResult&&c.formatResult(p)||o};k[n].push(q);if(j++<c.max){k[""].push(q)}}a.each(k,function(r,s){c.cacheLength++;g(r,s)})}setTimeout(e,25);function b(){f={};d=0}return{flush:b,add:g,populate:e,load:function(n){if(!c.cacheLength||!d){return null}if(!c.url&&c.matchContains){var m=[];for(var j in f){if(j.length>0){var o=f[j];a.each(o,function(p,k){if(h(k.value,n)){m.push(k)}})}}return m}else{if(f[n]){return f[n]}else{if(c.matchSubset){for(var l=n.length-1;l>=c.minChars;l--){var o=f[n.substr(0,l)];if(o){var m=[];a.each(o,function(p,k){if(h(k.value,n)){m[m.length]=k}});return m}}}}}return null}}};a.Autocompleter.Select=function(e,j,l,p){var i={ACTIVE:"ac_over"};var k,f=-1,r,m="",s=true,c,o;function n(){if(!s){return}c=a("<div/>").hide().addClass(e.resultsClass).css("position","absolute").appendTo(document.body).hover(function(t){if(a(this).is(":visible")){try{j.focus()}catch(u){}}p.mouseDownOnSelect=false});o=a("<ul/>").appendTo(c).mouseover(function(t){if(q(t).nodeName&&q(t).nodeName.toUpperCase()=="LI"){f=a("li",o).removeClass(i.ACTIVE).index(q(t));a(q(t)).addClass(i.ACTIVE)}}).click(function(t){a(q(t)).addClass(i.ACTIVE);l();if(e.inputFocus){try{j.focus()}catch(u){}}return false}).mousedown(function(){p.mouseDownOnSelect=true}).mouseup(function(){p.mouseDownOnSelect=false});if(e.width>0){c.css("width",e.width)}s=false}function q(u){var t=u.target;while(t&&t.tagName!="LI"){t=t.parentNode}if(!t){return[]}return t}function h(t){k.slice(f,f+1).removeClass(i.ACTIVE);g(t);var v=k.slice(f,f+1).addClass(i.ACTIVE);if(e.scroll){var u=0;k.slice(0,f).each(function(){u+=this.offsetHeight});if((u+v[0].offsetHeight-o.scrollTop())>o[0].clientHeight){o.scrollTop(u+v[0].offsetHeight-o.innerHeight())}else{if(u<o.scrollTop()){o.scrollTop(u)}}}}function g(t){if(e.scrollJumpPosition||(!e.scrollJumpPosition&&!((t<0&&f==0)||(t>0&&f==k.size()-1)))){f+=t;if(f<0){f=k.size()-1}else{if(f>=k.size()){f=0}}}}function b(t){return e.max&&e.max<t?e.max:t}function d(){o.empty();var u=b(r.length);for(var v=0;v<u;v++){if(!r[v]){continue}var w=e.formatItem(r[v].data,v+1,u,r[v].value,m);if(w===false){continue}var t=a("<li/>").html(e.highlight(w,m)).addClass(v%2==0?"ac_even":"ac_odd").appendTo(o)[0];a.data(t,"ac_data",r[v])}k=o.find("li");if(e.selectFirst){k.slice(0,1).addClass(i.ACTIVE);f=0}if(a.fn.bgiframe){o.bgiframe()}}return{display:function(u,t){n();r=u;m=t;d()},next:function(){h(1)},prev:function(){h(-1)},pageUp:function(){if(f!=0&&f-8<0){h(-f)}else{h(-8)}},pageDown:function(){if(f!=k.size()-1&&f+8>k.size()){h(k.size()-1-f)}else{h(8)}},hide:function(){c&&c.hide();k&&k.removeClass(i.ACTIVE);f=-1},visible:function(){return c&&c.is(":visible")},current:function(){return this.visible()&&(k.filter("."+i.ACTIVE)[0]||e.selectFirst&&k[0])},show:function(){var v=a(j).offset();c.css({width:typeof e.width=="string"||e.width>0?e.width:a(j).width(),top:v.top+j.offsetHeight,left:v.left}).show();if(e.scroll){o.scrollTop(0);o.css({maxHeight:e.scrollHeight,overflow:"auto"});if(navigator.userAgent.indexOf("MSIE")!=-1&&typeof document.body.style.maxHeight==="undefined"){var t=0;k.each(function(){t+=this.offsetHeight});var u=t>e.scrollHeight;o.css("height",u?e.scrollHeight:t);if(!u){k.width(o.width()-parseInt(k.css("padding-left"))-parseInt(k.css("padding-right")))}}}},selected:function(){var t=k&&k.filter("."+i.ACTIVE).removeClass(i.ACTIVE);return t&&t.length&&a.data(t[0],"ac_data")},emptyList:function(){o&&o.empty()},unbind:function(){c&&c.remove()}}};a.fn.selection=function(i,b){if(i!==undefined){return this.each(function(){if(this.createTextRange){var j=this.createTextRange();if(b===undefined||i==b){j.move("character",i);j.select()}else{j.collapse(true);j.moveStart("character",i);j.moveEnd("character",b);j.select()}}else{if(this.setSelectionRange){this.setSelectionRange(i,b)}else{if(this.selectionStart){this.selectionStart=i;this.selectionEnd=b}}}})}var g=this[0];if(g.createTextRange){var c=document.selection.createRange(),h=g.value,f="<->",d=c.text.length;c.text=f;var e=g.value.indexOf(f);g.value=h;this.selection(e,e+d);return{start:e,end:e+d}}else{if(g.selectionStart!==undefined){return{start:g.selectionStart,end:g.selectionEnd}}}}})(jQuery);