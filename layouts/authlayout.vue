<template>
  <div>
    <slot />
    <p class="auth-footer">
      This site is authenticate by supabase.com and the Supabase
      <a target="_blank" href="https://supabase.com/privacy" rel="noreferrer">
        Privacy Policy
      </a>
      and
      <a target="_blank" href="https://supabase.com/terms" rel="noreferrer">
        Terms of Service
      </a>
      apply.
    </p>
  </div>
</template>
<style scoped>
.auth-footer {
  @apply transition duration-200 m-0 absolute z-10 left-2/4 text-center translate-x-[-50%] bottom-6 text-[10px] max-w-[260px] text-[#c2c3c7];
}
.auth-footer a {
  @apply no-underline	transition duration-200 text-[#a3a5ab] hover:text-[#656976];
}
</style>
