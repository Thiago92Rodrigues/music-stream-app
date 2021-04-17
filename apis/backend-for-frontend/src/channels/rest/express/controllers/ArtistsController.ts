import { Request, Response } from 'express';

import { translateArtist, translateArtists } from './translators';
import { HttpStatusCode } from '@constants/index';
import BaseError from '@constants/BaseError';
import { InternalError } from '@constants/errors';
import IMusicsIntegration from '@integrations/MusicsIntegration/interface';

export default class ArtistsController {
  private musicsIntegration: IMusicsIntegration;

  constructor(musicsIntegration: IMusicsIntegration) {
    this.musicsIntegration = musicsIntegration;
  }

  public async index(request: Request, response: Response) {
    try {
      const artists = await this.musicsIntegration.getArtists();

      return response.status(HttpStatusCode.OK).json(translateArtists(artists));

      //
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const artist = await this.musicsIntegration.getArtist({ id });

      return response.status(HttpStatusCode.OK).json(translateArtist(artist));

      //
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async create(request: Request, response: Response) {
    const { name, country, foundationDate, members, description, genre, photos, facebookUrl, twitterUrl, instagramUrl, wikipediaUrl } = request.body;

    try {
      const artist = await this.musicsIntegration.createArtist({ name, country, foundationDate, members, description, genre, photos, facebookUrl, twitterUrl, instagramUrl, wikipediaUrl });

      return response.status(HttpStatusCode.CREATED).json(translateArtist(artist));

      //
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, country, foundationDate, members, description, genre, photos, facebookUrl, twitterUrl, instagramUrl, wikipediaUrl } = request.body;

    try {
      const artist = await this.musicsIntegration.updateArtist({ id, name, country, foundationDate, members, description, genre, photos, facebookUrl, twitterUrl, instagramUrl, wikipediaUrl });

      return response.status(HttpStatusCode.OK).json(translateArtist(artist));

      //
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    try {
      await this.musicsIntegration.deleteArtist({ id });

      return response.status(HttpStatusCode.OK).send();

      //
    } catch (error) {
      if (error instanceof BaseError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      const internalError = new InternalError();
      return response.status(internalError.statusCode).json({ error: internalError.message });
    }
  }
}
