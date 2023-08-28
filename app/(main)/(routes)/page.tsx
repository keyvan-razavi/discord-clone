import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs/app-beta";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}
