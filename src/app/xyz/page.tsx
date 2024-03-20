import {Navbar} from "@/components/navbar";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Hom from '@/components/home'
import TypewriterComponent from "typewriter-effect";
import About from '@/components/about'
export default function Home() {

  

    return (
      <main className="flex min-h-screen flex-col items-center justify-between ">
        
        <Navbar></Navbar>
        <section id="1" className="p-0 m-32 mt-16" >
        <Hom></Hom>
        </section>
        <section id='2'>
        <About></About>
        </section>
       
        <div className="">
        <section id="3">
        <MacbookScroll ></MacbookScroll>
        </section>
        
        </div>
        
      </main>
    );
  }
  