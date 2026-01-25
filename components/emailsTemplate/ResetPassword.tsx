import { Html, Button, Text, Section, Container, Heading } from "@react-email/components";

export const ResetPasswordEmail = ({ token }: { token: string }) => {
  const resetLink = `${process.env.NEXT_PUBLIC_URL}/reset-password?token=${token}`;

  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Heading style={h1}>Reset your password</Heading>
          <Text style={text}>
            Someone requested a password reset for your account. If this was you, click the button below:
          </Text>
          <Button href={resetLink} style={button}>
            Reset Password
          </Button>
          <Text style={footer}>
            This link expires in 15 minutes. If you didn't request this, please ignore this email.
          </Text>
        </Container>
      </Section>
    </Html>
  );
};

const main = { backgroundColor: "#f6f9fc", padding: "10px 0" };
const container = { backgroundColor: "#ffffff", border: "1px solid #f0f0f0", padding: "45px" };
const h1 = { color: "#1a1a1a", fontSize: "24px", fontWeight: "bold" };
const text = { color: "#444", fontSize: "16px", lineHeight: "26px" };
const button = { backgroundColor: "#4f46e5", color: "#fff", padding: "12px 20px", borderRadius: "8px", fontWeight: "bold" };
const footer = { color: "#8898aa", fontSize: "12px", marginTop: "20px" };