import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/NavBar";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import bg from "~/../public/images/bg-main.svg";
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Intelligent retour sur t'es jobs de réve " },
  ];
}

export default function Home() {
  const { isLoading, auth } = usePuterStore();
    const navigate = useNavigate()
    
    useEffect(()=> {
        if(!auth.isAuthenticated) navigate('/auth?next=/')
    }, [auth.isAuthenticated ])

  return <main style={{ backgroundImage: `url(${bg})` }} className="bg-cover]">
    <Navbar />
     
    <section className="main-section"> 
      <div className="page-heading py-16">
        <h1>Track your Application & Resume Ratings</h1>
        <h2>Recview tour submissions and check AI-powered feedback. </h2>
      </div>

      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}

    </section>




  </main>
}
