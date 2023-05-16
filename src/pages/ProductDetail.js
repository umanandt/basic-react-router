import { useParams, Link } from "react-router-dom";


const ProductDetails = () => {
const params = useParams();
    return (
    <>
      <p> Product Details</p>
      <p>{params.productId}</p>
      <p><Link to='..' relative='path'>Back</Link></p>
    </>
  );
};
// relative = "route" - it goes to home page at root
// relative = "path" - it goes just one step back
export default ProductDetails;
