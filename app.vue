<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
@keyframes fadeIn {
  0% {
    opacity: 0.001;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.001;
  }
}
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s;
}
.page-enter,
.page-leave-to,
.layout-enter,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.page-enter-active,
.layout-enter-active {
  animation-duration: 250ms;
  animation-name: fadeIn;
  animation-timing-function: linear;
  backface-visibility: hidden;
}
.page-leave-active,
.layout-leave-active {
  animation-name: fadeOut;
  animation-duration: 0.25s;
}
/* Scale Y */
.scale-y-enter-active,
.scale-y-leave-active {
  transition: all 300ms linear;
  will-change: max-height, opacity;
  max-height: 50px;
  overflow: hidden;
  opacity: 1;
}
.scale-y-enter-from,
.scale-y-leave-to {
  max-height: 0;
  opacity: 0;
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
  @apply bg-gray-200 font-bold text-gray-950;
}
.router-link-active:hover {
  @apply bg-purple-600 font-bold;
}
</style>
