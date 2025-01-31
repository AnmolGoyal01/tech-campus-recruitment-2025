const fs = require("fs");
const readline = require("readline");
const path = require("path");

async function extractLogs(date) {
    const inputFile = "test_logs.log"; // The large log file
    const outputDir = "output";
    const outputFile = path.join(outputDir, `output_${date}.txt`);

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    try {
        const fileStream = fs.createReadStream(inputFile);
        const rl = readline.createInterface({ input: fileStream });

        const outputStream = fs.createWriteStream(outputFile);

        for await (const line of rl) {
            if (line.startsWith(date)) {
                outputStream.write(line + "\n");
            }
        }

        console.log(`✅ Logs for ${date} saved to ${outputFile}`);
        outputStream.end();
    } catch (error) {
        console.error("❌ Error:", error.message);
    }
}

// Run the script from command line
if (process.argv.length !== 3) {
    console.log("Usage: node extract_logs.js YYYY-MM-DD");
    process.exit(1);
}

extractLogs(process.argv[2]);