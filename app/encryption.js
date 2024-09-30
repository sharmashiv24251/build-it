// utils/encryption.js
import CryptoJS from "crypto-js";

const SECRET_KEY = "your-secret-key"; // In a real application, this should be stored securely

export function encryptData(data) {
  const jsonString = JSON.stringify(data);
  const encrypted = CryptoJS.AES.encrypt(jsonString, SECRET_KEY).toString();
  return encodeURIComponent(encrypted);
}

export function decryptData(encryptedString) {
  const decoded = decodeURIComponent(encryptedString);
  const decrypted = CryptoJS.AES.decrypt(decoded, SECRET_KEY).toString(
    CryptoJS.enc.Utf8
  );
  return JSON.parse(decrypted);
}
