// src/utils/checkPdfUrl.js
export async function checkPdfUrl(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.status === 200;
  } catch (err) {
    console.error('Error checking URL:', url, err);
    return false;
  }
}

