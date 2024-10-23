---
# You can also start simply with 'default'
theme: academic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
highlighter: shiki
# some information about your slides (markdown enabled)
title: 07-Processor Arch
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
layout: cover
coverBackgroundUrl: /res/image/cover/cover_07.jpg

---

# Processor Arch {.font-bold}

<p class="text-gray-100">
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

---
layout: center
---

<div>
  <text class="text-17 font-bold gradient-text">Knowledge Review</text>
</div>

<style>
  .gradient-text {
    background-image: linear-gradient(45deg, #4ec5d4 10%, #146b8c 20%);
    -webkit-background-clip: text;
    color: transparent;
  }
</style>



---
layout: center
---

<div>
  <text class="text-17 font-bold gradient-text">Emphasis
</text>
</div>

<style>
  .gradient-text {
    background-image: linear-gradient(45deg, #4ec5d4 10%, #146b8c 20%);
    -webkit-background-clip: text;
    color: transparent;
  }
</style>

---

# RISC与CISC

<div grid="~ cols-2 gap-2">

<div>

- CISC：IA32, AMD64(x86-64)
  
- RISC：ARM64, RISC-V, MIPS

![image-20231104104200969](./res/image/slides.assets/image-20231104104200969.png)

</div>

<div>


<img src="./res/image/slides.assets/image-20231028124909592.png" alt="image-20231028124909592" style="zoom:50%;" />

</div>
</div>


---

# 程序员可见状态

![image-20231027153314276](./res/image/slides.assets/image-20231027153314276.png)

---

# Y86-64 ISA

![image-20231027153353079](./res/image/slides.assets/image-20231027153353079.png){.w-150}

---

# Y86-64 ISA

![image-20231027153915994](./res/image/slides.assets/image-20231027153915994.png)

---

# Y86-64 ISA

<div grid="~ cols-2 gap-12">

<div>


![image-20231028154802068](./res/image/slides.assets/image-20231028154802068.png)

</div>

<div>

![image-20231027153955332](./res/image/slides.assets/image-20231027153955332.png)


- IOPL改为**IOPQ**
- RESP改为**RRSP**

</div>
</div>


---
layout: image-right

image: ./res/image/slides.assets/push_pop2.png

backgroundSize: 40em 30%
---


# push&pop指令

- push：先将 %rsp 减 8，再压栈
- pop：先弹栈，再将 %rsp 加 8
- 先这么理解，原理会在第四章学习（与表象并不完全一致）
- call：push + jmp，可进行间接跳转
- ret：pop + jmp

![push_pop1](./res/image/slides.assets/push_pop1.png){.w-100}

<!-- ![push_pop2](./res/image/slides.assets/push_pop2.png) -->



---

# HCL

## 逻辑门

![image-20231028144842113](./res/image/slides.assets/image-20231028144842113.png){.w-150}

## 算术/逻辑单元ALU

![image-20231028150227878](./res/image/slides.assets/image-20231028150227878.png){.w-150}

---

# Y86-64硬件结构

<div grid="~ cols-2 gap-2">

<div>

## 阶段

<br/>

- 取址：Fetch
- 译码：Decode
- 执行：Execute
- 访存：Memory
- 写回：Write back
- 更新 PC：PC Update

<br/><br/><br/>



W：只能写入valE，valM（`rrmovq`,`irmovq`,`cmovXX`需要**+0**做ALU计算）

</div>

<div>

## 指令处理

<img src="./res/image/slides.assets/image-20231104104728102.png" alt="image-20231104104728102" style="zoom:70%;" />


</div>
</div>

---

# 指令处理

![image-20231028152100068](./res/image/slides.assets/image-20231028152100068.png){.h-110}

---

# 指令处理

![image-20231028152211227](./res/image/slides.assets/image-20231028152211227.png){.h-110}

---

# 指令处理

![image-20231028152452031](./res/image/slides.assets/image-20231028152452031.png){.h-50}

  ![image-20231028152528625](./res/image/slides.assets/image-20231028152528625.png){.h-50}


---

# 指令处理

![image-20231028152304481](./res/image/slides.assets/image-20231028152304481.png){.h-110}

---
layout: center
---

<div>
  <text class="text-17 font-bold gradient-text">Overview
</text>
</div>

<style>
  .gradient-text {
    background-image: linear-gradient(45deg, #4ec5d4 10%, #146b8c 20%);
    -webkit-background-clip: text;
    color: transparent;
  }
</style>
---

# 基本概念

![image-20241022194700098](./res/image/slides.assets/image-20241022194700098.png){.w-180}




---


<div grid="~ cols-2 gap-12">

<div>

![image-20231027152632950](./res/image/slides.assets/image-20231027152632950.png){.w-85}

</div>

<div>


![image-20240103231321296](./res/image/slides.assets/image-20240103231321296.png){.w-90}


</div>
</div>

---


<div grid="~ cols-2 gap-12">

<div>

![image-20231027152737998](./res/image/slides.assets/image-20231027152737998.png){.w-95}

</div>

<div>


![image-20231027152743291](./res/image/slides.assets/image-20231027152743291.png){.w-85}


</div>
</div>

---
layout: center
---

<div>
  <text class="text-17 font-bold gradient-text">Details
</text>
</div>

<style>
  .gradient-text {
    background-image: linear-gradient(45deg, #4ec5d4 10%, #146b8c 20%);
    -webkit-background-clip: text;
    color: transparent;
  }
</style>

SEQ、PIPE的具体实现图、HCL代码都需要详细掌握

此处不再说明，详见 【补充资料】部分

---

# SEQ->SEQ+

## 前置PC

- 电路重定时：改变状态表示而不改变逻辑

- 目的：平衡一个流水线各个阶段之间的延迟

- 在 SEQ+ 的实现里，PC update 的时期从周期的最后被提到了最前，更加接近流水线的形态

---

# SEQ+ ->PIPE-

## 阶段划分

在 Y86-64 的实现中：

- 正常指令指令默认预测 PC 为下一条指令的地址；
- call 指令和 jxx 指令默认预测 PC 为跳转后地址；
- ret 指令不进行任何预测，直到其对应的写回完成

插入流水线寄存器：分别插入了5个流水线寄存器用来保存后续阶段所需的信号，编号为`F`、`D`、`E`、`M`和`W`

- **Fetch**： Select current PC；Read instruction；Compute incremented PC
- **Decode**：Read program registers
- **Execute**：Operate ALU
- **Memory**：Read or write data memory
- **Write** **Back**：Update register file

<div class="text-red-5"> 寄存器顺序：F—f—D—d—E—e—M—m—W</div>

---

# PIPE->PIPE

## 处理冒险
<br/>

- **硬件：暂停和气泡**
  - **stall** 能将指令阻塞在某个阶段
  - **bubble** 能使得流水线继续运行，但是不会改变当前阶段的寄存器、内存、条件码或程序状态

- **结构冒险**

  - **计算的多时钟周期**：采用独立于主流水线的特殊硬件功能单元来处理较为复杂的操作（一个功能单元执行整数乘法和除法，一个功能单元执行浮点操作）
  - **访存的多时钟周期**：
    - 翻译后备缓冲器（**TLB**）+高速缓存（**Cache**）：实现一个时钟周期内读指令并读或写数据
    - 缺页（**page fault**）异常信号：指令暂停+磁盘到主存传送+指令重新执行

---

# PIPE->PIPE

## 处理冒险
<br/>

- **数据冒险**
  - **前后使用数据冒险**：在处理器中，`valA`和`valB`一共有5个转发源：
      - `e_valE`：在执行阶段，ALU中计算得到的结果`valE`，通过`E_dstE`与`d_srcA`和`d_src_B`进行比较决定是否转发。
      - `M_valE`：将ALU计算的结果`valE`保存到流水线寄存器M中，通过`M_dstE`与`d_srcA`和`d_src_B`进行比较决定是否转发。
      - `m_valM`：在访存阶段，从内存中读取的值`valM`，通过`M_dstM`与`d_srcA`和`d_src_B`进行比较决定是否转发。
      - `W_valM`：将内存中的值`valM`保存到流水线寄存器W中，通过`W_dstM`与`d_srcA`和`d_src_B`进行比较决定是否转发。
      - `W_valE` ：将ALU计算的结果`valE`保存到流水线寄存器W中，通过`W_dstE`与`d_srcA`和`d_src_B`进行比较决定是否转发。

---

# PIPE->PIPE

## 处理冒险
<br/>

- **数据冒险**
  - **用暂停来避免数据冒险**
    - 插入一段自动产生的`nop`指令
    - 该方法指令要停顿最少一个最多三个时钟周期，严重降低整体的吞吐量
    ![image-20241015201127166](./res/image/slides.assets/image-20241015201127166.png){.w-180}

---

# PIPE->PIPE

## 处理冒险
<br/>

- **数据冒险**
  -  **加载/使用数据冒险**
    ![image-20231028165443562](./res/image/slides.assets/image-20231028165443562.png){.w-150}
    ![image-20231028165451749](./res/image/slides.assets/image-20231028165451749.png){.w-150}

---

# PIPE->PIPE

## 处理冒险
<br/>

- **控制冒险**
  - ret指令（不预测）：删除后续操作——插入3个bubble
  ![image-20231025021929640](./res/image/slides.assets/image-20231025021929640.png){.w-110}
  - 跳转指令（预测）： 删除后续操作——插入2个bubble
  ![image-20231028165611034](./res/image/slides.assets/image-20231028165611034.png){.w-110}



---

# PIPE->PIPE

## 处理冒险
<br/>

- **检验自洽**
  - 控制条件组合——有限性组合：**Combination A + B**
    - Conbination A：**ret位于不选择分支 ** ——简单叠加
    - Conbination B：**加载/使用+ret ** ——取”**stall**”
      - 加载互锁核心思想：通过暂停+转发组合实现
      - 合理性：Install后，下一条指令无法进入寄存器，当前指令因为bubble并未成功下传
      - 有效性：Install后，当前指令ret依然存在于流水线中，加载/使用语句后可进一步执行
      ![image-20231025022503322](./res/image/slides.assets/image-20231025022503322.png){.w-120}

---

# PIPE->PIPE

## 处理冒险
<br/>

- **检验自洽**



![image-20231025022538498](./res/image/slides.assets/image-20231025022538498.png){.w-150}

![image-20231025022550241](./res/image/slides.assets/image-20231025022550241.png){.w-150}


---

# PIPE->PIPE


## 处理冒险
<br/>

- **异常处理**
  - 内部异常：
    - **HLT**：执行halt指令
    - **ADR**：从非法内存地址读或向非法内存地址写
    - **INS**：非法指令
  - 外部异常
    - 系统重启
    - I/O设备请求
    - 硬件故障
 - **要求：** 异常指令之前的所有指令已经完成，后续的指令都不能修改条件码寄存器和内存。

---

# PIPE- ->PIPE


## 处理冒险
<br/>

- **异常处理**

1. 当同时多条指令引起异常时，处理器应该向操作系统报告哪个异常？

   **基本原则：** 由流水线中最深的指令引起的异常，表示该指令越早执行，优先级最高。

2. 在分支预测中，当预测分支中出现了异常，而后由于预测错误而取消该指令时，需要取消异常。

3. 如何处理不同阶段更新系统状态不同部分的问题？

   - 异常发生时，记录指令状态，继续取指、译码、执行
   - 异常到达 **访存阶段**：
     1. 执行阶段，禁止设置条件码（set_cc $\leftarrow$ m_stat, W_stat）
     2. 访存阶段，插入气泡，禁止写入内存
     3. 写回阶段，暂停写回，即暂停流水线

---
layout: center
---

<div>
  <text class="text-17 font-bold gradient-text">Homework Review</text>
</div>

<style>
  .gradient-text {
    background-image: linear-gradient(45deg, #4ec5d4 10%, #146b8c 20%);
    -webkit-background-clip: text;
    color: transparent;
  }
</style>

---

# HW4


<div grid="~ cols-2 gap-2">

<div>

<img src="./res/image/slides.assets/image-20241022223928793.png" alt="image-20241022223928793" style="zoom:35%;" />

</div>

<div>

- 可能确实不存在很好的办法验证Y86-64的正确性
- 暂不存在 C 到 Y86-64 的转换工具
- 但可以通过手动模拟的方式，通过Y86-64模拟器验证正确性（如果你真的想这么干）


</div>
</div>





---
layout: center
---

<div>
  <text class="text-17 font-bold gradient-text">Exercises</text>
</div>

<style>
  .gradient-text {
    background-image: linear-gradient(45deg, #4ec5d4 10%, #146b8c 20%);
    -webkit-background-clip: text;
    color: transparent;
  }
</style>


---
layout: center
---

<div>
  <text class="text-13 font-bold gradient-text">Processor Arch: ISA & Logic</text>
</div>

<style>
  .gradient-text {
    background-image: linear-gradient(45deg, #4ec5d4 10%, #146b8c 20%);
    -webkit-background-clip: text;
    color: transparent;
  }
</style>




---

# E1

![image-20241014175227300](./res/image/slides.assets/image-20241014175227300.png)

<!-- ![image-20241014175244058](./res/image/slides.assets/image-20241014175244058.png) -->

---

# E1

![image-20241014175227300](./res/image/slides.assets/image-20241014175227300.png)

![image-20241014175244058](./res/image/slides.assets/image-20241014175244058.png)

---

# E2

![image-20241014175332527](./res/image/slides.assets/image-20241014175332527.png)

<!-- ![image-20241014175340636](./res/image/slides.assets/image-20241014175340636.png) -->

---

# E2

![image-20241014175332527](./res/image/slides.assets/image-20241014175332527.png)

![image-20241014175340636](./res/image/slides.assets/image-20241014175340636.png)

---

# E3

![image-20241014175345111](./res/image/slides.assets/image-20241014175345111.png)

<!-- ![image-20241014175349228](./res/image/slides.assets/image-20241014175349228.png){.w-50} -->
---

# E3

![image-20241014175345111](./res/image/slides.assets/image-20241014175345111.png)


![image-20241014175349228](./res/image/slides.assets/image-20241014175349228.png){.w-50}

---

# E4

![image-20241014175353401](./res/image/slides.assets/image-20241014175353401.png)

<!-- ![image-20241014175356832](./res/image/slides.assets/image-20241014175356832.png){.w-50} -->

---

# E4

![image-20241014175353401](./res/image/slides.assets/image-20241014175353401.png)

![image-20241014175356832](./res/image/slides.assets/image-20241014175356832.png){.w-50}

---

# E5

![image-20241014175400971](./res/image/slides.assets/image-20241014175400971.png)

<!-- ![image-20241014175404217](./res/image/slides.assets/image-20241014175404217.png) -->

---

# E5

![image-20241014175400971](./res/image/slides.assets/image-20241014175400971.png)

![image-20241014175404217](./res/image/slides.assets/image-20241014175404217.png)

---

# E6

![image-20241014175409449](./res/image/slides.assets/image-20241014175409449.png)

<!-- ![image-20241014175423549](./res/image/slides.assets/image-20241014175423549.png){.w-150} -->

---

# E6

![image-20241014175409449](./res/image/slides.assets/image-20241014175409449.png)

![image-20241014175423549](./res/image/slides.assets/image-20241014175423549.png){.w-150}


---

# E7

![image-20241014175432583](./res/image/slides.assets/image-20241014175432583.png)

<!-- ![image-20241014175442527](./res/image/slides.assets/image-20241014175442527.png) -->

---

# E7

![image-20241014175432583](./res/image/slides.assets/image-20241014175432583.png)

![image-20241014175442527](./res/image/slides.assets/image-20241014175442527.png)

---

# E8

![image-20241014175447280](./res/image/slides.assets/image-20241014175447280.png)

<!-- ![image-20241014175450143](./res/image/slides.assets/image-20241014175450143.png){.w-150} -->

---

# E8

![image-20241014175447280](./res/image/slides.assets/image-20241014175447280.png)

![image-20241014175450143](./res/image/slides.assets/image-20241014175450143.png){.w-150}
---

# E9

![image-20241014175454193](./res/image/slides.assets/image-20241014175454193.png){.w-120}

---

# E9

![image-20241014175458012](./res/image/slides.assets/image-20241014175458012.png){.w-150}
---

# E10

![image-20241014175511948](./res/image/slides.assets/image-20241014175511948.png){.w-150}

<!-- ![image-20241014175515115](./res/image/slides.assets/image-20241014175515115.png){.w-50} -->

---

# E10

![image-20241014175511948](./res/image/slides.assets/image-20241014175511948.png){.w-150}

![image-20241014175515115](./res/image/slides.assets/image-20241014175515115.png){.w-50}

---

# E11

![image-20241014175520034](./res/image/slides.assets/image-20241014175520034.png){.w-130}

<!-- ![image-20241014175524148](./res/image/slides.assets/image-20241014175524148.png){.w-30} -->

---

# E11

![image-20241014175520034](./res/image/slides.assets/image-20241014175520034.png){.w-130}

![image-20241014175524148](./res/image/slides.assets/image-20241014175524148.png){.w-30}

---

# E12

![image-20241014175528917](./res/image/slides.assets/image-20241014175528917.png)


---

# E12

![image-20241014230119042](./res/image/slides.assets/image-20241014230119042.png)
---

# E13

<div grid="~ cols-2 gap-2">

<div>

![image-20241014230135900](./res/image/slides.assets/image-20241014230135900.png){.w-80}

</div>

<div>


<!-- ![image-20241015221115342](./res/image/slides.assets/image-20241015221115342.png){.w-80}

![image-20241015221121115](./res/image/slides.assets/image-20241015221121115.png){.w-70} -->


</div>
</div>


---

# E13

<div grid="~ cols-2 gap-2">

<div>

![image-20241014230135900](./res/image/slides.assets/image-20241014230135900.png){.w-80}

</div>

<div>


![image-20241015221115342](./res/image/slides.assets/image-20241015221115342.png){.w-80}

![image-20241015221121115](./res/image/slides.assets/image-20241015221121115.png){.w-70}


</div>
</div>


---

# E14

<div grid="~ cols-2 gap-12">

<div>

![image-20241014230158145](./res/image/slides.assets/image-20241014230158145.png){.w-80}

</div>

<div>

![image-20241014230201549](./res/image/slides.assets/image-20241014230201549.png){.w-75}

</div>

</div>

---

# E14


![image-20241014230212315](./res/image/slides.assets/image-20241014230212315.png){.w-180}


---

# E15

<div grid="~ cols-2 gap-12">

<div>

![image-20241014230226404](./res/image/slides.assets/image-20241014230226404.png){.w-75}

</div>

<div>

![image-20241014230228953](./res/image/slides.assets/image-20241014230228953.png){.w-75}

</div>

</div>


---

# E15

<div grid="~ cols-2 gap-12">

<div>

![image-20241014230234910](./res/image/slides.assets/image-20241014230234910.png){.w-65}

</div>

<div>

![image-20241014230239344](./res/image/slides.assets/image-20241014230239344.png){.w-65}

</div>

</div>


---
layout: center
---

<div>
  <text class="text-13 font-bold gradient-text">Processor Arch: SEQ/PIPE</text>
</div>

<style>
  .gradient-text {
    background-image: linear-gradient(45deg, #4ec5d4 10%, #146b8c 20%);
    -webkit-background-clip: text;
    color: transparent;
  }
</style>

---

# E1

![image-20241014234849779](./res/image/slides.assets/image-20241014234849779.png){.w-180}

---

# E1

![image-20241014234853360](./res/image/slides.assets/image-20241014234853360.png){.w-180}

---

# E2

![image-20241014234856854](./res/image/slides.assets/image-20241014234856854.png)

<!-- ![image-20241014234900323](./res/image/slides.assets/image-20241014234900323.png){.w-40} -->

---

# E2

![image-20241014234856854](./res/image/slides.assets/image-20241014234856854.png)

![image-20241014234900323](./res/image/slides.assets/image-20241014234900323.png){.w-40}

---

# E3

![image-20241014234904290](./res/image/slides.assets/image-20241014234904290.png){.w-140}

<!-- ![image-20241014234907596](./res/image/slides.assets/image-20241014234907596.png){.w-20} -->

---

# E3

![image-20241014234904290](./res/image/slides.assets/image-20241014234904290.png){.w-140}

![image-20241014234907596](./res/image/slides.assets/image-20241014234907596.png){.w-20}

---

# E4

![image-20241014234911126](./res/image/slides.assets/image-20241014234911126.png)

<!-- ![image-20241014234913932](./res/image/slides.assets/image-20241014234913932.png){.w-30} -->

---

# E4

![image-20241014234911126](./res/image/slides.assets/image-20241014234911126.png)

![image-20241014234913932](./res/image/slides.assets/image-20241014234913932.png){.w-30}

---

# E5

![image-20241014234916997](./res/image/slides.assets/image-20241014234916997.png)

<!-- ![image-20241014234919652](./res/image/slides.assets/image-20241014234919652.png) -->


---

# E5

![image-20241014234916997](./res/image/slides.assets/image-20241014234916997.png)

![image-20241014234919652](./res/image/slides.assets/image-20241014234919652.png)
---

# E6

![image-20241014234923886](./res/image/slides.assets/image-20241014234923886.png)

<!-- ![image-20241014234926638](./res/image/slides.assets/image-20241014234926638.png) -->

---

# E6

![image-20241014234923886](./res/image/slides.assets/image-20241014234923886.png)

![image-20241014234926638](./res/image/slides.assets/image-20241014234926638.png)

---

# E7

![image-20241014234931442](./res/image/slides.assets/image-20241014234931442.png){.w-150}

<!-- ![image-20241014234936623](./res/image/slides.assets/image-20241014234936623.png){.w-30} -->

---

# E7

![image-20241014234931442](./res/image/slides.assets/image-20241014234931442.png){.w-150}

![image-20241014234936623](./res/image/slides.assets/image-20241014234936623.png){.w-30}

---

# E8

<div grid="~ cols-2 gap-2">

<div>

![image-20241014230135900](./res/image/slides.assets/image-20241014230135900.png){.w-80}

</div>

<div>


<!-- ![image-20241014234943083](./res/image/slides.assets/image-20241014234943083.png){.w-80} -->

</div>
</div>


---

# E8

<div grid="~ cols-2 gap-2">

<div>

![image-20241014230135900](./res/image/slides.assets/image-20241014230135900.png){.w-80}

</div>

<div>


![image-20241014234943083](./res/image/slides.assets/image-20241014234943083.png){.w-80}

</div>
</div>



---

# E9

![image-20241014235012023](./res/image/slides.assets/image-20241014235012023.png)

<!-- ![image-20241014235014653](./res/image/slides.assets/image-20241014235014653.png){.w-100} -->

---

# E9

![image-20241014235012023](./res/image/slides.assets/image-20241014235012023.png)

![image-20241014235014653](./res/image/slides.assets/image-20241014235014653.png){.w-100}

---

# E10

![image-20241014235017767](./res/image/slides.assets/image-20241014235017767.png)

<!-- ![image-20241014235019823](./res/image/slides.assets/image-20241014235019823.png) -->

---

# E10

![image-20241014235017767](./res/image/slides.assets/image-20241014235017767.png)

![image-20241014235019823](./res/image/slides.assets/image-20241014235019823.png)

---

# E11

![image-20241014235022852](./res/image/slides.assets/image-20241014235022852.png)

<!-- ![image-20241014235025186](./res/image/slides.assets/image-20241014235025186.png) -->

---

# E11

![image-20241014235022852](./res/image/slides.assets/image-20241014235022852.png)

![image-20241014235025186](./res/image/slides.assets/image-20241014235025186.png)

---

# E12

![image-20241014235028140](./res/image/slides.assets/image-20241014235028140.png){.w-160}

---

# E12


![image-20241014235031641](./res/image/slides.assets/image-20241014235031641.png)

---

# E13

<div grid="~ cols-3 gap-2">

<div>

![image-20241014235035102](./res/image/slides.assets/image-20241014235035102.png)

![image-20241014235052912](./res/image/slides.assets/image-20241014235052912.png)


</div>

<div>

![image-20241014235044013](./res/image/slides.assets/image-20241014235044013.png)

</div>


<div>

![image-20241014235048436](./res/image/slides.assets/image-20241014235048436.png)


</div>



</div>





---

# E13


<div grid="~ cols-2 gap-0">

<div>

![image-20241014235058819](./res/image/slides.assets/image-20241014235058819.png){.w-80}


</div>

<div>


![image-20241014235127296](./res/image/slides.assets/image-20241014235127296.png){.w-100}

</div>
</div>

---

# E14


<div grid="~ cols-3 gap-2">

<div>

![image-20241022233831272](./res/image/slides.assets/image-20241022233831272.png){.w-63}

</div>
<div>

![image-20241022233849320](./res/image/slides.assets/image-20241022233849320.png){.w-65}


</div>
<div>



![image-20241022233906606](./res/image/slides.assets/image-20241022233906606.png){.w-65}

</div>
</div>

---

# E14

<div grid="~ cols-2 gap-0">

<div>


![image-20241023102645617](./res/image/slides.assets/image-20241023102645617.png){.w-70}


</div>

<div>

![image-20241023102707231](./res/image/slides.assets/image-20241023102707231.png){.w-65}

</div>
</div>





---

# E15

<div grid="~ cols-3 gap-2">

<div>

![image-20241022233937956](./res/image/slides.assets/image-20241022233937956.png)

</div>
<div>


![image-20241022233951909](./res/image/slides.assets/image-20241022233951909.png)

</div>
<div>



![image-20241022233737608](./res/image/slides.assets/image-20241022233737608.png)

</div>
</div>

---

# E15

<div grid="~ cols-2 gap-0">

<div>


![image-20241023102554433](./res/image/slides.assets/image-20241023102554433.png)


</div>

<div>

![image-20241023102609361](./res/image/slides.assets/image-20241023102609361.png){.w-80}

</div>
</div>





---



# E16


<div grid="~ cols-3 gap-2">

<div>

![image-20241023091221902](./res/image/slides.assets/image-20241023091221902.png)

</div>
<div>

![image-20241023091238133](./res/image/slides.assets/image-20241023091238133.png)

</div>
<div>

![image-20241023091304981](./res/image/slides.assets/image-20241023091304981.png)

</div>
</div>

---

# E16

<div grid="~ cols-2 gap-0">

<div>



![image-20241023102131229](./res/image/slides.assets/image-20241023102131229.png){.w-85}


</div>

<div>

![image-20241023102254400](./res/image/slides.assets/image-20241023102254400.png)

</div>
</div>



---
layout: center
---

<div>
  <text class="text-17 font-bold gradient-text">Notices</text>
</div>

<style>
  .gradient-text {
    background-image: linear-gradient(45deg, #4ec5d4 10%, #146b8c 20%);
    -webkit-background-clip: text;
    color: transparent;
  }
</style>

---



# 记忆

ICS 去年小班同学默写盛况

![image-20241022205303820](./res/image/slides.assets/image-20241022205303820.png){.w-180}

---



# 时间轴

<br/>

![image-20241016200935096](./res/image/slides.assets/image-20241016200935096.png){.w-200}



---

# 补充资料

- HCL语言：[HCL Descriptions of Y86-64 Processors.pdf](https://github.com/Yaenday/WalkerCH-ICS-Slides/blob/main/res/document/HCL%20Descriptions%20of%20Y86-64%20Processors.pdf)

![image-20241015202951022](./res/image/slides.assets/image-20241015202951022.png){.w-130}

- 我的Y86-64学习笔记：[Y86-64 Note.html](https://github.com/Yaenday/WalkerCH-ICS-Slides/blob/main/res/document/Y86-64%20Note.html)

![image-20241015203039958](./res/image/slides.assets/image-20241015203039958.png){.w-130}

- 我的回课：[Pipelined Review.pdf](https://github.com/Yaenday/WalkerCH-ICS-Slides/blob/main/res/document/Pipelined%20Review.pdf)   \ \   往年补充资料： [pipelined res.pdf](https://github.com/Yaenday/WalkerCH-ICS-Slides/blob/main/res/document/pipelined%20res.pdf) 


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
    <!-- Reference: [Arthals]'s templates and content. -->
  </font>
</p>

</div>

![wechat](./res/image/slides.assets/wechat.jpg){.w-50.rounded-md}

</div>
