import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { nullCheck } from "../utils/nullCheck";
import { open } from "../redux/slices/detailSlice";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const List = () => {
  const dispatch = useDispatch();
  const { isLoading, error, flights } = useSelector((store) => store.flight);

  const [startPage, setStartPage] = useState(0);
  const perPage = 12;
  const endPage = startPage + perPage;

  const currFlights = flights.slice(startPage, endPage);

  const total = Math.ceil(flights.length / perPage);
  const handlePage = (e) => {
    setStartPage(e.selected * 10);
  };

  if (isLoading)
    return (
      <div className="list-wrapper">
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="list-wrapper">
        <Error message={error} />
      </div>
    );
  return (
    <div className="list-container">
      <table className="table table-hover table-responsive">
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>Derece</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currFlights.map((flight) => (
            <tr key={flight.id}>
              <td>{nullCheck(flight.id)}</td>
              <td>{nullCheck(flight.code)}</td>
              <td>{nullCheck(flight.lat)}</td>
              <td>{nullCheck(flight.lng)}</td>
              <td>{nullCheck(flight.deg)}</td>
              <td>
                <button onClick={() => dispatch(open(flight.id))}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-wrapper">
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePage}
          pageRangeDisplayed={2}
          pageCount={total}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default List;
