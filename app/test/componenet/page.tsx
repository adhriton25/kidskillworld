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
        <Button variant="tertiary"  size="sm">
          Small Tertiary Button
        </Button>
        <Button variant="tertiary" mode="loading" >
          selected Tertiary Button
        </Button>
        <Button variant="secondary" mode="button" shape="rounded" disabled>
          disabled Secondary Button
        </Button>
        <Button variant="tertiary" mode="button" size="lg">
          large Tertiary Button
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
        <Button variant="tertiary" mode="button" isLinkButton>
          Tertiary Button
        </Button>
        <Button variant="tertiary" mode="button" isLinkButton>
          Tertiary Button
        </Button>
        <Button variant="secondary" mode="button" isLinkButton>
          Secondary Button
        </Button>
        <Button variant="tertiary" mode="button" isLinkButton>
          Tertiary Button
        </Button>
      </div>
    </>
  );
}
