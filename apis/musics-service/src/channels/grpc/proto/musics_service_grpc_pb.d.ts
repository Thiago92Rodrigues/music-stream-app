// package: proto
// file: musics_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as musics_service_pb from "./musics_service_pb";

interface IMusicsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getMusic: IMusicsService_IGetMusic;
    getMusics: IMusicsService_IGetMusics;
    createMusic: IMusicsService_ICreateMusic;
    updateMusic: IMusicsService_IUpdateMusic;
    deleteMusic: IMusicsService_IDeleteMusic;
    viewMusic: IMusicsService_IViewMusic;
    getMostViewedMusics: IMusicsService_IGetMostViewedMusics;
    getAlbum: IMusicsService_IGetAlbum;
    getAlbums: IMusicsService_IGetAlbums;
    createAlbum: IMusicsService_ICreateAlbum;
    updateAlbum: IMusicsService_IUpdateAlbum;
    deleteAlbum: IMusicsService_IDeleteAlbum;
    getMostRecentAlbums: IMusicsService_IGetMostRecentAlbums;
    getArtist: IMusicsService_IGetArtist;
    getArtists: IMusicsService_IGetArtists;
    getArtistsByGenre: IMusicsService_IGetArtistsByGenre;
    createArtist: IMusicsService_ICreateArtist;
    updateArtist: IMusicsService_IUpdateArtist;
    deleteArtist: IMusicsService_IDeleteArtist;
    favoriteArtist: IMusicsService_IFavoriteArtist;
    unfavoriteArtist: IMusicsService_IUnfavoriteArtist;
    followArtist: IMusicsService_IFollowArtist;
    unfollowArtist: IMusicsService_IUnfollowArtist;
    getMostFollowedArtists: IMusicsService_IGetMostFollowedArtists;
}

interface IMusicsService_IGetMusic extends grpc.MethodDefinition<musics_service_pb.Id, musics_service_pb.Music> {
    path: "/proto.Musics/GetMusic";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.Id>;
    requestDeserialize: grpc.deserialize<musics_service_pb.Id>;
    responseSerialize: grpc.serialize<musics_service_pb.Music>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Music>;
}
interface IMusicsService_IGetMusics extends grpc.MethodDefinition<musics_service_pb.GetMusicsRequest, musics_service_pb.MusicsList> {
    path: "/proto.Musics/GetMusics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.GetMusicsRequest>;
    requestDeserialize: grpc.deserialize<musics_service_pb.GetMusicsRequest>;
    responseSerialize: grpc.serialize<musics_service_pb.MusicsList>;
    responseDeserialize: grpc.deserialize<musics_service_pb.MusicsList>;
}
interface IMusicsService_ICreateMusic extends grpc.MethodDefinition<musics_service_pb.CreateMusicRequest, musics_service_pb.Music> {
    path: "/proto.Musics/CreateMusic";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.CreateMusicRequest>;
    requestDeserialize: grpc.deserialize<musics_service_pb.CreateMusicRequest>;
    responseSerialize: grpc.serialize<musics_service_pb.Music>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Music>;
}
interface IMusicsService_IUpdateMusic extends grpc.MethodDefinition<musics_service_pb.UpdateMusicRequest, musics_service_pb.Music> {
    path: "/proto.Musics/UpdateMusic";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.UpdateMusicRequest>;
    requestDeserialize: grpc.deserialize<musics_service_pb.UpdateMusicRequest>;
    responseSerialize: grpc.serialize<musics_service_pb.Music>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Music>;
}
interface IMusicsService_IDeleteMusic extends grpc.MethodDefinition<musics_service_pb.Id, musics_service_pb.Empty> {
    path: "/proto.Musics/DeleteMusic";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.Id>;
    requestDeserialize: grpc.deserialize<musics_service_pb.Id>;
    responseSerialize: grpc.serialize<musics_service_pb.Empty>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Empty>;
}
interface IMusicsService_IViewMusic extends grpc.MethodDefinition<musics_service_pb.Id, musics_service_pb.Music> {
    path: "/proto.Musics/ViewMusic";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.Id>;
    requestDeserialize: grpc.deserialize<musics_service_pb.Id>;
    responseSerialize: grpc.serialize<musics_service_pb.Music>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Music>;
}
interface IMusicsService_IGetMostViewedMusics extends grpc.MethodDefinition<musics_service_pb.GetMostViewedMusicsRequest, musics_service_pb.MusicsList> {
    path: "/proto.Musics/GetMostViewedMusics";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.GetMostViewedMusicsRequest>;
    requestDeserialize: grpc.deserialize<musics_service_pb.GetMostViewedMusicsRequest>;
    responseSerialize: grpc.serialize<musics_service_pb.MusicsList>;
    responseDeserialize: grpc.deserialize<musics_service_pb.MusicsList>;
}
interface IMusicsService_IGetAlbum extends grpc.MethodDefinition<musics_service_pb.Id, musics_service_pb.Album> {
    path: "/proto.Musics/GetAlbum";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.Id>;
    requestDeserialize: grpc.deserialize<musics_service_pb.Id>;
    responseSerialize: grpc.serialize<musics_service_pb.Album>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Album>;
}
interface IMusicsService_IGetAlbums extends grpc.MethodDefinition<musics_service_pb.GetAlbumsRequest, musics_service_pb.AlbumsList> {
    path: "/proto.Musics/GetAlbums";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.GetAlbumsRequest>;
    requestDeserialize: grpc.deserialize<musics_service_pb.GetAlbumsRequest>;
    responseSerialize: grpc.serialize<musics_service_pb.AlbumsList>;
    responseDeserialize: grpc.deserialize<musics_service_pb.AlbumsList>;
}
interface IMusicsService_ICreateAlbum extends grpc.MethodDefinition<musics_service_pb.CreateAlbumRequest, musics_service_pb.Album> {
    path: "/proto.Musics/CreateAlbum";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.CreateAlbumRequest>;
    requestDeserialize: grpc.deserialize<musics_service_pb.CreateAlbumRequest>;
    responseSerialize: grpc.serialize<musics_service_pb.Album>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Album>;
}
interface IMusicsService_IUpdateAlbum extends grpc.MethodDefinition<musics_service_pb.UpdateAlbumRequest, musics_service_pb.Album> {
    path: "/proto.Musics/UpdateAlbum";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.UpdateAlbumRequest>;
    requestDeserialize: grpc.deserialize<musics_service_pb.UpdateAlbumRequest>;
    responseSerialize: grpc.serialize<musics_service_pb.Album>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Album>;
}
interface IMusicsService_IDeleteAlbum extends grpc.MethodDefinition<musics_service_pb.Id, musics_service_pb.Empty> {
    path: "/proto.Musics/DeleteAlbum";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.Id>;
    requestDeserialize: grpc.deserialize<musics_service_pb.Id>;
    responseSerialize: grpc.serialize<musics_service_pb.Empty>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Empty>;
}
interface IMusicsService_IGetMostRecentAlbums extends grpc.MethodDefinition<musics_service_pb.GetMostRecentAlbumsRequest, musics_service_pb.AlbumsList> {
    path: "/proto.Musics/GetMostRecentAlbums";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.GetMostRecentAlbumsRequest>;
    requestDeserialize: grpc.deserialize<musics_service_pb.GetMostRecentAlbumsRequest>;
    responseSerialize: grpc.serialize<musics_service_pb.AlbumsList>;
    responseDeserialize: grpc.deserialize<musics_service_pb.AlbumsList>;
}
interface IMusicsService_IGetArtist extends grpc.MethodDefinition<musics_service_pb.Id, musics_service_pb.Artist> {
    path: "/proto.Musics/GetArtist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.Id>;
    requestDeserialize: grpc.deserialize<musics_service_pb.Id>;
    responseSerialize: grpc.serialize<musics_service_pb.Artist>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Artist>;
}
interface IMusicsService_IGetArtists extends grpc.MethodDefinition<musics_service_pb.GetArtistsRequest, musics_service_pb.ArtistsList> {
    path: "/proto.Musics/GetArtists";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.GetArtistsRequest>;
    requestDeserialize: grpc.deserialize<musics_service_pb.GetArtistsRequest>;
    responseSerialize: grpc.serialize<musics_service_pb.ArtistsList>;
    responseDeserialize: grpc.deserialize<musics_service_pb.ArtistsList>;
}
interface IMusicsService_IGetArtistsByGenre extends grpc.MethodDefinition<musics_service_pb.GetArtistsByGenreRequest, musics_service_pb.ArtistsList> {
    path: "/proto.Musics/GetArtistsByGenre";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.GetArtistsByGenreRequest>;
    requestDeserialize: grpc.deserialize<musics_service_pb.GetArtistsByGenreRequest>;
    responseSerialize: grpc.serialize<musics_service_pb.ArtistsList>;
    responseDeserialize: grpc.deserialize<musics_service_pb.ArtistsList>;
}
interface IMusicsService_ICreateArtist extends grpc.MethodDefinition<musics_service_pb.CreateArtistRequest, musics_service_pb.Artist> {
    path: "/proto.Musics/CreateArtist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.CreateArtistRequest>;
    requestDeserialize: grpc.deserialize<musics_service_pb.CreateArtistRequest>;
    responseSerialize: grpc.serialize<musics_service_pb.Artist>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Artist>;
}
interface IMusicsService_IUpdateArtist extends grpc.MethodDefinition<musics_service_pb.UpdateArtistRequest, musics_service_pb.Artist> {
    path: "/proto.Musics/UpdateArtist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.UpdateArtistRequest>;
    requestDeserialize: grpc.deserialize<musics_service_pb.UpdateArtistRequest>;
    responseSerialize: grpc.serialize<musics_service_pb.Artist>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Artist>;
}
interface IMusicsService_IDeleteArtist extends grpc.MethodDefinition<musics_service_pb.Id, musics_service_pb.Empty> {
    path: "/proto.Musics/DeleteArtist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.Id>;
    requestDeserialize: grpc.deserialize<musics_service_pb.Id>;
    responseSerialize: grpc.serialize<musics_service_pb.Empty>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Empty>;
}
interface IMusicsService_IFavoriteArtist extends grpc.MethodDefinition<musics_service_pb.Id, musics_service_pb.Artist> {
    path: "/proto.Musics/FavoriteArtist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.Id>;
    requestDeserialize: grpc.deserialize<musics_service_pb.Id>;
    responseSerialize: grpc.serialize<musics_service_pb.Artist>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Artist>;
}
interface IMusicsService_IUnfavoriteArtist extends grpc.MethodDefinition<musics_service_pb.Id, musics_service_pb.Artist> {
    path: "/proto.Musics/UnfavoriteArtist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.Id>;
    requestDeserialize: grpc.deserialize<musics_service_pb.Id>;
    responseSerialize: grpc.serialize<musics_service_pb.Artist>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Artist>;
}
interface IMusicsService_IFollowArtist extends grpc.MethodDefinition<musics_service_pb.Id, musics_service_pb.Artist> {
    path: "/proto.Musics/FollowArtist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.Id>;
    requestDeserialize: grpc.deserialize<musics_service_pb.Id>;
    responseSerialize: grpc.serialize<musics_service_pb.Artist>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Artist>;
}
interface IMusicsService_IUnfollowArtist extends grpc.MethodDefinition<musics_service_pb.Id, musics_service_pb.Artist> {
    path: "/proto.Musics/UnfollowArtist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.Id>;
    requestDeserialize: grpc.deserialize<musics_service_pb.Id>;
    responseSerialize: grpc.serialize<musics_service_pb.Artist>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Artist>;
}
interface IMusicsService_IGetMostFollowedArtists extends grpc.MethodDefinition<musics_service_pb.GetMostFollowedArtistsRequest, musics_service_pb.ArtistsList> {
    path: "/proto.Musics/GetMostFollowedArtists";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<musics_service_pb.GetMostFollowedArtistsRequest>;
    requestDeserialize: grpc.deserialize<musics_service_pb.GetMostFollowedArtistsRequest>;
    responseSerialize: grpc.serialize<musics_service_pb.ArtistsList>;
    responseDeserialize: grpc.deserialize<musics_service_pb.ArtistsList>;
}

export const MusicsService: IMusicsService;

export interface IMusicsServer {
    getMusic: grpc.handleUnaryCall<musics_service_pb.Id, musics_service_pb.Music>;
    getMusics: grpc.handleUnaryCall<musics_service_pb.GetMusicsRequest, musics_service_pb.MusicsList>;
    createMusic: grpc.handleUnaryCall<musics_service_pb.CreateMusicRequest, musics_service_pb.Music>;
    updateMusic: grpc.handleUnaryCall<musics_service_pb.UpdateMusicRequest, musics_service_pb.Music>;
    deleteMusic: grpc.handleUnaryCall<musics_service_pb.Id, musics_service_pb.Empty>;
    viewMusic: grpc.handleUnaryCall<musics_service_pb.Id, musics_service_pb.Music>;
    getMostViewedMusics: grpc.handleUnaryCall<musics_service_pb.GetMostViewedMusicsRequest, musics_service_pb.MusicsList>;
    getAlbum: grpc.handleUnaryCall<musics_service_pb.Id, musics_service_pb.Album>;
    getAlbums: grpc.handleUnaryCall<musics_service_pb.GetAlbumsRequest, musics_service_pb.AlbumsList>;
    createAlbum: grpc.handleUnaryCall<musics_service_pb.CreateAlbumRequest, musics_service_pb.Album>;
    updateAlbum: grpc.handleUnaryCall<musics_service_pb.UpdateAlbumRequest, musics_service_pb.Album>;
    deleteAlbum: grpc.handleUnaryCall<musics_service_pb.Id, musics_service_pb.Empty>;
    getMostRecentAlbums: grpc.handleUnaryCall<musics_service_pb.GetMostRecentAlbumsRequest, musics_service_pb.AlbumsList>;
    getArtist: grpc.handleUnaryCall<musics_service_pb.Id, musics_service_pb.Artist>;
    getArtists: grpc.handleUnaryCall<musics_service_pb.GetArtistsRequest, musics_service_pb.ArtistsList>;
    getArtistsByGenre: grpc.handleUnaryCall<musics_service_pb.GetArtistsByGenreRequest, musics_service_pb.ArtistsList>;
    createArtist: grpc.handleUnaryCall<musics_service_pb.CreateArtistRequest, musics_service_pb.Artist>;
    updateArtist: grpc.handleUnaryCall<musics_service_pb.UpdateArtistRequest, musics_service_pb.Artist>;
    deleteArtist: grpc.handleUnaryCall<musics_service_pb.Id, musics_service_pb.Empty>;
    favoriteArtist: grpc.handleUnaryCall<musics_service_pb.Id, musics_service_pb.Artist>;
    unfavoriteArtist: grpc.handleUnaryCall<musics_service_pb.Id, musics_service_pb.Artist>;
    followArtist: grpc.handleUnaryCall<musics_service_pb.Id, musics_service_pb.Artist>;
    unfollowArtist: grpc.handleUnaryCall<musics_service_pb.Id, musics_service_pb.Artist>;
    getMostFollowedArtists: grpc.handleUnaryCall<musics_service_pb.GetMostFollowedArtistsRequest, musics_service_pb.ArtistsList>;
}

export interface IMusicsClient {
    getMusic(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    getMusic(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    getMusic(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    getMusics(request: musics_service_pb.GetMusicsRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.MusicsList) => void): grpc.ClientUnaryCall;
    getMusics(request: musics_service_pb.GetMusicsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.MusicsList) => void): grpc.ClientUnaryCall;
    getMusics(request: musics_service_pb.GetMusicsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.MusicsList) => void): grpc.ClientUnaryCall;
    createMusic(request: musics_service_pb.CreateMusicRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    createMusic(request: musics_service_pb.CreateMusicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    createMusic(request: musics_service_pb.CreateMusicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    updateMusic(request: musics_service_pb.UpdateMusicRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    updateMusic(request: musics_service_pb.UpdateMusicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    updateMusic(request: musics_service_pb.UpdateMusicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    deleteMusic(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteMusic(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteMusic(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    viewMusic(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    viewMusic(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    viewMusic(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    getMostViewedMusics(request: musics_service_pb.GetMostViewedMusicsRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.MusicsList) => void): grpc.ClientUnaryCall;
    getMostViewedMusics(request: musics_service_pb.GetMostViewedMusicsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.MusicsList) => void): grpc.ClientUnaryCall;
    getMostViewedMusics(request: musics_service_pb.GetMostViewedMusicsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.MusicsList) => void): grpc.ClientUnaryCall;
    getAlbum(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    getAlbum(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    getAlbum(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    getAlbums(request: musics_service_pb.GetAlbumsRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.AlbumsList) => void): grpc.ClientUnaryCall;
    getAlbums(request: musics_service_pb.GetAlbumsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.AlbumsList) => void): grpc.ClientUnaryCall;
    getAlbums(request: musics_service_pb.GetAlbumsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.AlbumsList) => void): grpc.ClientUnaryCall;
    createAlbum(request: musics_service_pb.CreateAlbumRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    createAlbum(request: musics_service_pb.CreateAlbumRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    createAlbum(request: musics_service_pb.CreateAlbumRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    updateAlbum(request: musics_service_pb.UpdateAlbumRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    updateAlbum(request: musics_service_pb.UpdateAlbumRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    updateAlbum(request: musics_service_pb.UpdateAlbumRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    deleteAlbum(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteAlbum(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteAlbum(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    getMostRecentAlbums(request: musics_service_pb.GetMostRecentAlbumsRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.AlbumsList) => void): grpc.ClientUnaryCall;
    getMostRecentAlbums(request: musics_service_pb.GetMostRecentAlbumsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.AlbumsList) => void): grpc.ClientUnaryCall;
    getMostRecentAlbums(request: musics_service_pb.GetMostRecentAlbumsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.AlbumsList) => void): grpc.ClientUnaryCall;
    getArtist(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    getArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    getArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    getArtists(request: musics_service_pb.GetArtistsRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.ArtistsList) => void): grpc.ClientUnaryCall;
    getArtists(request: musics_service_pb.GetArtistsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.ArtistsList) => void): grpc.ClientUnaryCall;
    getArtists(request: musics_service_pb.GetArtistsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.ArtistsList) => void): grpc.ClientUnaryCall;
    getArtistsByGenre(request: musics_service_pb.GetArtistsByGenreRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.ArtistsList) => void): grpc.ClientUnaryCall;
    getArtistsByGenre(request: musics_service_pb.GetArtistsByGenreRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.ArtistsList) => void): grpc.ClientUnaryCall;
    getArtistsByGenre(request: musics_service_pb.GetArtistsByGenreRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.ArtistsList) => void): grpc.ClientUnaryCall;
    createArtist(request: musics_service_pb.CreateArtistRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    createArtist(request: musics_service_pb.CreateArtistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    createArtist(request: musics_service_pb.CreateArtistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    updateArtist(request: musics_service_pb.UpdateArtistRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    updateArtist(request: musics_service_pb.UpdateArtistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    updateArtist(request: musics_service_pb.UpdateArtistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    deleteArtist(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    favoriteArtist(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    favoriteArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    favoriteArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    unfavoriteArtist(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    unfavoriteArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    unfavoriteArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    followArtist(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    followArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    followArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    unfollowArtist(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    unfollowArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    unfollowArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    getMostFollowedArtists(request: musics_service_pb.GetMostFollowedArtistsRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.ArtistsList) => void): grpc.ClientUnaryCall;
    getMostFollowedArtists(request: musics_service_pb.GetMostFollowedArtistsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.ArtistsList) => void): grpc.ClientUnaryCall;
    getMostFollowedArtists(request: musics_service_pb.GetMostFollowedArtistsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.ArtistsList) => void): grpc.ClientUnaryCall;
}

export class MusicsClient extends grpc.Client implements IMusicsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getMusic(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    public getMusic(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    public getMusic(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    public getMusics(request: musics_service_pb.GetMusicsRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.MusicsList) => void): grpc.ClientUnaryCall;
    public getMusics(request: musics_service_pb.GetMusicsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.MusicsList) => void): grpc.ClientUnaryCall;
    public getMusics(request: musics_service_pb.GetMusicsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.MusicsList) => void): grpc.ClientUnaryCall;
    public createMusic(request: musics_service_pb.CreateMusicRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    public createMusic(request: musics_service_pb.CreateMusicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    public createMusic(request: musics_service_pb.CreateMusicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    public updateMusic(request: musics_service_pb.UpdateMusicRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    public updateMusic(request: musics_service_pb.UpdateMusicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    public updateMusic(request: musics_service_pb.UpdateMusicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    public deleteMusic(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteMusic(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteMusic(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    public viewMusic(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    public viewMusic(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    public viewMusic(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Music) => void): grpc.ClientUnaryCall;
    public getMostViewedMusics(request: musics_service_pb.GetMostViewedMusicsRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.MusicsList) => void): grpc.ClientUnaryCall;
    public getMostViewedMusics(request: musics_service_pb.GetMostViewedMusicsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.MusicsList) => void): grpc.ClientUnaryCall;
    public getMostViewedMusics(request: musics_service_pb.GetMostViewedMusicsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.MusicsList) => void): grpc.ClientUnaryCall;
    public getAlbum(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    public getAlbum(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    public getAlbum(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    public getAlbums(request: musics_service_pb.GetAlbumsRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.AlbumsList) => void): grpc.ClientUnaryCall;
    public getAlbums(request: musics_service_pb.GetAlbumsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.AlbumsList) => void): grpc.ClientUnaryCall;
    public getAlbums(request: musics_service_pb.GetAlbumsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.AlbumsList) => void): grpc.ClientUnaryCall;
    public createAlbum(request: musics_service_pb.CreateAlbumRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    public createAlbum(request: musics_service_pb.CreateAlbumRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    public createAlbum(request: musics_service_pb.CreateAlbumRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    public updateAlbum(request: musics_service_pb.UpdateAlbumRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    public updateAlbum(request: musics_service_pb.UpdateAlbumRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    public updateAlbum(request: musics_service_pb.UpdateAlbumRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Album) => void): grpc.ClientUnaryCall;
    public deleteAlbum(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteAlbum(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteAlbum(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    public getMostRecentAlbums(request: musics_service_pb.GetMostRecentAlbumsRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.AlbumsList) => void): grpc.ClientUnaryCall;
    public getMostRecentAlbums(request: musics_service_pb.GetMostRecentAlbumsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.AlbumsList) => void): grpc.ClientUnaryCall;
    public getMostRecentAlbums(request: musics_service_pb.GetMostRecentAlbumsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.AlbumsList) => void): grpc.ClientUnaryCall;
    public getArtist(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public getArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public getArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public getArtists(request: musics_service_pb.GetArtistsRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.ArtistsList) => void): grpc.ClientUnaryCall;
    public getArtists(request: musics_service_pb.GetArtistsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.ArtistsList) => void): grpc.ClientUnaryCall;
    public getArtists(request: musics_service_pb.GetArtistsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.ArtistsList) => void): grpc.ClientUnaryCall;
    public getArtistsByGenre(request: musics_service_pb.GetArtistsByGenreRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.ArtistsList) => void): grpc.ClientUnaryCall;
    public getArtistsByGenre(request: musics_service_pb.GetArtistsByGenreRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.ArtistsList) => void): grpc.ClientUnaryCall;
    public getArtistsByGenre(request: musics_service_pb.GetArtistsByGenreRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.ArtistsList) => void): grpc.ClientUnaryCall;
    public createArtist(request: musics_service_pb.CreateArtistRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public createArtist(request: musics_service_pb.CreateArtistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public createArtist(request: musics_service_pb.CreateArtistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public updateArtist(request: musics_service_pb.UpdateArtistRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public updateArtist(request: musics_service_pb.UpdateArtistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public updateArtist(request: musics_service_pb.UpdateArtistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public deleteArtist(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    public favoriteArtist(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public favoriteArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public favoriteArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public unfavoriteArtist(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public unfavoriteArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public unfavoriteArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public followArtist(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public followArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public followArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public unfollowArtist(request: musics_service_pb.Id, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public unfollowArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public unfollowArtist(request: musics_service_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Artist) => void): grpc.ClientUnaryCall;
    public getMostFollowedArtists(request: musics_service_pb.GetMostFollowedArtistsRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.ArtistsList) => void): grpc.ClientUnaryCall;
    public getMostFollowedArtists(request: musics_service_pb.GetMostFollowedArtistsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.ArtistsList) => void): grpc.ClientUnaryCall;
    public getMostFollowedArtists(request: musics_service_pb.GetMostFollowedArtistsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.ArtistsList) => void): grpc.ClientUnaryCall;
}
