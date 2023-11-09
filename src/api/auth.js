export async function SignUp(values) {
  const resp = await fetch(
    "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/register",
    {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    }
  );
  if (resp.ok) {
    return resp.json();
  }
  throw new Error("Error happened");
}

export async function SignIn(user) {
  const resp = await fetch(
    "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/login",
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "Application/Json" },
    }
  );
  if (resp.ok) {
    return resp.json();
  }
  throw new Error("Error happened");
}
