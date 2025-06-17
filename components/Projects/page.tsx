"use client";

import { doc, serverTimestamp, setDoc, increment } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import ProjectCard from "./components/ProjectCard";

export default function Projects() {
  async function handleClick(projectTitle: string) {
    const docRef = doc(db, "clicks", projectTitle);
    try {
      await setDoc(
        docRef,
        {
          nome: projectTitle,
          clickedAt: serverTimestamp(),
          clicks: increment(1),
        },
        { merge: true }
      );
    } catch (err) {
      console.error("Erro ao registrar clique:", err);
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div onClick={() => handleClick("JacketAd")}>
        <ProjectCard
          imageSrc="/projects/JacketAd.png"
          altText="JacketAd Image"
          tags={["Next/React", "Tailwind", "Vercel Deployment"]}
          description="Desenvolvendo habilidades com Tailwind."
          githubUrl="https://github.com/arthursmarinho/jacketAd"
          projectUrl="https://jacket-ad.vercel.app/"
        />
      </div>

      <div onClick={() => handleClick("EditoraAlabastro")}>
        <ProjectCard
          imageSrc="/projects/EditoraAlabastro.png"
          altText="Editora Alabastro"
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
      </div>

      <div onClick={() => handleClick("Burgertown")}>
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
      </div>

      <div onClick={() => handleClick("Spigify")}>
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
          description="Este app utiliza a API do Deezer com um sistema de busca integrado."
          githubUrl="https://github.com/arthursmarinho/Spigify-Front"
          projectUrl="https://spigify-front.onrender.com/dashboard"
        />
      </div>

      <div onClick={() => handleClick("Jiraclone")}>
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
          description="Um clone do Jira construído com Next.js e React, estilizado com Tailwind CSS e Shadcn UI."
          githubUrl="https://github.com/arthursmarinho/JiraClone"
          projectUrl="https://jira-clone-red.vercel.app/"
        />
      </div>

      <div onClick={() => handleClick("Portfolio")}>
        <ProjectCard
          imageSrc="/projects/Portfolio.png"
          altText="Portfolio"
          tags={["Next/React", "Tailwind", "ChakraUI", "Vercel Deployment"]}
          description="Portfólio rápido e acessível. Apresenta meus projetos e habilidades com design limpo e navegação fluida."
          githubUrl="https://github.com/arthursmarinho/Portfolio"
          projectUrl="https://portfolio-arthursmarinhos-projects.vercel.app/#/"
        />
      </div>
    </div>
  );
}
