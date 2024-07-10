import { goto } from '$app/navigation';

export function back(url: string) {
  return async () => {
    const documentElement = document.documentElement;
    documentElement.classList.add('back');
  
    await goto(url);
  
    return new Promise<void>((resolve) => {
      const handleAnimationEnd = (event: AnimationEvent) => {
        if (event.animationName === 'slide-from-left') {
          setTimeout(() => {
            documentElement.classList.remove('back');
            resolve();
          }, 0);
          documentElement.removeEventListener('animationend', handleAnimationEnd);
          resolve();
        }
      };
  
      documentElement.addEventListener('animationend', handleAnimationEnd);
    });
  }
}
