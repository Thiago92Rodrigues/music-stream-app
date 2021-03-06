package playlistsService

import e "playlists-service/internal/entities"

type IPlaylistsService interface {
	Get(request GetPlaylistRequest) (*e.Playlist, error)
	GetAll(request GetAllPlaylistsRequest) ([]e.Playlist, error)
	Create(request CreatePlaylistRequest) (*e.Playlist, error)
	Update(request UpdatePlaylistRequest) (*e.Playlist, error)
	Delete(request DeletePlaylistRequest) error

	AddTrack(request AddTrackRequest) (*e.Track, error)
	UpdateTrack(request UpdateTrackRequest) (*e.Track, error)
	RemoveTrack(request RemoveTrackRequest) error
}
