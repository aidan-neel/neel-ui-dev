import readline from 'readline';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const user = 'aidan-neel';
const repo = 'neel-ui';
const branch = 'main';

// Define GitHub URLs for the templates at the top
const tailwindConfigTemplateUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/tailwind.config.js`;
const globalCssTemplateUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/src/global.css`;
const utilsTsTemplateUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/src/lib/utils.ts`;
const eventHandlerTsTemplateUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/src/lib/event-handler.ts`;

console.log(tailwindConfigTemplateUrl);

async function init() {
    console.log("[*] Neel/UI [*]");
    console.log("Initializing the project...");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Are you in your root SvelteKit folder? (y/n) ", async (answer) => {
        const inRootFolder = answer.trim().toLowerCase() === 'y';
        if (!inRootFolder) {
            console.log('Please move the project to the root folder and try again.');
            rl.close();
            return;
        }

        console.log('Great! You can proceed with the project setup.');

        console.log("Creating neel-ui components folder...");
        const dir = path.join(process.cwd(), 'src/lib/components/neel-ui');
        fs.mkdirSync(dir, { recursive: true });
        console.log('Folder created successfully.');

        await createOrUpdateFileFromUrl(tailwindConfigTemplateUrl, 'tailwind.config.js');
        await createOrUpdateFileFromUrl(globalCssTemplateUrl, 'src/neel-ui.css');
        await createOrUpdateFileFromUrl(utilsTsTemplateUrl, 'src/lib/utils.ts');
        await createOrUpdateFileFromUrl(eventHandlerTsTemplateUrl, 'src/lib/event-handler.ts');

        // Add the dependencies to package.json
        await addDependencies();

        console.log('Project setup completed.');
        rl.close();
    });
}

async function createOrUpdateFileFromUrl(url, filePath) {
    const res = await fetch(url);
    const data = await res.text();
    const fullPath = path.join(process.cwd(), filePath);
    fs.writeFileSync(fullPath, data);
    console.log(`${filePath} created/updated successfully.`);
}

async function addDependencies() {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
        console.log('package.json not found, make sure you are in the root folder of your project.');
        return;
    }
    
    const packageJsonContent = fs.readFileSync(packageJsonPath);
    const packageJson = JSON.parse(packageJsonContent);

    const dependenciesToAdd = {
        "@k4ung/svelte-otp": "^0.0.9",
        "tailwind-merge": "^2.2.1",
        "tailwind-variants": "^0.1.20",
        "vaul-svelte": "^0.2.3",
        "radix-svelte": "^0.9.0",
        "fuse.js": "^7.0.0",
        "clsx": "^2.1.0"
    };

    packageJson.dependencies = {
        ...packageJson.dependencies,
        ...dependenciesToAdd
    };

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('Dependencies added to package.json successfully.');
}

// Exporting the module if needed, or just call `init()` directly if this script is meant to be executed as a standalone script.
export default init;

// If directly executing, uncomment the following:
// init().catch(console.error);
