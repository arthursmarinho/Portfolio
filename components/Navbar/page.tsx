import { Text, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="fixed top-0 w-full z-50 bg-white flex items-center justify-between !px-12 h-20">
      <div className="text-gray-700">
        <Text fontSize="xl" fontWeight="semibold">
          Arthur Marinho
        </Text>
      </div>
      <div className="text-gray-700 !space-x-12">
        <Link href="#/">
          <Button size="xl" gapX="12">
            Home
          </Button>
        </Link>
        <Link href="#projects">
          <Button size="xl">Projects</Button>
        </Link>
        <Link href="#contacts">
          <Button size="xl">Contact</Button>
        </Link>
      </div>
    </div>
  );
}
