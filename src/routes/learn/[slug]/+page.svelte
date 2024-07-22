<script>
  import { page } from '$app/stores';
	import { back } from '@/util/route';

  let { data } = $props()
</script>

<div class="py-8 px-6">
  <div>
    <button
      class="w-8 inline-flex items-center justify-center"
      onclick={back('/')}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
    </button>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
    {#each data.book as unit}
      <a href="{$page.url.pathname}/{unit.name}">
        <div class="relative z-10 flex flex-col gap-1 rounded-xl p-4 bg-white text-center text-dark h-48">
          <div class="flex w-full items-center justify-between">
            <span class="font-wide text-2xl font-medium leading-none">{unit.name}</span>
          </div>
          <div class="mt-2 text-left leading-5 text-slate-800">{unit.topic}</div>
        </div>
      </a>
    {/each}
  </div>
</div>
