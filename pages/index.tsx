import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getTimings } from "../helpers/getTimings";
import { useEffect } from "react";
import { setTimingsState } from "../store/timingsSlice";
import { Container, Row, Col } from "react-bootstrap";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useQuery(["getTimingsData"], () =>
    getTimings()
  );

  useEffect(() => {
    dispatch(setTimingsState({ timings: data, loading: isLoading }));
  }, [dispatch, data, isLoading]);

  return <Container>This will be the calendars</Container>;
};

export default Home;
