// validate a base64 string
export function isValidBase64(str: string): boolean {
  try {
    return Buffer.from(str, 'base64').toString('base64') === str;
  } catch (e) {
    return false;
  }
}

// find mime type from base64 string
export function getMimeType(str: string): string {
  const mime = str.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
  if (mime && mime.length) {
    return mime[1];
  }
  return '';
}

//convert base64 to buffer
export function base64ToBuffer(str: string): Buffer {
  return Buffer.from(str, 'base64');
}

// convert base64 to utf8 string
export function base64ToUtf8(str: string): string {
  return base64ToBuffer(str).toString('utf8');
}

// convert base64 to hex string
export function base64ToHex(str: string): string {
  return base64ToBuffer(str).toString('hex');
}

// convert base64 to binary string
export function base64ToBinary(str: string): string {
  return base64ToBuffer(str).toString('binary');
}
