function encodeString(s: string): string {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        result += s.charCodeAt(i) + ".";
    }
    return result;
}

function decodeString(s: string): string {
    let result = "";
    const arr = s.split(".");
    for (let i = 0; i < arr.length - 1; i++) {
        result += String.fromCharCode(Number(arr[i]));
    }
    return result;
}

export { encodeString, decodeString };
