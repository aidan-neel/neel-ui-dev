<script lang="ts">
    import { cn } from "$library/utils";
	import { globalStateStore } from "$library/state";
	import { getContext } from "svelte";

	type $$Props = {
		class?: string;
		placeholder?: string;
		value?: string;
	} & typeof $$restProps;

	let className: $$Props["class"] = undefined;
	export let placeholder: $$Props["placeholder"] = "";
	export let value: $$Props["value"] = "";
	export { className as class };
</script>

<textarea placeholder={placeholder} value={value} {...$$restProps} class={cn("w-full p-3 rounded-lg border-default bg-alternate-muted focus:outline-none focus:border-white/20 placeholder:text-foreground-muted text-foreground", className)} />