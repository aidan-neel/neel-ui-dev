import fs from 'fs/promises';
import path from 'path';
import fetch from 'node-fetch';

async function fetchDirectoryContents(user, repo, directoryPath) {
    const apiUrl = `https://api.github.com/repos/${user}/${repo}/contents/${directoryPath}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}

async function downloadFile(url, outputPath) {
    const response = await fetch(url);
    const buffer = await response.buffer();
    await fs.writeFile(outputPath, buffer);
}

async function downloadDirectory(user, repo, directoryPath, localDirectory) {
    const directoryContents = await fetchDirectoryContents(user, repo, directoryPath);
    for (const content of directoryContents) {
        const outputPath = path.join(localDirectory, content.path.replace(/^.*[\\\/]/, ''));
        if (content.type === 'file') {
            console.log(`Downloading ${content.name}...`);
            await downloadFile(content.download_url, outputPath);
            console.log(`${content.name} downloaded to ${outputPath}`);
        } else if (content.type === 'dir') {
            await fs.mkdir(outputPath, { recursive: true });
            await downloadDirectory(user, repo, content.path, outputPath);
        }
    }
}

async function ensureEssentialComponents(user, repo, baseLocalDirectory, additionalComponents = []) {
    const essentialComponents = ['blur', 'popover', 'spinner', ...additionalComponents];
    for (const componentName of essentialComponents) {
        const directoryPath = `components/${componentName}`;
        const localDirectory = path.join(baseLocalDirectory, componentName);
        await fs.mkdir(localDirectory, { recursive: true });
        await downloadDirectory(user, repo, directoryPath, localDirectory);
    }
}

async function add(args) {
    const componentName = args[1];
    const user = 'aidan-neel';
    const repo = 'neel-ui-dev';
    const baseLocalDirectory = './app/src/lib/neel-ui';
    if (componentName === '*') {
        await fs.mkdir(baseLocalDirectory, { recursive: true });
        await ensureEssentialComponents(user, repo, baseLocalDirectory);
    } else {
        const directoryPath = `app/src/lib/components/neel-ui/${componentName}`;
        const localDirectory = path.join(baseLocalDirectory, componentName);
        await fs.mkdir(localDirectory, { recursive: true });
        await downloadDirectory(user, repo, directoryPath, localDirectory);
    }

    console.log('All requested files have been downloaded successfully.');
};

export default add;
