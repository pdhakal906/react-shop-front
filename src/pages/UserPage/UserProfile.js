
import {
  Card,
  Typography,
  Input,

  Button,

} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useGetuserOrderQuery, useGetuserProfileQuery } from "../../features/auth/authApi";



const UserProfile = () => {

  const TABLE_HEAD = ["OrderId", "Total Price", "Date", ""];


  const { userInfo } = useSelector((store) => store.userInfo);

  const { isLoading, isError, data, error } = useGetuserOrderQuery(userInfo.token);

  const { isLoading: load, isError: err, data: userData, error: errData } = useGetuserProfileQuery(userInfo.token);

  console.log(userData);
  if (isLoading) {
    return <div className='h-[400px] w-[400px] mx-auto mt-7'>
      <lottie-player src="https://lottie.host/01986b4b-7629-473a-8223-f06d23ec4120/LelU3WnIJp.json" background="#fff" speed="1" loop autoplay ></lottie-player>
    </div>
  }




  return (
    <div className="grid grid-cols-3 gap-9 px-4 py-4">

      <div>
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Profile
          </Typography>
          <form className="mt-8 mb-2 ">
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="Name" />
              <Input size="lg" label="Email" />

            </div>

            <Button className="mt-6" fullWidth>
              Update
            </Button>

          </form>
        </Card>
      </div>


      <div>
        <Card className="h-full w-full min-w-max table-auto   col-span-2 shadow-2xl">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(({ _id, totalPrice, createdAt }, index) => {
                const isLast = index === data.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={_id}>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {_id}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {totalPrice}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {createdAt}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                        Detail..
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>

    </div>
  )
}
export default UserProfile