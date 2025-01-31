# Discussion.md - Efficient Log Retrieval

## Solutions Considered

### 1. Loading Entire File into Memory (❌ Not Feasible)  
- **Issue:** A 1TB file will exceed available memory, causing crashes.

### 2. Using `grep` Command (⚡ Fast but Not a Node.js Solution)  
- **Issue:** Not a pure JavaScript solution, limiting portability.

### 3. Line-by-Line Processing with Streams (✅ Chosen Approach)  
- **Method:** Uses `fs.createReadStream()` and `readline` to process logs efficiently.  
- **Pros:** Low memory usage, scalable, and works on all systems.

## Final Solution Summary  
- Reads the log file **line by line** to filter relevant logs.
- Saves extracted logs to `output/output_YYYY-MM-DD.txt`.

## Steps to Run  

1. **Clone the repo**  
   ```bash
   git clone https://github.com/AnmolGoyal01/tech-campus-recruitment-2025
   cd tech-campus-recruitment-2025
   ```
   
2. **Download the log file**  
   ```bash
   curl -L -o test_logs.log "https://limewire.com/d/0c95044f-d489-4101-bf1a-ca48839eea86#cVKnm0pKXpN6pjsDwav4f5MNssotyy0C8Xvaor1bA5U"

   ```
   
3. **Run the script**  
   ```bash
   node src/extract_logs.js 2024-12-01
   ```
This extracts logs for December 1, 2024, saving them to output/output_2024-12-01.txt. ✅

```arduino
curl -L -o test_logs.log "https://limewire.com/d/0c95044f-d489-4101-bf1a-ca48839eea86#cVKnm0pKXpN6pjsDwav4f5MNssotyy0C8Xvaor1bA5U"

```