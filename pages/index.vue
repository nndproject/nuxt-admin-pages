<template>
  <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div class="relative">
        <div class="grid grid-cols-12 gap-6">
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
                    class="font-heading text-xl font-semibold leading-normal leading-normal text-white opacity-90"
                    tag="h1"
                  >
                    <!--[--><span>Today's Summary</span
                    ><!--]-->
                  </p>
                  <p
                    class="font-alt text-sm font-normal leading-normal leading-normal text-white opacity-70"
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
                        class="font-heading text-sm font-medium leading-normal leading-normal text-white opacity-90"
                        tag="h4"
                      >
                        <!--[--><span>900 kcal</span
                        ><!--]-->
                      </p>
                      <p
                        class="font-alt text-xs font-normal leading-normal leading-normal text-white opacity-70"
                      >
                        <!--[--><span>Burnt today</span
                        ><!--]-->
                      </p>
                    </div>
                    <div class="min-w-[33.3%] sm:min-w-0">
                      <p
                        class="font-heading text-sm font-medium leading-normal leading-normal text-white opacity-90"
                        tag="h4"
                      >
                        <!--[--><span>2300 kcal</span
                        ><!--]-->
                      </p>
                      <p
                        class="font-alt text-xs font-normal leading-normal leading-normal text-white opacity-70"
                      >
                        <!--[--><span>Eaten today</span
                        ><!--]-->
                      </p>
                    </div>
                    <div class="min-w-[33.3%] sm:min-w-0">
                      <p
                        class="font-heading text-sm font-medium leading-normal leading-normal text-white opacity-90"
                        tag="h4"
                      >
                        <!--[--><span>2%</span
                        ><!--]-->
                      </p>
                      <p
                        class="font-alt text-xs font-normal leading-normal leading-normal text-white opacity-70"
                      >
                        <!--[--><span>Fat burnt</span
                        ><!--]-->
                      </p>
                    </div>
                    <div class="min-w-[33.3%] sm:min-w-0">
                      <p
                        class="font-heading text-sm font-medium leading-normal leading-normal text-white opacity-90"
                        tag="h4"
                      >
                        <!--[--><span>11,424</span
                        ><!--]-->
                      </p>
                      <p
                        class="font-alt text-xs font-normal leading-normal leading-normal text-white opacity-70"
                      >
                        <!--[--><span>Steps walked</span
                        ><!--]-->
                      </p>
                    </div>
                    <div class="ptablet:hidden min-w-[33.3%] sm:min-w-0">
                      <p
                        class="font-heading text-sm font-medium leading-normal leading-normal text-white opacity-90"
                        tag="h4"
                      >
                        <!--[--><span>8.4km</span
                        ><!--]-->
                      </p>
                      <p
                        class="font-alt text-xs font-normal leading-normal leading-normal text-white opacity-70"
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
                  class="font-heading text-sm font-medium leading-normal leading-normal text-muted-800"
                  tag="h3"
                >
                  <!--[--><span>Blood quality</span
                  ><!--]-->
                </p>
                <p
                  class="font-alt text-xs font-normal leading-normal leading-normal text-muted-400"
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
                  class="font-heading text-sm font-medium leading-normal leading-normal text-muted-800"
                  tag="h3"
                >
                  <!--[--><span>Heart rate</span
                  ><!--]-->
                </p>
                <p
                  class="font-alt text-xs font-normal leading-normal leading-normal text-muted-400"
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
                  class="font-heading text-sm font-medium leading-normal leading-normal text-muted-800"
                  tag="h3"
                >
                  <!--[--><span>Blood pressure</span
                  ><!--]-->
                </p>
                <p
                  class="font-alt text-xs font-normal leading-normal leading-normal text-muted-400"
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
                  class="font-heading text-sm font-medium leading-normal text-muted-800"
                  tag="h3"
                >
                  <!--[--><span>Weight</span
                  ><!--]-->
                </p>
                <p
                  class="font-alt text-xs font-normal leading-normal leading-normal text-muted-400"
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
    </div>
  </main>
</template>
