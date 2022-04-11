'use strict';

export const isBase64 = (str) => {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(str);
}

export const getMimeType = (str) => {
    //get mime type from base64 string
    let mime = '';
    if (isBase64(str)) {
        mime = str.substring(0, str.indexOf(';base64'));
    }
    return mime;
}

//function to convert base64 to buffer
export const base64ToBuffer = (str) => {
    let buffer = new Buffer(str, 'base64');
    return buffer;
}
