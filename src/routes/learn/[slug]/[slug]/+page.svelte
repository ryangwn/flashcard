<script>
  // @ts-nocheck

  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import vocaInUsePreIntermediateData from '@/db/voca-in-use-pre-intermediate.json'
	import { onMount } from 'svelte';
	import { TouchSwipeCard } from '@/lib/touch-swipe';

  const unit = vocaInUsePreIntermediateData.find(u => u.name === $page.params.slug)
  
  let currentIdx = $state(0)
  let sliderWrapper = $state(null)
  let spaceX = 24 * 2
  let sliderWidth = $derived(sliderWrapper?.scrollWidth + spaceX)
  let cardWidth = $derived(sliderWrapper?.children?.[0].offsetWidth)
  let hasPrevious = $derived(currentIdx > 0)
  let hasNext = $derived(currentIdx != unit.words.length - 1)

  onMount(() => {
    const touchSwipeCard = new TouchSwipeCard(sliderWrapper);
    touchSwipeCard.onSwipeLeft = onSwipeLeft
    touchSwipeCard.onSwipeRight = onSwipeRight
  })

  function onSwipeLeft() {
    if (!hasNext) {
      return
    }
    currentIdx += 1
    sliderWrapper.style.transform = `translate3d(-${currentIdx * cardWidth}px, 0, 0px)`
  }

  function onSwipeRight() {
    if (!hasPrevious) {
      return
    }
    currentIdx -= 1
    sliderWrapper.style.transform = `translate3d(-${currentIdx * cardWidth}px, 0, 0px)`
  }

  function getPronunciationAudio(word) {
  let audio = null;
  let isLoaded = false;

  function playAudio() {
    // iOS requires user interaction to play audio
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log('Playback error:', error);
        // Auto-play was prevented, you might want to show a "play" button here
      });
    }
  }

  return () => {
    if (!audio) {
      audio = new Audio(`https://dict.youdao.com/dictvoice?audio=${word}&type=2`);
      
      audio.addEventListener('canplaythrough', () => {
        isLoaded = true;
        playAudio();
      }, { once: true });

      audio.load();
    } else if (isLoaded) {
      playAudio();
    }
  };
  }
</script>

<div class="h-dvh py-8 flex flex-col justify-center overflow-hidden">
  <div class="px-6 self-start">
    <button
      class="w-8 inline-flex items-center justify-center"
      onclick={() => {
        goto($page.url.pathname.split('/').slice(0, -1).join('/'))
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
    </button>
  </div>

  <div
    bind:this={sliderWrapper}
    class="mt-auto flex flex-nowrap space-x-3 px-6"
    style="transition: transform 500ms ease-out; width: {sliderWidth}px"
  >
    {#each unit?.words as w}
      {@const playsound = getPronunciationAudio(w.word)}
      <div
        class="shrink-0 relative z-10 flex flex-col gap-1 rounded-xl bg-white shadow-sm p-6 min-h-96"
        style="width: min(calc(100vw - {spaceX}px), calc(576px - {spaceX}px));"
      >
        <div class="flex flex-col w-full">
          <div class="font-wide text-3xl leading-none underline flex items-center space-x-3">
            <p>{w.word}</p>
            <button
              class="w-5 h-5 text-gray-600"
              onclick={playsound}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
               
              >
                <path d="M5 7H7V17H5V7ZM1 10H3V14H1V10ZM9 2H11V20H9V2ZM13 4H15V22H13V4ZM17 7H19V17H17V7ZM21 10H23V14H21V10Z"></path>
              </svg>
            </button>
          </div>
          <p class="mt-2 text-lg text-gray-700">{w.pronuncation.text}</p>
        </div>
        <div class="mt-4 flex-1 flex flex-col text-left leading-5">
          <p class="font-medium text-stone-500">{w.vi_translate}</p>
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
      onclick={onSwipeRight}
      disabled={!hasPrevious}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
    </button>
    <div class="flex space-x-2">
      <span>{currentIdx + 1}</span>
      <span>/</span>
      <span class="font-medium">{unit?.words?.length} words</span>
    </div>
    <button
      class="w-8 inline-flex items-center justify-center disabled:opacity-40 disabled:pointer-events-none"
      onclick={onSwipeLeft}
      disabled={!hasNext}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
    </button>
  </div>
</div>
