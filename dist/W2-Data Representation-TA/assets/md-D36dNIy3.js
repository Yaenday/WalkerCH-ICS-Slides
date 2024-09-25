import{_ as g}from"./slidev/KaTexBlockWrapper.vue_vue_type_script_setup_true_lang-DElueWn9.js";import{_ as h}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DV76dI9n.js";import{o,c as u,k as l,e as s,aa as t,l as n,m as e,q as d,s as y,B as i}from"./modules/vue-DgXCRfWC.js";import{I as v}from"./slidev/default-Hl8NTjjg.js";import{u as b,f as x}from"./slidev/context-C5LkTWr1.js";import"./index-sVsAd-eY.js";import"./modules/shiki-hNccAHD9.js";import"./modules/unplugin-icons-D2JuiHzE.js";const k={grid:"~ cols-2 gap-12"},f={__name:"W2-Data Representation-TA.md__slidev_28",setup(w){const{$slidev:z,$nav:_,$clicksContext:p,$clicks:M,$page:$,$renderContext:B,$frontmatter:r}=b();return p.setup(),(E,a)=>{const c=h,m=g;return o(),u(v,d(y(i(x)(i(r),27))),{default:l(()=>[a[4]||(a[4]=s("h1",null,"理解 IEEE 754",-1)),a[5]||(a[5]=s("p",null,"underlying IEEE 754",-1)),a[6]||(a[6]=s("h3",null,"平滑过渡",-1)),a[7]||(a[7]=s("p",null,[t("考虑某一进制，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"e"),s("mo",null,"="),s("mn",null,"2")]),s("annotation",{encoding:"application/x-tex"},"e=2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"e"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2")])])]),t("，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"m"),s("mo",null,"="),s("mn",null,"3")]),s("annotation",{encoding:"application/x-tex"},"m=3")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"m"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"3")])])]),t("（考试的时候可能就会考改变进制的题哦！）")],-1)),s("div",k,[s("div",null,[n(c,e({},{ranges:[]}),{default:l(()=>a[0]||(a[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"0 01 000")]),t(`
`),s("span",{class:"line"},[s("span")]),t(`
`),s("span",{class:"line"},[s("span",null,"0 00 111")])])],-1)])),_:1},16)]),s("div",null,[n(m,e({},{ranges:[]}),{default:l(()=>a[1]||(a[1]=[s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"B"),s("mi",null,"i"),s("mi",null,"a"),s("mi",null,"s"),s("mo",null,"="),s("msup",null,[s("mn",null,"2"),s("mrow",null,[s("mi",null,"e"),s("mo",null,"−"),s("mn",null,"1")])]),s("mo",null,"−"),s("mn",null,"1"),s("mo",null,"="),s("msup",null,[s("mn",null,"2"),s("mrow",null,[s("mn",null,"2"),s("mo",null,"−"),s("mn",null,"1")])]),s("mo",null,"−"),s("mn",null,"1"),s("mo",null,"="),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"Bias = 2^{e-1} - 1 = 2^{2-1} - 1 = 1 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6833em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05017em"}},"B"),s("span",{class:"mord mathnormal"},"ia"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9474em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"e"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},"1")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9474em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},"1")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])])],-1)])),_:1},16),n(m,e({},{ranges:[]}),{default:l(()=>a[2]||(a[2]=[s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1.00"),s("msub",null,[s("mn",null,"0"),s("mn",null,"2")]),s("mo",null,"×"),s("msup",null,[s("mn",null,"2"),s("mrow",null,[s("mn",null,"0"),s("msub",null,[s("mn",null,"1"),s("mn",null,"2")]),s("mo",null,"−"),s("mn",null,"1")])]),s("mo",null,"="),s("mn",null,"1.00"),s("msub",null,[s("mn",null,"0"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"1.000_2 \\times 2^{01_2 - 1} = 1.000_2 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7944em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},"1.00"),s("span",{class:"mord"},[s("span",{class:"mord"},"0"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8641em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"0"),s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3173em"}},[s("span",{style:{top:"-2.357em","margin-left":"0em","margin-right":"0.0714em"}},[s("span",{class:"pstrut",style:{height:"2.5em"}}),s("span",{class:"sizing reset-size3 size1 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.143em"}},[s("span")])])])])]),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},"1")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7944em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},"1.00"),s("span",{class:"mord"},[s("span",{class:"mord"},"0"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])])])],-1)])),_:1},16),n(m,e({},{ranges:[]}),{default:l(()=>a[3]||(a[3]=[s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mn",null,"0.11"),s("msub",null,[s("mn",null,"1"),s("mn",null,"2")]),s("mo",null,"×"),s("msup",null,[s("mn",null,"2"),s("mrow",null,[s("mn",null,"1"),s("mo",null,"−"),s("mn",null,"1")])]),s("mo",null,"="),s("mn",null,"0.11"),s("msub",null,[s("mn",null,"1"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"0.111_2 \\times 2^{1 - 1} = 0.111_2 ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7944em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},"0.11"),s("span",{class:"mord"},[s("span",{class:"mord"},"1"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8641em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},"1")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7944em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},"0.11"),s("span",{class:"mord"},[s("span",{class:"mord"},"1"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])])])],-1)])),_:1},16)])])]),_:1},16)}}},R=f;export{R as default};
