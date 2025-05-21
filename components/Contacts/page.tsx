"use client";

import { Flex, Text, Link, HStack, Icon, Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Toaster, toaster } from "@/components/ui/toaster";

export default function Contacts() {
  const [copied, setCopied] = useState(false);
  const email = "marinho.arthur127@gmail.com";
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toaster.create({
        title: "Email copiado",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex direction="column" align="flex-start" gap={6} p={4}>
      <Toaster />
      <Text color="black" fontSize="8xl" fontWeight="bold">
        Let's collaborate
      </Text>
      <Text color="gray.700" fontSize="4xl" mb={2}>
        Contact me
      </Text>
      <HStack gap={8}>
        <Link
          href="https://github.com/arthursmarinho"
          display="flex"
          alignItems="center"
          color="gray.800"
          _hover={{ color: "blue.500" }}
          fontSize="2xl"
        >
          <Icon as={FaGithub} mr={2} />
          GitHub
        </Link>

        <Button
          bgColor="whiteAlpha.300"
          _hover={{ color: "blue.500" }}
          onClick={handleCopy}
          variant="solid"
          fontSize="2xl"
        >
          <Icon as={FaEnvelope} /> Email
        </Button>

        <Link
          href="https://www.linkedin.com/in/arthur-marinho-a9a764350/"
          display="flex"
          alignItems="center"
          color="gray.800"
          _hover={{ color: "blue.500" }}
          fontSize="2xl"
        >
          <Icon as={FaLinkedin} mr={2} />
          LinkedIn
        </Link>
      </HStack>
    </Flex>
  );
}
