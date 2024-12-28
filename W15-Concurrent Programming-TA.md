---
# You can also start simply with 'default'
theme: academic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
highlighter: shiki
# some information about your slides (markdown enabled)
title: 15-Concurrent Programming
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
coverBackgroundUrl: /res/image/cover/cover_15.jpg

---

# Concurrent Programming {.font-bold}

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

- [Note Link](https://github.com/Yaenday/WalkerCH-ICS-Slides/blob/main/res/note/Concurrent-Programming%20Note.html)

![PixPin_2024-11-26_16-07-28](./res/image/slides.assets/PixPin_2024-11-26_16-07-28.png)


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

# HW11

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

![image-20241023101138654](./res/image/slides.assets/image-20241023101138654.png)

<!-- ![image-20241023101141846](./res/image/slides.assets/image-20241023101141846.png) -->

---


# E1

![image-20241023101138654](./res/image/slides.assets/image-20241023101138654.png)

![image-20241023101141846](./res/image/slides.assets/image-20241023101141846.png)

---

# E2

![image-20241023101317010](./res/image/slides.assets/image-20241023101317010.png){.w-120}

<!-- ![image-20241023101321996](./res/image/slides.assets/image-20241023101321996.png) -->

---

# E2

![image-20241023101317010](./res/image/slides.assets/image-20241023101317010.png){.w-120}

![image-20241023101321996](./res/image/slides.assets/image-20241023101321996.png)

---

# E3

![image-20241023101336822](./res/image/slides.assets/image-20241023101336822.png){.w-120}

<!-- ![image-20241023101340012](./res/image/slides.assets/image-20241023101340012.png) -->

---

# E3

![image-20241023101336822](./res/image/slides.assets/image-20241023101336822.png){.w-120}

![image-20241023101340012](./res/image/slides.assets/image-20241023101340012.png)


---

# E4

![image-20241023101342762](./res/image/slides.assets/image-20241023101342762.png)

<!-- ![image-20241023101345020](./res/image/slides.assets/image-20241023101345020.png) -->

---

# E4

![image-20241023101342762](./res/image/slides.assets/image-20241023101342762.png)

![image-20241023101345020](./res/image/slides.assets/image-20241023101345020.png)

---

# E5

![image-20241023101348253](./res/image/slides.assets/image-20241023101348253.png){.w-120}

<!-- ![image-20241023101350897](./res/image/slides.assets/image-20241023101350897.png) -->

---

# E5

![image-20241023101348253](./res/image/slides.assets/image-20241023101348253.png){.w-120}

![image-20241023101350897](./res/image/slides.assets/image-20241023101350897.png)

---

# E6

![image-20241023101353525](./res/image/slides.assets/image-20241023101353525.png)

<!-- ![image-20241023101355607](./res/image/slides.assets/image-20241023101355607.png) -->

---

# E6

![image-20241023101353525](./res/image/slides.assets/image-20241023101353525.png)

![image-20241023101355607](./res/image/slides.assets/image-20241023101355607.png)

---

# E7

![image-20241023101358049](./res/image/slides.assets/image-20241023101358049.png)

<!-- ![image-20241023101401378](./res/image/slides.assets/image-20241023101401378.png){.w-40} -->

---

# E7

![image-20241023101358049](./res/image/slides.assets/image-20241023101358049.png)

![image-20241023101401378](./res/image/slides.assets/image-20241023101401378.png){.w-40}

---

# E8

![image-20241023101404249](./res/image/slides.assets/image-20241023101404249.png){.w-110}

<!-- ![image-20241023101409151](./res/image/slides.assets/image-20241023101409151.png){.w-40} -->

---

# E8

![image-20241023101404249](./res/image/slides.assets/image-20241023101404249.png){.w-110}

![image-20241023101409151](./res/image/slides.assets/image-20241023101409151.png){.w-40}

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
