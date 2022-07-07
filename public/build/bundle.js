!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function c(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}let h;function g(t){h=t}const b=[],y=[],x=[],k=[],v=Promise.resolve();let w=!1;function _(t){x.push(t)}const C=new Set;let z=0;function E(){const t=h;do{for(;z<b.length;){const t=b[z];z++,g(t),q(t.$$)}for(g(null),b.length=0,z=0;y.length;)y.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];C.has(e)||(C.add(e),e())}x.length=0}while(b.length);for(;k.length;)k.pop()();w=!1,C.clear(),g(t)}function q(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const F=new Set;function S(t,e){t&&t.i&&(F.delete(t),t.i(e))}function O(t,e,n,o){if(t&&t.o){if(F.has(t))return;F.add(t),undefined.c.push((()=>{F.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function A(t){t&&t.c()}function N(t,n,r,l){const{fragment:c,on_mount:u,on_destroy:a,after_update:i}=t.$$;c&&c.m(n,r),l||_((()=>{const n=u.map(e).filter(s);a?a.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(_)}function R(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function j(t,e){-1===t.$$.dirty[0]&&(b.push(t),w||(w=!0,v.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function M(e,s,r,l,c,u,i,f=[-1]){const d=h;g(e);const m=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:s.target||d.$$.root};i&&i(m.root);let p=!1;if(m.ctx=r?r(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return m.ctx&&c(m.ctx[t],m.ctx[t]=s)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](s),p&&j(e,t)),n})):[],m.update(),p=!0,o(m.before_update),m.fragment=!!l&&l(m.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);m.fragment&&m.fragment.l(t),t.forEach(a)}else m.fragment&&m.fragment.c();s.intro&&S(e.$$.fragment),N(e,s.target,s.anchor,s.customElement),E()}g(d)}class B{$destroy(){R(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function P(e){let n,o,s,r;return{c(){n=i("link"),o=i("link"),s=i("link"),r=i("link"),m(n,"rel","preconnect"),m(n,"href","https://fonts.googleapis.com"),m(o,"rel","preconnect"),m(o,"href","https://fonts.gstatic.com"),m(o,"crossorigin",""),m(s,"href","https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&family=Roboto&family=Source+Sans+Pro:wght@600&display=swap"),m(s,"rel","stylesheet"),m(r,"rel","icon"),m(r,"type","image/png"),m(r,"href","/iconF.png"),document.title="FREECONOMIC"},m(t,e){c(document.head,n),c(document.head,o),c(document.head,s),c(document.head,r)},p:t,i:t,o:t,d(t){a(n),a(o),a(s),a(r)}}}class T extends B{constructor(t){super(),M(this,t,null,P,r,{})}}function D(e){let n;return{c(){n=i("header"),n.innerHTML='<h1 class="svelte-77xk3e">FREECONOMIC</h1>',m(n,"class","svelte-77xk3e")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}class H extends B{constructor(t){super(),M(this,t,null,D,r,{})}}function I(e){let n,o,s,r,l,h,g,b,y,x,k,v,w,_,C,z,E,q=`${e[1]}20`,F=`0 0 .2em .05em ${e[1]},0 0 .4em .1em #000`;return{c(){n=i("div"),o=i("h2"),s=f(e[0]),r=d(),l=i("article"),h=i("span"),g=f(e[2]),b=i("br"),y=d(),x=i("button"),x.textContent="Comprar",k=d(),v=i("article"),w=i("span"),_=f(e[3]),C=i("br"),z=d(),E=i("button"),E.textContent="Vender",m(o,"class","svelte-1qa4kz1"),$(o,"color",e[1],!1),m(h,"class","svelte-1qa4kz1"),m(x,"class","self-buy svelte-1qa4kz1"),m(l,"class","svelte-1qa4kz1"),m(w,"class","svelte-1qa4kz1"),m(E,"class","self-sell svelte-1qa4kz1"),m(v,"class","svelte-1qa4kz1"),m(n,"class","svelte-1qa4kz1"),$(n,"border-color",e[1],!1),$(n,"background-color",q,!1),$(n,"box-shadow",F,!1)},m(t,e){u(t,n,e),c(n,o),c(o,s),c(n,r),c(n,l),c(l,h),c(h,g),c(l,b),c(l,y),c(l,x),c(n,k),c(n,v),c(v,w),c(w,_),c(v,C),c(v,z),c(v,E)},p(t,[e]){1&e&&p(s,t[0]),2&e&&$(o,"color",t[1],!1),4&e&&p(g,t[2]),8&e&&p(_,t[3]),2&e&&$(n,"border-color",t[1],!1),2&e&&q!==(q=`${t[1]}20`)&&$(n,"background-color",q,!1),2&e&&F!==(F=`0 0 .2em .05em ${t[1]},0 0 .4em .1em #000`)&&$(n,"box-shadow",F,!1)},i:t,o:t,d(t){t&&a(n)}}}function L(t,e,n){let{nameCoin:o}=e,{color:s}=e,{buy:r}=e,{sell:l}=e;return t.$$set=t=>{"nameCoin"in t&&n(0,o=t.nameCoin),"color"in t&&n(1,s=t.color),"buy"in t&&n(2,r=t.buy),"sell"in t&&n(3,l=t.sell)},[o,s,r,l]}class U extends B{constructor(t){super(),M(this,t,L,I,r,{nameCoin:0,color:1,buy:2,sell:3})}}const V=[];function G(e,n=t){let o;const s=new Set;function l(t){if(r(e,t)&&(e=t,o)){const t=!V.length;for(const t of s)t[1](),V.push(t,e);if(t){for(let t=0;t<V.length;t+=2)V[t][0](V[t+1]);V.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(r,c=t){const u=[r,c];return s.add(u),1===s.size&&(o=n(l)||t),r(e),()=>{s.delete(u),0===s.size&&(o(),o=null)}}}}let J=G({buy:"",sell:""});(async()=>{const t=await fetch("https://api.bluelytics.com.ar/v2/latest"),{blue:{value_buy:e,value_sell:n}}=await t.json();J.update((t=>(t.buy=e+" ARS",t.sell=n+" ARS",t)))})();let K=G({buy:"",sell:""});function Q(t){let e,n,o,s,r,l,f;return s=new U({props:{nameCoin:"Dolar Blue",color:"#00008B",buy:t[0].buy,sell:t[0].sell}}),l=new U({props:{nameCoin:"Bitcoin",color:"#FFFF00",buy:t[1].buy,sell:t[1].sell}}),{c(){e=i("article"),n=i("h2"),n.innerHTML="Compra y Vende<br/>Facil y Rapido",o=d(),A(s.$$.fragment),r=d(),A(l.$$.fragment),m(n,"class","svelte-1o42mp2"),m(e,"class","svelte-1o42mp2")},m(t,a){u(t,e,a),c(e,n),c(e,o),N(s,e,null),c(e,r),N(l,e,null),f=!0},p(t,[e]){const n={};1&e&&(n.buy=t[0].buy),1&e&&(n.sell=t[0].sell),s.$set(n);const o={};2&e&&(o.buy=t[1].buy),2&e&&(o.sell=t[1].sell),l.$set(o)},i(t){f||(S(s.$$.fragment,t),S(l.$$.fragment,t),f=!0)},o(t){O(s.$$.fragment,t),O(l.$$.fragment,t),f=!1},d(t){t&&a(e),R(s),R(l)}}}function W(t,e,n){let o,s;return l(t,J,(t=>n(0,o=t))),l(t,K,(t=>n(1,s=t))),[o,s]}(async()=>{const t=await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=btc%2Cusd"),{bitcoin:{usd:e}}=await t.json();K.update((t=>(t.buy=e+" U$D",t.sell=e+500+" U$D",t)))})();class X extends B{constructor(t){super(),M(this,t,W,Q,r,{})}}function Y(e){let n,o,s;return o=new X({}),{c(){n=i("section"),A(o.$$.fragment)},m(t,e){u(t,n,e),N(o,n,null),s=!0},p:t,i(t){s||(S(o.$$.fragment,t),s=!0)},o(t){O(o.$$.fragment,t),s=!1},d(t){t&&a(n),R(o)}}}class Z extends B{constructor(t){super(),M(this,t,null,Y,r,{})}}function tt(e){let n,o,s,r,l,f,m;return o=new T({}),r=new H({}),f=new Z({}),{c(){n=i("main"),A(o.$$.fragment),s=d(),A(r.$$.fragment),l=d(),A(f.$$.fragment)},m(t,e){u(t,n,e),N(o,n,null),c(n,s),N(r,n,null),c(n,l),N(f,n,null),m=!0},p:t,i(t){m||(S(o.$$.fragment,t),S(r.$$.fragment,t),S(f.$$.fragment,t),m=!0)},o(t){O(o.$$.fragment,t),O(r.$$.fragment,t),O(f.$$.fragment,t),m=!1},d(t){t&&a(n),R(o),R(r),R(f)}}}new class extends B{constructor(t){super(),M(this,t,null,tt,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
