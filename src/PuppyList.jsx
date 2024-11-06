import { useEffect } from "react";
import { useState } from "react";

const PuppyList = () => {

  const [puppyList, setPuppyList] = useState([]);

  const shufflePuppies = (pupArray) => {
    for (let i = pupArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pupArray[i], pupArray[j]] = [pupArray[j], pupArray[i]];
    }
    return pupArray;
  }

  useEffect(() => {

    const fetchPuppyList = async () => {
      const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2409-FTB-ET-WEB-FT/teams");
      const puppyJSON = await response.json();
      const puppyData1 = puppyJSON.data.teams[0].players;
      const puppyData2 = puppyJSON.data.teams[1].players;
      const combinedPuppyData = puppyData1.concat(puppyData2);
      const shuffedPups = shufflePuppies(combinedPuppyData);
      setPuppyList(shuffedPups);
    }

  fetchPuppyList();

  },[])

  return (
    <div>
      {puppyList.map((puppy) => (

        puppy.teamId === 1863 ?

        <section id="team-ruff-nameplate" key={puppy.id}>
          <img className="puppy-pic" src={puppy.imageUrl} alt="A photo of ${puppy.name}" />
          <img className="team-helmet" src="./src/assets/ruffhelmet.jpg" alt="Team Ruff's Helmet" />
          <h3>TEAM RUFF</h3>
          <h1>{puppy.name}</h1>
        </section> 
        :
        <section id="team-fluff-nameplate" key={puppy.id}>
          <img className="puppy-pic" src={puppy.imageUrl} alt="A photo of ${puppy.name}" />
          <img className="team-helmet" src="./src/assets/fluffhelmet.jpg" alt="Team Ruff's Helmet" />
          <h3>TEAM FLUFF</h3>
          <h1>{puppy.name}</h1>
        </section>
        ))}
    </div>
  );

};

export default PuppyList;