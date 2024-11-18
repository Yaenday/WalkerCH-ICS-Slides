---
# You can also start simply with 'default'
theme: academic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
highlighter: shiki
# some information about your slides (markdown enabled)
title: 11-ECF
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
coverBackgroundUrl: /res/image/cover/cover_11.jpg

---

# ECF {.font-bold}

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

<!-- ---

# 目录

<Toc columns="4" minDepth="1"></Toc> -->


---
layout: center
---

<div style="text-align: center;">
  <text class="text-17 font-bold gradient-text">Knowledge Review</text>
  <br />
  <text class="text-5 font-bold">This part is cited from Arthals</text>
</div>

<style>
  .gradient-text {
    background-image: linear-gradient(45deg, #4ec5d4 10%, #146b8c 20%);
    -webkit-background-clip: text;
    color: transparent;
  }
</style>

---

# Example {.text-2xl}

<div class="absolute bottom-4 right-4 text-gray-500 text-xs">
  This slide is cited from Arthals.
</div>


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

# Notes

- [Note Link]()

![PixPin_2024-11-18_23-30-05](./res/image/slides.assets/PixPin_2024-11-18_23-30-05.png){.w-180}



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

# E1

![image-20241017175428523](./res/image/slides.assets/image-20241017175428523.png)

<!-- ![image-20241017175432094](./res/image/slides.assets/image-20241017175432094.png) -->

---

# E1

![image-20241017175428523](./res/image/slides.assets/image-20241017175428523.png)

![image-20241017175432094](./res/image/slides.assets/image-20241017175432094.png)

---

# E2

![image-20241017175434607](./res/image/slides.assets/image-20241017175434607.png)

<!-- ![image-20241017175449545](./res/image/slides.assets/image-20241017175449545.png) -->

---

# E2

![image-20241017175434607](./res/image/slides.assets/image-20241017175434607.png)

![image-20241017175449545](./res/image/slides.assets/image-20241017175449545.png)

---

# E3

![image-20241017175446622](./res/image/slides.assets/image-20241017175446622.png)

<!-- ![image-20241017175452835](./res/image/slides.assets/image-20241017175452835.png) -->

---

# E3

![image-20241017175446622](./res/image/slides.assets/image-20241017175446622.png)

![image-20241017175452835](./res/image/slides.assets/image-20241017175452835.png)

---

# E4

![image-20241017175455436](./res/image/slides.assets/image-20241017175455436.png)

<!-- ![image-20241017175458391](./res/image/slides.assets/image-20241017175458391.png) -->

---

# E4

![image-20241017175455436](./res/image/slides.assets/image-20241017175455436.png)

![image-20241017175458391](./res/image/slides.assets/image-20241017175458391.png)

---

# E5

![image-20241017175501171](./res/image/slides.assets/image-20241017175501171.png){.w-180}

<!-- ![image-20241017175504343](./res/image/slides.assets/image-20241017175504343.png){.w-120} -->

---

# E5

![image-20241017175501171](./res/image/slides.assets/image-20241017175501171.png){.w-180}

![image-20241017175504343](./res/image/slides.assets/image-20241017175504343.png){.w-120}

---

# E6

![image-20241017175507450](./res/image/slides.assets/image-20241017175507450.png){.w-180}

<!-- ![image-20241017175511033](./res/image/slides.assets/image-20241017175511033.png){.w-180} -->

---

# E6

![image-20241017175507450](./res/image/slides.assets/image-20241017175507450.png){.w-180}

![image-20241017175511033](./res/image/slides.assets/image-20241017175511033.png){.w-180}

---

# E7

![image-20241017180300918](./res/image/slides.assets/image-20241017180300918.png)

<!-- ![image-20241017180304223](./res/image/slides.assets/image-20241017180304223.png){.w-120} -->

---

# E7

![image-20241017180300918](./res/image/slides.assets/image-20241017180300918.png)

![image-20241017180304223](./res/image/slides.assets/image-20241017180304223.png){.w-120}

---

# E8

![image-20241017180307201](./res/image/slides.assets/image-20241017180307201.png)

<!-- ![image-20241017180309873](./res/image/slides.assets/image-20241017180309873.png) -->

---

# E8

![image-20241017180307201](./res/image/slides.assets/image-20241017180307201.png)

![image-20241017180309873](./res/image/slides.assets/image-20241017180309873.png)

---

# E9


<div grid="~ cols-2 gap-2">

<div>

![image-20241017180312895](./res/image/slides.assets/image-20241017180312895.png){.w-70}

</div>

<div>

![image-20241017180318263](./res/image/slides.assets/image-20241017180318263.png){.w-75}

</div>
</div>

---

# E9


![image-20241017180323048](./res/image/slides.assets/image-20241017180323048.png){.w-100}

---

# E10


<div grid="~ cols-2 gap-2">

<div>


![image-20241017182125869](./res/image/slides.assets/image-20241017182125869.png){.w-80}


</div>

<div>

<!-- ![image-20241017182130276](./res/image/slides.assets/image-20241017182130276.png) -->


</div>
</div>


---

# E10


<div grid="~ cols-2 gap-2">

<div>


![image-20241017182125869](./res/image/slides.assets/image-20241017182125869.png){.w-80}


</div>

<div>

![image-20241017182130276](./res/image/slides.assets/image-20241017182130276.png)


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


<!-- ---

# col2

<div grid="~ cols-2 gap-2">

<div>


</div>

<div>


</div>
</div> -->

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
    Reference: [Arthals]'s templates and content.
  </font>
</p>

</div>

![wechat](./res/image/slides.assets/wechat.jpg){.w-50.rounded-md}

</div>
