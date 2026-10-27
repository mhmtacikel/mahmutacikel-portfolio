export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export function parseMarkdown(rawContent: string, slug: string): BlogPost {
  // Regex to match YAML frontmatter
  const match = rawContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  
  const meta: Record<string, string> = {};
  let content = rawContent;

  if (match) {
    const metaString = match[1];
    content = match[2];
    
    metaString.split('\n').forEach(line => {
      const [key, ...rest] = line.split(':');
      if (key && rest.length > 0) {
        meta[key.trim()] = rest.join(':').trim();
      }
    });
  }
  
  return {
    slug,
    title: meta.title || 'Untitled',
    excerpt: meta.excerpt || '',
    date: meta.date || '',
    readTime: meta.readTime || '',
    category: meta.category || 'Uncategorized',
    content: content.trim(),
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // import.meta.glob with ?raw query fetches the file as string
  const mdFiles = import.meta.glob('@/content/blog/*.md', { query: '?raw', import: 'default' });
  
  const posts: BlogPost[] = [];
  
  for (const path in mdFiles) {
    const slug = path.split('/').pop()?.replace('.md', '') || '';
    const rawContent = await mdFiles[path]() as string;
    const post = parseMarkdown(rawContent, slug);
    posts.push(post);
  }
  
  // Sort by date (assuming YYYY-MM-DD or similar parseable date)
  // For now, just return as is, or sort by assuming Date string
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
