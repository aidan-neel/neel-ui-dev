<script lang="ts">
import ComponentHeading from "$lib/docs/component-heading.svelte";
import UsageCard from "$lib/docs/usage-card.svelte";
import ImportUsageBlock from "$lib/docs/import-usage-block.svelte";
import OnThisPage from "$lib/docs/on-this-page.svelte";
import ApiTable from "$lib/docs/api-table.svelte";
import { page } from "$app/stores";
import Code from "lucide-svelte/icons/code";
import ComponentWrapper from "$lib/docs/component-wrapper.svelte";
import Button from "$ui/button";
import Installation from "$lib/docs/installation.svelte";
import DropdownMenuOne from "$lib/docs/examples/dropdown-menu-one.svelte";
import DropdownMenu from "$ui/dropdown-menu/dropdown-menu.svelte";
import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
import * as Tooltip from "$ui/tooltip";
import ComboboxOne from "$lib/docs/examples/combobox-one.svelte";
import Navbar from "$lib/docs/navbar.svelte";
import TooltipOne from "$lib/docs/examples/tooltip-one.svelte";
    import CodeBlock from "$lib/docs/code-block.svelte";

let headings = {
	Installation: [
		"Create Project",
		"Add Tailwind CSS",
		"Install Dependencies",
		"Setup Path Aliases",
	]
};

// check for #hash and scroll to it
$: hash = $page.url.hash;

function scrollToHash() {
	if (hash) {
	const element = document.getElementById(hash.slice(1));
	if (element) {
		element.scrollIntoView({ behavior: "smooth", block: "start" });
	}
	}
}

$: scrollToHash();

let breeds = [
	"Golden Retriever",
	"Labrador Retriever",
	"German Shepherd",
	"French Bulldog",
	"Bulldog",
];

let selected;
</script>

<ComponentWrapper>
	<Navbar />
	<main class="flex pb-32 w-full items-start justify-start flex-col gap-4">
		<div class="w-full border-b-default mb-5">
			<h1 id="installation" class="text-4xl font-semibold">
				Installation
			</h1>
			<p class="lg:w-2/3 w-full mt-4 mb-5 text-lg">
				Learn how to install and use Neel UI in your Svelte apps
			</p>
		</div>

		<div class="w-full my-2">
			<h1 id="create project" class="text-2xl font-semibold">
				Create project
			</h1>
			<p class="text-lg my-3">
				Use the SvelteKit CLI to create a new project
			</p>

			<div
				class={`mt-4 text-[16px] p-3 bg-alternate font-mono overflow-auto border-default rounded-lg text-foreground-muted max-h-[30rem] w-full flex items-start justify-start`}
			>
				<span class="text-foreground mr-2.5 pl-1">npm</span> create svelte@latest my-app
			</div>
		</div>

		<div class="w-full my-4">
			<h1 id="add tailwind css" class="text-2xl font-semibold">
				Add Tailwind CSS
			</h1>
			<p class="text-lg my-3">
				Use the `svelte-add` CLI to add Tailwind CSS to the project.
			</p>

			<div
				class={`mt-4 text-[16px] p-3 bg-alternate font-mono overflow-auto border-default rounded-lg text-foreground-muted max-h-[30rem] w-full flex items-start justify-start`}
			>
				<span class="text-foreground mr-2.5 pl-1">npx</span> svelte-add@latest tailwindcss
			</div>
		</div>

		<div class="w-full my-4">
			<h1 id="install dependencies" class="text-2xl font-semibold">
				Install Dependencies
			</h1>
			<p class="text-lg my-3">
				Install the required dependencies for Neel UI
			</p>

			<div
				class={`mt-4 text-[16px] p-3 bg-alternate font-mono overflow-auto border-default rounded-lg text-foreground-muted max-h-[30rem] w-full flex items-start justify-start`}
			>
				<span class="text-foreground mr-2.5 pl-1">npm</span> install
			</div>
		</div>

		<div class="w-full my-4">
			<h1 id="setup path aliases" class="text-2xl font-semibold">
				Setup Path Aliases
			</h1>
			<p class="text-lg my-3">
				Neel UI uses a custom alias for the library and UI components themselves.
			</p>

			<div
				class={`mt-4 text-[16px] p-3 bg-alternate font-mono overflow-auto border-default rounded-lg text-foreground-muted max-h-[30rem] w-full flex items-start justify-start`}
			>
				<CodeBlock class="py-0" code={`kit: {
	adapter: adapter(),
	alias: {
		$ui: "src/lib/library/components", // Add these lines
		$library: "src/lib/library", // Add these lines
	},
},`} />
			</div>
		</div>

		<div class="w-full my-4">
			<h1 class="text-2xl font-semibold">
				That's all
			</h1>
			<p class="text-lg my-3">
				Now you can use Neel UI in your projects
			</p>

			<div
				class={`mt-4 text-[16px] p-3 bg-alternate font-mono overflow-auto border-default rounded-lg text-foreground-muted max-h-[30rem] w-full flex items-start justify-start`}
			>
				<CodeBlock class="py-0" code={`<script>
	import Button from '$ui/button';
</script>

<Button>
	Click Me!
</Button>
`} />
			</div>
		</div>
	</main>
	<div
	class="relative w-full lg:w-[250px] lg:pl-[25px] hidden xl:flex text-sm flex-shrink-0"
	>
		<OnThisPage {headings} />
	</div>
</ComponentWrapper>
