export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Process the form data here (e.g., save to a database)
    console.log(`Received form data: Name - ${email}, Email - ${password}`);

    return res.status(200).json({ message: "Form submitted successfully" });
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
