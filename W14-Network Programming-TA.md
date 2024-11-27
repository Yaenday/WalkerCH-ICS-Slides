---
# You can also start simply with 'default'
theme: academic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
highlighter: shiki
# some information about your slides (markdown enabled)
title: 14-Network Programming
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
coverBackgroundUrl: /res/image/cover/cover_14.jpg

---

# Network Programming {.font-bold}

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

- [Note Link](https://github.com/Yaenday/WalkerCH-ICS-Slides/blob/main/res/note/Network-Programming%20Note.html)

![PixPin_2024-11-26_16-06-56](./res/image/slides.assets/PixPin_2024-11-26_16-06-56.png)


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

![image-20241017202403653](./res/image/slides.assets/image-20241017202403653.png){.w-180}

<!-- ![image-20241017202406941](./res/image/slides.assets/image-20241017202406941.png) -->

---


# E1

![image-20241017202403653](./res/image/slides.assets/image-20241017202403653.png){.w-180}

![image-20241017202406941](./res/image/slides.assets/image-20241017202406941.png)

---

# E2

![image-20241017202412849](./res/image/slides.assets/image-20241017202412849.png)

<!-- ![image-20241017202415153](./res/image/slides.assets/image-20241017202415153.png) -->

---

# E2

![image-20241017202412849](./res/image/slides.assets/image-20241017202412849.png)

![image-20241017202415153](./res/image/slides.assets/image-20241017202415153.png)

---

# E3

![image-20241017202418169](./res/image/slides.assets/image-20241017202418169.png)

<!-- ![image-20241017202420441](./res/image/slides.assets/image-20241017202420441.png){.w-150} -->

---

# E3

![image-20241017202418169](./res/image/slides.assets/image-20241017202418169.png)

![image-20241017202420441](./res/image/slides.assets/image-20241017202420441.png){.w-150}

---

# E4

![image-20241023100852833](./res/image/slides.assets/image-20241023100852833.png)

<!-- ![image-20241023100856025](./res/image/slides.assets/image-20241023100856025.png){.w-100} -->

---

# E4

![image-20241023100852833](./res/image/slides.assets/image-20241023100852833.png)

![image-20241023100856025](./res/image/slides.assets/image-20241023100856025.png){.w-100}

---

# E5

![image-20241023100902786](./res/image/slides.assets/image-20241023100902786.png)

<!-- ![image-20241023100906769](./res/image/slides.assets/image-20241023100906769.png) -->


---

# E5

![image-20241023100902786](./res/image/slides.assets/image-20241023100902786.png)

![image-20241023100906769](./res/image/slides.assets/image-20241023100906769.png)


---

# E6

![image-20241023100911262](./res/image/slides.assets/image-20241023100911262.png)

<!-- ![image-20241023100923948](./res/image/slides.assets/image-20241023100923948.png) -->

---

# E6

![image-20241023100911262](./res/image/slides.assets/image-20241023100911262.png)

![image-20241023100923948](./res/image/slides.assets/image-20241023100923948.png)

---

# E7

![image-20241023100929358](./res/image/slides.assets/image-20241023100929358.png)

<!-- ![image-20241023100933279](./res/image/slides.assets/image-20241023100933279.png) -->

---

# E7

![image-20241023100929358](./res/image/slides.assets/image-20241023100929358.png)

![image-20241023100933279](./res/image/slides.assets/image-20241023100933279.png)

---

# E8

![image-20241023100947877](./res/image/slides.assets/image-20241023100947877.png)

<!-- ![image-20241023100952104](./res/image/slides.assets/image-20241023100952104.png) -->

---

# E8

![image-20241023100947877](./res/image/slides.assets/image-20241023100947877.png)

![image-20241023100952104](./res/image/slides.assets/image-20241023100952104.png)

---

# E9

![image-20241023100955891](./res/image/slides.assets/image-20241023100955891.png)

---

# E9

![image-20241023100958453](./res/image/slides.assets/image-20241023100958453.png)

---

# E10

![image-20241023101001228](./res/image/slides.assets/image-20241023101001228.png)

<!-- ![image-20241023101003591](./res/image/slides.assets/image-20241023101003591.png) -->

---

# E10

![image-20241023101001228](./res/image/slides.assets/image-20241023101001228.png)

![image-20241023101003591](./res/image/slides.assets/image-20241023101003591.png)

---

# E11


<div grid="~ cols-2 gap-2">

<div>

![image-20241023101006550](./res/image/slides.assets/image-20241023101006550.png){.w-70}


</div>

<div>

![image-20241023101010844](./res/image/slides.assets/image-20241023101010844.png){.w-80}


</div>
</div>

---

# E11


![image-20241023101018127](./res/image/slides.assets/image-20241023101018127.png)

---

# E12

<div grid="~ cols-2 gap-2">

<div>

![image-20241023101042302](./res/image/slides.assets/image-20241023101042302.png)


</div>

<div>

![image-20241023101045725](./res/image/slides.assets/image-20241023101045725.png)


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
