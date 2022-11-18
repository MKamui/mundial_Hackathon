import React from "react";
import { getTeams } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Teams() {
  const dispatch = useDispatch();
  const allTeams = useSelector((state) => state.teams);
  console.log(allTeams);

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);
  console.log(allTeams);
  return (
    <div className="teams">
      {allTeams?.map((e) => {
        console.log(e.fifa_code);
        return (
          <fragment>
            <Card
              flag={e.flag}
              name={e.name}
              codigo={e.fifa_code}
              grupo={e.group_id}
              id={e.id}
            />
          </fragment>
        );
      })}
    </div>
  );
}
