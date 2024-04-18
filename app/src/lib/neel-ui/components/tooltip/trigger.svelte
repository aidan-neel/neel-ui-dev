<script lang="ts">
	import { PopoverTrigger } from "$ui/popover";
	import { cn } from "$library/utils";
	import ChevronRight from "lucide-svelte/icons/chevron-right";
	
	type $$Props = {
		class?: string;
		duration?: number;
		delayClose?: number;
	} & typeof $$restProps

	let className: $$Props["class"] = undefined;
	export let duration: $$Props["duration"] = 250;
	export let delayClose: $$Props["delayClose"] = 0;
	export { className as class };
  </script>
  
  <PopoverTrigger
	delayClose={delayClose}
	delayOpen={duration}
	openType="mouseenter"
	closeType="mouseleave"
	{...$$restProps}
	class={cn(className, "w-full")}
	let:data
  >
	<slot {data} />
  </PopoverTrigger>
  