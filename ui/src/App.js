import React from 'react';

// Composant principal
function App() {
  return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto p-4">
          <Home />
          <About />
          <Team />
          <Itineraire />
          <Funds />
          <Budget />
          <Contact />
        </main>
        <Footer />
      </div>
  );
}

// En-tête avec navigation fixe
function Header() {
  return (
      <header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
        <nav className="flex justify-between items-center container mx-auto">
          <div className="text-xl font-bold">Tour du Mont Blanc</div>
          <ul className="flex space-x-4">
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">Présentation</a></li>
            <li><a href="#team">Équipe</a></li>
            <li><a href="#itineraire">Itinéraire</a></li>
            <li><a href="#funds">Cagnotte</a></li>
            <li><a href="#budget">Budget</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
  );
}

// Section d'accueil avec Hero et CTA
function Home() {
  return (
      <section id="home" className="pt-20 relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-4">Tour du Mont Blanc</h1>
          <p className="text-xl mb-8">Une aventure humaine, sportive et engagée</p>
          
        </div>
      </section>
  );
}

// Section Présentation
function About() {
  return (
      <section id="about" className="my-16">
        <h2 className="text-3xl font-bold mb-4">Présentation du Projet</h2>
        <p className="mb-4">
          Nous entreprenons un tour du Mont Blanc dans le cadre des classes engagées, en continuité avec le projet Inside Out. Ce projet vise à allier aventure, engagement et dépassement de soi.
        </p>
        <h3 className="text-2xl font-bold mb-2">Objectifs et Valeurs</h3>
        <p className="mb-4">
          Notre objectif est de démontrer que l'esprit d'équipe, la détermination et l'engagement peuvent transformer une aventure en un projet de vie.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/about1.jpg" alt="Préparation" className="w-full rounded" />
          <img src="/about2.jpg" alt="Esprit d'équipe" className="w-full rounded" />
        </div>
      </section>
  );
}

// Section Équipe
function Team() {
  const teamMembers = [
    {
      name: "Alice Dupont",
      role: "Leader",
      bio: "Passionnée par la montagne et le sport, Alice mène l'équipe avec détermination.",
      photo: "/team/alice.jpg",
    },
    {
      name: "Bob Martin",
      role: "Organisateur",
      bio: "Expert en logistique et aventure, Bob veille à la bonne planification du projet.",
      photo: "/team/bob.jpg",
    },
    {
      name: "Charlie Durand",
      role: "Motivateur",
      bio: "Avec son énergie contagieuse, Charlie motive l'équipe même dans les moments difficiles.",
      photo: "/team/charlie.jpg",
    },
  ];

  return (
      <section id="team" className="my-16">
        <h2 className="text-3xl font-bold mb-4">Notre Équipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
              <div key={index} className="border rounded p-4">
                <img src={member.photo} alt={member.name} className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="italic">{member.role}</p>
                <p>{member.bio}</p>
              </div>
          ))}
        </div>
      </section>
  );
}

// Section Itinéraire
function Itineraire() {
  return (
      <section id="itineraire" className="my-16">
        <h2 className="text-3xl font-bold mb-4">Itinéraire du Tour</h2>
        <p className="mb-4">
          Voici notre parcours prévisionnel pour le tour du Mont Blanc.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Départ de Chamonix</li>
          <li>Les Houches</li>
          <li>Les Contamines</li>
          <li>Courmayeur</li>
          <li>Retour à Chamonix</li>
        </ul>
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2">Carte Interactive</h3>
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded">
            <span>Carte interactive ici (intégration Google Maps ou autre)</span>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Description des Étapes</h3>
          <p>Chaque étape sera détaillée avec des photos et des descriptions pour vous immerger dans notre aventure.</p>
        </div>
      </section>
  );
}

// Section Cagnotte
function Funds() {
  return (
      <section id="funds" className="my-16">
        <h2 className="text-3xl font-bold mb-4">Soutenir le Projet</h2>
        <p className="mb-4">
          Votre soutien financier nous permet de réaliser ce tour du Mont Blanc et de vivre cette aventure humaine et sportive. Chaque contribution compte !
        </p>
        <a
            href="https://example.com/cagnotte"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Contribuer via la Cagnotte
        </a>
      </section>
  );
}

// Section Budget
function Budget() {
  return (
      <section id="budget" className="my-16">
        <h2 className="text-3xl font-bold mb-4">Budget Prévisionnel</h2>
        <table className="min-w-full border">
          <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Catégorie</th>
            <th className="border px-4 py-2">Coût estimé</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td className="border px-4 py-2">Transport</td>
            <td className="border px-4 py-2">1000€</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Hébergement</td>
            <td className="border px-4 py-2">1500€</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Alimentation</td>
            <td className="border px-4 py-2">800€</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Autres frais</td>
            <td className="border px-4 py-2">500€</td>
          </tr>
          <tr className="font-bold">
            <td className="border px-4 py-2">Total</td>
            <td className="border px-4 py-2">3800€</td>
          </tr>
          </tbody>
        </table>
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-2">Infographie</h3>
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded">
            <span>Graphique du budget ici</span>
          </div>
        </div>
      </section>
  );
}

// Section Contact
function Contact() {
  return (
      <section id="contact" className="my-16">
        <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
        <form
            action="mailto:contact@montblanctour.com"
            method="post"
            encType="text/plain"
            className="flex flex-col space-y-4"
        >
          <input
              type="text"
              name="name"
              placeholder="Votre Nom"
              className="border rounded p-2"
              required
          />
          <input
              type="email"
              name="email"
              placeholder="Votre Email"
              className="border rounded p-2"
              required
          />
          <textarea
              name="message"
              placeholder="Votre Message"
              className="border rounded p-2"
              rows="5"
              required
          ></textarea>
          <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Envoyer
          </button>
        </form>
        <div className="mt-4">
          <p>Email: contact@montblanctour.com</p>
          <p>
            Réseaux Sociaux:
            <a href="#" className="text-blue-500"> Facebook</a>,
            <a href="#" className="text-blue-500"> Instagram</a>
          </p>
        </div>
      </section>
  );
}

// Pied de page
function Footer() {
  return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2025 Tour du Mont Blanc. Tous droits réservés.
      </footer>
  );
}

export default App;
