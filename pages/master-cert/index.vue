<!-- https://tairo.cssninja.io/dashboards/personal-2 -->
<template>
  <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div class="relative">
        <div class="mb-6 flex items-center justify-between">
          <p
            class="font-heading text-xl font-semibold leading-normal leading-normal"
            tag="h3"
          >
            <!--[--><span>Popular Meals</span
            ><!--]-->
          </p>
          <button
            class="bg-primary-500/10 hover:bg-primary-500/20 text-primary-600 inline-flex cursor-pointer items-center justify-center gap-x-1 rounded-full py-2 pe-4 ps-2 font-sans text-sm transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="icon h-5 w-5"
              style=""
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
              data-v-cd102a71=""
            >
              <g fill="currentColor">
                <path
                  d="M216 136a88 88 0 1 1-88-88a88 88 0 0 1 88 88Z"
                  opacity=".2"
                ></path>
                <path
                  d="M128 40a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96Zm0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80Zm45.66-125.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0ZM96 16a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8Z"
                ></path>
              </g></svg
            ><span class="text-sm">Delivery:</span><span>~ 25min</span>
          </button>
        </div>
        <div class="mb-14 grid grid-cols-12 gap-4">
          <div
            v-for="i in 8"
            :key="i"
            class="flex cursor-pointer flex-col items-center rounded-full border border-muted-200 shadow-md py-5 hover:bg-yellow-400 hover:border-yellow-400"
          >
            <div
              class="rounded-full border p-2 transition-colors duration-500 ease-in-out border-muted-200 bg-white"
            >
              <img
                src="/img/icons/icon-1.svg"
                alt="Food type icon"
                class="h-12 w-12 scale-[0.8]"
              />
            </div>
            <p class="mb-10 mt-3 text-xs font-bold">Pizza {{ i }}</p>
          </div>

          <div class="hidden items-center justify-center sm:flex">
            <button
              type="button"
              class="disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none false false text-muted-700 bg-white border border-muted-300 dark:text-white dark:bg-muted-700 dark:hover:bg-muted-600 dark:border-muted-600 hover:bg-muted-50 rounded-full h-10 w-10 p-2 nui-focus relative inline-flex items-center justify-center space-x-1 font-sans text-sm font-normal leading-5 no-underline outline-none transition-all duration-300 hover:border-yellow-500 hover:text-yellow-500"
              data-tooltip="All categories"
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
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m9 18l6-6l-6-6"
                ></path></svg
              ><!--]-->
            </button>
          </div>
        </div>
      </div>
      <div class="grid gap-x-3 gap-y-6 sm:grid-cols-3">
        <a
          v-for="i in 8"
          :key="i"
          aria-current="page"
          href="/dashboards/delivery#"
          class="router-link-active router-link-exact-active relative"
          ><div
            class="border-muted-200 relative w-full border bg-white transition-all duration-300 rounded-xl hover:border-primary-500 hover:shadow-muted-300/30 dark:hover:shadow-muted-900/40 p-3 hover:shadow-xl"
          >
            <!--[-->
            <div
              class="ltablet:h-28 bg-muted-100 relative mb-3 h-36 w-full rounded-xl sm:h-32"
            >
              <img
                class="ltablet:max-w-[175px] absolute inset-x-0 -top-4 mx-auto max-w-[210px] sm:-top-6 sm:max-w-[190px]"
                src="/img/meal-1.png"
                alt="Buritos Duo"
              />
            </div>
            <div class="mb-2">
              <p
                class="font-heading text-sm font-medium leading-normal text-muted-900"
                tag="h4"
              >
                <span>Buritos Duo</span>
              </p>
              <p
                class="font-alt text-xs font-normal leading-normal leading-normal text-muted-500 dark:text-muted-400 line-clamp-1"
              >
                <!--[--><span>Tomato sauce, mozzarella, basil, olive oil</span
                ><!--]-->
              </p>
            </div>
            <div class="flex items-center justify-between">
              <div class="divide-muted-200 flex items-center divide-x">
                <div class="pe-4">
                  <span class="font-sans font-bold text-muted-900"> $9.99</span>
                </div>
                <div class="flex items-center gap-1 ps-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="icon h-3 w-3 text-yellow-400"
                    style=""
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                    data-v-cd102a71=""
                  >
                    <path
                      fill="currentColor"
                      d="m9.89 17.514l-4.21 2.257l-.099.044c-.715.27-1.39.216-1.903-.242c-.482-.43-.657-1.046-.557-1.755l.704-4.86l-3.18-3.342c-.55-.56-.765-1.248-.58-1.968c.205-.799.88-1.258 1.851-1.412l4.227-.638l2.213-4.585C8.7.366 9.236-.017 9.911.001c.66.017 1.183.422 1.593 1.143l2.14 4.486l4.74.658c.753.13 1.308.522 1.53 1.176c.22.653.01 1.313-.557 1.987l-3.44 3.51l.772 4.856c.122.84-.025 1.505-.586 1.9c-.506.357-1.139.357-1.867.107l-.12-.053l-4.226-2.257Z"
                    ></path></svg
                  ><span class="text-muted-400 font-sans text-xs"
                    >4.5 (12)
                  </span>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  class="relative font-sans font-normal text-sm inline-flex items-center justify-center leading-5 no-underline h-8 px-3 py-2 space-x-1 border nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:enabled:shadow-none text-muted-700 bg-white border-muted-300 dark:text-white dark:bg-muted-700 dark:border-muted-600 dark:hover:enabled:bg-muted-600 hover:enabled:bg-muted-50 dark:active:enabled:bg-muted-700/70 active:enabled:bg-muted-100 rounded-xl"
                >
                  <!--[--><span>Order</span
                  ><!--]-->
                </button>
              </div>
            </div>
            <!--]-->
          </div></a
        >
        <button
          type="button"
          class="relative font-sans font-normal text-sm inline-flex items-center justify-center leading-5 no-underline h-8 px-3 py-2 space-x-1 border nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:enabled:shadow-none border-primary-500 text-primary-50 bg-primary-500 dark:bg-primary-500 dark:border-primary-500 hover:enabled:bg-primary-400 dark:hover:enabled:bg-primary-400 text-white hover:enabled:shadow-lg hover:enabled:shadow-primary-500/50 dark:hover:enabled:shadow-primary-800/20 focus-visible:outline-primary-400/70 focus-within:outline-primary-400/70 focus-visible:bg-primary-500 active:enabled:bg-primary-500 dark:focus-visible:outline-primary-400 dark:focus-within:outline-primary-400 dark:focus-visible:bg-primary-500 dark:active:enabled:bg-primary-500 rounded-xl"
        >
          <!--[-->
          Candidates
          <!--]-->
        </button>
      </div>
    </div>
  </main>
</template>
