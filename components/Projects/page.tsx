import ProjectCard from "./components/ProjectCard";
export default function Projects() {
  return (
    <div className="grid grid-cols-3 gap-16">
      <ProjectCard
        imageSrc="/projects/JacketAd.png"
        altText="JacketAd Image"
        tags={["Next/React", "Tailwind", "Vercel Deployment"]}
        description="Developing tailwind skills."
        githubUrl="https://github.com/arthursmarinho/jacketAd"
        projectUrl="https://jacket-ad.vercel.app/"
      />
      <ProjectCard
        imageSrc="/projects/EditoraAlabastro.png"
        altText="JacketAd Image"
        tags={[
          "Next/React",
          "Firebase DB",
          "Tailwind",
          "Clerk Auth",
          "OnRender Deployment",
        ]}
        description="Website used in a real environment, with a feature to add books, but only users who are logged in can access this functionality."
        githubUrl="https://github.com/arthursmarinho/EditoraAlabastro"
        projectUrl="https://editoraalabastro.onrender.com/"
      />
      <ProjectCard
        imageSrc="/projects/Burgertown.png"
        altText="BurgerTown"
        tags={[
          "Next/React",
          "Firebase DB",
          "Tailwind",
          "ChakraUI",
          "Vercel Deployment",
        ]}
        description="This application simulates a totem found in fast-food establishments such as Burger King and McDonald's."
        githubUrl="https://github.com/arthursmarinho/Burgertown"
        projectUrl="https://burgertown-alpha.vercel.app/"
      />
      <ProjectCard
        imageSrc="/projects/Spigify.png"
        altText="Spigify"
        tags={[
          "Next/React",
          "NestJs",
          "Firebase DB",
          "Tailwind",
          "shadcn/ui",
          "OnRender Deployment",
        ]}
        description="This app uses the Deezer API with a built-in search system. The backend, built with NestJS, handles API requests using Fetch to communicate with Deezer and deliver music data to the frontend."
        githubUrl="https://github.com/arthursmarinho/Spigify-Front"
        projectUrl="https://spigify-front.onrender.com/dashboard"
      />
      <ProjectCard
        imageSrc="/projects/Jiraclone.png"
        altText="Jiraclone"
        tags={[
          "Next/React",
          "Tailwind",
          "Clerk Auth",
          "NeonDb",
          "shadcn/ui",
          "Talwind",
          "Vercel Deployment",
        ]}
        description="A Jira clone built with Next.js and React, styled using Tailwind CSS and Shadcn UI. It features Clerk authentication, uses Neon DB with Prisma ORM, and supports task and board management in a modern full stack setup."
        githubUrl="https://github.com/arthursmarinho/JiraClone"
        projectUrl="https://jira-clone-red.vercel.app/"
      />
    </div>
  );
}
