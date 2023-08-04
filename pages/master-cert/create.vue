<script setup>
import { PhotoIcon, UserCircleIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div>
        <form action="" method="POST" class="mx-auto w-ful">
          <div
            class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-md"
          >
            <!--[-->
            <div
              class="border-muted-200 dark:border-muted-700 flex items-center justify-between gap-4 border-b px-10 py-5"
            >
              <div>
                <h3 class="font-heading font-medium leading-normal">
                  <!--[-->
                  New Meeting
                  <!--]-->
                </h3>
                <p class="font-sans font-normal leading-normal text-muted-400">
                  <!--[-->Schedule a new meeting<!--]-->
                </p>
              </div>
              <div class="ms-auto flex items-center gap-2">
                <button
                  type="button"
                  class="relative font-sans font-normal text-sm inline-flex items-center justify-center leading-5 no-underline h-8 px-3 py-2 space-x-1 border nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:enabled:shadow-none text-muted-700 bg-white border-muted-300 dark:text-white dark:bg-muted-700 dark:border-muted-600 dark:hover:enabled:bg-muted-600 hover:enabled:bg-muted-50 dark:active:enabled:bg-muted-700/70 active:enabled:bg-muted-100 rounded-md"
                >
                  <!--[--><svg
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
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 12H5m7 7l-7-7l7-7"
                    ></path></svg
                  ><span>Cancel</span
                  ><!--]--></button
                ><button
                  type="submit"
                  class="relative font-sans font-normal text-sm inline-flex items-center justify-center leading-5 no-underline h-8 px-3 py-2 space-x-1 border nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:enabled:shadow-none border-primary-500 text-primary-50 bg-primary-500 dark:bg-primary-500 dark:border-primary-500 hover:enabled:bg-primary-400 dark:hover:enabled:bg-primary-400 text-white hover:enabled:shadow-lg hover:enabled:shadow-primary-500/50 dark:hover:enabled:shadow-primary-800/20 focus-visible:outline-primary-400/70 focus-within:outline-primary-400/70 focus-visible:bg-primary-500 active:enabled:bg-primary-500 dark:focus-visible:outline-primary-400 dark:focus-within:outline-primary-400 dark:focus-visible:bg-primary-500 dark:active:enabled:bg-primary-500 rounded-md"
                >
                  <!--[--><svg
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
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 6L9 17l-5-5"
                    ></path></svg
                  ><span>Save</span
                  ><!--]-->
                </button>
              </div>
            </div>
            <div class="px-10 py-5">
              <div class="grid grid-cols-12 gap-4">
                <div class="col-span-12">
                  <!--[-->
                  <div class="relative">
                    <label for="ninja-input-164" class="pb-1 nui-label w-full"
                      ><!--[-->What is this meeting about?<!--]--></label
                    >
                    <div class="group/nui-input relative">
                      <input
                        id="ninja-input-164"
                        type="text"
                        class="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 pe-4 ps-9 rounded"
                        placeholder="Ex: Project review with the design team"
                        value=""
                      /><!----><!---->
                      <div
                        class="h-10 w-10 text-muted-400 group-focus-within/nui-input:text-primary-500 absolute start-0 top-0 flex items-center justify-center transition-colors duration-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-75"
                      >
                        <!--[--><svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          class="icon h-[1.15rem] w-[1.15rem]"
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
                            <rect
                              width="3"
                              height="8"
                              x="13"
                              y="2"
                              rx="1.5"
                            ></rect>
                            <path
                              d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"
                            ></path>
                            <rect
                              width="3"
                              height="8"
                              x="8"
                              y="14"
                              rx="1.5"
                            ></rect>
                            <path
                              d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"
                            ></path>
                            <rect
                              width="8"
                              height="3"
                              x="14"
                              y="13"
                              rx="1.5"
                            ></rect>
                            <path
                              d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"
                            ></path>
                            <rect
                              width="8"
                              height="3"
                              x="2"
                              y="8"
                              rx="1.5"
                            ></rect>
                            <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path>
                          </g></svg
                        ><!--]-->
                      </div>
                      <!--[--><!--]--><!---->
                    </div>
                  </div>
                  <!--]-->
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <!--[--><!--[-->
                  <div class="flex w-full flex-col gap-4 sm:flex-row">
                    <div class="relative grow">
                      <!--[-->
                      <div class="relative">
                        <label
                          for="ninja-input-165"
                          class="pb-1 nui-label w-full"
                          ><!--[-->Start date<!--]--></label
                        >
                        <div class="group/nui-input relative">
                          <input
                            id="ninja-input-165"
                            type="text"
                            class="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 pe-4 ps-9 rounded"
                          /><!----><!---->
                          <div
                            class="h-10 w-10 text-muted-400 group-focus-within/nui-input:text-primary-500 absolute start-0 top-0 flex items-center justify-center transition-colors duration-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-75"
                          >
                            <!--[--><svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              class="icon h-[1.15rem] w-[1.15rem]"
                              style=""
                              width="1em"
                              height="1em"
                              viewBox="0 0 256 256"
                              data-v-cd102a71=""
                            >
                              <g fill="currentColor">
                                <path
                                  d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z"
                                  opacity=".2"
                                ></path>
                                <path
                                  d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160v112Z"
                                ></path>
                              </g></svg
                            ><!--]-->
                          </div>
                          <!--[--><!--]--><!---->
                        </div>
                      </div>
                      <!--]-->
                    </div>
                    <div class="relative grow">
                      <!--[-->
                      <div class="relative">
                        <label
                          for="ninja-input-166"
                          class="pb-1 nui-label w-full"
                          ><!--[-->End date<!--]--></label
                        >
                        <div class="group/nui-input relative">
                          <input
                            id="ninja-input-166"
                            type="text"
                            class="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 pe-4 ps-9 rounded"
                          /><!----><!---->
                          <div
                            class="h-10 w-10 text-muted-400 group-focus-within/nui-input:text-primary-500 absolute start-0 top-0 flex items-center justify-center transition-colors duration-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-75"
                          >
                            <!--[--><svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              class="icon h-[1.15rem] w-[1.15rem]"
                              style=""
                              width="1em"
                              height="1em"
                              viewBox="0 0 256 256"
                              data-v-cd102a71=""
                            >
                              <g fill="currentColor">
                                <path
                                  d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z"
                                  opacity=".2"
                                ></path>
                                <path
                                  d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160v112Z"
                                ></path>
                              </g></svg
                            ><!--]-->
                          </div>
                          <!--[--><!--]--><!---->
                        </div>
                      </div>
                      <!--]-->
                    </div>
                  </div>
                  <!--]-->
                  <div
                    class="vc-popover-content-wrapper is-interactive"
                    style=""
                  >
                    <!---->
                  </div>
                  <!--]-->
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <!--[--><!--[-->
                  <div class="flex w-full flex-col gap-4 sm:flex-row">
                    <div class="relative grow">
                      <!--[-->
                      <div class="relative">
                        <label
                          for="ninja-input-167"
                          class="pb-1 nui-label w-full"
                          ><!--[-->Start time<!--]--></label
                        >
                        <div class="group/nui-input relative">
                          <input
                            id="ninja-input-167"
                            type="text"
                            class="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 pe-4 ps-9 rounded"
                          /><!----><!---->
                          <div
                            class="h-10 w-10 text-muted-400 group-focus-within/nui-input:text-primary-500 absolute start-0 top-0 flex items-center justify-center transition-colors duration-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-75"
                          >
                            <!--[--><svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              class="icon h-[1.15rem] w-[1.15rem]"
                              style=""
                              width="1em"
                              height="1em"
                              viewBox="0 0 256 256"
                              data-v-cd102a71=""
                            >
                              <g fill="currentColor">
                                <path
                                  d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z"
                                  opacity=".2"
                                ></path>
                                <path
                                  d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160v112Z"
                                ></path>
                              </g></svg
                            ><!--]-->
                          </div>
                          <!--[--><!--]--><!---->
                        </div>
                      </div>
                      <!--]-->
                    </div>
                    <div class="relative grow">
                      <!--[-->
                      <div class="relative">
                        <label
                          for="ninja-input-168"
                          class="pb-1 nui-label w-full"
                          ><!--[-->End time<!--]--></label
                        >
                        <div class="group/nui-input relative">
                          <input
                            id="ninja-input-168"
                            type="text"
                            class="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 pe-4 ps-9 rounded"
                          /><!----><!---->
                          <div
                            class="h-10 w-10 text-muted-400 group-focus-within/nui-input:text-primary-500 absolute start-0 top-0 flex items-center justify-center transition-colors duration-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-75"
                          >
                            <!--[--><svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              class="icon h-[1.15rem] w-[1.15rem]"
                              style=""
                              width="1em"
                              height="1em"
                              viewBox="0 0 256 256"
                              data-v-cd102a71=""
                            >
                              <g fill="currentColor">
                                <path
                                  d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z"
                                  opacity=".2"
                                ></path>
                                <path
                                  d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160v112Z"
                                ></path>
                              </g></svg
                            ><!--]-->
                          </div>
                          <!--[--><!--]--><!---->
                        </div>
                      </div>
                      <!--]-->
                    </div>
                  </div>
                  <!--]-->
                  <div class="vc-popover-content-wrapper is-interactive">
                    <!---->
                  </div>
                  <!--]-->
                </div>
                <div class="col-span-12">
                  <div class="my-4">
                    <label class="nui-label pb-4">Meeting frequency</label>
                    <div class="flex items-center gap-6">
                      <!--[-->
                      <div
                        class="relative inline-flex items-start gap-1 text-primary-500"
                      >
                        <div
                          class="nui-focus group/nui-radio relative flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full"
                        >
                          <input
                            id="frequency-1"
                            checked=""
                            name="unique_frequency"
                            type="radio"
                            value="day"
                            class="peer absolute z-20 h-5 w-5 cursor-pointer opacity-0"
                          />
                          <div
                            class="border-muted-400 dark:border-muted-600 dark:bg-muted-700 absolute start-0 top-0 z-0 h-full w-full rounded-full border-2 bg-white peer-checked:border-current"
                          ></div>
                          <div
                            class="pointer-events-none z-10 block h-1 w-1 scale-0 rounded-full bg-current transition duration-300 peer-checked:scale-100"
                          ></div>
                        </div>
                        <div class="inline-flex flex-col">
                          <label
                            for="frequency-1"
                            class="relative top-0.5 text-muted-400 ms-1 cursor-pointer select-none font-sans text-sm"
                            ><!--[-->All day<!--]--></label
                          ><!---->
                        </div>
                      </div>
                      <!--]--><!--[-->
                      <div
                        class="relative inline-flex items-start gap-1 text-primary-500"
                      >
                        <div
                          class="nui-focus group/nui-radio relative flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full"
                        >
                          <input
                            id="frequency-2"
                            name="weekly_frequency"
                            type="radio"
                            value="week"
                            class="peer absolute z-20 h-5 w-5 cursor-pointer opacity-0"
                          />
                          <div
                            class="border-muted-400 dark:border-muted-600 dark:bg-muted-700 absolute start-0 top-0 z-0 h-full w-full rounded-full border-2 bg-white peer-checked:border-current"
                          ></div>
                          <div
                            class="pointer-events-none z-10 block h-1 w-1 scale-0 rounded-full bg-current transition duration-300 peer-checked:scale-100"
                          ></div>
                        </div>
                        <div class="inline-flex flex-col">
                          <label
                            for="frequency-2"
                            class="relative top-0.5 text-muted-400 ms-1 cursor-pointer select-none font-sans text-sm"
                            ><!--[-->Repeat every week<!--]--></label
                          ><!---->
                        </div>
                      </div>
                      <!--]-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-muted-50 dark:bg-muted-800/70 border-muted-200 dark:border-muted-700 border-t p-10"
            >
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-heading font-medium leading-normal">
                    <!--[-->
                    Meeting details
                    <!--]-->
                  </h3>
                  <p
                    class="font-sans font-normal leading-normal text-muted-400"
                  >
                    <!--[-->Add some meeting details<!--]-->
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    class="relative font-sans font-normal text-sm inline-flex items-center justify-center leading-5 no-underline h-8 px-3 py-2 space-x-1 border nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:enabled:shadow-none text-muted-700 bg-white border-muted-300 dark:text-white dark:bg-muted-700 dark:border-muted-600 dark:hover:enabled:bg-muted-600 hover:enabled:bg-muted-50 dark:active:enabled:bg-muted-700/70 active:enabled:bg-muted-100 rounded-md"
                  >
                    <!--[--><svg
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
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 5v14m-7-7h14"
                      ></path></svg
                    ><span>Add people</span
                    ><!--]-->
                  </button>
                </div>
              </div>
              <div class="mt-10 grid grid-cols-12 gap-4">
                <div class="col-span-12 grid grid-cols-12">
                  <div
                    class="col-span-12 flex flex-col justify-center sm:col-span-3"
                  >
                    <label class="nui-label">Participants</label>
                  </div>
                  <div class="col-span-12 sm:col-span-9">
                    <div class="flex items-center gap-3">
                      <div
                        class="relative inline-flex shrink-0 items-center justify-center outline-none h-10 w-10 rounded-full"
                        data-tooltip="Anna B."
                      >
                        <div
                          class="rounded-full flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300"
                        >
                          <!--[--><img
                            src="/img/avatars/24.svg"
                            class="h-10 w-10 max-h-full max-w-full object-cover shadow-sm dark:border-transparent"
                          /><!----><!----><!--]-->
                        </div>
                        <!----><!---->
                      </div>
                      <div
                        class="relative inline-flex shrink-0 items-center justify-center outline-none h-10 w-10 rounded-full"
                        data-tooltip="Kendra W."
                      >
                        <div
                          class="rounded-full flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300"
                        >
                          <!--[--><img
                            src="/img/avatars/10.svg"
                            class="h-10 w-10 max-h-full max-w-full object-cover shadow-sm dark:border-transparent"
                          /><!----><!----><!--]-->
                        </div>
                        <!----><!---->
                      </div>
                      <div
                        class="relative inline-flex shrink-0 items-center justify-center outline-none h-10 w-10 rounded-full"
                        data-tooltip="John H."
                      >
                        <div
                          class="rounded-full flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300"
                        >
                          <!--[--><img
                            src="/img/avatars/8.svg"
                            class="h-10 w-10 max-h-full max-w-full object-cover shadow-sm dark:border-transparent"
                          /><!----><!----><!--]-->
                        </div>
                        <!----><!---->
                      </div>
                      <div
                        class="relative inline-flex shrink-0 items-center justify-center outline-none h-10 w-10 rounded-full"
                        data-tooltip="Melany L."
                      >
                        <div
                          class="rounded-full flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300"
                        >
                          <!--[--><img
                            src="/img/avatars/25.svg"
                            class="h-10 w-10 max-h-full max-w-full object-cover shadow-sm dark:border-transparent"
                          /><!----><!----><!--]-->
                        </div>
                        <!----><!---->
                      </div>
                      <div class="ms-auto">
                        <button
                          type="button"
                          class="text-primary-500 font-sans text-sm underline underline-offset-4"
                        >
                          Manage
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 grid grid-cols-12">
                  <div
                    class="col-span-12 flex flex-col justify-center sm:col-span-3"
                  >
                    <label class="nui-label">Meeting location</label>
                  </div>
                  <div class="col-span-12 sm:col-span-9">
                    <!--[-->
                    <div class="relative">
                      <!---->
                      <div class="group/nui-input relative">
                        <input
                          id="ninja-input-169"
                          type="text"
                          class="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 pe-4 ps-9 rounded"
                          placeholder="Ex: meeting room A"
                          value=""
                        /><!----><!---->
                        <div
                          class="h-10 w-10 text-muted-400 group-focus-within/nui-input:text-primary-500 absolute start-0 top-0 flex items-center justify-center transition-colors duration-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-75"
                        >
                          <!--[--><svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            class="icon h-[1.15rem] w-[1.15rem]"
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
                          ><!--]-->
                        </div>
                        <!--[--><!--]--><!---->
                      </div>
                    </div>
                    <!--]-->
                  </div>
                </div>
                <div class="col-span-12 grid grid-cols-12">
                  <div
                    class="col-span-12 flex flex-col justify-center sm:col-span-3"
                  >
                    <label class="nui-label">Meeting URL</label>
                  </div>
                  <div class="col-span-12 sm:col-span-9">
                    <!--[-->
                    <div class="relative">
                      <!---->
                      <div class="group/nui-input relative">
                        <input
                          id="ninja-input-170"
                          type="text"
                          class="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75 px-2 h-10 py-2 text-sm leading-5 pe-4 ps-9 rounded"
                          placeholder="https://zoom.us/m/123456789"
                          value=""
                        /><!----><!---->
                        <div
                          class="h-10 w-10 text-muted-400 group-focus-within/nui-input:text-primary-500 absolute start-0 top-0 flex items-center justify-center transition-colors duration-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-75"
                        >
                          <!--[--><svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            class="icon h-[1.15rem] w-[1.15rem]"
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
                              <path d="m22 8l-6 4l6 4V8Z"></path>
                              <rect
                                width="14"
                                height="12"
                                x="2"
                                y="6"
                                rx="2"
                                ry="2"
                              ></rect>
                            </g></svg
                          ><!--]-->
                        </div>
                        <!--[--><!--]--><!---->
                      </div>
                    </div>
                    <!--]-->
                  </div>
                </div>
                <div class="col-span-12 grid grid-cols-12">
                  <div
                    class="col-span-12 flex flex-col justify-center sm:col-span-3"
                  >
                    <label class="nui-label">Calendar</label>
                  </div>
                  <div class="col-span-12 sm:col-span-9">
                    <!--[-->
                    <div class="relative w-full">
                      <!--[--><!--[--><!---->
                      <div class="relative">
                        <button
                          id="headlessui-listbox-button-372"
                          type="button"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          data-headlessui-state=""
                          class="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 focus:border-muted-300 focus:shadow-muted-300/50 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 dark:focus:shadow-muted-800/50 peer/input relative w-full border bg-white pe-12 ps-4 font-sans text-sm leading-5 focus:shadow-lg disabled:cursor-not-allowed disabled:opacity-75 rounded"
                        >
                          <!--[-->
                          <div class="flex w-full items-center h-10">
                            <!---->
                            <div
                              class="text-muted-300 dark:text-muted-500 truncate text-left"
                            ></div>
                            <span
                              class="border-muted-300 dark:border-muted-700 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center border-l w-10"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                class="icon text-muted-400 transition-transform duration-300 h-4 w-4"
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
                                  d="m6 9l6 6l6-6"
                                ></path></svg></span
                            ><!---->
                          </div>
                          <!--]--></button
                        ><!----><!----><!---->
                      </div>
                      <!--]--><!--]-->
                    </div>
                    <!--]-->
                  </div>
                </div>
                <div class="col-span-12 grid grid-cols-12">
                  <div
                    class="col-span-12 flex flex-col justify-start pt-2 sm:col-span-3"
                  >
                    <label class="nui-label">Description</label>
                  </div>
                  <div class="col-span-12 sm:col-span-9">
                    <!--[-->
                    <div class="relative">
                      <!---->
                      <div class="group/nui-textarea relative flex flex-col">
                        <textarea
                          id="ninja-input-171"
                          class="nui-focus border-muted-300 placeholder:text-muted-300 focus:border-muted-300 focus:shadow-muted-300/50 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 dark:focus:shadow-muted-800/50 peer w-full border bg-white font-sans transition-all duration-300 focus:shadow-lg disabled:cursor-not-allowed disabled:opacity-75 min-h-[2.5rem] text-sm leading-[1.6] rounded resize-none p-2"
                          placeholder="Write some additional details about the meeting..."
                          rows="4"
                        ></textarea
                        ><!----><!----><!----><!---->
                      </div>
                    </div>
                    <!--]-->
                  </div>
                </div>
                <div class="col-span-12 grid grid-cols-12">
                  <div
                    class="col-span-12 flex flex-col justify-start pt-4 sm:col-span-3"
                  >
                    <label class="nui-label">Attachments</label>
                  </div>
                  <div class="col-span-12 sm:col-span-9">
                    <div class="group/nui-file-headless relative">
                      <!--[-->
                      <div class="mb-4 flex items-center gap-2">
                        <button
                          type="button"
                          class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                          tooltip="Select files"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            class="icon absolute start-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2"
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
                              d="M12 5v14m-7-7h14"
                            ></path></svg
                          ><span class="sr-only">Select files</span></button
                        ><button
                          type="button"
                          class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                          tooltip="Start Upload"
                        >
                          <svg
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
                              d="M12 19V5m-7 7l7-7l7 7"
                            ></path></svg
                          ><span class="sr-only">Start Upload</span>
                        </button>
                      </div>
                      <div class="">
                        <div
                          class="nui-focus border-muted-300 dark:border-muted-700 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-600 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300"
                          tabindex="0"
                          role="button"
                        >
                          <div class="p-5 text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              class="icon text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 h-10 w-10 transition-colors duration-300"
                              style=""
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              data-v-cd102a71=""
                            >
                              <path
                                fill="currentColor"
                                d="M5.5 20A5.5 5.5 0 0 1 0 14.5A5.5 5.5 0 0 1 5.5 9c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03l.5-.03c2.5 0 4.5 2 4.5 4.5S21 20 18.5 20h-13m0-10C3 10 1 12 1 14.5S3 19 5.5 19h13a3.5 3.5 0 0 0 3.5-3.5a3.5 3.5 0 0 0-3.5-3.5c-.56 0-1.1.13-1.57.37l.07-.87A5.5 5.5 0 0 0 11.5 6a5.51 5.51 0 0 0-5.31 4.05L5.5 10m6.5 7v-5.25L14.25 14l.75-.66l-3.5-3.5l-3.5 3.5l.75.66L11 11.75V17h1Z"
                              ></path>
                            </svg>
                            <h4 class="text-muted-400 font-sans text-sm">
                              Drop files to upload
                            </h4>
                            <div>
                              <span
                                class="text-muted-400 font-sans text-[0.7rem] font-semibold uppercase"
                              >
                                Or
                              </span>
                            </div>
                            <label
                              for="file"
                              class="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-sm underline underline-offset-4 transition-colors duration-300"
                            >
                              Select files
                            </label>
                          </div>
                        </div>
                      </div>
                      <!--]--><input
                        id="ninja-input-172"
                        type="file"
                        multiple=""
                        class="hidden"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-muted-50 dark:bg-muted-800/70 border-muted-200 dark:border-muted-700 border-t p-10"
            >
              <div class="grid grid-cols-12 gap-8 pb-6">
                <div class="col-span-12 grid grid-cols-12">
                  <div
                    class="col-span-12 flex flex-col justify-center sm:col-span-3"
                  >
                    <label class="nui-label">Color code</label>
                  </div>
                  <div class="col-span-12 sm:col-span-9">
                    <div class="flex items-center gap-3">
                      <!--[-->
                      <div class="group/nui-radio-headless relative">
                        <!---->
                        <div class="relative">
                          <input
                            id="ninja-input-173"
                            type="radio"
                            value="color_code_1"
                            name="color_code"
                            class="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
                          /><!--[-->
                          <div
                            class="border-primary-500 peer-checked:bg-primary-500 h-4 w-4 rounded-full border-2 transition-colors duration-300"
                          ></div>
                          <!--]-->
                        </div>
                      </div>
                      <!--]--><!--[-->
                      <div class="group/nui-radio-headless relative">
                        <!---->
                        <div class="relative">
                          <input
                            id="ninja-input-174"
                            type="radio"
                            value="color_code_2"
                            name="color_code"
                            class="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
                          /><!--[-->
                          <div
                            class="border-info-500 peer-checked:bg-info-500 h-4 w-4 rounded-full border-2 transition-colors duration-300"
                          ></div>
                          <!--]-->
                        </div>
                      </div>
                      <!--]--><!--[-->
                      <div class="group/nui-radio-headless relative">
                        <!---->
                        <div class="relative">
                          <input
                            id="ninja-input-175"
                            type="radio"
                            value="color_code_3"
                            name="color_code"
                            class="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
                          /><!--[-->
                          <div
                            class="border-success-500 peer-checked:bg-success-500 h-4 w-4 rounded-full border-2 transition-colors duration-300"
                          ></div>
                          <!--]-->
                        </div>
                      </div>
                      <!--]--><!--[-->
                      <div class="group/nui-radio-headless relative">
                        <!---->
                        <div class="relative">
                          <input
                            id="ninja-input-176"
                            type="radio"
                            value="color_code_4"
                            name="color_code"
                            class="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
                          /><!--[-->
                          <div
                            class="border-danger-500 peer-checked:bg-danger-500 h-4 w-4 rounded-full border-2 transition-colors duration-300"
                          ></div>
                          <!--]-->
                        </div>
                      </div>
                      <!--]--><!--[-->
                      <div class="group/nui-radio-headless relative">
                        <!---->
                        <div class="relative">
                          <input
                            id="ninja-input-177"
                            type="radio"
                            value="color_code_5"
                            name="color_code"
                            class="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
                          /><!--[-->
                          <div
                            class="h-4 w-4 rounded-full border-2 border-lime-500 transition-colors duration-300 peer-checked:bg-lime-500"
                          ></div>
                          <!--]-->
                        </div>
                      </div>
                      <!--]--><!--[-->
                      <div class="group/nui-radio-headless relative">
                        <!---->
                        <div class="relative">
                          <input
                            id="ninja-input-178"
                            type="radio"
                            value="color_code_6"
                            name="color_code"
                            class="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
                          /><!--[-->
                          <div
                            class="h-4 w-4 rounded-full border-2 border-pink-500 transition-colors duration-300 peer-checked:bg-pink-500"
                          ></div>
                          <!--]-->
                        </div>
                      </div>
                      <!--]-->
                    </div>
                  </div>
                </div>
                <div class="col-span-12 grid grid-cols-12">
                  <div
                    class="col-span-12 flex flex-col justify-start pt-1 sm:col-span-3"
                  >
                    <label class="nui-label">Notifications</label>
                  </div>
                  <div class="col-span-12 sm:col-span-9">
                    <div class="flex flex-col gap-6">
                      <!--[-->
                      <div
                        class="relative inline-flex items-start gap-1 text-primary-500"
                      >
                        <div
                          class="rounded nui-focus group/nui-checkbox relative flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center overflow-hidden"
                        >
                          <input
                            id="ninja-input-179"
                            true-value="true"
                            false-value="false"
                            class="peer absolute z-20 h-5 w-5 cursor-pointer opacity-0"
                            type="checkbox"
                          />
                          <div
                            class="rounded border-muted-400 dark:border-muted-700 dark:bg-muted-700 absolute start-0 top-0 z-0 h-full w-full border-2 bg-white peer-checked:border-current peer-indeterminate:border-current peer-checked:dark:border-current peer-indeterminate:dark:border-current"
                          ></div>
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 17 12"
                            class="pointer-events-none absolute z-10 h-2.5 w-2.5 translate-y-6 fill-current opacity-0 transition duration-300 peer-checked:translate-y-0 peer-checked:opacity-100 peer-indeterminate:!translate-y-6"
                          >
                            <path
                              fill="currentColor"
                              d="M16.576.414a1.386 1.386 0 0 1 0 1.996l-9.404 9.176A1.461 1.461 0 0 1 6.149 12c-.37 0-.74-.139-1.023-.414L.424 6.998a1.386 1.386 0 0 1 0-1.996 1.47 1.47 0 0 1 2.046 0l3.68 3.59L14.53.414a1.47 1.47 0 0 1 2.046 0z"
                            ></path></svg
                          ><svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            class="pointer-events-none absolute z-10 h-2.5 w-2.5 translate-y-6 fill-current opacity-0 transition duration-300 peer-indeterminate:translate-y-0 peer-indeterminate:opacity-100"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="4"
                              d="M2 12h20"
                            ></path>
                          </svg>
                        </div>
                        <div class="inline-flex flex-col">
                          <label
                            for="ninja-input-179"
                            class="text-muted-400 ms-1 cursor-pointer select-none font-sans text-sm"
                            ><!--[-->General notifications<!--]--></label
                          ><!---->
                        </div>
                      </div>
                      <!--]--><!--[-->
                      <div
                        class="relative inline-flex items-start gap-1 text-primary-500"
                      >
                        <div
                          class="rounded nui-focus group/nui-checkbox relative flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center overflow-hidden"
                        >
                          <input
                            id="ninja-input-180"
                            true-value="true"
                            false-value="false"
                            class="peer absolute z-20 h-5 w-5 cursor-pointer opacity-0"
                            type="checkbox"
                          />
                          <div
                            class="rounded border-muted-400 dark:border-muted-700 dark:bg-muted-700 absolute start-0 top-0 z-0 h-full w-full border-2 bg-white peer-checked:border-current peer-indeterminate:border-current peer-checked:dark:border-current peer-indeterminate:dark:border-current"
                          ></div>
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 17 12"
                            class="pointer-events-none absolute z-10 h-2.5 w-2.5 translate-y-6 fill-current opacity-0 transition duration-300 peer-checked:translate-y-0 peer-checked:opacity-100 peer-indeterminate:!translate-y-6"
                          >
                            <path
                              fill="currentColor"
                              d="M16.576.414a1.386 1.386 0 0 1 0 1.996l-9.404 9.176A1.461 1.461 0 0 1 6.149 12c-.37 0-.74-.139-1.023-.414L.424 6.998a1.386 1.386 0 0 1 0-1.996 1.47 1.47 0 0 1 2.046 0l3.68 3.59L14.53.414a1.47 1.47 0 0 1 2.046 0z"
                            ></path></svg
                          ><svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            class="pointer-events-none absolute z-10 h-2.5 w-2.5 translate-y-6 fill-current opacity-0 transition duration-300 peer-indeterminate:translate-y-0 peer-indeterminate:opacity-100"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="4"
                              d="M2 12h20"
                            ></path>
                          </svg>
                        </div>
                        <div class="inline-flex flex-col">
                          <label
                            for="ninja-input-180"
                            class="text-muted-400 ms-1 cursor-pointer select-none font-sans text-sm"
                            ><!--[-->Team notifications<!--]--></label
                          ><!---->
                        </div>
                      </div>
                      <!--]--><!--[-->
                      <div
                        class="relative inline-flex items-start gap-1 text-primary-500"
                      >
                        <div
                          class="rounded nui-focus group/nui-checkbox relative flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center overflow-hidden"
                        >
                          <input
                            id="ninja-input-181"
                            true-value="true"
                            false-value="false"
                            class="peer absolute z-20 h-5 w-5 cursor-pointer opacity-0"
                            type="checkbox"
                          />
                          <div
                            class="rounded border-muted-400 dark:border-muted-700 dark:bg-muted-700 absolute start-0 top-0 z-0 h-full w-full border-2 bg-white peer-checked:border-current peer-indeterminate:border-current peer-checked:dark:border-current peer-indeterminate:dark:border-current"
                          ></div>
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 17 12"
                            class="pointer-events-none absolute z-10 h-2.5 w-2.5 translate-y-6 fill-current opacity-0 transition duration-300 peer-checked:translate-y-0 peer-checked:opacity-100 peer-indeterminate:!translate-y-6"
                          >
                            <path
                              fill="currentColor"
                              d="M16.576.414a1.386 1.386 0 0 1 0 1.996l-9.404 9.176A1.461 1.461 0 0 1 6.149 12c-.37 0-.74-.139-1.023-.414L.424 6.998a1.386 1.386 0 0 1 0-1.996 1.47 1.47 0 0 1 2.046 0l3.68 3.59L14.53.414a1.47 1.47 0 0 1 2.046 0z"
                            ></path></svg
                          ><svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            class="pointer-events-none absolute z-10 h-2.5 w-2.5 translate-y-6 fill-current opacity-0 transition duration-300 peer-indeterminate:translate-y-0 peer-indeterminate:opacity-100"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="4"
                              d="M2 12h20"
                            ></path>
                          </svg>
                        </div>
                        <div class="inline-flex flex-col">
                          <label
                            for="ninja-input-181"
                            class="text-muted-400 ms-1 cursor-pointer select-none font-sans text-sm"
                            ><!--[-->Auto reminders<!--]--></label
                          ><!---->
                        </div>
                      </div>
                      <!--]--><!--[-->
                      <div
                        class="relative inline-flex items-start gap-1 text-primary-500"
                      >
                        <div
                          class="rounded nui-focus group/nui-checkbox relative flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center overflow-hidden"
                        >
                          <input
                            id="ninja-input-182"
                            true-value="true"
                            false-value="false"
                            class="peer absolute z-20 h-5 w-5 cursor-pointer opacity-0"
                            type="checkbox"
                          />
                          <div
                            class="rounded border-muted-400 dark:border-muted-700 dark:bg-muted-700 absolute start-0 top-0 z-0 h-full w-full border-2 bg-white peer-checked:border-current peer-indeterminate:border-current peer-checked:dark:border-current peer-indeterminate:dark:border-current"
                          ></div>
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 17 12"
                            class="pointer-events-none absolute z-10 h-2.5 w-2.5 translate-y-6 fill-current opacity-0 transition duration-300 peer-checked:translate-y-0 peer-checked:opacity-100 peer-indeterminate:!translate-y-6"
                          >
                            <path
                              fill="currentColor"
                              d="M16.576.414a1.386 1.386 0 0 1 0 1.996l-9.404 9.176A1.461 1.461 0 0 1 6.149 12c-.37 0-.74-.139-1.023-.414L.424 6.998a1.386 1.386 0 0 1 0-1.996 1.47 1.47 0 0 1 2.046 0l3.68 3.59L14.53.414a1.47 1.47 0 0 1 2.046 0z"
                            ></path></svg
                          ><svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            class="pointer-events-none absolute z-10 h-2.5 w-2.5 translate-y-6 fill-current opacity-0 transition duration-300 peer-indeterminate:translate-y-0 peer-indeterminate:opacity-100"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="4"
                              d="M2 12h20"
                            ></path>
                          </svg>
                        </div>
                        <div class="inline-flex flex-col">
                          <label
                            for="ninja-input-182"
                            class="text-muted-400 ms-1 cursor-pointer select-none font-sans text-sm"
                            ><!--[-->Modifications<!--]--></label
                          ><!---->
                        </div>
                      </div>
                      <!--]-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--]-->
          </div>
          <div><!----></div>
        </form>
      </div>
    </div>
  </main>
</template>
