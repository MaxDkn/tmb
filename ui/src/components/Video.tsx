"use client";
import { Container } from "@/components/Container";


export function Map() {
  return (
    <Container>
      <div className="relative max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl bg-green-300 cursor-pointer bg-gradient-to-tr from-green-400 to-green-700">
        <img src="/img/itineraire.png" alt="image-itineraire"></img>
      </div>
    </Container>
  );
}
