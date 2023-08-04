<script setup>
import { XMarkIcon } from "@heroicons/vue/20/solid";
import { SignalIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <main>
    <!-- <div
      class="absolute inset-y-0 bottom-[0rem] -y-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      aria-hidden="true"
    >
      <div
        class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div> -->
    <div class="min-h-full">
      <Navbar />
      <div
        class="relative isolate flex items-center gap-x-6 overflow-hidden bg-white-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
      >
        <div
          class="absolute left-[max(-7rem)] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            class="aspect-[577/310] w-[56.0625rem] bg-gradient-to-r from-[#ff006a] to-[#1100ff]"
            style="
              clip-path: polygon(
                74.8% 41.9%,
                97.2% 73.2%,
                100% 34.9%,
                92.5% 0.4%,
                87.5% 0%,
                75% 28.6%,
                58.5% 54.6%,
                50.1% 56.8%,
                46.9% 44%,
                48.3% 17.4%,
                24.7% 53.9%,
                0% 27.9%,
                11.9% 74.2%,
                24.9% 54.1%,
                68.6% 100%,
                74.8% 41.9%
              );
            "
          />
        </div>
        <div
          class="absolute left-[max(15rem,calc(40%+1rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            class="aspect-[577/310] w-[65rem] bg-gradient-to-r from-[#ff006a] to-[#1100ff]"
            style="
              clip-path: polygon(
                74.8% 41.9%,
                97.2% 73.2%,
                100% 34.9%,
                92.5% 0.4%,
                87.5% 0%,
                75% 28.6%,
                58.5% 54.6%,
                50.1% 56.8%,
                46.9% 44%,
                48.3% 17.4%,
                24.7% 53.9%,
                0% 27.9%,
                11.9% 74.2%,
                24.9% 54.1%,
                68.6% 100%,
                74.8% 41.9%
              );
            "
          />
        </div>
        <div class="flex flex-wrap items-center gap-x-1 gap-y-2">
          <SignalIcon class="h-5 text-white" aria-hidden="true" />
          <p class="text-sm leading-6 text-white">
            <strong class="font-bold">INFORMASI LELANG : </strong> Paket Belanja
            Jasa Konsultan Pengawasan Pembangunan Pagar SMP (BHP)
          </p>
          <a
            href="#"
            class="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >Buka Lelang <span aria-hidden="true">&rarr;</span></a
          >
        </div>
        <div class="flex flex-1 justify-end">
          <button
            type="button"
            class="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <span class="sr-only">Dismiss</span>
            <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>

      <header class="bg-white shadow mb-14">
        <!-- <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"> -->
        <div class="mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <slot />
    </div>
  </main>
</template>
