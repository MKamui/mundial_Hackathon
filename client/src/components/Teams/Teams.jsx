import React from "react";
import { getTeams } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import CardT from "./Card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PaginationT from "./Pagination";

export default function Teams() {
  const dispatch = useDispatch();
  const allTeams = useSelector((state) => state.teams);

  const [page, setPage] = useState(1);
  const [forPage] = useState(8); //cant de pokemons q quiero poner por pag.
  const [input, setInput] = useState(1);
  const max = Math.ceil(allTeams.length / forPage); //4
  console.log(allTeams);

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);
  console.log(allTeams);
  return (
    <div className="teams">
      {allTeams &&
        allTeams
          .slice((page - 1) * forPage, (page - 1) * forPage + forPage)
          .map((e) => {
            console.log(e.fifa_code);
            return (
              <fragment>
                <CardT
                  flag={e.flag}
                  name={e.name}
                  codigo={e.fifa_code}
                  grupo={e.group_id}
                  id={e.id}
                />
              </fragment>
            );
          })}
      <PaginationT
        page={page}
        setPage={setPage}
        teamsPerPage={max}
        input={input}
        setInput={setInput}
      />
    </div>
  );
}
