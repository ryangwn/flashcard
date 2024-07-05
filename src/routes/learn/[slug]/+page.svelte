<script>
	import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import vocaInUsePreIntermediateData from '@/db/voca-in-use-pre-intermediate.json'
</script>

<div class="p-6">
  <div>
    <button
      class="w-8 inline-flex items-center justify-center"
      onclick={() => goto('/')}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
    </button>
  </div>

  <!-- <div class="my-6">
    <h1 class="text-2xl">All topics:</h1>
  </div> -->
  <div class="flex flex-col space-y-3 mt-6">
    {#each vocaInUsePreIntermediateData as unit}
      <a href="{$page.url.pathname}/{unit.name}">
        <div class="relative z-10 flex flex-col gap-1 rounded-lg p-6 bg-white text-center text-dark h-48">
          <div class="flex w-full items-center justify-between">
            <span class="font-wide text-2xl font-medium leading-none">{unit.name}</span>
          </div>
          <div class="mt-2 text-left leading-5 text-slate-800">{unit.topic}</div>
        </div>
      </a>
    {/each}
  </div>
</div>
