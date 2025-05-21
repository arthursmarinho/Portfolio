import ProjectCard from "./components/ProjectCard";

export default function Projects() {
  return (
    <div className="grid grid-cols-3 gap-16">
      <ProjectCard
        imageSrc="/projects/JacketAd.png"
        altText="JacketAd Image"
        tags={["Next/React", "Tailwind", "Vercel Deployment"]}
        description="Desenvolvendo habilidades com Tailwind."
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
        description="Site utilizado em um ambiente real, com funcionalidade para adicionar livros, acessível apenas para administradores."
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
        description="Esta aplicação simula um totem encontrado em restaurantes fast-food como Burger King e McDonald's."
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
        description="Este app utiliza a API do Deezer com um sistema de busca integrado. O backend, feito com NestJS, gerencia as requisições usando Fetch para se comunicar com o Deezer e entregar os dados musicais ao frontend."
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
        description="Um clone do Jira construído com Next.js e React, estilizado com Tailwind CSS e Shadcn UI. Possui autenticação com Clerk, usa Neon DB com Prisma ORM, e permite gerenciamento de tarefas e quadros em um ambiente moderno full stack."
        githubUrl="https://github.com/arthursmarinho/JiraClone"
        projectUrl="https://jira-clone-red.vercel.app/"
      />
      <ProjectCard
        imageSrc="/projects/Portfolio.png"
        altText="Portfolio"
        tags={["Next/React", "Tailwind", "ChakraUI", "Vercel Deployment"]}
        description="Portfólio rápido, responsivo e acessível. Apresenta meus projetos e habilidades com design limpo e navegação fluida."
        githubUrl="https://github.com/arthursmarinho/Portfolio"
        projectUrl="https://portfolio-arthursmarinhos-projects.vercel.app/#/"
      />
    </div>
  );
}
