import { Button } from "@/components/Base/Button";
import { FlaskRound, FlipHorizontal } from "lucide-react";

export default function ComponentGallery() {
  return (
    <>
      <div className="m-10 flex  gap-4">
        <Button
          variant="primary"
          mode="button"
          showUnderline
          leftIcon={<FlaskRound />}
        >
          Primary underline Button
        </Button>
        <Button
          variant="secondary"
          mode="button"
          rightIcon={<FlipHorizontal />}
        >
          Secondary Button
        </Button>
        <Button variant="accent" mode="loading">
          Accent Button
        </Button>
        <Button variant="success" mode="button" selected>
          selected Success Button
        </Button>
        <Button variant="error" mode="button" shape="rounded" disabled>
          disabled Error Button
        </Button>
        <Button variant="info" mode="button">
          Info
        </Button>
      </div>
      <div className="m-10 flex  gap-4">
        <Button
          variant="primary"
          mode="button"
          showUnderline
          isLinkButton
          leftIcon={<FlaskRound />}
        >
          Primary underline Button
        </Button>
        <Button
          variant="secondary"
          mode="button"
          isLinkButton
          rightIcon={<FlipHorizontal />}
        >
          Secondary Button
        </Button>
        <Button variant="accent" mode="button" isLinkButton>
          Accent Button
        </Button>
        <Button variant="success" mode="button" isLinkButton>
          Success Button
        </Button>
        <Button variant="error" mode="button" isLinkButton>
          Error Button
        </Button>
        <Button variant="info" mode="button" isLinkButton = {true} href="/learning">
          Info Button
        </Button>
      </div>
    </>
  );
}
