export interface IVideo {
  id: { kind: string; channelId?: string; videoId?: string };
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: {
      default: { url: string };
      high: { url: string };
      medium: { url: string };
    };
    title: string;
  };
}
