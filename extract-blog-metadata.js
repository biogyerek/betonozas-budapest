import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PAGES_DIR = path.join(__dirname, 'src', 'pages');

// Function to extract metadata from an Astro file
function extractMetadata(filePath, fileName) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract title from various patterns
    let title = '';
    const titleMatches = [
      content.match(/const title = ["'`](.*?)["'`]/),
      content.match(/title=["'`](.*?)["'`]/),
      content.match(/<h1[^>]*>(.*?)<\/h1>/),
      content.match(/<title>(.*?)<\/title>/)
    ];
    
    for (const match of titleMatches) {
      if (match && match[1]) {
        title = match[1].replace(/\s*-\s*Betonozás Budapest.*$/, '').trim();
        break;
      }
    }
    
    // Extract description
    let description = '';
    const descMatches = [
      content.match(/const description = ["'`](.*?)["'`]/),
      content.match(/description=["'`](.*?)["'`]/),
      content.match(/<meta name="description" content=["'`](.*?)["'`]/),
    ];
    
    for (const match of descMatches) {
      if (match && match[1]) {
        description = match[1].trim();
        break;
      }
    }
    
    // Extract date (look for various date patterns)
    let date = '';
    const dateMatches = [
      content.match(/(\d{4})\.\s*(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)\s*(\d{1,2})/),
      content.match(/(\d{4})-(\d{2})-(\d{2})/),
      content.match(/2024\.\s*([a-záéíóöőúüű]+)\s*(\d{1,2})/i)
    ];
    
    if (dateMatches[0]) {
      const [, year, month, day] = dateMatches[0];
      const monthMap = {
        'január': '01', 'február': '02', 'március': '03', 'április': '04',
        'május': '05', 'június': '06', 'július': '07', 'augusztus': '08',
        'szeptember': '09', 'október': '10', 'november': '11', 'december': '12'
      };
      date = `${year}-${monthMap[month]}-${day.padStart(2, '0')}`;
    } else if (dateMatches[1]) {
      date = dateMatches[1][0];
    } else {
      // Default date based on file modification time or a fallback
      const stats = fs.statSync(filePath);
      date = stats.mtime.toISOString().split('T')[0];
    }
    
    // Extract reading time
    let readTime = '';
    const readTimeMatch = content.match(/(\d+)\s*perc\s*olvasás/);
    if (readTimeMatch) {
      readTime = `${readTimeMatch[1]} perc`;
    } else {
      // Estimate reading time based on content length
      const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
      const estimatedMinutes = Math.ceil(wordCount / 200); // Assuming 200 words per minute
      readTime = `${estimatedMinutes} perc`;
    }
    
    // Determine category based on content/filename
    let category = 'Általános';
    const slug = fileName.replace('.astro', '');
    
    if (slug.includes('alapoz') || slug.includes('pontalap') || slug.includes('savalapok') || slug.includes('lemezalap')) {
      category = 'Alapozás';
    } else if (slug.includes('teli') || slug.includes('fagy')) {
      category = 'Téli munkák';
    } else if (slug.includes('padlo') || slug.includes('ipari')) {
      category = 'Ipari megoldások';
    } else if (slug.includes('polir') || slug.includes('szinez') || slug.includes('dizs')) {
      category = 'Dekorációs';
    } else if (slug.includes('javitas') || slug.includes('rehabilit')) {
      category = 'Javítás';
    } else if (slug.includes('uj') || slug.includes('trend') || slug.includes('jovo') || slug.includes('innov')) {
      category = 'Technológia';
    } else if (slug.includes('vizszigetel') || slug.includes('szigetel')) {
      category = 'Vízszigetelés';
    } else if (slug.includes('arak') || slug.includes('koltseg')) {
      category = 'Árak';
    }
    
    return {
      slug,
      title: title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: description || '',
      excerpt: description.length > 200 ? description.substring(0, 197) + '...' : description,
      date,
      category,
      readTime,
      author: 'Betonozás Budapest',
      image: `/blog/${slug}.jpg`
    };
    
  } catch (error) {
    console.error(`Error processing ${fileName}:`, error.message);
    return null;
  }
}

// Main function to extract all blog metadata
function extractAllBlogMetadata() {
  const blogPosts = [];
  
  try {
    const files = fs.readdirSync(PAGES_DIR);
    const astroFiles = files.filter(file => 
      file.endsWith('.astro') && 
      !file.includes('index') &&
      !file.includes('kapcsolat') &&
      !file.includes('referenciak') &&
      file !== 'blog.astro'
    );
    
    for (const file of astroFiles) {
      const filePath = path.join(PAGES_DIR, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isFile()) {
        const metadata = extractMetadata(filePath, file);
        if (metadata) {
          blogPosts.push(metadata);
        }
      }
    }
    
    // Sort by date (newest first)
    blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    console.log(`Extracted metadata for ${blogPosts.length} blog posts`);
    
    // Write to a JSON file for easy import
    const outputPath = path.join(__dirname, 'src', 'data', 'blogPosts.json');
    
    // Create data directory if it doesn't exist
    const dataDir = path.dirname(outputPath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, JSON.stringify(blogPosts, null, 2));
    console.log(`Blog metadata saved to: ${outputPath}`);
    
    return blogPosts;
    
  } catch (error) {
    console.error('Error extracting blog metadata:', error);
    return [];
  }
}

// Run the extraction
if (import.meta.url === `file://${process.argv[1]}`) {
  extractAllBlogMetadata();
}

export { extractAllBlogMetadata };