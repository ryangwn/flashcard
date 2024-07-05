<script>
  import '@/styles/main.css'
  import { preparePageTransition } from '$lib/page-transition';
  
  preparePageTransition();

  let props = $props()
</script>

{@render props.children()}

<style>
  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }

  @keyframes slide-from-right {
    from {
      transform: translate3d(100%, 0, 0);
    }
  }

  :root::view-transition-old(root) {
    animation: 400ms cubic-bezier(0.2, 0.0, 0, 1.0) both fade-out;
  }

  :root::view-transition-new(root) {
    animation: 400ms cubic-bezier(0.2, 0.0, 0, 1.0) both slide-from-right;
  }
</style>
