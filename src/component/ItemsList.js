import Items from "./Items";

function ItemsList(props) {
  const arr = props.items;

  return (
    <div className="itemsList">
      <div className="first">
        <h2 style={{ width: "100px" }}>Photo</h2>
        <h2 style={{ width: "100px" }}>Name</h2>
        <h2 style={{ width: "100px" }}>Price</h2>
      </div>
      <td/>
      {arr.map((el) => (
        <Items product={el} />
      ))}
    </div>
  );
}

export default ItemsList;