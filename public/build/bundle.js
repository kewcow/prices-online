!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(){return i(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function p(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}let $;function h(t){$=t}const g=[],b=[],y=[],v=[],x=Promise.resolve();let _=!1;function w(t){y.push(t)}const C=new Set;let k=0;function M(){const t=$;do{for(;k<g.length;){const t=g[k];k++,h(t),E(t.$$)}for(h(null),g.length=0,k=0;b.length;)b.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];C.has(e)||(C.add(e),e())}y.length=0}while(g.length);for(;v.length;)v.pop()();_=!1,C.clear(),h(t)}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const O=new Set;function S(t,e){t&&t.i&&(O.delete(t),t.i(e))}function A(t,e,n,o){if(t&&t.o){if(O.has(t))return;O.add(t),undefined.c.push((()=>{O.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function N(t){t&&t.c()}function R(t,n,s,c){const{fragment:l,on_mount:a,on_destroy:u,after_update:i}=t.$$;l&&l.m(n,s),c||w((()=>{const n=a.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(w)}function j(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(g.push(t),_||(_=!0,x.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(e,r,s,c,l,u,i,f=[-1]){const d=$;h(e);const m=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};i&&i(m.root);let p=!1;if(m.ctx=s?s(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&l(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),p&&F(e,t)),n})):[],m.update(),p=!0,o(m.before_update),m.fragment=!!c&&c(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(a)}else m.fragment&&m.fragment.c();r.intro&&S(e.$$.fragment),R(e,r.target,r.anchor,r.customElement),M()}h(d)}class T{$destroy(){j(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function B(e){let n,o,r,s;return{c(){n=u("link"),o=u("link"),r=u("link"),s=u("link"),d(n,"rel","preconnect"),d(n,"href","https://fonts.googleapis.com"),d(o,"rel","preconnect"),d(o,"href","https://fonts.gstatic.com"),d(o,"crossorigin",""),d(r,"href","https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500&family=Roboto&family=Source+Sans+Pro:wght@600&display=swap"),d(r,"rel","stylesheet"),d(s,"rel","icon"),d(s,"type","image/png"),d(s,"href","/iconF.png"),document.title="FREECONOMIC"},m(t,e){c(document.head,n),c(document.head,o),c(document.head,r),c(document.head,s)},p:t,i:t,o:t,d(t){a(n),a(o),a(r),a(s)}}}class D extends T{constructor(t){super(),P(this,t,null,B,s,{})}}function H(e){let n;return{c(){n=u("header"),n.innerHTML='<h1 class="svelte-17dr95g">FREECONOMIC</h1>',d(n,"class","svelte-17dr95g")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}class I extends T{constructor(t){super(),P(this,t,null,H,s,{})}}function L(e){let n,o,r,s,$,h,g,b,y,v,x,_,w,C,k,M,E;return{c(){n=u("div"),o=u("h2"),r=i(e[0]),s=f(),$=u("article"),h=u("span"),g=i(e[2]),b=u("br"),y=f(),v=u("button"),v.textContent="Comprar",x=f(),_=u("article"),w=u("span"),C=i(e[3]),k=u("br"),M=f(),E=u("button"),E.textContent="Vender",d(o,"class","svelte-bbcttd"),p(o,"color",e[1],!1),d(h,"class","svelte-bbcttd"),d(v,"class","self-buy svelte-bbcttd"),d($,"class","svelte-bbcttd"),d(w,"class","svelte-bbcttd"),d(E,"class","self-sell svelte-bbcttd"),d(_,"class","svelte-bbcttd"),d(n,"class","svelte-bbcttd"),p(n,"border-color",e[1],!1)},m(t,e){l(t,n,e),c(n,o),c(o,r),c(n,s),c(n,$),c($,h),c(h,g),c($,b),c($,y),c($,v),c(n,x),c(n,_),c(_,w),c(w,C),c(_,k),c(_,M),c(_,E)},p(t,[e]){1&e&&m(r,t[0]),2&e&&p(o,"color",t[1],!1),4&e&&m(g,t[2]),8&e&&m(C,t[3]),2&e&&p(n,"border-color",t[1],!1)},i:t,o:t,d(t){t&&a(n)}}}function U(t,e,n){let{nameMon:o}=e,{nameColor:r}=e,{buy:s}=e,{sell:c}=e;return t.$$set=t=>{"nameMon"in t&&n(0,o=t.nameMon),"nameColor"in t&&n(1,r=t.nameColor),"buy"in t&&n(2,s=t.buy),"sell"in t&&n(3,c=t.sell)},[o,r,s,c]}class V extends T{constructor(t){super(),P(this,t,U,L,s,{nameMon:0,nameColor:1,buy:2,sell:3})}}function q(t){let e,n,o,r,s,i,m;return r=new V({props:{nameMon:"Dolar Blue",nameColor:"darkblue",buy:t[1],sell:t[0]}}),i=new V({props:{nameMon:"Bitcoin",nameColor:"yellow",buy:t[3],sell:t[2]}}),{c(){e=u("article"),n=u("h2"),n.innerHTML="Compra y Vende<br/>Facil y Rapido",o=f(),N(r.$$.fragment),s=f(),N(i.$$.fragment),d(n,"class","svelte-1o42mp2"),d(e,"class","svelte-1o42mp2")},m(t,a){l(t,e,a),c(e,n),c(e,o),R(r,e,null),c(e,s),R(i,e,null),m=!0},p(t,[e]){const n={};2&e&&(n.buy=t[1]),1&e&&(n.sell=t[0]),r.$set(n);const o={};8&e&&(o.buy=t[3]),4&e&&(o.sell=t[2]),i.$set(o)},i(t){m||(S(r.$$.fragment,t),S(i.$$.fragment,t),m=!0)},o(t){A(r.$$.fragment,t),A(i.$$.fragment,t),m=!1},d(t){t&&a(e),j(r),j(i)}}}function z(t,e,n){let o,r,s,c;return(async()=>{const t=await fetch("https://api.bluelytics.com.ar/v2/latest");return await t.json()})().then((({blue:t})=>{n(0,o=t.value_sell+" ARS"),n(1,r=t.value_buy+" ARS")})),(async()=>{const t=await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=btc%2Cusd");return await t.json()})().then((({bitcoin:{usd:t}})=>{n(3,c=t+" U$D"),n(2,s=t+500+" U$D")})),[o,r,s,c]}class G extends T{constructor(t){super(),P(this,t,z,q,s,{})}}function J(e){let n,o,r;return o=new G({}),{c(){n=u("section"),N(o.$$.fragment)},m(t,e){l(t,n,e),R(o,n,null),r=!0},p:t,i(t){r||(S(o.$$.fragment,t),r=!0)},o(t){A(o.$$.fragment,t),r=!1},d(t){t&&a(n),j(o)}}}class K extends T{constructor(t){super(),P(this,t,null,J,s,{})}}function Q(e){let n,o,r,s,i,d,m;return o=new D({}),s=new I({}),d=new K({}),{c(){n=u("main"),N(o.$$.fragment),r=f(),N(s.$$.fragment),i=f(),N(d.$$.fragment)},m(t,e){l(t,n,e),R(o,n,null),c(n,r),R(s,n,null),c(n,i),R(d,n,null),m=!0},p:t,i(t){m||(S(o.$$.fragment,t),S(s.$$.fragment,t),S(d.$$.fragment,t),m=!0)},o(t){A(o.$$.fragment,t),A(s.$$.fragment,t),A(d.$$.fragment,t),m=!1},d(t){t&&a(n),j(o),j(s),j(d)}}}new class extends T{constructor(t){super(),P(this,t,null,Q,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
