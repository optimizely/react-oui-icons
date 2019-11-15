/**
Builds an icon manifest file from a directory of icons.
Each icon directory should contain an icon.json data file, as well as at least one SVG.
The icon data from each icons.json file is combined with the SVGs and compiled into a large icon manifest json file. 
*/

const fs = require('fs');

const ICON_DIRECTORY = './icons/';
const MANIFEST_PATH = './icons.json';
const ICON_DATA = 'icon.json';
const SVG_FILENAME = 'icon-default.svg';
const SVG_LARGE_FILENAME = 'icon-large.svg';
let icons = [];

console.log("Building icon manifest...");

// Read all directories in the icons directory
fs.readdir(ICON_DIRECTORY, function (err, dirnames) {
    dirnames.forEach(function (dirname) {
        let directory = ICON_DIRECTORY + dirname;

        if (fs.lstatSync(directory).isDirectory()) {
            // Read and parse icon data in each directory
            let iconDataPath = `${directory}/${ICON_DATA}`
            if (fs.existsSync(iconDataPath)) {
                icon = fs.readFileSync(iconDataPath, 'utf-8');
                icon = JSON.parse(icon);
            } else {
                // Couldn't find icon data file.
                throw new Error(`Could not add icon to manifest. No ${ICON_DATA} file found in directory ${directory}`)
            }

            // Add small SVG data to icon
            let smallSVGPath = `${directory}/${SVG_FILENAME}`
            if (fs.existsSync(smallSVGPath)) {
                icon.svg = fs.readFileSync(smallSVGPath, 'utf-8');
                console.log(`Added ${smallSVGPath}`);
            } else {
                // Couldn't find default size SVG. This is required for all icons.
                throw new Error(`Could not add icon to manifest. No ${SVG_FILENAME} file found in directory ${directory}`)
            }

            // Add optional large SVG to icon data
            let largeSVGPath = `${directory}/${SVG_LARGE_FILENAME}`
            if (fs.existsSync(largeSVGPath)) {
                icon['svg-large'] = fs.readFileSync(largeSVGPath, 'utf-8');
                console.log(`Added ${largeSVGPath}`);
            }

            // Generate and add `token`
            icon.token = `"<Icon name=\"${icon.id}\" />"`;

            // Add icon to manifest
            icons.push(icon);
        }
    });

    // Write manifest 
    let manifestData = JSON.stringify(icons, null, 4);
    fs.writeFile(MANIFEST_PATH, manifestData, (err) => {
        if (err) throw err;
        console.log(`Successfully built manifest. ${icons.length} icons added.`)
    });
});

