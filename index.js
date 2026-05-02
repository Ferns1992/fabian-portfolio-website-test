export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname;

    // Remove leading slash and handle root path
    if (path === '/' || path === '') {
      path = 'index.html';
    } else if (path.startsWith('/')) {
      path = path.slice(1);
    }

    // Construct the file path - serving from portfolio-site directory
    const filePath = `../portfolio-site/${path}`;

    try {
      // Try to fetch the file
      const response = await fetch(new Request(filePath, request));

      // If successful, return with appropriate content type
      if (response.ok) {
        const contentType = getContentType(path);
        return new Response(response.body, {
          headers: {
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=3600'
          }
        });
      }
    } catch (error) {
      // File not found or other error - serve 404 or index.html for SPA-like behavior
      if (path !== 'index.html' && !path.endsWith('.html') && !path.includes('.')) {
        // For client-side routing, serve index.html
        try {
          const indexResponse = await fetch(new Request('../portfolio-site/index.html', request));
          return new Response(indexResponse.body, {
            headers: {
              'Content-Type': 'text/html;charset=UTF-8',
              'Cache-Control': 'public, max-age=3600'
            }
          });
        } catch (e) {
          // Fallback to 404
          return new Response('404 Not Found', { status: 404 });
        }
      }

      // Return 404 for actual file not found
      return new Response('404 Not Found', { status: 404 });
    }
  }
};

function getContentType(path) {
  if (path.endsWith('.html')) return 'text/html;charset=UTF-8';
  if (path.endsWith('.css')) return 'text/css;charset=UTF-8';
  if (path.endsWith('.js')) return 'application/javascript;charset=UTF-8';
  if (path.endsWith('.json')) return 'application/json;charset=UTF-8';
  if (path.endsWith('.png')) return 'image/png';
  if (path.endsWith('.jpg') || path.endsWith('.jpeg')) return 'image/jpeg';
  if (path.endsWith('.svg')) return 'image/svg+xml';
  if (path.endsWith('.ico')) return 'image/x-icon';
  return 'text/plain;charset=UTF-8';
}