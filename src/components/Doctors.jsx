const Doctors = () => {
  const items = [
    {
      name: "Agbasi Ifeanyi",
      img: "https://source.unsplash.com/collection/190727/800x600?1",
      profession: "Developer",
    },
    {
      name: "Kevin Durant",
      img: "https://source.unsplash.com/collection/190727/800x600?2",
      profession: "Basketballer",
    },
    {
      name: "Jayson Tatum",
      img: "https://source.unsplash.com/collection/190727/800x600?3",
      profession: "Basketballer",
    },
    {
      name: "Luka Donic",
      img: "https://source.unsplash.com/collection/190727/800x600?4",
      profession: "Basketballer",
    },
    {
      name: "Jaylen Brown",
      img: "https://source.unsplash.com/collection/190727/800x600?5",
      profession: "Basketballer",
    },
    {
      name: "Anthony Edwards",
      img: "https://source.unsplash.com/collection/190727/800x600?6",
      profession: "Basketballer",
    },
    {
      name: "Kyrie Irving",
      img: "https://source.unsplash.com/collection/190727/800x600?7",
      profession: "Basketballer",
    },
    {
      name: "Mo Bamba",
      img: "https://source.unsplash.com/collection/190727/800x600?8",
      profession: "Basketballer",
    },
    {
      name: "Scottie Barnes",
      img: "https://source.unsplash.com/collection/190727/800x600?9",
      profession: "Basketballer",
    },
    {
      name: "Tyrese Maxey",
      img: "https://source.unsplash.com/collection/190727/800x600?10",
      profession: "Basketballer",
    },
    {
      name: "Trae Young",
      img: "https://source.unsplash.com/collection/190727/800x600?11",
      profession: "Basketballer",
    },
    {
      name: "Joel Embiid",
      img: "https://source.unsplash.com/collection/190727/800x600?12",
      profession: "Basketballer",
    },
  ];
  return (
    <div className="p-6">
      <h1 className="text-center mb-8 text-5xl" style={{ color: "#004680" }}>
        Find a Doctor
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
        {items.map((item, index) => (
          <div className="justify-self-center" key={index}>
            <img className="object-cover h-72" src={item.img} alt="" />
            <div
              style={{ color: "#004680" }}
              className="p-4 bg-slate-100 text-center"
            >
              <h3 className="text-3xl">{item.name}</h3>
              <p className="text-sm md:text-lg lg:text-2xl">
                {item.profession}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
