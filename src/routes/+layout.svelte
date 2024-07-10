<script>
  import '@/styles/main.css'
  import { preparePageTransition } from '$lib/page-transition';
  
  preparePageTransition();

  let props = $props()
</script>

{@render props.children()}
