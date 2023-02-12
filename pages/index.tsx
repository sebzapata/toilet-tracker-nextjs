import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getTimings } from "../helpers/getTimings";
import { useEffect } from "react";
import { setTimingsState } from "../store/timingsSlice";
import { Row, Col } from "react-bootstrap";
import Header from "../components/header";
import { Container } from "@mui/material";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useQuery(["getTimingsData"], () =>
    getTimings()
  );

  useEffect(() => {
    dispatch(setTimingsState({ timings: data, loading: isLoading }));
  }, [dispatch, data, isLoading]);

  return (
    <Container
      sx={{
        padding: "1em 1em 0 1em",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        minHeight: "calc(var(--vh, 1vh) * 100)",
      }}
    >
      <Header />
    </Container>
  );
};

export default Home;
