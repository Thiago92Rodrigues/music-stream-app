// package: proto
// file: playlists_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as playlists_service_pb from "./playlists_service_pb";
import * as musics_service_pb from "./musics_service_pb";

interface IPlaylistsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPlaylist: IPlaylistsService_IGetPlaylist;
    getPlaylists: IPlaylistsService_IGetPlaylists;
    createPlaylist: IPlaylistsService_ICreatePlaylist;
    updatePlaylist: IPlaylistsService_IUpdatePlaylist;
    deletePlaylist: IPlaylistsService_IDeletePlaylist;
    addTrack: IPlaylistsService_IAddTrack;
    updateTrack: IPlaylistsService_IUpdateTrack;
    removeTrack: IPlaylistsService_IRemoveTrack;
}

interface IPlaylistsService_IGetPlaylist extends grpc.MethodDefinition<playlists_service_pb.GetPlaylistRequest, playlists_service_pb.Playlist> {
    path: "/proto.Playlists/GetPlaylist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<playlists_service_pb.GetPlaylistRequest>;
    requestDeserialize: grpc.deserialize<playlists_service_pb.GetPlaylistRequest>;
    responseSerialize: grpc.serialize<playlists_service_pb.Playlist>;
    responseDeserialize: grpc.deserialize<playlists_service_pb.Playlist>;
}
interface IPlaylistsService_IGetPlaylists extends grpc.MethodDefinition<playlists_service_pb.GetPlaylistsRequest, playlists_service_pb.PlaylistsList> {
    path: "/proto.Playlists/GetPlaylists";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<playlists_service_pb.GetPlaylistsRequest>;
    requestDeserialize: grpc.deserialize<playlists_service_pb.GetPlaylistsRequest>;
    responseSerialize: grpc.serialize<playlists_service_pb.PlaylistsList>;
    responseDeserialize: grpc.deserialize<playlists_service_pb.PlaylistsList>;
}
interface IPlaylistsService_ICreatePlaylist extends grpc.MethodDefinition<playlists_service_pb.CreatePlaylistRequest, playlists_service_pb.Playlist> {
    path: "/proto.Playlists/CreatePlaylist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<playlists_service_pb.CreatePlaylistRequest>;
    requestDeserialize: grpc.deserialize<playlists_service_pb.CreatePlaylistRequest>;
    responseSerialize: grpc.serialize<playlists_service_pb.Playlist>;
    responseDeserialize: grpc.deserialize<playlists_service_pb.Playlist>;
}
interface IPlaylistsService_IUpdatePlaylist extends grpc.MethodDefinition<playlists_service_pb.UpdatePlaylistRequest, playlists_service_pb.Playlist> {
    path: "/proto.Playlists/UpdatePlaylist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<playlists_service_pb.UpdatePlaylistRequest>;
    requestDeserialize: grpc.deserialize<playlists_service_pb.UpdatePlaylistRequest>;
    responseSerialize: grpc.serialize<playlists_service_pb.Playlist>;
    responseDeserialize: grpc.deserialize<playlists_service_pb.Playlist>;
}
interface IPlaylistsService_IDeletePlaylist extends grpc.MethodDefinition<playlists_service_pb.DeletePlaylistRequest, musics_service_pb.Empty> {
    path: "/proto.Playlists/DeletePlaylist";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<playlists_service_pb.DeletePlaylistRequest>;
    requestDeserialize: grpc.deserialize<playlists_service_pb.DeletePlaylistRequest>;
    responseSerialize: grpc.serialize<musics_service_pb.Empty>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Empty>;
}
interface IPlaylistsService_IAddTrack extends grpc.MethodDefinition<playlists_service_pb.AddTrackRequest, playlists_service_pb.Track> {
    path: "/proto.Playlists/AddTrack";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<playlists_service_pb.AddTrackRequest>;
    requestDeserialize: grpc.deserialize<playlists_service_pb.AddTrackRequest>;
    responseSerialize: grpc.serialize<playlists_service_pb.Track>;
    responseDeserialize: grpc.deserialize<playlists_service_pb.Track>;
}
interface IPlaylistsService_IUpdateTrack extends grpc.MethodDefinition<playlists_service_pb.UpdateTrackRequest, playlists_service_pb.Track> {
    path: "/proto.Playlists/UpdateTrack";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<playlists_service_pb.UpdateTrackRequest>;
    requestDeserialize: grpc.deserialize<playlists_service_pb.UpdateTrackRequest>;
    responseSerialize: grpc.serialize<playlists_service_pb.Track>;
    responseDeserialize: grpc.deserialize<playlists_service_pb.Track>;
}
interface IPlaylistsService_IRemoveTrack extends grpc.MethodDefinition<playlists_service_pb.RemoveTrackRequest, musics_service_pb.Empty> {
    path: "/proto.Playlists/RemoveTrack";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<playlists_service_pb.RemoveTrackRequest>;
    requestDeserialize: grpc.deserialize<playlists_service_pb.RemoveTrackRequest>;
    responseSerialize: grpc.serialize<musics_service_pb.Empty>;
    responseDeserialize: grpc.deserialize<musics_service_pb.Empty>;
}

export const PlaylistsService: IPlaylistsService;

export interface IPlaylistsServer {
    getPlaylist: grpc.handleUnaryCall<playlists_service_pb.GetPlaylistRequest, playlists_service_pb.Playlist>;
    getPlaylists: grpc.handleUnaryCall<playlists_service_pb.GetPlaylistsRequest, playlists_service_pb.PlaylistsList>;
    createPlaylist: grpc.handleUnaryCall<playlists_service_pb.CreatePlaylistRequest, playlists_service_pb.Playlist>;
    updatePlaylist: grpc.handleUnaryCall<playlists_service_pb.UpdatePlaylistRequest, playlists_service_pb.Playlist>;
    deletePlaylist: grpc.handleUnaryCall<playlists_service_pb.DeletePlaylistRequest, musics_service_pb.Empty>;
    addTrack: grpc.handleUnaryCall<playlists_service_pb.AddTrackRequest, playlists_service_pb.Track>;
    updateTrack: grpc.handleUnaryCall<playlists_service_pb.UpdateTrackRequest, playlists_service_pb.Track>;
    removeTrack: grpc.handleUnaryCall<playlists_service_pb.RemoveTrackRequest, musics_service_pb.Empty>;
}

export interface IPlaylistsClient {
    getPlaylist(request: playlists_service_pb.GetPlaylistRequest, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Playlist) => void): grpc.ClientUnaryCall;
    getPlaylist(request: playlists_service_pb.GetPlaylistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Playlist) => void): grpc.ClientUnaryCall;
    getPlaylist(request: playlists_service_pb.GetPlaylistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Playlist) => void): grpc.ClientUnaryCall;
    getPlaylists(request: playlists_service_pb.GetPlaylistsRequest, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.PlaylistsList) => void): grpc.ClientUnaryCall;
    getPlaylists(request: playlists_service_pb.GetPlaylistsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.PlaylistsList) => void): grpc.ClientUnaryCall;
    getPlaylists(request: playlists_service_pb.GetPlaylistsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.PlaylistsList) => void): grpc.ClientUnaryCall;
    createPlaylist(request: playlists_service_pb.CreatePlaylistRequest, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Playlist) => void): grpc.ClientUnaryCall;
    createPlaylist(request: playlists_service_pb.CreatePlaylistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Playlist) => void): grpc.ClientUnaryCall;
    createPlaylist(request: playlists_service_pb.CreatePlaylistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Playlist) => void): grpc.ClientUnaryCall;
    updatePlaylist(request: playlists_service_pb.UpdatePlaylistRequest, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Playlist) => void): grpc.ClientUnaryCall;
    updatePlaylist(request: playlists_service_pb.UpdatePlaylistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Playlist) => void): grpc.ClientUnaryCall;
    updatePlaylist(request: playlists_service_pb.UpdatePlaylistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Playlist) => void): grpc.ClientUnaryCall;
    deletePlaylist(request: playlists_service_pb.DeletePlaylistRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    deletePlaylist(request: playlists_service_pb.DeletePlaylistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    deletePlaylist(request: playlists_service_pb.DeletePlaylistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    addTrack(request: playlists_service_pb.AddTrackRequest, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Track) => void): grpc.ClientUnaryCall;
    addTrack(request: playlists_service_pb.AddTrackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Track) => void): grpc.ClientUnaryCall;
    addTrack(request: playlists_service_pb.AddTrackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Track) => void): grpc.ClientUnaryCall;
    updateTrack(request: playlists_service_pb.UpdateTrackRequest, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Track) => void): grpc.ClientUnaryCall;
    updateTrack(request: playlists_service_pb.UpdateTrackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Track) => void): grpc.ClientUnaryCall;
    updateTrack(request: playlists_service_pb.UpdateTrackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Track) => void): grpc.ClientUnaryCall;
    removeTrack(request: playlists_service_pb.RemoveTrackRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    removeTrack(request: playlists_service_pb.RemoveTrackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    removeTrack(request: playlists_service_pb.RemoveTrackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class PlaylistsClient extends grpc.Client implements IPlaylistsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getPlaylist(request: playlists_service_pb.GetPlaylistRequest, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Playlist) => void): grpc.ClientUnaryCall;
    public getPlaylist(request: playlists_service_pb.GetPlaylistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Playlist) => void): grpc.ClientUnaryCall;
    public getPlaylist(request: playlists_service_pb.GetPlaylistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Playlist) => void): grpc.ClientUnaryCall;
    public getPlaylists(request: playlists_service_pb.GetPlaylistsRequest, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.PlaylistsList) => void): grpc.ClientUnaryCall;
    public getPlaylists(request: playlists_service_pb.GetPlaylistsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.PlaylistsList) => void): grpc.ClientUnaryCall;
    public getPlaylists(request: playlists_service_pb.GetPlaylistsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.PlaylistsList) => void): grpc.ClientUnaryCall;
    public createPlaylist(request: playlists_service_pb.CreatePlaylistRequest, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Playlist) => void): grpc.ClientUnaryCall;
    public createPlaylist(request: playlists_service_pb.CreatePlaylistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Playlist) => void): grpc.ClientUnaryCall;
    public createPlaylist(request: playlists_service_pb.CreatePlaylistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Playlist) => void): grpc.ClientUnaryCall;
    public updatePlaylist(request: playlists_service_pb.UpdatePlaylistRequest, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Playlist) => void): grpc.ClientUnaryCall;
    public updatePlaylist(request: playlists_service_pb.UpdatePlaylistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Playlist) => void): grpc.ClientUnaryCall;
    public updatePlaylist(request: playlists_service_pb.UpdatePlaylistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Playlist) => void): grpc.ClientUnaryCall;
    public deletePlaylist(request: playlists_service_pb.DeletePlaylistRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    public deletePlaylist(request: playlists_service_pb.DeletePlaylistRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    public deletePlaylist(request: playlists_service_pb.DeletePlaylistRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    public addTrack(request: playlists_service_pb.AddTrackRequest, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Track) => void): grpc.ClientUnaryCall;
    public addTrack(request: playlists_service_pb.AddTrackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Track) => void): grpc.ClientUnaryCall;
    public addTrack(request: playlists_service_pb.AddTrackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Track) => void): grpc.ClientUnaryCall;
    public updateTrack(request: playlists_service_pb.UpdateTrackRequest, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Track) => void): grpc.ClientUnaryCall;
    public updateTrack(request: playlists_service_pb.UpdateTrackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Track) => void): grpc.ClientUnaryCall;
    public updateTrack(request: playlists_service_pb.UpdateTrackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: playlists_service_pb.Track) => void): grpc.ClientUnaryCall;
    public removeTrack(request: playlists_service_pb.RemoveTrackRequest, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    public removeTrack(request: playlists_service_pb.RemoveTrackRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
    public removeTrack(request: playlists_service_pb.RemoveTrackRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: musics_service_pb.Empty) => void): grpc.ClientUnaryCall;
}
