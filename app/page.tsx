import Projects from "@/components/Projects/page";
import { Text, Button, Box } from "@chakra-ui/react";
import Link from "next/link";
import Contacts from "@/components/Contacts/page";

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
            <Button
              mt={12}
              size="lg"
              px={10}
              py={6}
              fontWeight={700}
              textTransform="uppercase"
              bgColor="yellow.500"
              _hover={{
                bg: "yellow.600",
              }}
            >
              Projetos
            </Button>
          </Link>
        </Box>
      </Box>
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 py-16 ">
        <div className="max-w-4xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-relaxed">
            Recrutador ou visualizador, como os projetos são hospedados em
            plataformas gratuitas, pode levar alguns segundos para carregar.
            <br className="hidden sm:block" />
            Como alguns projetos contém back-end, o projeto pode não funcionar
            corretamente quando você realizar alguma ação.
            <br />É necessário que você espere um pouco para que o back-end
            acorde.
          </h1>
        </div>
      </div>

      <Box
        as="section"
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8  flex justify-center  "
      >
        <Projects />
      </Box>

      <Box as="section" id="contacts" className="py-20 px-4 sm:px-6 lg:px-8">
        <Contacts />
      </Box>
    </Box>
  );
}
