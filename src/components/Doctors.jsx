const Doctors = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="text-5xl p-6">
      <h1 className="text-center" style={{ color: "#004680" }}>
        Find a Doctor
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4">
        {items.map((item) => (
          <h1 className="text-center text-blue-900" key={item}>
            {item}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
