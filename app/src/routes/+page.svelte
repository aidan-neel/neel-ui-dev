<script lang="ts">
	import ComponentWrapper from "$lib/docs/component-wrapper.svelte";
	import Button from "$ui/button";
	import BadgeCheck from 'lucide-svelte/icons/badge-check'
	import AlertDialogOne from '$lib/docs/examples/alert-dialog-one.svelte'
	import PopoverOne from '$lib/docs/examples/popover-one.svelte'
	import DropdownMenuOne from '$lib/docs/examples/dropdown-menu-one.svelte'
    import Navbar from "$lib/docs/navbar.svelte";
</script>


<main class="flex mt-20 items-center w-screen h-screen pb-96 justify-start flex-col">
	<Navbar />
	<div class="flex flex-col items-center justify-center w-full py0">
		<div class="h-[27.5rem] flex items-start justify-center w-full lg:max-w-[82.5rem] flex-col gap-4">
			<h1 class="lg:text-5xl text-4xl font-semibold w-2/3 text-left">
				Utilize simple, reusable, and interactive components for Svelte
			</h1>
			<p class="text-left w-1/2 text-xl text-foreground-muted">
				The interactivity of primitives with the styling of a design system, Neel UI is a collection of components that are easy to use and customize.
			</p>
			<div class="flex flex-row gap-4 mt-2">
				<Button href="/docs/installation">
					Get Started
				</Button>
				<Button href="/docs/components/alert-dialog" variant="outlined">
					View Components
				</Button>
			</div>
		</div>
	</div>

	<div class="w-full lg:max-w-[82.5rem] flex flex-col gap-12 pb-64">
		<div class="w-full flex flex-col">
			<div class="mt-24 w-full">
				<p class="text-lg text-foreground-muted">
					Why use Neel UI?
				</p>
				<h2 class="text-4xl font-medium w-1/3 mt-2">
					An amazing experience for <span class="text-foreground/70">you</span> and your <span class="text-foreground/70">users</span>
				</h2>
				<div class="flex flex-row w-full mt-6">
					<div class="bg-alternate p-4 border border-r-0 rounded-l-xl w-1/4">
						<h3 class="text-2xl font-medium flex flex-row items-center">
							<BadgeCheck class="w-5 h-5 mr-2" />
							Simplicity
						</h3>
						<p class="mt-2 text-foreground/70">
							The components files are so easy to understand and edit, you'll feel like you wrote it yourself.
						</p>
					</div>
					<div class="bg-alternate p-4 border-y border-l w-1/4">
						<h3 class="text-2xl font-medium flex flex-row items-center">
							<BadgeCheck class="w-5 h-5 mr-2" />
							Control
						</h3>
						<p class="mt-2 text-foreground/70">
							Edit any and every part of the components to fit your needs, without any hassle.
						</p>
					</div>
					<div class="bg-alternate p-4 border-y border-l w-1/4">
						<h3 class="text-2xl font-medium flex flex-row items-center">
							<BadgeCheck class="w-5 h-5 mr-2" />
							Accessible
						</h3>
						<p class="mt-2 text-foreground/70">
							We make sure that all of our components are accessible to everyone, no matter what by following the best practices.
						</p>
					</div>
					<div class="bg-alternate p-4 border rounded-r-xl w-1/4">
						<h3 class="text-2xl font-medium flex flex-row items-center">
							<BadgeCheck class="w-5 h-5 mr-2" />
							Styles
						</h3>
						<p class="mt-2 text-foreground/70">
							Customize the entire styling of the components to fit your brand, without any limitations.
						</p>
					</div>
				</div>
			</div>

			<div class="mt-32">
				<p class="text-lg text-foreground-muted">
					Production Ready
				</p>
				<h2 class="text-4xl font-medium w-1/3 mt-2">
					Ready to use components straight out of the box
				</h2>

				<div class="w-full border h-[17.5rem] bg-alternate grid grid-cols-4 mt-6 rounded-lg">
					<div class="w-full border-r-default flex relative items-center justify-center">
						<Button>
							Click Me
						</Button>
						<p class='absolute text-foreground-muted bottom-2 left-3'>
							Button
						</p>
					</div>
					<div class="w-full border-r-default flex relative items-center justify-center">
						<AlertDialogOne />
						<p class='absolute text-foreground-muted bottom-2 left-3'>
							Alert Dialog
						</p>
					</div>
					<div class="w-full border-r-default flex relative items-center justify-center">
						<PopoverOne />
						<p class='absolute text-foreground-muted bottom-2 left-3'>
							Popover
						</p>
					</div>
					<div class="w-full flex relative items-center justify-center">
						<DropdownMenuOne />
						<p class='absolute text-foreground-muted bottom-2 left-3'>
							Dropdown Menu
						</p>
					</div>
				</div>
			</div>

			<div class="mt-32">
				<p class="text-lg text-foreground-muted">
					Start Building
				</p>
				<h2 class="text-4xl font-medium w-1/3 mt-2">
					Start building with Neel UI today
				</h2>
				<p class="w-1/2 mt-4 text-lg text-foreground-muted">
					The interactivity of primitives with the styling of a design system, Neel UI is a collection of components that are easy to use and customize.
				</p>

				<div class="flex flex-row gap-4 mt-6">
					<Button href="/docs/installation">
						Get Started
					</Button>
					<Button href="/docs/components/alert-dialog" variant="outlined">
						View Components
					</Button>
				</div>
			</div>
		</div>
	</div>
</main>