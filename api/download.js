export default async function handler(req, res) {
  const { file = 'GoldKylinBig.bmp' } = req.query;
  const fileUrl = `https://cdn.jsdelivr.net/gh/HDNL6/mingji@main/${file}`;
  
  try {
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    res.setHeader('Content-Disposition', `attachment; filename="${file}"`);
    res.setHeader('Content-Type', 'application/octet-stream');
    const buffer = Buffer.from(await blob.arrayBuffer());
    res.send(buffer);
  } catch (error) {
    res.status(500).json({ error: '下载失败', details: error.message });
  }
}
