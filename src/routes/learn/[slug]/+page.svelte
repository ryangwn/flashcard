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
      <i class="ri-arrow-left-s-line text-3xl"></i>
    </button>
  </div>

  <div class="my-6">
    <h1 class="text-3xl">All topics:</h1>
  </div>
  <div class="flex flex-col space-y-3">
    {#each vocaInUsePreIntermediateData as unit}
      <a href="{$page.url.pathname}/{unit.name}">
        <div
          class="relative z-10 flex flex-col gap-1 rounded-lg p-6 bg-white text-center text-dark"
          style="height: 273px;"
        >
          <div class="flex w-full items-center justify-between">
            <span class="font-wide text-2xl font-medium leading-none">{unit.name}</span>
          </div>
          <div class="mt-2 text-left leading-5 text-slate-800">{unit.topic}</div>
        </div>
      </a>
    {/each}
  </div>
</div>
