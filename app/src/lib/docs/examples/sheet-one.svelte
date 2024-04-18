<script lang="ts">
	import * as Sheet from '$ui/sheet';
	import Button from '$ui/button';
</script>

<Sheet.Root>
	<Sheet.Trigger let:data>
		<Button class="mr-4" data={data}>
			Left Sheet
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side='left' let:closeSheet>
		<Sheet.Header>
			<Sheet.Title>
				Change Password
			</Sheet.Title>
			<Sheet.Description>
				Update your password to fit the new security requirements.
			</Sheet.Description>
		</Sheet.Header>
		<input class="mt-2 w-full rounded-lg border-default bg-alternate-muted p-3 focus:outline-none focus:border-white/20 placeholder:text-foreground-muted" placeholder="New Password" />
		<Sheet.Footer>
			<Button on:click={closeSheet}>
				Save Changes
			</Button>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
<Sheet.Root>
	<Sheet.Trigger let:data>
		<Button data={data}>
			Right Sheet
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side='right' let:closeSheet>
		<Sheet.Header>
			<Sheet.Title>
				Change Password
			</Sheet.Title>
			<Sheet.Description>
				Update your password to fit the new security requirements.
			</Sheet.Description>
		</Sheet.Header>
		<input class="mt-2 w-full rounded-lg border-default bg-alternate-muted p-3 focus:outline-none focus:border-white/20 placeholder:text-foreground-muted" placeholder="New Password" />
		<Sheet.Footer>
			<Button on:click={closeSheet}>
				Save Changes
			</Button>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>