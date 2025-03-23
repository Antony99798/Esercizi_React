function Color({ color }){
  return <li>{color.name}</li>;
};

function Colori ({ colors }){
  return (
    <ul>
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
  );
};

export default Colori;

const colorsArray = [
  { id: 1, name: "Rosso" },
  { id: 2, name: "Verde" },
  { id: 3, name: "Blu" },
];

<Colori colors={colorsArray} />;
