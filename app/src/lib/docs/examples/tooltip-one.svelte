<script lang="ts">
	import * as Tooltip from '$ui/tooltip';
	import Button from '$ui/button';
</script>

<Tooltip.Root>
	<Tooltip.Trigger let:data>
		<Button data={data}>
			Tooltip
		</Button>
	</Tooltip.Trigger>
	<Tooltip.Content placement="top" class="w-36 text-sm py-2 flex items-center justify-center text-center">
		This is a tooltip!
	</Tooltip.Content>
</Tooltip.Root>