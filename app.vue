<script setup></script>
<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator :duration="3000" :height="5" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
.page-enter,
.page-leave-to,
.layout-enter,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* untuk perpindahan link */

.page-enter-active,
.page-leave-active {
  transition: all 300ms;
}

.page-enter-active {
  animation-duration: 200ms;
  animation-name: swing-in-top-fwd;
  animation-timing-function: linear;
  backface-visibility: hidden;
}

.page-leave-active {
  animation-name: slide-top;
  animation-duration: 300ms;
}

/* untuk perpindahan layout */

.layout-enter-active,
.layout-leave-active {
  transition: all 300ms;
}

.layout-enter-active {
  animation-duration: 0.3s;
  animation-name: swing-in-top-fwd;
  animation-timing-function: linear;
  backface-visibility: hidden;
}

.layout-leave-active {
  animation-name: slide-top;
  animation-duration: 0.4s;
}

/* Scale Y */
.scale-y-enter-active,
.scale-y-leave-active {
  transition: all 3s linear;
  will-change: max-height, opacity;
  max-height: 50px;
  overflow: hidden;
  opacity: 1;
}
.scale-y-enter-from,
.scale-y-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
/* rotate */
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}

.router-link-active {
  @apply font-bold text-white;
}
.router-link-active:hover {
  @apply underline;
}
</style>
