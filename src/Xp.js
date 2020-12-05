import React from "react";
import { Card } from "reactstrap";

function Xp() {
  const jobs = [
    {
      name: "Barista",
      date: "Juillet 2019 | Décembre 2019",
      location: "Rocanini Coffee Roasters – Vancouver",
      description:
        "Accueil des clients et prise de commandes, préparation des cafés de spécialité (V60, Chemex, Aeropress), configuration et maintenance des machines",
    },
    {
      name: "Barista",
      date: "Février 2019 | Juin 2019",
      location: "Timbertrain Coffee Roasters – Vancouver",
      description:
        "Accueil des clients et prise de commandes, préparation des cafés de spécialité (V60, Chemex, Aeropress), configuration et maintenance des machines",
    },
    {
      name: "Barista Manager",
      date: "Septembre 2018 | Novembre 2018",
      location: "Echol Deli - Paris",
      description:
        "Mangement de l’équipe et gestion de la logistique du stand évenementiel Echo au Bon Marché",
    },
  ];

  return (
    <div>
      <h2>EXPERIENCE PROFESSIONNELLE</h2>
      {jobs.map((job) => {
        return (
          <div>
            <Card>
              <h4>{job.name}</h4>
              <p>{job.location}</p>
              <p>{job.date}</p>
              <cite>{job.description}</cite>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Xp;
