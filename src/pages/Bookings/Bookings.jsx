import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:3000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);
  console.log(bookings);
  return <div>{bookings.length}</div>;
};

export default Bookings;
