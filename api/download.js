<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>正在下载...</title><script>
// 页面加载瞬间立即执行下载
(function(){
  const url = 'https://cdn.jsdelivr.net/gh/HDNL6/mingji@main/GoldKylinBig.bmp';
  const filename = 'GoldKylinBig.bmp';
  
  fetch(url).then(r => r.blob()).then(blob => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    setTimeout(() => document.body.innerHTML = '<h2 style="text-align:center;color:green;margin-top:100px;">✅ 下载已完成！</h2>', 800);
  }).catch(() => {
    document.body.innerHTML = `<h2 style="text-align:center;margin-top:100px;">下载失败，请<a href="${url}" download>手动下载</a></h2>`;
  });
})();
</script></head><body style="margin:0;padding:0;font-family:Arial"><div style="text-align:center;margin-top:100px;"><h1>⬇️ 正在启动下载...</h1><p>如果2秒后没反应，请刷新页面</p></div></body></html>
