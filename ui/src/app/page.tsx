import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Map } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Projet Tour du Mont Blanc"
        title="Quel est notre projet"
        id="details"
      >
        Nous sommes une &eacute;quipe d&apos;&eacute;lèves de première au lyc&eacute;e public de Cesson-S&eacute;vign&eacute;, engag&eacute;s dans le cadre des classes engag&eacute;es 
        et en continuit&eacute; avec le projet Inside Out. Notre objectif est de r&eacute;aliser un tour du 
        Mont Blanc, pour sensibiliser à travers une expo photo sur l&apos;&eacute;co-voyage et la nature. 
        à notre retour, nous allons d&eacute;tailler tout notre parcours pour qu&apos;il soit accessible à 
        un maximum de personnes.
      </SectionTitle>

      <Benefits data={benefitOne} id="equipe"/>

      <SectionTitle
        preTitle="Notre itinéraire"
        title="Notre trajet autour du Mont Blanc"
      >
        Voici un aperçu global de notre itin&eacute;raire autour du Mont Blanc. 
        Pour en savoir plus sur chaque &eacute;tape et les d&eacute;tails du parcours, 
        tout est expliqué dans la page d&eacute;di&eacute;.
      </SectionTitle>

      <Map/>

      <SectionTitle
        preTitle="Testimonials"
        title="Here&apos;s what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
