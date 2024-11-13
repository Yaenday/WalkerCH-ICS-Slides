---
# You can also start simply with 'default'
theme: academic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
highlighter: shiki
# some information about your slides (markdown enabled)
title: 09-Midterm
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
coverBackgroundUrl: /res/image/cover/cover_09.jpg

---

# Midterm {.font-bold}

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

1. 平均分：77.85
2. 中位数：78.0
3. 最高分：94.0

---
layout: center
---

- **题目一**（满分30）
  - 平均分：21.85
  - 最高分：26
  - 最低分：16
  - 满分个数：0

---
layout: center
---

- **题目二**（满分15）
  - 平均分：12.54
  - 最高分：15
  - 最低分：9
  - 满分个数：3

---
layout: center
---

- **题目三**（满分15）
  - 平均分：11.0
  - 最高分：15
  - 最低分：2
  - 满分个数：2

---
layout: center
---

- **题目四**（满分20）
  - 平均分：17.46
  - 最高分：20
  - 最低分：11
  - 满分个数：3

---
layout: center
---

- **题目五**（满分20）
  - 平均分：15.0
  - 最高分：20
  - 最低分：0
  - 满分个数：5


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
    <!-- Reference: [Weicheng Lin]'s presentation.<br> -->
    <!-- Reference: [Arthals]'s templates and content. -->
  </font>
</p>

</div>

![wechat](./res/image/slides.assets/wechat.jpg){.w-50.rounded-md}

</div>
