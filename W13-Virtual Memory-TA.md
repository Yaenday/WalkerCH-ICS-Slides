---
# You can also start simply with 'default'
theme: academic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
highlighter: shiki
# some information about your slides (markdown enabled)
title: 13-Virtual Memory
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
coverBackgroundUrl: /res/image/cover/cover_13.jpg

---

# Virtual Memory {.font-bold}

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

- [Note Link](https://github.com/Yaenday/WalkerCH-ICS-Slides/blob/main/res/note/Virtual-Memory%20Note.html)

![PixPin_2024-11-26_16-06-14](./res/image/slides.assets/PixPin_2024-11-26_16-06-14.png){.w-150}

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

# HW9

![PixPin_2024-11-27_20-45-32](./res/image/slides.assets/PixPin_2024-11-27_20-45-32.png){.w-120}


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

![image-20241017201736242](./res/image/slides.assets/image-20241017201736242.png)

<!-- ![image-20241017201738762](./res/image/slides.assets/image-20241017201738762.png){.w-180} -->

---

# E1

![image-20241017201736242](./res/image/slides.assets/image-20241017201736242.png)

![image-20241017201738762](./res/image/slides.assets/image-20241017201738762.png){.w-180}

---

# E2

![image-20241017201741157](./res/image/slides.assets/image-20241017201741157.png){.w-110}

---

# E2

![image-20241017201744520](./res/image/slides.assets/image-20241017201744520.png)

---

# E3

![image-20241017201747842](./res/image/slides.assets/image-20241017201747842.png)

<!-- ![image-20241017201752704](./res/image/slides.assets/image-20241017201752704.png) -->

---

# E3

![image-20241017201747842](./res/image/slides.assets/image-20241017201747842.png)

![image-20241017201752704](./res/image/slides.assets/image-20241017201752704.png)

---

# E4

![image-20241017201756039](./res/image/slides.assets/image-20241017201756039.png)

<!-- ![image-20241017201810535](./res/image/slides.assets/image-20241017201810535.png) -->

---

# E4

![image-20241017201756039](./res/image/slides.assets/image-20241017201756039.png)

![image-20241017201810535](./res/image/slides.assets/image-20241017201810535.png)

---

# E5

![image-20241017201813470](./res/image/slides.assets/image-20241017201813470.png)

<!-- ![image-20241017201815827](./res/image/slides.assets/image-20241017201815827.png) -->

---

# E5

![image-20241017201813470](./res/image/slides.assets/image-20241017201813470.png)

![image-20241017201815827](./res/image/slides.assets/image-20241017201815827.png)

---

# E6

![image-20241017201818707](./res/image/slides.assets/image-20241017201818707.png)

<!-- ![image-20241017201821087](./res/image/slides.assets/image-20241017201821087.png) -->

---

# E6

![image-20241017201818707](./res/image/slides.assets/image-20241017201818707.png)

![image-20241017201821087](./res/image/slides.assets/image-20241017201821087.png)

---

# E7

![image-20241017201824023](./res/image/slides.assets/image-20241017201824023.png)

<!-- ![image-20241017201826280](./res/image/slides.assets/image-20241017201826280.png) -->

---

# E7

![image-20241017201824023](./res/image/slides.assets/image-20241017201824023.png)

![image-20241017201826280](./res/image/slides.assets/image-20241017201826280.png)

---

# E8

![image-20241017201829433](./res/image/slides.assets/image-20241017201829433.png)

<!-- ![image-20241017201832315](./res/image/slides.assets/image-20241017201832315.png) -->

---

# E8

![image-20241017201829433](./res/image/slides.assets/image-20241017201829433.png)

![image-20241017201832315](./res/image/slides.assets/image-20241017201832315.png)
---

# E9

![image-20241017201835058](./res/image/slides.assets/image-20241017201835058.png)

<!-- ![image-20241017201837714](./res/image/slides.assets/image-20241017201837714.png) -->

---

# E9

![image-20241017201835058](./res/image/slides.assets/image-20241017201835058.png)

![image-20241017201837714](./res/image/slides.assets/image-20241017201837714.png)

---

# E10

![image-20241017201840532](./res/image/slides.assets/image-20241017201840532.png)

<!-- ![image-20241017201843454](./res/image/slides.assets/image-20241017201843454.png) -->

---

# E10

![image-20241017201840532](./res/image/slides.assets/image-20241017201840532.png)

![image-20241017201843454](./res/image/slides.assets/image-20241017201843454.png)

---

# E11

<div grid="~ cols-2 gap-2">

<div>

![image-20241017201846440](./res/image/slides.assets/image-20241017201846440.png){.w-70}

</div>

<div>

![image-20241017201850546](./res/image/slides.assets/image-20241017201850546.png){.w-70}

</div>
</div>

---

# E11

<div grid="~ cols-2 gap-2">

<div>

![image-20241017201856153](./res/image/slides.assets/image-20241017201856153.png)

</div>

<div>

![image-20241017201900017](./res/image/slides.assets/image-20241017201900017.png)

</div>
</div>

---

# E12

<div grid="~ cols-2 gap-2">

<div>

![image-20241017201912302](./res/image/slides.assets/image-20241017201912302.png)

</div>

<div>

<!-- ![image-20241017201915187](./res/image/slides.assets/image-20241017201915187.png) -->

</div>
</div>

---

# E12

<div grid="~ cols-2 gap-2">

<div>

![image-20241017201912302](./res/image/slides.assets/image-20241017201912302.png)

</div>

<div>

![image-20241017201915187](./res/image/slides.assets/image-20241017201915187.png)

</div>
</div>

---

# E1

![image-20241023100754916](./res/image/slides.assets/image-20241023100754916.png)

<!-- ![image-20241023100757991](./res/image/slides.assets/image-20241023100757991.png) -->

---

# E1

![image-20241023100754916](./res/image/slides.assets/image-20241023100754916.png)

![image-20241023100757991](./res/image/slides.assets/image-20241023100757991.png)

---

# E2

![image-20241023100807253](./res/image/slides.assets/image-20241023100807253.png){.w-105}

<!-- ![image-20241023100810629](./res/image/slides.assets/image-20241023100810629.png){.w-50} -->

---

# E2

![image-20241023100807253](./res/image/slides.assets/image-20241023100807253.png){.w-105}

![image-20241023100810629](./res/image/slides.assets/image-20241023100810629.png){.w-50}

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

<changxinhai@stu.pku.edu.cn>

<p class="text-gray-40">
  <font size = '3'>
    Reference: [Weicheng Lin]'s presentation.<br>
    Reference: [Arthals]'s templates and content.
  </font>
</p>

</div>

![wechat](./res/image/slides.assets/wechat.jpg){.w-50.rounded-md}

</div>
