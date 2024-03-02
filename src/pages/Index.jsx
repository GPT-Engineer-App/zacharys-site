import React from "react";
import { Box, Container, Heading, Text, VStack, HStack, IconButton, Image, Link, useColorMode, useColorModeValue, Button, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaSun, FaMoon, FaEnvelope, FaPlus } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Box bg={bgColor} minH="100vh">
      <Container maxW="container.md" py={10}>
        <VStack spacing={4} as="header" alignItems="flex-start">
          <HStack justifyContent="space-between" width="full">
            <Heading size="lg">Zachary Taylor</Heading>
            <IconButton icon={useColorModeValue(<FaSun />, <FaMoon />)} isRound size="md" alignSelf="flex-start" onClick={toggleColorMode} aria-label="Toggle color mode" />
          </HStack>
          <Text color={textColor}>Software Engineer, Creative Thinker, and Lifelong Learner.</Text>
        </VStack>
        <VStack as="main" spacing={8} mt={20}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1585075563679-21b93970bb08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxaYWNoYXJ5JTIwVGF5bG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzA5NDA4NDA1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Zachary Taylor" loading="lazy" />
          <Heading as="h2" size="md" color={textColor}>
            About Me
          </Heading>
          <Text fontSize="md" color={textColor}>
            Hello! I'm Zachary, a passionate software engineer with a love for building scalable web applications and engaging user experiences. With a strong foundation in React and modern web technologies, I'm always excited to tackle complex challenges and learn new things along the way.
          </Text>
          <Heading as="h3" size="md" color={textColor}>
            Connect with Me
          </Heading>
          <HStack spacing={4}>
            <Link href="https://github.com/zacharytaylor" isExternal>
              <IconButton aria-label="Github profile" icon={<FaGithub />} size="lg" colorScheme="gray" />
            </Link>
            <Link href="https://linkedin.com/in/zacharytaylor" isExternal>
              <IconButton aria-label="LinkedIn profile" icon={<FaLinkedin />} size="lg" colorScheme="blue" />
            </Link>
            <Link href="mailto:zacharytaylor@example.com">
              <IconButton aria-label="Email Zachary" icon={<FaEnvelope />} size="lg" colorScheme="red" />
            </Link>
          </HStack>
        </VStack>
        <Button rightIcon={<Icon as={FaPlus} />} colorScheme="teal" variant="outline" mt={10}>
          View My Projects
        </Button>
      </Container>
    </Box>
  );
};

export default Index;
