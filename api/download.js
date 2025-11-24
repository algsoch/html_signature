const fs = require('fs');
const path = require('path');

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { password, file } = req.body;

    // Get password from environment variable
    const correctPassword = process.env.DOWNLOAD_PASSWORD || 'Iit7065@';

    if (password !== correctPassword) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Validate file path to prevent directory traversal
    if (!file || !file.startsWith('signatures/signature-')) {
      return res.status(400).json({ error: 'Invalid file path' });
    }

    // Read the file from the signatures directory
    const filePath = path.join(process.cwd(), file);
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found' });
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');

    return res.status(200).json({ 
      success: true, 
      content: fileContent,
      filename: path.basename(file)
    });

  } catch (error) {
    console.error('Download error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
}
