export async function sendMessage(userMessage) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(userMessage),
    headers: {
      "Content-Type": "application/json",
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong")
  }
}