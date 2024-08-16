import ytdl from "@distube/ytdl-core";

export async function getInfo(id) {
  return await ytdl.getInfo(id);
}

// This function gives extra details related to the video
export async function getVideoDetails(info) {
  const video_details = {
    title: info.videoDetails.title, // Title of the video
    description: info.videoDetails.description, // This is the description of the video
    videoUrl: info.videoDetails.video_url, // The url of video in youtube
    videoId: info.videoDetails.videoId, // This is the id of the video
    videoLength: info.videoDetails.lengthSeconds, // Length of the video in seconds
    viewCount: info.videoDetails.viewCount, // views count
    category: info.videoDetails.category, // This is the category of the video
    publishDate: info.videoDetails.publishDate, // This is the date at which video was published
    ageRestricted: info.videoDetails.ageRestricted, // This is a boolean for age restriction
    channelName: info.videoDetails.ownerChannelName, // Name of the channel
    subscriberCount: info.videoDetails.author.subscriber_count,
    thumbnails: info.videoDetails.thumbnails, // Contains a list of thumbnails
    channelUrl: info.videoDetails.author.channel_url, // Link to the channel
  };

  return video_details;
}

// This function returns a list of information regarding videos with info related to downloading it
export async function getVideoLinks(info) {
  const videos = ytdl.filterFormats(info.formats, "video");

  const linkDetails = []; // List will contain the smae video in different formats
  videos.forEach((video) => {
    const api_details = {
      quality: video.qualityLabel, // The quality label i.e 720p, 360p
      width: video.width, // Width of video
      height: video.height, // Height of the video
      url: video.url, // Video direct download url
      contentLength: video.contentLength, // The size of the video in bytes
      video_format: video.container, // The file format of the cideo
      hasAudio: video.hasAudio, // true if the video contains audio
      fps: video.fps,
    };

    linkDetails.push(api_details);
  });

  return linkDetails;
}

// This function returns a list of information related to audio , including it's download links
export async function getAudioLinks(info) {
  const audios = ytdl.filterFormats(info.formats, "audioonly");

  const linkDetails = [];
  audios.forEach((audio) => {
    const api_details = {
      quality: audio.audioQuality, // The quality of the Audio
      url: audio.url, // Direct download url
      contentLength: audio.contentLength, // Size of the file in bytes
      audio_format: audio.container, // Format of the audio
    };

    linkDetails.push(api_details);
  });

  return linkDetails;
}
