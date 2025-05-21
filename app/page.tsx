import Projects from "@/components/Projects/page";
import { Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import Contacts from "@/components/Contacts/page";
export default function Home() {
  return (
    <div>
      <div
        id="/"
        className="h-screen text-black flex justify-center items-center flex-col text-center"
      >
        <Text textTransform="uppercase" fontSize="6xl" fontWeight="extrabold">
          Hey, im Arthur Marinho
        </Text>
        <Text className="text-gray-700" fontSize="2xl" mt={6}>
          A FullStack focused Web Developer building Websites and Web <br />
          Applications that leads to the success
        </Text>
        <Link href="#projects">
          <Button
            mt={12}
            size="xl"
            px={20}
            py={8}
            fontWeight={700}
            textTransform="uppercase"
            bgColor="yellow.500"
            _hover={{
              bg: "yellow.600",
            }}
          >
            Projects
          </Button>
        </Link>
      </div>
      <div className="h-screen flex justify-center items-center" id="projects">
        <Projects />
      </div>
      <div className="h-screen flex justify-center items-center" id="contacts">
        <Contacts />
      </div>
    </div>
  );
}
