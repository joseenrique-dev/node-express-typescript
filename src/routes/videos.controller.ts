import { RequestHandler } from 'express';
import Video from './Video';

export const getVideos: RequestHandler = (req, res) =>
  res.json('getting videos');

export const getVideo: RequestHandler = (req, res) =>
  res.json('getting single video...');

export const createVideo: RequestHandler = async (req, res) => {
  const videoModel = new Video(req.body);
  console.log(videoModel);
  const saveVideo = await videoModel.save();
  res.json(saveVideo);
};

export const updateVideo: RequestHandler = (req, res) =>
  res.json('getting videos');

export const removeVideo: RequestHandler = (req, res) =>
  res.json('getting videos');
