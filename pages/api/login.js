// pages/api/login.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Artificial delay function
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Simulate delay (e.g., 2 seconds)
    await delay(1000);

    // Simple validation (you can add more checks)
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Here, you would typically add your authentication logic (e.g., check credentials)
    // For now, just returning success as a placeholder

    return res.status(200).json({ message: "Login successful!" });
  } else {
    // If it's not a POST request, return a 405 Method Not Allowed error
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
}
