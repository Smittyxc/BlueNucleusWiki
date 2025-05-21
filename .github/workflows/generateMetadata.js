const fs = require('fs');
const path = require('path');

function generateMetadata() {
    const allArticlesMetadata = []
    const subdirs = [];
    const demosPath = "demos";
    const metadataFile = "metadata.json"

    try {
        const demosArticles = fs.readdirSync(demosPath, { withFileTypes: true }).filter(dirent => dirent.isFile() && dirent.name.endsWith('.md'));
        for(const file of demosArticles) {
            const filePath = file.name
            const articleMetadata = {
                name: filePath
            }
            allArticlesMetadata.push(articleMetadata)
        }


        fs.writeFileSync(metadataFile, JSON.stringify(allArticlesMetadata, null, 2)); // null, 2 for pretty printing

    }
    catch(err) {
        console.log(`Error: ${err}`)
    }

}

generateMetadata()