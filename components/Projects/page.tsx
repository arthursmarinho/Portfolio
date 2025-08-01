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
    <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div onClick={() => handleClick("Frendz")}>
          <ProjectCard
            imageSrc="/projects/Frendz.png"
            altText="Frendx Image"
            tags={[
              "Next/React",
              "NestJs",
              "Axios",
              "Prisma",
              "PostgreSQL",
              "NeonDB",
              "Class Validator",
              "Redux",
              "Firebase Auth",
              "shadcn/ui",
              "Responsível",
              "Tailwind",
              "OnRender Deployment",
            ]}
            description="Frendz é uma rede social com autenticação de usuários, onde é possível visualizar o próprio perfil, publicar textos e navegar de forma responsiva em dispositivos móveis."
            githubUrl="https://github.com/arthursmarinho/Frendz-Front"
            projectUrl="https://frendz-front.onrender.com"
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

        <div onClick={() => handleClick("Talents")}>
          <ProjectCard
            imageSrc="/projects/Talents.png"
            altText="Talents Image"
            tags={[
              "Next/React",
              "Prisma",
              "PostgreSQL",
              "Firebase Auth",
              "Firestore",
              "Zod",
              "Axios",
              "Tailwind",
              "shadcn/ui",
              "Vercel Deployment",
            ]}
            description="O projeto Talents oferece uma plataforma acessível e responsiva para empresas e candidatos. Empresas podem criar e gerenciar vagas, enquanto candidatos se cadastram, visualizam oportunidades e enviam currículos em PDF. O sistema inclui login com e-mail, redefinição de senha e controle de candidaturas pelas empresas."
            githubUrl="https://github.com/arthursmarinho/Talents-Front"
            projectUrl="https://talents-front.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
}
