import React from "react";
import { Navbar } from "./Navbar";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import HistorieCard from "./HistorieCard";
import usine60 from "../images/usine 1960.jpg";
import equipe60 from "../images/equipesacem60.jpg";
import transfo60 from "../images/transfo60.jpg";
import prop70 from "../images/propsacem70.jpg";
import chaud70 from "../images/chaudronnier70.png";
import bobinage80 from "../images/atelier bobinage80.jpg";
import essai80 from "../images/salle essai80.jpg";
import transfo14 from "../images/transformateur2014.jpg";
import atmontage14 from "../images/atelier motage2014jpg.jpg";
import equipe14 from "../images/equipesacem2014.jpg";
import essai2005 from "../images/essai-de-tenue-au-choc-de-foudre2005.jpg";
import transfo26MVA from "../images/Mediumpowertransformer26 MVA.jpg";

const Historique = () => {
  const sacem2014 = {
    title: "Transformateur nouvelle génération",
    image: transfo14,
  };
  const montage2014 = {
    title: "Atelier montage",
    image: atmontage14,
  };
  const equipe2014 = {
    title: "Equipe de SACEM",
    image: equipe14,
  };
  const essaichoc2005 = {
    title: "Essai de tenue au choc de foudre",
    image: essai2005,
  };
  const AT_bob1980 = {
    title: "Atelier bobinage dans les années 80",
    image: bobinage80,
  };
  const S_Essais1980 = {
    title: "Salle d’essai dans les années 80",
    image: essai80,
  };
  const Chau1970 = {
    title: "Chaudronnier des années 70",
    image: chaud70,
  };
  const prop_sacem1970 = {
    title: "Le premier propriétaire de SACEM ",
    image: prop70,
  };
  const transfo1960 = {
    title: "Transformateur SACEM dans les années 60",
    image: transfo60,
  };
  const equipesacem1960 = {
    title: "Equipe de SACEM dans les années 60",
    image: equipe60,
  };
  const usine1960 = {
    title: "Usine de SACEM",
    image: usine60,
  };
  const transformer26MVA = {
    title: "The Medium power transformer 26 MVA",
    image: transfo26MVA,
  };

  return (
    <div>
      <Navbar />
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">2023</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <HistorieCard {...transformer26MVA} />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">2014</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <HistorieCard {...sacem2014} />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">2014</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <HistorieCard {...montage2014} />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary">
              2014
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <HistorieCard {...equipe2014} />
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary">
              2005
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <HistorieCard {...essaichoc2005} />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">1980</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <HistorieCard {...AT_bob1980} />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">1980</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <HistorieCard {...S_Essais1980} />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">1970</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <HistorieCard {...Chau1970} />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">1970</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <HistorieCard {...prop_sacem1970} />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">1960</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <HistorieCard {...transfo1960} />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">1960</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <HistorieCard {...equipesacem1960} />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">1960</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <HistorieCard {...usine1960} />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Historique;
