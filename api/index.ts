import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import config from 'config';
import staticResponse from 'config/static.json';
import { Article, Video } from 'types';
import { async, getEnv, parseYouTubeResponse } from 'utils';
export async function getArticles(): Promise<Article[]> {
  // Delegation to renderer object (Strategy Pattern)
  return config.articles
    ? config.articles.renderer.getArticles()
    : [];
}
export async function getVideos(): Promise<Video[]> {
  const showVideos = Boolean(config.videos);
  const videos: Video[] = [];

  if (!showVideos) {
    return videos;
  }

  const key = getEnv('YOUTUBE_API_KEY', true);
  const channelId = getEnv('YOUTUBE_CHANNEL_ID', true);

  const url: string = `${config.videos?.apiUrl}/search`;
  const request: AxiosRequestConfig = {
    params: {
      key,
      channelId,
      order: 'date',
      maxResults: 20,
    },
  };

  const [response, error] = await async<AxiosResponse, AxiosError>(
    axios.get(url, request),
  );

  if (error) {
    const message = error?.response?.data?.error?.message;
    console.error(message);
    // Serve static video response if YT API quota exceeds
    staticResponse.videos.forEach(({ id }: any) => videos.push({ id }));
    return videos;
  }

  response?.data?.items?.forEach((item: any) =>
    parseYouTubeResponse(item, (id: string) => {
      videos.push({ id });
    }),
  );

  return videos;
}
