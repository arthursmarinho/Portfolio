import Image from "next/image";
import Link from "next/link";
import { Card, Button, Tag, Flex, Text } from "@chakra-ui/react";

interface ProjectCardProps {
  imageSrc: string;
  altText: string;
  tags: string[];
  githubUrl: string;
  projectUrl: string;
  description?: string;
}

export default function ProjectCard({
  imageSrc,
  altText,
  tags,
  githubUrl,
  projectUrl,
  description,
}: ProjectCardProps) {
  return (
    <Card.Root maxW="sm" overflow="hidden" bgColor="#28272A">
      <Image src={imageSrc} alt={altText} width={500} height={500} />
      <Flex gap={2} p={4} wrap="wrap">
        {tags.map((tag, index) => (
          <Tag.Root size="lg" key={index}>
            {tag}
          </Tag.Root>
        ))}
        <Text>{description}</Text>
      </Flex>
      <Flex m="auto">
        <Card.Footer gap="6" mt={4}>
          <Link href={githubUrl} target="_blank">
            <Button>GitHub</Button>
          </Link>
          <Link href={projectUrl} target="_blank">
            <Button variant="outline">View Project</Button>
          </Link>
        </Card.Footer>
      </Flex>
    </Card.Root>
  );
}
