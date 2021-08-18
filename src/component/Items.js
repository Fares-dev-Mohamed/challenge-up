import PropTypes from 'prop-types'

function Items(props) {
  const alertProduct = (name,price) => alert(`Hi this is ${name} and his price is ${price}`);
  return (
    <div className="items" onClick={() => alertProduct(props.product.name,props.product.price)}>
      <img style={{ width: "100px" }} src={props.product.image} alt="" />
      <h3 style={{ width: "150px" }}>{props.product.name}</h3>
      <h3 style={{ width: "150px" }}>{props.product.price}</h3>
    </div>
  );
}



Items.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    alertProduct : PropTypes.func
}

export default Items;