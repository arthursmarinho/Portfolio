import Projects from "@/components/Projects/page";
import { Text, Box } from "@chakra-ui/react";
import Link from "next/link";
import Contacts from "@/components/Contacts/page";
import Message from "@/components/Message/page";
import Faq from "@/components/Faq/page";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Box as="main">
      <Box
        as="section"
        id="home"
        className="min-h-screen flex justify-center w-screen items-center text-center px-4 sm:px-6 lg:px-8"
      >
        <Box maxW="4xl">
          <Text
            textTransform="uppercase"
            fontSize={["3xl", "4xl", "5xl", "6xl"]}
            fontWeight="extrabold"
            color="black"
          >
            Ei, sou Arthur Marinho
          </Text>

          <Text fontSize={["md", "lg", "xl", "2xl"]} mt={6} color="gray.600">
            Desenvolvedor Web FullStack focado em criar Sites e Aplicações Web{" "}
            <br />
            que geram resultados de sucesso
          </Text>

          <Link href="#projects">
            <Button className="!mt-12 !text-black !bg-yellow-500 !px-12  rounded-2xl">
              Projetos
            </Button>
          </Link>
        </Box>
      </Box>
      <Message />
      <Box
        as="section"
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8  flex justify-center  "
      >
        <Projects />
      </Box>
      <Faq />

      <Box as="section" id="contacts" className="py-20 px-4 sm:px-6 lg:px-8">
        <Contacts />
      </Box>
    </Box>
  );
}
