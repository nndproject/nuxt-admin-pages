<template>
  <main>
    <!-- <div class="px-8 pb-0 xl:px-8 xl:pt-8 mx-auto"> -->
    <div class="mx-auto max-w-7xl px-6 py-6 sm:px-6 lg:px-8">
      <div class="relative">
        <div class="grid grid-cols-12 gap-6 pb-10">
          <div class="col-span-12">
            <div
              class="bg-primary-800 flex flex-col items-center rounded-2xl p-4 sm:flex-row"
            >
              <div class="relative h-[168px] w-[280px] shrink-0">
                <img
                  class="pointer-events-none absolute -start-6 -top-20 sm:-start-10"
                  src="/img/doctor.svg"
                  alt="Doctor illustration"
                />
              </div>
              <div class="mt-6 grow sm:mt-0">
                <div class="text-center sm:text-left">
                  <p
                    class="font-heading text-xl font-semibold leading-normal text-white opacity-90"
                    tag="h1"
                  >
                    <!--[--><span>Today's Summary</span
                    ><!--]-->
                  </p>
                  <p
                    class="font-alt text-sm font-normal leading-normal text-white opacity-70"
                  >
                    <!--[--><span>
                      Monitor your activity and keep improving your weak points. </span
                    ><!--]-->
                  </p>
                  <div
                    class="mt-6 flex flex-wrap gap-y-6 pb-4 text-center sm:mt-4 sm:gap-x-8 sm:pb-0 sm:text-left"
                  >
                    <div class="min-w-[33.3%] sm:min-w-0">
                      <p
                        class="font-heading text-sm font-medium leading-normal text-white opacity-90"
                        tag="h4"
                      >
                        <!--[--><span>900 kcal</span
                        ><!--]-->
                      </p>
                      <p
                        class="font-alt font-normal leading-normal text-white opacity-70"
                      >
                        <!--[--><span>Burnt today</span
                        ><!--]-->
                      </p>
                    </div>
                    <div class="min-w-[33.3%] sm:min-w-0">
                      <p
                        class="font-heading text-sm font-medium leading-normal text-white opacity-90"
                        tag="h4"
                      >
                        <!--[--><span>2300 kcal</span
                        ><!--]-->
                      </p>
                      <p
                        class="font-alt font-normal leading-normal text-white opacity-70"
                      >
                        <!--[--><span>Eaten today</span
                        ><!--]-->
                      </p>
                    </div>
                    <div class="min-w-[33.3%] sm:min-w-0">
                      <p
                        class="font-heading text-sm font-medium leading-normal text-white opacity-90"
                        tag="h4"
                      >
                        <!--[--><span>2%</span
                        ><!--]-->
                      </p>
                      <p
                        class="font-alt font-normal leading-normal text-white opacity-70"
                      >
                        <!--[--><span>Fat burnt</span
                        ><!--]-->
                      </p>
                    </div>
                    <div class="min-w-[33.3%] sm:min-w-0">
                      <p
                        class="font-heading text-sm font-medium leading-normal text-white opacity-90"
                        tag="h4"
                      >
                        <!--[--><span>11,424</span
                        ><!--]-->
                      </p>
                      <p
                        class="font-alt font-normal leading-normal text-white opacity-70"
                      >
                        <!--[--><span>Steps walked</span
                        ><!--]-->
                      </p>
                    </div>
                    <div class="ptablet:hidden min-w-[33.3%] sm:min-w-0">
                      <p
                        class="font-heading text-sm font-medium leading-normal text-white opacity-90"
                        tag="h4"
                      >
                        <!--[--><span>8.4km</span
                        ><!--]-->
                      </p>
                      <p
                        class="font-alt font-normal leading-normal text-white opacity-70"
                      >
                        <!--[--><span>Distance today</span
                        ><!--]-->
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-6 sm:col-span-3">
            <div class="flex flex-col">
              <div class="mb-3 flex items-center gap-2">
                <div
                  class="relative inline-flex shrink-0 items-center justify-center h-12 w-12 rounded-xl bg-primary-500/10"
                >
                  <!--[--><svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="icon text-primary-500 h-5 w-5"
                    style=""
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    data-v-cd102a71=""
                  >
                    <g fill="currentColor">
                      <path
                        d="M208 144a80 80 0 0 1-160 0c0-72 80-128 80-128s80 56 80 128Z"
                        opacity=".2"
                      ></path>
                      <path
                        d="M174 47.75a254.19 254.19 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.19 254.19 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25ZM128 216a72.08 72.08 0 0 1-72-72c0-57.23 55.47-105 72-118c16.53 13 72 60.75 72 118a72.08 72.08 0 0 1-72 72Zm55.89-62.66a57.6 57.6 0 0 1-46.56 46.55a8.75 8.75 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"
                      ></path>
                    </g></svg
                  ><!--]-->
                </div>
                <div class="flex items-center gap-1 font-sans">
                  <span class="text-muted-800 font-semibold"> 114/90 </span
                  ><span class="text-muted-400 text-sm">Min/Max</span>
                </div>
              </div>
              <div>
                <p
                  class="font-heading font-medium leading-normal text-muted-800"
                  tag="h3"
                >
                  <!--[--><span>Blood quality</span
                  ><!--]-->
                </p>
                <p
                  class="font-alt font-normal leading-normal text-muted-400 text-sm"
                >
                  <!--[--><span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Illis videtur. </span
                  ><!--]-->
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-6 sm:col-span-3">
            <div class="flex flex-col">
              <div class="mb-3 flex items-center gap-2">
                <div
                  class="relative inline-flex shrink-0 items-center justify-center h-12 w-12 rounded-xl bg-primary-500/10"
                >
                  <!--[--><svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="icon text-primary-500 h-5 w-5"
                    style=""
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    data-v-cd102a71=""
                  >
                    <g fill="currentColor">
                      <path
                        d="M232 94c0 66-104 122-104 122S24 160 24 94a54 54 0 0 1 54-54c22.59 0 41.94 12.31 50 32c8.06-19.69 27.41-32 50-32a54 54 0 0 1 54 54Z"
                        opacity=".2"
                      ></path>
                      <path
                        d="M72 136H32a8 8 0 0 1 0-16h35.72l13.62-20.44a8 8 0 0 1 13.32 0l25.34 38l9.34-14A8 8 0 0 1 136 120h24a8 8 0 0 1 0 16h-19.72l-13.62 20.44a8 8 0 0 1-13.32 0L88 118.42l-9.34 14A8 8 0 0 1 72 136ZM178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62v2.25a8 8 0 1 0 16-.5V94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8c-10.83-6.31-42.63-26-66.68-52.21a8 8 0 1 0-11.8 10.82c31.17 34 72.93 56.68 74.69 57.63a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62Z"
                      ></path>
                    </g></svg
                  ><!--]-->
                </div>
                <div class="flex items-center gap-1 font-sans">
                  <span class="text-muted-800 font-semibold"> 112 </span
                  ><span class="text-muted-400 text-sm">Bpm</span>
                </div>
              </div>
              <div>
                <p
                  class="font-heading font-medium leading-normal text-muted-800"
                  tag="h3"
                >
                  <!--[--><span>Heart rate</span
                  ><!--]-->
                </p>
                <p
                  class="font-alt font-normal leading-normal text-muted-400 text-sm"
                >
                  <!--[--><span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Illis videtur. </span
                  ><!--]-->
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-6 sm:col-span-3">
            <div class="flex flex-col">
              <div class="mb-3 flex items-center gap-2">
                <div
                  class="relative inline-flex shrink-0 items-center justify-center h-12 w-12 rounded-xl bg-primary-500/10"
                >
                  <!--[--><svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="icon text-primary-500 h-5 w-5"
                    style=""
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    data-v-cd102a71=""
                  >
                    <g fill="currentColor">
                      <path
                        d="M208 144a80 80 0 0 1-160 0a100.8 100.8 0 0 1 1.3-16h157.4a100.8 100.8 0 0 1 1.3 16Z"
                        opacity=".2"
                      ></path>
                      <path
                        d="M174 47.75a254.19 254.19 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.19 254.19 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25ZM128 26c14.16 11.1 56.86 47.74 68.84 94H59.16C71.14 73.76 113.84 37.12 128 26Zm0 190a72.08 72.08 0 0 1-72-72q0-4 .36-8h143.28q.36 4 .36 8a72.08 72.08 0 0 1-72 72Z"
                      ></path>
                    </g></svg
                  ><!--]-->
                </div>
                <div class="flex items-center gap-1 font-sans">
                  <span class="text-muted-800 font-semibold"> 12/14 </span
                  ><span class="text-muted-400 text-sm">Units</span>
                </div>
              </div>
              <div>
                <p
                  class="font-heading font-medium leading-normal text-muted-800"
                  tag="h3"
                >
                  <!--[--><span>Blood pressure</span
                  ><!--]-->
                </p>
                <p
                  class="font-alt font-normal leading-normal text-muted-400 text-sm"
                >
                  <!--[--><span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Illis videtur. </span
                  ><!--]-->
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-6 sm:col-span-3">
            <div class="flex flex-col">
              <div class="mb-3 flex items-center gap-2">
                <div
                  class="relative inline-flex shrink-0 items-center justify-center h-12 w-12 rounded-xl bg-primary-500/10"
                >
                  <!--[--><svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="icon text-primary-500 h-5 w-5"
                    style=""
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                    data-v-cd102a71=""
                  >
                    <g fill="currentColor">
                      <path
                        d="M232 160v24a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8v-22.87C24 103.65 70.15 56.2 127.63 56A104 104 0 0 1 232 160Z"
                        opacity=".2"
                      ></path>
                      <path
                        d="M207.06 80.67A111.24 111.24 0 0 0 128 48h-.4C66.07 48.21 16 99 16 161.13V184a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-24a111.25 111.25 0 0 0-32.94-79.33ZM224 184H119.71l54.76-75.3a8 8 0 0 0-12.94-9.42L99.92 184H32v-22.87c0-3.08.15-6.12.43-9.13H56a8 8 0 0 0 0-16H35.27c10.32-38.86 44-68.24 84.73-71.66V88a8 8 0 0 0 16 0V64.33A96.14 96.14 0 0 1 221 136h-21a8 8 0 0 0 0 16h23.67c.21 2.65.33 5.31.33 8Z"
                      ></path>
                    </g></svg
                  ><!--]-->
                </div>
                <div class="flex items-center gap-1 font-sans">
                  <span class="text-muted-800 font-semibold"> 60.4 </span
                  ><span class="text-muted-400 text-sm">Lbs</span>
                </div>
              </div>
              <div>
                <p
                  class="font-heading font-medium leading-normal text-muted-800"
                  tag="h3"
                >
                  <!--[--><span>Weight</span
                  ><!--]-->
                </p>
                <p
                  class="font-alt font-normal leading-normal text-muted-400 text-sm"
                >
                  <!--[--><span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Illis videtur. </span
                  ><!--]-->
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="my-3 flex h-8 items-center justify-between">
          <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
          >
            Bordered Table
          </h2>
        </div>
        <div>
          <p class="max-w-xl">
            Tables display information in a way that's easy to scan, so that
            users can look for patterns and insights. Check out code for detail
            of usage.
          </p>
          <div class="mt-5">
            <div
              class="is-scrollbar-hidden min-w-full overflow-x-auto rounded-lg border border-slate-200 dark:border-navy-500"
            >
              <Table />
            </div>
          </div>
        </div>
      </div>

      <!-- listing v2 -->
      <div class="space-y-1">
        <div
          v-for="i in 5"
          :key="i"
          class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl flex flex-col p-5 sm:flex-row sm:items-center"
        >
          <!--[-->
          <div
            class="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-left"
          >
            <div
              class="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full"
            >
              <div
                class="rounded-full flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300"
              >
                <!--[--><img
                  src="/img/kldi/polri.png"
                  class="h-16 w-16 max-h-full max-w-full object-cover shadow-sm dark:border-transparent"
                /><!----><!----><!--]-->
              </div>
              <div
                class="h-4 w-4 bottom-0 end-0 dark:bg-muted-800 absolute z-10 block overflow-hidden rounded-full bg-white"
              >
                <div
                  class="relative h-full w-full scale-90 rounded-full object-cover bg-green-500"
                  alt=""
                ></div>
              </div>
              <!---->
            </div>
            <div>
              <p
                class="font-heading font-medium leading-normal text-muted-800 dark:text-muted-100"
                tag="h3"
              >
                PAKET 72 KAPOR RUTIN POLRI APBN T.A. 2023
              </p>
              <p
                class="font-alt text-xs font-normal leading-none text-muted-400 flex items-end text-sm"
              >
                <!--[--><svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="icon h-4 w-4"
                  style=""
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  data-v-cd102a71=""
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path
                      d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </g></svg
                ><span>LPSE KEPOLISIAN REPUBLIK INDONESIA</span
                ><!--]-->
              </p>
            </div>
          </div>
          <div
            class="flex flex-col gap-4 pt-4 sm:ms-auto sm:flex-row sm:items-center sm:justify-end sm:pt-0"
          >
            <div
              class="divide-muted-200 dark:divide-muted-700 flex items-center justify-center divide-x"
            >
              <div class="flex flex-col gap-1 px-4 text-center"></div>
              <div class="flex flex-col gap-1 px-4 text-center">
                <p
                  class="font-heading text-base font-semibold leading-normal text-primary-500 dark:text-muted-100"
                  tag="h3"
                >
                  <span>Rp. 4,803,318,000.00</span>
                </p>
                <p
                  class="font-alt text-base font-semibold leading-none text-muted-400 !text-[0.65rem] uppercase"
                >
                  <span>Nilai HPS</span>
                </p>
              </div>
              <div class="flex flex-col gap-1 px-4 text-center"></div>
            </div>

            <div class="sm:ms-6">
              <button
                type="button"
                class="relative font-normal text-sm inline-flex items-center justify-center leading-5 no-underline h-8 px-3 py-2 space-x-1 border nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:enabled:shadow-none text-muted-700 bg-white border-muted-300 dark:text-white dark:bg-muted-700 dark:border-muted-600 dark:hover:enabled:bg-muted-600 hover:enabled:bg-muted-50 dark:active:enabled:bg-muted-700/70 active:enabled:bg-muted-100 rounded-md w-full sm:w-auto"
              >
                <!--[-->
                View
                <!--]-->
              </button>
            </div>
          </div>
          <!--]-->
        </div>
      </div>

      <div class="space-y-1">
        <div
          v-for="i in 2"
          :key="i"
          class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl flex flex-col p-5 sm:flex-row sm:items-center"
        >
          <!--[-->
          <div
            class="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-left"
          >
            <div
              class="relative inline-flex shrink-0 items-center justify-center outline-none h-16 w-16 rounded-full bg-muted-100 dark:bg-muted-700/70"
            >
              <div
                class="rounded-full flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300"
              >
                <img
                  src="/img/kldi/pu.png"
                  class="h-16 w-16 max-h-full max-w-full object-cover shadow-sm dark:border-transparent"
                />
              </div>
              <div
                class="h-5 w-5 bottom-0 end-0 dark:bg-muted-800 absolute z-10 block overflow-hidden rounded-full bg-white"
              >
                <div
                  class="relative h-full w-full scale-90 rounded-full object-cover bg-green-500"
                  alt=""
                ></div>
              </div>
            </div>
            <div class="w-full sm:w-auto">
              <p
                class="font-heading font-medium leading-normal text-muted-800 dark:text-muted-100"
                tag="h3"
              >
                Pemeliharaan Rutin Jalan Dan Jembatan Ruas Sp. Temajuk - Sp.
                Tanjung Dan Aruk - Sp. Take
              </p>
              <div class="flex items-center justify-between sm:justify-start">
                <div
                  class="text-muted-400 mt-3 flex items-center gap-1 text-left text-sm sm:mt-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="icon h-3 w-3"
                    style=""
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    data-v-cd102a71=""
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path
                        d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
                      ></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </g></svg
                  ><span>San Diego</span>
                </div>
                <div class="hidden px-2 sm:block"><span>·</span></div>
                <div
                  class="text-muted-400 mt-3 flex items-center gap-1 text-left text-sm sm:mt-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="icon h-3 w-3"
                    style=""
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    data-v-cd102a71=""
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </g></svg
                  ><span>Full Time</span>
                </div>
                <div class="hidden px-2 sm:block"><span>·</span></div>
                <div
                  class="text-muted-400 mt-3 flex items-center gap-1 text-left text-sm sm:mt-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="icon h-3 w-3"
                    style=""
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    data-v-cd102a71=""
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </g></svg
                  ><span>3 Years Exp.</span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="mt-4 flex items-center justify-end gap-2 sm:ms-auto sm:mt-0"
          >
            <button
              type="button"
              class="disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none false false text-muted-700 bg-white border border-muted-300 dark:text-white dark:bg-muted-700 dark:hover:bg-muted-600 dark:border-muted-600 hover:bg-muted-50 rounded-full h-10 w-10 p-2 nui-focus relative inline-flex items-center justify-center space-x-1 text-sm font-normal leading-5 no-underline outline-none transition-all duration-300 hidden sm:inline-flex"
              small=""
              muted=""
              data-tooltip="Add to Bookmarks"
            >
              <!--[--><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon h-4 w-4"
                style=""
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
                data-v-cd102a71=""
              >
                <g fill="currentColor">
                  <path
                    d="M192 176v48l-64-40l-64 40v-48l64-40Z"
                    opacity=".2"
                  ></path>
                  <path
                    d="M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16Zm0 16v113.57l-51.77-32.35a8 8 0 0 0-8.48 0L72 161.56V48Zm-51.77 129.22a8 8 0 0 0-8.48 0L72 209.57v-29.14l56-35l56 35v29.14Z"
                  ></path>
                </g></svg
              ><!--]-->
            </button>
          </div>
          <!--]-->
        </div>
        <div class="mt-6">
          <div
            class="inline-flex w-full flex-col md:flex-row md:justify-between"
            total="100"
            current="1"
            limit="10"
          >
            <ul
              class="border-muted-200 bg-muted-100 dark:border-muted-600 dark:bg-muted-700 mb-4 inline-flex flex-wrap gap-2 border p-1 md:mb-0 md:gap-1 rounded-full"
            >
              <li>
                <a
                  aria-current="page"
                  href="/layouts/list-view-3"
                  class="flex h-10 w-10 items-center justify-center border text-sm transition-all duration-300 bg-primary-500 border-primary-500 shadow-primary-500/50 dark:shadow-primary-500/20 text-white shadow-sm rounded-full"
                  tabindex="0"
                  >1</a
                >
              </li>
              <li v-for="i in 4" :key="i">
                <a
                  href="/layouts/list-view-3?page=2"
                  class="flex h-10 w-10 items-center justify-center text-sm transition-all duration-300 text-black-500 dark:bg-muted-800 border-muted-200 dark:border-muted-700 hover:bg-muted-100 dark:hover:bg-muted-900 hover:text-muted-700 dark:hover:text-muted-400 bg-white rounded-full"
                  tabindex="0"
                  >{{ i + 1 }}</a
                >
              </li>
            </ul>
            <div
              class="border-muted-200 bg-muted-100 dark:border-muted-600 dark:bg-muted-700 flex items-center justify-end gap-1 border p-1 rounded-full"
            >
              <!--[--><!--]--><a
                aria-current="page"
                href="/layouts/list-view-3"
                class="border-muted-200 text-muted-500 hover:bg-muted-100 hover:text-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:hover:bg-muted-900 dark:hover:text-muted-400 flex h-10 w-full items-center justify-center bg-white text-sm transition-all duration-300 md:w-10 rounded-full"
                tabindex="0"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="icon block h-4 w-4"
                  style=""
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  data-v-cd102a71=""
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m15 18l-6-6l6-6"
                  ></path></svg></a
              ><a
                aria-current="page"
                href="/layouts/list-view-3?page=2"
                class="border-muted-200 text-muted-500 hover:bg-muted-100 hover:text-muted-700 dark:border-muted-700 dark:bg-muted-800 dark:hover:bg-muted-900 dark:hover:text-muted-400 flex h-10 w-full items-center justify-center bg-white text-sm transition-all duration-300 md:w-10 rounded-full"
                tabindex="0"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="icon block h-4 w-4"
                  style=""
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  data-v-cd102a71=""
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m9 18l6-6l-6-6"
                  ></path></svg></a
              ><!--[--><!--]-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
