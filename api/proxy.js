export default async function handler(req, res) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const target = 'https://script.google.com';
  try {
    // Forward only the path after /api/proxy
    const path = req.url.replace(/^\/api\/proxy/, '');
    const targetUrl = target + path;

    // Get the body as raw data
    let body;
    if (req.method === 'GET' || req.method === 'HEAD') {
      body = undefined;
    } else if (typeof req.body === 'string') {
      body = req.body;
    } else if (req.body) {
      body = JSON.stringify(req.body);
    }

    const fetchOptions = {
      method: req.method,
      headers: {
        'Content-Type': req.headers['content-type'] || 'application/x-www-form-urlencoded'
      },
      body: body
    };

    const r = await fetch(targetUrl, fetchOptions);
    const text = await r.text();

    // Mirror status and body
    res.status(r.status).send(text);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Proxy error' });
  }
}
