export function cleanText(value) {
  return String(value || "").trim();
}

export function extractSkuAndSequence(fileName) {

  const cleanName = cleanText(fileName);

  const regex = /^(.+?)\s*\((\d+)\)\.[^.]+$/i;

  const match = cleanName.match(regex);

  if (!match) {
    return null;
  }

  return {
    erpSku: cleanText(match[1]),
    sequence: Number(match[2])
  };
}