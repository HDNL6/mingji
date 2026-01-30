// 文件名必须是 download.js
export default async function handler(req, res) {
  // 获取文件名（从URL参数）
  const { file = 'GoldKylinBig.bmp' } = req.query;
  
  // 你的文件在GitHub上的CDN链接
  const fileUrl = `https://cdn.jsdelivr.net/gh/HDNL6/mingji@main/${file}`;
  
  try {
    // 获取文件
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    
    // ⚡ 关键：设置强制下载头（浏览器会立即下载）
    res.setHeader('Content-Disposition', `attachment; filename="${file}"`);
    res.setHeader('Content-Type', 'application/octet-stream');
    
    // 返回文件数据
    const buffer = Buffer.from(await blob.arrayBuffer());
    res.send(buffer);
    
  } catch (error) {
    res.status(500).json({ error: '下载失败', details: error.message });
  }
}
