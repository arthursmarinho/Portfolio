import { Text, Button, Box, HStack } from "@chakra-ui/react";
import Link from "next/link";

export default function NavBar() {
  return (
    <Box
      as="nav"
      className="fixed top-0 w-full z-50 bg-white px-6 sm:px-8 md:px-12 h-20 shadow-sm"
    >
      <Box className="flex items-center justify-between h-full mx-auto">
        <Text
          fontSize={["lg", "xl"]}
          fontWeight="semibold"
          color="gray.700"
          px={8}
        >
          Arthur Marinho
        </Text>

        <HStack color="black">
          <Link href="#home">
            <Button variant="ghost" size="md" color="black">
              Home
            </Button>
          </Link>
          <Link href="#projects">
            <Button variant="ghost" size="md" color="black">
              Projetos
            </Button>
          </Link>
          <Link href="#contacts">
            <Button variant="ghost" size="md" color="black">
              Contato
            </Button>
          </Link>
        </HStack>
      </Box>
    </Box>
  );
}
