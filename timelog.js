// import { sendMessage } from "./telegram/sendTelegramMessage.js";



export async function log(message='⌚') {
  const time = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: false
  });

// await sendMessage(`[${time}] ${message}`)
  console.log(`[${time}] ${message}`);
}
