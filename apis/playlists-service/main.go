package main

import (
	"playlists-service/internal/channels/grpc"
	"playlists-service/internal/config"
	db "playlists-service/internal/database/sql"
	e "playlists-service/internal/handlers/errorHandler"
	m "playlists-service/internal/integrations/musicsIntegration"
	i "playlists-service/internal/providers/idProvider"
	l "playlists-service/internal/providers/loggerProvider"
	r "playlists-service/internal/repositories/playlistsRepository"
	s "playlists-service/internal/services/playlistsService"
)

func main() {
	config.Initialize()

	idProvider := i.New()
	loggerProvider := l.New()

	errorHandler := e.New(loggerProvider)

	database := db.New(loggerProvider)

	musicsIntegration := m.New()

	playlistsRepository := r.New(database.GetConnection())

	playlistsService := s.New(idProvider, musicsIntegration, playlistsRepository)

	grpcChannel := grpc.New(errorHandler, loggerProvider, playlistsService)

	grpcChannel.Start()
}
