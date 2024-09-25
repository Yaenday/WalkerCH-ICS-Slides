import{o as m,c as o,k as i,e as s,aa as a,q as p,s as r,B as l}from"./modules/vue-DgXCRfWC.js";import{I as c}from"./slidev/default-Hl8NTjjg.js";import{u,f as h}from"./slidev/context-C5LkTWr1.js";import"./index-sVsAd-eY.js";import"./modules/shiki-hNccAHD9.js";const x={__name:"W2-Data Representation-TA.md__slidev_23",setup(d){const{$slidev:g,$nav:k,$clicksContext:n,$clicks:w,$page:y,$renderContext:M,$frontmatter:e}=u();return n.setup(),(_,t)=>(m(),o(c,p(r(l(h)(l(e),22))),{default:i(()=>t[0]||(t[0]=[s("h1",null,"乘除法",-1),s("p",null,"multiplication and division",-1),s("p",null,"特别注意：除法这里以二的幂次作为除数，也只有此时可以采用右移来取巧。",-1),s("h3",null,"无符号数除法",-1),s("p",null,[a("无符号数 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"u")]),s("annotation",{encoding:"application/x-tex"},"u")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"u")])])]),a(" 除以 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mi",null,"k")])]),s("annotation",{encoding:"application/x-tex"},"2^k")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8491em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8491em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k")])])])])])])])])])]),a("：将 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"u")]),s("annotation",{encoding:"application/x-tex"},"u")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"u")])])]),a(),s("strong",{class:"text-yellow-5"},"逻辑右移"),a(),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"k")]),s("annotation",{encoding:"application/x-tex"},"k")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k")])])]),a(" 位")],-1),s("p",null,"（此时恰好就是舍入到 0 的）",-1),s("h3",{class:"mt-6 mb-1"},"有符号数除法",-1),s("p",null,[a("直接右移 "),s("code",null,"x >> k"),a(" 得到的是 "),s("strong",{class:"text-yellow-5"},"向下舍入"),a(" 的结果，而不是正常来讲的向 0 取整。")],-1),s("p",null,[a("例如："),s("code",null,"-3 / 2 = -1"),a("，而 "),s("code",null,"-3 >> 1 = -2")],-1),s("p",null,[a("向 0 取整："),s("code",null,"(x < 0) ? (x + (1 << k) - 1 : x) >> k")],-1),s("p",null,"证明见书 P73",-1)])),_:1},16))}},z=x;export{z as default};
