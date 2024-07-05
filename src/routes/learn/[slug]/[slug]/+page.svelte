<script>
  // @ts-nocheck

  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import vocaInUsePreIntermediateData from '@/db/voca-in-use-pre-intermediate.json'

  const unit = vocaInUsePreIntermediateData.find(u => u.name === $page.params.slug)
  
  let currentIdx = $state(0)
  let sliderWrapper = $state(null)
  let sliderWidth = $derived(sliderWrapper?.scrollWidth + (24 * 2))
  let cardWidth = $derived(sliderWrapper?.children?.[0].offsetWidth)
</script>

<div class="h-dvh py-8 flex flex-col justify-center overflow-hidden">
  <div class="px-6 self-start text-white">
    <button
      class="w-8 inline-flex items-center justify-center"
      onclick={() => {
        goto($page.url.pathname.split('/').slice(0, -1).join('/'))
      }}
    >
      <i class="ri-arrow-left-s-line text-3xl"></i>
    </button>
  </div>

  <div
    bind:this={sliderWrapper}
    class="mt-auto flex flex-nowrap space-x-3 px-6"
    style="transition: transform 400ms cubic-bezier(0.05, 0.7, 0.1, 1.0); width: {sliderWidth}px"
  >
    {#each unit?.words as w}
      <div class="shrink-0 relative z-10 flex flex-col gap-1 rounded-xl bg-white shadow-sm p-6 min-h-96" style="width: calc(100vw - 24px * 2);">
        <div class="flex flex-col w-full">
          <span class="font-wide text-3xl leading-none underline">{w.word}</span>
          <span class="mt-2 text-lg text-gray-700">{w.pronuncation.text}</span>
        </div>
        <div class="mt-4 flex-1 flex flex-col text-left leading-5">
          <p>{w.vi_translate}</p>
          <p class="mt-2">{w.word_definition}</p>

          <div class="flex-1"></div>
          <div class="mt-4 flex flex-col space-y-3 text-slate-800">
            <h5 class="font-semibold">Examples: </h5>
            {#each w.examples as example}
              <p>- {example}</p>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="px-6 flex items-center justify-between w-full mt-auto">
    <button
      class="w-8 inline-flex items-center justify-center disabled:opacity-40 disabled:pointer-events-none"
      onclick={() => {
        currentIdx -= 1
        sliderWrapper.style.transform = `translate3d(-${currentIdx * cardWidth}px, 0, 0px)`
      }}
      disabled={currentIdx === 0}
    >
      <i class="ri-arrow-left-line text-2xl"></i>
    </button>
    <div class="flex space-x-2">
      <span>{currentIdx + 1}</span>
      <span>/</span>
      <span class="font-medium">{unit?.words?.length} words</span>
    </div>
    <button
      class="w-8 inline-flex items-center justify-center disabled:opacity-40 disabled:pointer-events-none"
      onclick={() => {
        currentIdx += 1
        sliderWrapper.style.transform = `translate3d(-${currentIdx * cardWidth}px, 0, 0px)`
      }}
      disabled={currentIdx === unit.words.length - 1}
    >
      <i class="ri-arrow-right-line text-2xl"></i>
    </button>
  </div>
</div>
