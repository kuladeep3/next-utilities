// pages/api/current-time.js

export default async function handler(req, res) {
  // Artificial delay function
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Simulate delay (e.g., 2 seconds)
  await delay(100);

  // Get current time with seconds
  const currentTime = new Date();

  // Format the current time to include hours, minutes, and seconds
  const timeString = currentTime.toLocaleTimeString();

  // Send the response
  res.status(200).json({ time: timeString });
}
