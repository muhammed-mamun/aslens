import React from "react";

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Syed Muntasin Fayaz",
      role: "AI Developer",
      image: "fayaz.jpeg", 
      description: "Specializes in building deep learning models for innovative solutions.",
    },
    {
      id: 2,
      name: "Mahmudul Hasan",
      role: "Frontend Developer",
      image: "mahmudul.jpg", 
      description: "Crafts interactive and user-friendly interfaces with modern frameworks.",
    },
    {
      id: 3,
      name: "Md. Mamun Hossain",
      role: "FullStack Developer",
      image: "mamun.jpeg", 
      description: "Ensures seamless user experiences with clean and efficient code, robust server-side applications and APIs for scalable systems",
    },
    {
      id: 4,
      name: "Jarziz Ahmed",
      role: "UI/UX Designer",
      image: "jarziz.jpeg", 
      description: "Design User interaface for the modern application.",
    },
  ];

  return (
    <section className="lg:py-12 py-4">
      <div className="max-w-max mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`card border-2 hover:bg-zinc-950 hover:border-none border-blue-600 bg-zinc-800 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg ${
                member.id === 1 || member.id === 3 ? 'mb-8' : 'mt-8'
              }`}
            >
              <figure className="p-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="card-title text-xl font-semibold text-zinc-200">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
                <p className="text-gray-600 mt-4">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
