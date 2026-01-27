"use client";
import { Button } from "@/components/base/Button";
import Chip from "@/components/base/Chip";
import Input from "@/components/base/Input";
import { Pagination } from "@/components/base/Pagination";
import { FlaskRound, FlipHorizontal, SearchIcon } from "lucide-react";

export default function ComponentGallery() {
  return (
    <>
      <div className="m-10 flex  gap-4">
        <Input
          label="Email Address"
          type="email"
          placeholder="name@example.com"
          name={"name is"}
          leftIcon={<FlaskRound />}
          helperText="helper test"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          error={"error in password"} // Pass your error state here
          name={" name is"}
        />
        <Input
          placeholder="Search lessons..."
          leftIcon={<SearchIcon size={18} />}
          className="bg-gray-100 border-none"
          name={""}
        />
        <Input
          label="Student Name"
          name="studentName"
          placeholder="Enter full name"
          required
        />

        <Input
          type="email"
          name="parentEmail"
          label="Parent Email"
          placeholder="example@domain.com"
          error="Invalid email format"
        />
        <Input
          name="feedback"
          label="Feedback"
          placeholder="Write your thoughts..."
          helperText="Max 500 characters"
          rounded={false}
        />
      </div>
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
        <Button variant="tertiary" size="sm">
          Small Tertiary Button
        </Button>
        <Button variant="tertiary" mode="loading">
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
          size="lg"
          showUnderline
          isLinkButton
          leftIcon={<FlaskRound />}
        >
          Primary large underline Button
        </Button>
        <Button
          variant="secondary"
          size="sm"
          mode="button"
          isLinkButton
          rightIcon={<FlipHorizontal />}
        >
          Secondary small Button
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

      <Pagination
        currentPage={1}
        totalPages={20}
        onPageChange={(page) => {
          console.log(page);
        }}
      />

      <div className="m-10  gap-4">
        <Chip
          variant="primary"
          size="sm"
          icon={<FlaskRound />}
          text={"primary  small chip"}
        />
        <Chip
          variant="primary-light"
          size="md"
          icon={<FlipHorizontal />}
          text={"primary-light medium chip"}
        />
        <Chip variant="secondary" size="lg" text="secondary  large chip" />
        <Chip variant="secondary-light" size="sm" text="secondary-light chip" />
      </div>
      <div className="m-10 flex  gap-4">
        <Chip variant="tertiary" text="tertiary chip" />
        <Chip variant="tertiary-light" size="lg" text="large tertiary chip" />
      </div>
    </>
  );
}
