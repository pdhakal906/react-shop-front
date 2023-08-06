import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Rating
} from "@material-tailwind/react";
import { baseUrl } from "../features/constant";
import { useNavigate } from "react-router";


// export default function ProductCard() {
//   return (
//     <Card className="mt-6 w-96">
//       <CardHeader color="blue-gray" className="relative h-56">
//         <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
//       </CardHeader>
//       <CardBody>
//         <Typography variant="h5" color="blue-gray" className="mb-2">
//           UI/UX Review Check
//         </Typography>
//         <Typography>
//           The place is close to Barceloneta Beach and bus stop just 2 min by walk
//           and near to &quot;Naviglio&quot; where you can enjoy the main night life
//           in Barcelona.
//         </Typography>
//       </CardBody>
//       <CardFooter className="pt-0">
//         <Button>Read More</Button>
//       </CardFooter>
//     </Card>
//   );
// }


const CardProduct = ({ product }) => {
  const nav = useNavigate();

  return (
    <Card className="mt-6 w-96 cursor-pointer hover:shadow-2xl" onClick={() => nav(`/product/detail/${product._id}`)}>
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={`${baseUrl}${product.product_image}`} alt="img-blur-shadow" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {product.product_name}
        </Typography>
        <Typography>
          {product.product_detail}
        </Typography>
        {product.numReviews > 0 && <div>
          <div className="flex justify-between">
            <Rating value={product.rating} readonly />
            <h1> Reviews {product.numReviews}</h1>
          </div>

        </div>
        }
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
export default CardProduct;

