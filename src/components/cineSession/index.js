import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CineDays from "./cineDays";
import { BackButton, CineSessionContainer, FooterInfoContainer, ListDaysContainer, Loading } from "./styles";

export default function CineSession() {
	const [movieSessions, setMovieSessions] = useState(undefined);
	const [error, setError] = useState(false);
	const { movieID } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`;

		const promise = axios.get(URL);

		promise.then((res) => {
			setMovieSessions(res.data);
		});

		promise.catch((err) => {
			console.log(err.response.data);
			setError(true);
		});
	}, [movieID]);

	if (error === true) {
		return (
			<CineSessionContainer>
				<p>Erro na requisição! Tente de novo</p>
			</CineSessionContainer>
		);
	}

	if (!error && movieSessions === undefined) {
		return (
			<CineSessionContainer>
				<Loading>
					<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
					<p>Carregando...</p>
				</Loading>
			</CineSessionContainer>
		);
	}

	return (
		<CineSessionContainer>
			<BackButton onClick={() => navigate(-1)}>↩</BackButton>
			<p>Selecione o horário:</p>
			<ListDaysContainer>
				{movieSessions.days.map((el) => (
					<CineDays key={el.id} day={el} />
				))}
			</ListDaysContainer>
			<FooterInfoContainer>
				<img data-identifier="movie-img-preview" src={movieSessions.posterURL} alt="Poster do filme selecionado" />
				<p data-identifier="movie-and-session-infos-preview" >{movieSessions.title}</p>
			</FooterInfoContainer>
		</CineSessionContainer>
	);
}
