"use client";
import { Container } from "@/components/Container";


export function Map() {
  return (
    <Container>
      <div className="relative w-full h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl bg-indigo-300 cursor-pointer bg-gradient-to-tr from-purple-400 to-indigo-700">
        <img src="/img/itineraire.png" alt="image-itineraire"></img>
      </div>
    </Container>
  );
}
