---
# You can also start simply with 'default'
theme: academic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
highlighter: shiki
# some information about your slides (markdown enabled)
title: 02-Data Representation
info: |
  ICS 2024 Fall Slides
  Presented by WalkerCH
titleTemplate: '%s'
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: fade-out
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# download: true
layout: cover
coverBackgroundUrl: ./res/image/slides.assets/cover.jpg
---

# 数据表示 {.font-bold}

<p class="text-gray-200">
<font size = '5'>
  13 元培数科 常欣海
</font>
</p>

<div class="pt-12  text-gray-1">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Here we go! <carbon:arrow-right class="inline"/>
  </span>
</div>


<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/Yaenday/WalkerCH-ICS-Slides
  " target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<style>
  div{
   @apply text-gray-2;
  }
</style>

<!-- ---

# 目录

<Toc columns="3" minDepth="1"></Toc> -->

---
layout: image-right

image: ./res/image/slides.assets/convert.jpg[]()

backgroundSize: 25em 80%
---

# 基本概念

basic concepts

**位（bit）**：数据存储的最小单位

**字节（Byte）**：最小的可寻址的存储器单位，1 Byte = 8 bits

### 十六进制{.mt-8.mb-4}

- `0x` 开头
- `0~9，A~F`，不区分大小写
- 一个字节的值域是 $\text{00}_{16}$ ~ $\text{FF}_{16}$

```asm
0xA = 10 = 1010
0xC = 12 = 1100
0xE = 14 = 1110
```

\*需要熟练掌握进制转换{.text-sm}

---

# 基本概念

basic concepts

**字长（word size）**：决定虚拟地址空间的最大大小

- 对于一个字长为 $w$ 位的机器而言，虚拟地址的范围为 $0\sim2^{w-1}$， 程序最多访问 $2^w$ 个字节
- 为什么？我们需要计算机去寻址，从而需要用 $w$ 位二进制数去表示地址，所以地址的个数就是 $2^w$，所以程序最多访问 $2^w$ 个字节

### 字节顺序{.mt-8.mb-4}

- 小端序（little endian）：最低有效字节在最前面
- 大端序（big endian）：最高有效字节在最前面

**一定要先想清楚字节是怎么排序的（那边是小地址那边是高地址），再去辨析大端/小端序**

**字节是一个整体，不会说字节内部是按照小端序还是大端序排列**

---

# 字节顺序

byte order

同样是表示 `0x12345678`，在不同的机器上，内存中的存储可能是：

- 小端序：（低地址）`0x78 0x56 0x34 0x12`（高地址）
- 大端序：（低地址）`0x12 0x34 0x56 0x78`（高地址）

**看到了吗，字节内部顺序是固定的，和大端序小端序无关！**

一定要在脑子里明确知道，所谓内存，就是一系列连续的字节。无论你是现在初学的一维线性模型，还是后面做 lab 时会考虑到的二维模型，首先都要明确那边是低地址那边是高地址。

### 应用{.mt-8.mb-4}

- 现今，大多数计算机都采用 **小端序**。
- 网络通讯中，一般采用 **大端序**。

---
layout: two-cols-header
---

# 字节顺序

byte order

::left::

在这张图中，显示了一个内存的排布顺序。

- 同一行中，地址连续，越靠近右侧地址越小
- 同一列中，地址不连续，越靠近下方地址越小
- 也就是说，呈现出了一个 Z 字形

未来，你们可能会见识到各种内存排布方式，但无论如何，都要先搞清楚内存的排布方式，再去辨析大端序小端序。

<div class="mr-4">

```
全部内存 - 一块连续的内存空间（指令/数据） - 大端序/小端序 - 字节
```

</div>

当讨论的这个一块内存空间只有 1 个字节（例如：一个 `char` 类型）时，我们还需要考虑大端序小端序吗？NO!

::right::

![mem](./res/image/slides.assets/mem.svg){.mx-auto}

---

# 布尔运算

boolean operation

<div grid="~ cols-2 gap-12">

<div>

| `~`(not) 非 |     |
| ----------- | --- |
| 0           | 1   |
| 1           | 0   |

</div>

<div>


| `&`(and)  与 | 0   | 1   |
| ------------ | --- | --- |
| 0            | 0   | 0   |
| 1            | 0   | 1   |

</div>

<div>

| `\|`(or) 或 | 0   | 1   |
| ----------- | --- | --- |
| 0           | 0   | 1   |
| 1           | 1   | 1   |

</div>

<div>

| `^` (eor)  异或 | 0   | 1   |
| --------------- | --- | --- |
| 0               | 0   | 1   |
| 1               | 1   | 0   |
</div>

</div>

---

# 逻辑运算

logical operation

- 逻辑运算符：`&&`(and，与)、`||`(or，或)、`!`(not，非)
- 逻辑运算符的运算结果只有两种：`true` 和 `false`

**注意与位运算区分！逻辑运算具有短路特性，位运算没有！**

#### 短路特性{.mt-6.mb-2}

- `&&`：前一个表达式为假时，后一个表达式不执行，因为无论后一个表达式是什么，结果都是假
- `||`：前一个表达式为真时，后一个表达式不执行，因为无论后一个表达式是什么，结果都是真

也即：如果对第一个参数求值能确定表达式的结果，那么逻辑运算符不会对第二个参数求值

Q：为什么 `p && *p++` 不会引用空指针？（注意这里也有短路特性）

A：因为 `&&` 运算符的短路特性，当 `p` 为空指针时（对应其数字表达为 `0x00000000`，或者说是 `NULL`），`*p` 不会被执行，所以不会出现引用空指针的情况。


---
layout: image-right

image: ./res/image/slides.assets/logical_operation.png

backgroundSize: 25em 80%
---
# 位移

bit shift

- 左移：`<<`
- 右移：`>>`

#### 逻辑右移 / 算术右移{.mt-6.mb-2.font-bold}


<div>

- 逻辑右移：左边补 0
- 算术右移：左边补 最高位（思考：为什么？）
- 逻辑左移 / 算术左移：右边补 0
</div>


C 语言：有符号数算术右移, 无符号数逻辑右移

运算时，需要注意运算符优先级 <span class="text-sm">（如果记不住就全加上括号！）</span>



---

# 整数表示
<!-- 图片居中 -->

<div style="text-align: center;">
  <img src="./res/image/slides.assets/integer.png" alt="integer" style="width: 60%; display: block; margin: 0 auto;" />
</div>

---

# 整数编码

integer encoding

<div grid="~ cols-2 gap-12">

<div>


### 无符号数

对向量 $x = [x_{w-1}, x_{w-2}, ..., x_0]$：

$$
\text{B2U}_w(x) = \sum_{i=0}^{w-1}(x_i \times 2^i)
$$

- $\text{B2U}_w$ 表示把二进制编码转化为非负整数
  <br>
  <span class="text-sm">（Binary to Unsigned）</span>  

  该函数是双射，即无符号数编码具有唯一性

- $\text{UMax}_w = 2^w - 1$

</div>

<div>

### 有符号数

对向量 $x = [x_{w-1}, x_{w-2}, ..., x_0]$：

$$
\text{B2T}_w(x) = - x_{w-1} \times 2^{w-1} + \sum_{i=0}^{w-2}(x_i \times 2^i) 
$$

- $\text{B2T}_w$ 表示把二进制编码转化为补码
  <br>
  <span class="text-sm">（Binary to Two's Complement）</span>

- 当最高位为 1，整个数表示为一个负数
- 同样具有唯一性

</div>

</div>

---

# 整数编码

integer encoding


对于有符号数，取值范围是不对称的，典型例子 int：

- $\text{TMax}_{32} = 2147483647$
- $\text{TMin}_{32} = -2147483648$

<span class="text-sm">为什么？</span>

---

# 数据的其他表示

other representations

- **补码**：上下文无关——同构环
  $$
  B2T_w(\vec{x})=-x_{w-1}2^{w-1}+\sum^{w-2}_{i=0}x_i2^i
  $$

- **反码**：$0$ 的表示有两种：$000...0$ 和 $111...1$
  $$
  B2O_w(\vec{x})=-x_{w-1}(2^{w-1}-1)+\sum^{w-2}_{i=0}x_i2^i
  $$

- **原码**：最高位是符号位用来确定剩下的是正数还是负数（e.g.浮点数）
  $$
  B2S_w(\vec{x})=(-1)^{x_{w-1}}\cdot \sum^{w-2}_{i=0}x_i2^i
  $$

---

# 有符号数与无符号数之间的转换

conversion between signed and unsigned

强制类型转换保持位值不变，**只改变解释这些位的方式**

<div grid="~ cols-2 gap-12">

<div>

### 补码→无符号数

对满足 $\text{TMin}_w \leq x \leq \text{TMax}_w$ 的 $x$ 来说：

- 若 $\text{TMin}_w \leq x < 0$，则 $\text{T2U}(x) = x + 2^w$
- 若 $0 \leq x \leq \text{TMax}_w$，则 $\text{T2U}(x) = x$

<br>

> 对于负数，最高位“翻转了阵营”，从补码的代表的 $-2^{w-1}$ 变成了 $+2^{w-1}$

</div>

<div>
  
### 无符号数→补码

对满足 $0 \leq x \leq \text{UMax}_w$ 的 $x$ 来说：

- 若 $x > \text{TMax}_w$，则 $\text{U2T}(x) = x - 2^w$
- 若 $0 \leq x \leq \text{TMax}_w$ 则 $\text{U2T}(x) = x$

<br>

> 当一个无符号数与一个有符号数进行计算时，有符号数在这个表达式中会被当做无符号数（即发生了隐式的强制类型转换）
>  
> **例如** ：`-1 > 0u` 此为无符号的比较

<span class="text-sm">（-1 在计算机中表示为全 1，即 $\text{UMax}_w$，而 0u 表示为全 0 的无符号数）</span>

</div>

</div>

---

# 有符号数与无符号数之间的转换

conversion between signed and unsigned

![T2U&U2T](./res/image/slides.assets/T2U&U2T.png)


---

# 扩展和截断

extension and truncation

### 扩展一个数{.mb-2}

- 对于无符号数，高位补 0
- 对于有符号数（补码），高位补符号位

当把 short（有符号数，2 字节）强制转换为 unsigned（无符号数，4 字节）时？

**先进行数位扩展，再转换为无符号数**{.text-sky-5}

#### 为什么对于有符号数，高位补符号位？{.mt-6.mb-2}

<div grid="~ cols-2 gap-12">

<div>

Hint：消消乐！

- 若最高位为 0，显然；
- 若最高位为 1，则你补的一堆 1 和原先的 1 等价

</div>

<div>

设现在位数为 $m$，补到 $n$ 位，且 $n > m$，则：

$$
-2^{n-1} + \sum_{i=m-1}^{n-2}2^i = -2^{m-1}
$$

</div>

</div>

---

# 扩展和截断

extension and truncation

### 截断一个数{.mt-6.mb-2}

- 对于无符号数 $x = [x_{w-1}, ..., x_0]$，截断为 $w'$ 位，则 $x' = [x_{w'-1}, ..., x_0]$
  
  即 $x' = x \mod 2^k$

- 补码截断，原理上与无符号数类似，但对于数位的解释方式不同

---

# 整数加减法

integer addition and subtraction

### 无符号数加法

由于两个 $w$ 位的无符号数相加，结果的范围是 $[0, 2^{w+1}-2]$，而这需要 $w+1$ 位来表示，所以实际上：

结果表示 $x+y$ 的低 $w$ 位，也即 $x + y \mod 2^w$

- 当 $x + y < 2^w$ 时，结果正确；
- 当 $x + y \geq 2^w$ 时，$x + y$ 的结果需要减去 $2^w$，才会得到实际结果，即 $x + y - 2^w$，这就是 **溢出**

![overflow](./res/image/slides.assets/overflow.png){.h-180px}

---

# 整数加减法

integer addition and subtraction

### 有符号数加法

由于两个 $w$ 位的有符号数相加，结果的范围是 $[-2^w, 2^{w}-2]$，所以实际上：

- 若 $-2^{w-1} \leq x + y < 2^{w-1}$，结果正确；
- 若 $x + y \geq 2^{w-1}$，结果需要减去 $2^w$，才会得到实际结果，即 $x + y - 2^w$，此时称为 **正溢出/上溢出**
- 若 $x + y < -2^{w-1}$，结果需要加上 $2^w$，才会得到实际结果，即 $x + y + 2^w$，此时称为 **负溢出/下溢出**

![signed_overflow](./res/image/slides.assets/signed_overflow.png){.h-200px}


---

# 判断溢出

determine overflow

### 无符号数加法

- $s = x + y$，若 $s < x$ 或 $s < y$ 则溢出

<br>

### 有符号数加法

<div grid="~ cols-2 gap-12">

<div>

- $s = x + y$，若 $x > 0$ 且 $y > 0$ 且 $s \leq 0$，则正溢出；
- 若 $x < 0$ 且 $y < 0$ 且 $s \geq 0$，则负溢出


为什么只有这两种情况？

</div>

<div>

![signed_overflow](./res/image/slides.assets/signed_overflow.png){.h-250px}

</div>

</div>

---

# 判断溢出

determine overflow

关于整数加减法/溢出的一个有趣事实：这里的加法是个 **环**（阿贝尔群）！

无论你怎么改变次序，它总是可以轮换回来~

这是一个做题很方便的技巧！


- **补码的非**（加法逆元）：

  - 数学公式
    $$
    -^t_wx
    =\left\{
    \begin{aligned}
    &TMin_w &x=TMin_w\\ 
    &-x &x>TMin_w
    \end{aligned}
    \right.
    $$
    
  - 计算机实现(位级表示)
    $$
    -x=\sim x+1\\ \ because: \ x+(-x)=^u_w2^w
    $$
  
  

<!-- 
<div grid="~ cols-2 gap-12">

<div>

#### 证明： `~x + 1 = -x` (`x != TMin`)

证：

$$
\begin{aligned}
\sim x + 1 &= -x \\
\sim x + x &= -1 \\
\end{aligned}
$$


</div>

<div>

#### 证明： $\text{TMax} + 1 = \text{TMin}$

证：想想消消乐

$$
\begin{aligned}
0111...1111 + 1 = 1000...0000
\end{aligned}
$$

</div>

</div> -->

---

# 补码的非运算

two's complement negation

对满足 $\text{TMin}_w \leq x \leq \text{TMax}_w$ 的 $x$ 来说：

- 若 $x = \text{TMin}_w$，则 $-x = \text{TMin}_w$
- 否则，$-x = -x$（算术上的）

注：这里式子左边的 $-x$ 是 **算数逆元**

- 对于 $x \neq \text{TMin}_w$ 时，本身 $-x$ 也在表示范围内，结论是平凡的
- 对于 $x = \text{TMin}_w$ 时，$-x$ 不在表示范围内。
  
  但是，两个 $\text{TMin}_w$ 相加，溢出到了上一位，结果是 0，所以此时我们说 $\text{TMin}_w$ 的算数逆元就是它自身

回忆：刚才说的 `~x + 1 = -x`
---

# 乘除法

multiplication and division

### 无符号数乘法

等于乘法计算得到的结果（一个 $2w$ 位长的数），而后截断到 $w$ 位

### 补码乘法{.mt-6.mb-2}

等于有符号数乘法后得到的结果（一个 $2w$ 位长的数），无符号截断到 $w$ 位，而后将最高位转化为符号位

**核心：粗暴的位级表示截断**

### 乘以二的幂次{.mt-6.mb-2}

此时，**相当于左移**{.text-yellow-5}



---

# 乘除法

multiplication and division

特别注意：除法这里以二的幂次作为除数，也只有此时可以采用右移来取巧。

### 无符号数除法

无符号数 $u$ 除以 $2^k$：将 $u$ **逻辑右移**{.text-yellow-5} $k$ 位

（此时恰好就是舍入到 0 的）

### 有符号数除法{.mt-6.mb-1}

直接右移 `x >> k` 得到的是 **向下舍入**{.text-yellow-5} 的结果，而不是正常来讲的向 0 取整。

例如：`-3 / 2 = -1`，而 `-3 >> 1 = -2`

向 0 取整：`(x < 0) ? (x + (1 << k) - 1 : x) >> k`

证明见书 P73

---

# 浮点数表示

floating point

### IEEE 754 标准

本质是对实数的近似

<div grid="~ cols-2 gap-12">

<div>

- 符号位：1 位
- 指数位：$e$ 位
- 尾数位：$m$ 位

实际表示：

- 单精度浮点数（`float`）: $e = 8, {~} m = 23$
- 双精度浮点数（`double`）: $e = 11, {~} m = 52$

各个位长多少要牢牢记清楚！考试会考！

<span class="text-sm">注意，0 的表示有两种，+0 和 -0</span>

</div>

<div>

![IEEE 754](./res/image/slides.assets/IEEE.png)

</div>

</div>


---

# 理解 IEEE 754

underlying IEEE 754

<div grid="~ cols-2 gap-12">

<div>

### 规格化值

$$
V = (-1)^s \times (1.M) \times 2^E
$$

- $s$ 为符号位，$M$ 为尾数，$E$ 为阶码
- $E = [e] - Bias$，其中 $[e]$ 为阶码处这 $e$ 位的实际值，$Bias = 2^{e-1} - 1$
- 尾数隐含的 1（Implied leading 1），可以获得 1 位额外精度

</div>

<div>

### 非规格化值

$$
V = (-1)^s \times (0.M) \times 2^{1 - Bias}
$$

- $E = 1 - Bias$，虽然此时 $[e] = 0$，但如此规定可以实现规格化值和非规格化值的平滑过渡
- 尾数没有隐含的 1

</div>

</div>

<br/>

非规格化值的看似反直觉的定义实现了**规格化值和非规格化值的平滑过渡**


---

# 理解 IEEE 754

underlying IEEE 754



$$
V=(-1)^s\times 2^E\times M
$$

$$
偏置:Bisa=2^{k-1}-1\\
指数：E=e-Bias
$$



### 特殊值
<br/>

- 最小的非规格化数 $not_{min}=2^{1-Bias}*2^{-n}=2^{2-2^{k-1}}*2^{-n}=2^{2-2^{k-1}-n}$
- 最大的规格化数 $not_{max}=2^{1-Bias}*(1-2^{-n})=2^{2-2^{k-1}}*(1-2^{-n})$
- 最小的规格化数 $yes_{min}=2^{1-Bias}*(1)=2^{2-2^{k-1}}$
- 最大的规格化数 $yes_{max}=2^{(2^k-1)-Bias-1}*(2-2^{-n})=2^{2^{k-1}-1}*(2-2^{-n})$

---

# 理解 IEEE 754

underlying IEEE 754

<div grid="~ cols-2 gap-12">

<div>

### 无穷（$\pm \infty$）

- 符号位 $s$ 区分正无穷/负无穷
- 阶码 $[e] = 1...1$（全1），尾数 $M = 0$
- 表示无穷大，在计算中可以用于表示溢出或未定义的结果

</div>

<div>

### 非数值 (NaN，Not a Number)

- 符号位 $s$ 任意，阶码 $[e] = 1...1$（全1），尾数 $M \ne 0$
- NaN 用于表示未定义或无法表示的值，例如 $0/0$ 或 $\sqrt{-1}$
- 通常在比较中被认为不等于任何值，包括自身{.text-yellow-5}

</div>


<div>

### 零

- 符号位 $s$ 任意，阶码 $[e] = 0...0$（全0），尾数 $M = 0$

</div>

<div>

### 特殊值的应用

- 处理异常情况：如除零错误、溢出、下溢等
- 提高计算的鲁棒性，避免程序崩溃
- 在数值算法中用于标记和处理特殊情况

</div>

</div>

<!-- <div grid="~ cols-2 gap-12">

<div>

### 特殊值



</div>

<div>

</div>

</div> -->

---

# 理解 IEEE 754

underlying IEEE 754

### 平滑过渡

考虑某一进制，$e=2$，$m=3$（考试的时候可能就会考改变进制的题哦！）


<div grid="~ cols-2 gap-12">

<div>


```
0 01 000

0 00 111
```

</div>

<div>

$$
Bias = 2^{e-1} - 1 = 2^{2-1} - 1 = 1
$$

$$
1.000_2 \times 2^{01_2 - 1} = 1.000_2
$$

$$
0.111_2 \times 2^{1 - 1} = 0.111_2
$$

</div>

</div>

---

# 浮点舍入

rounding

由于浮点数是对实数的近似，浮点数可以精确表示的实数是有限的，所以舍入是不可避免的。

### 实数舍入到浮点数

- **向偶数舍入（round-to-even）（round-to-nearest）**
- 类比“四舍六入五成双”，**避免统计偏差**

$$
1.234 \Rightarrow 1.0 \\
1.678 \Rightarrow 2.0 \\
1.500 \Rightarrow 2.0
$$

\* 实际上，这一过程发生在浮点数精度最末位

### 浮点数转整型{.mt-6}

- 如果舍入，向零舍入
- 如果溢出，C 语言未规定（undefined behavior），各自处理（Intel：$T_{\text{min}}^w$，即舍入到限定最接近的数）



---


# 浮点类型转换

- 舍入规则
  - 一般情况看舍入位，0 舍 1 入
  - 类似“四舍六入五成双”，若舍入位为 1 且后续位全 0，向偶舍入
- int/float/double 互转
  - int 转 float
    - 可能发生舍入
  - double 转 float
    - 可能溢出，可能舍入
  - float/double 转 int
    - 如果需要舍入，向零舍入
    - 如果发生溢出，未定义行为，一般得到 Tmin
  - 其余情况，得到精确值
- 和 long 之间的转换类似，但需另作讨论


---

# 浮点运算

floating point arithmetic

- 加法可交换，加法不可结合，`NaN`没有加法逆元
- **浮点加法单调性**，如果 $a \ge b$，那么对于任何 $a$，$b$ 以及 $x$ 的值，除了 `NaN` 都有 $x + a \ge x + b$
- 乘法可交换，乘法不可结合，乘法在加法上不可分配
- 小心特殊值：`+inf`，`-inf`，`NaN` (NaN 不能通过任何运算变为其它值)

<span class="text-sm text-gray-500">* 这些东西说了没用，得你自己做题踩坑才会知道。</span>



- Invalid operation：零乘无穷、零除零、无穷除无穷、无穷绝对值相减......
- Division by zero：有穷数除零结果为无穷
- Overflow：无穷
- Underflow：舍入结果
- Inexact：舍入结果

更多详情请见 [IEEE754](https://en.wikipedia.org/wiki/IEEE_754) 异常处理

---

# 浮点运算

floating point arithmetic

<div style="text-align: center;">
  <img src="./res/image/slides.assets/floating.png" alt="floating" style="width: 100%; display: block; margin: 0 auto;" />
</div>

---

# 学习方法

<div grid="~ cols-2 gap-12">

<div>

## 使用 AI

<div style="text-align: center;">
  <img src="./res/image/slides.assets/use_gpt1.png" alt="use_gpt1" style="width: 90%; display: block; margin: 0 auto;" />
</div>

</div>

<div>

## 手敲代码
<br/>

<div style="text-align: center;">
  <img src="./res/image/slides.assets/use_code.png" alt="use_code" style="width: 90%; display: block; margin: 0 auto;" />
</div>

</div>

</div>


---

# 作业讲评

## P88 2.59, 2.60
<br/>

<div style="text-align: center;">
  <img src="./res/image/slides.assets/HW1.png" alt="HW1" style="width: 90%; display: block; margin: 0 auto;" />
</div>

根据题目给出的示例，这里认为使用32位机器，一个字大小为4字节。

```c
unsigned concat_byte(unsigned x, unsigned y){
    return (x & 0xFF) | (y & 0xFFFFFF00);
}
```

---

# 作业讲评

## P88 2.59, 2.60
<br/>

<div style="text-align: center;">
  <img src="./res/image/slides.assets/HW1.png" alt="HW1" style="width: 90%; display: block; margin: 0 auto;" />
</div>

<br/>

```c
unsigned replace_byte(unsigned x, int i, unsigned char b)
{
    unsigned mask = 0xFF << (i * 8);
    unsigned shifted_byte = b << (i * 8);
    return (x & ~mask) | shifted_byte;
}
```

---

# 作业讲评

## P91 2.71
<br/>

<div style="text-align: center;">
  <img src="./res/image/slides.assets/HW2.png" alt="HW2" style="width: 80%; display: block; margin: 0 auto;" />
</div>

---

# 作业讲评

## P91 2.71
<br/>

**A** : 这段代码错在，当获取的`unsigned int`字节的最高位上为1的时候，转换后的`int`应为负数，但这一算法得到的结果却是正数。

**B** :
```c
int xbyte(packed_t word, int bytenum) {
    // 先将word左移，使word最高位上是所要提取byte的最高位
    int shifted = (int)(word << ((3 - bytenum) << 3));
    // 再执行右移运算，高位自动填入1或0，实现正负
    return shifted >> 24; 
}
``` 

---

# 作业讲评

## P93 2.86
<br/>

<div style="text-align: center;">
  <img src="./res/image/slides.assets/HW3.png" alt="HW2" style="width: 65%; display: block; margin: 0 auto;" />
</div>

---

# 作业讲评

## P93 2.86
<br/>

<div style="text-align: center;">
  <img src="./res/image/slides.assets/ans1.png" alt="ans1" style="width: 100%; display: block; margin: 0 auto;" />
</div>

---

# 作业讲评

## P94 2.87
<br/>

<div style="text-align: center;">
  <img src="./res/image/slides.assets/HW4.png" alt="HW2" style="width: 55%; display: block; margin: 0 auto;" />
</div>

---

# 作业讲评

## P94 2.87
<br/>

<div style="text-align: center;">
  <img src="./res/image/slides.assets/ans2.png" alt="ans2" style="width: 80%; display: block; margin: 0 auto;" />
</div>



---

# 习题试炼 1
<br/>

<div style="text-align: center;">
  <img src="./res/image/slides.assets/pic1.png"  style="width: 90%; display: block; margin: 0 auto;" />
</div>


---

# 习题试炼 1
<br/>

<div style="text-align: center;">
  <img src="./res/image/slides.assets/a1.png"  style="width: 90%; display: block; margin: 0 auto;" />
</div>


---

# 习题试炼 2
<br/>

<div style="text-align: center;">
  <img src="./res/image/slides.assets/pic2.png"  style="width: 80%; display: block; margin: 0 auto;" />
</div>

---

# 习题试炼 2
<br/>

<div style="text-align: center;">
  <img src="./res/image/slides.assets/a2.png"  style="width: 90%; display: block; margin: 0 auto;" />
</div>

---

# 习题试炼 3
<br/>

<div style="text-align: center;">
  <img src="./res/image/slides.assets/pic3.png"  style="width: 70%; display: block; margin: 0 auto;" />
</div>


---

# 习题试炼 3
<br/>

<div style="text-align: center;">
  <img src="./res/image/slides.assets/a3.png"  style="width: 90%; display: block; margin: 0 auto;" />
</div>

---

# 习题试炼 4
<br/>

<div style="text-align: center;">
  <img src="./res/image/slides.assets/pic4.png"  style="width: 90%; display: block; margin: 0 auto;" />
</div>


---

# 习题试炼 4
<br/>

<div style="text-align: center;">
  <img src="./res/image/slides.assets/a4.png"  style="width: 90%; display: block; margin: 0 auto;" />
</div>

---

# 习题试炼 5

<br/>

<div style="text-align: center;">
  <img src="./res/image/slides.assets/pic5.png"  style="width: 90%; display: block; margin: 0 auto;" />
</div>

---

# 习题试炼 5

<br/>

<div style="text-align: center;">
  <img src="./res/image/slides.assets/a5.png"  style="width: 90%; display: block; margin: 0 auto;" />
</div>



---
layout: center
---

<div flex="~ gap-20"  mt-2 justify-center items-center>

<div  w-fit h-fit mb-2>

# THANKS

Made by WalkerCH 

changxinhai@stu.pku.edu.cn

<p class="text-gray-40">
  <font size = '3'>
    Reference: [Weicheng Lin]'s presentation.<br>
    <!-- Reference: [Arthals]'s template. -->
  </font>
</p>


</div>

![wechat](./res/image/slides.assets/wechat.jpg){.w-50.rounded-md}

</div>
