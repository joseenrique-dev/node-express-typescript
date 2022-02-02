import { RequestHandler } from 'express';
import Video from './Video';

/**
 * Get All Videos
 * @param req
 * @param res
 */
export const getVideos: RequestHandler = async (req, res) => {
    try {
        const allVideos = await Video.find();
        res.json(allVideos);
    } catch (error) {
        res.json(error);
    }
};

/**
 * Get Single Video
 * @param req
 * @param res
 * @returns
 */
export const getVideo: RequestHandler = async (req, res) => {
    try {
        const foundVideo = await Video.findById(req.params.id);
        if (!foundVideo) return res.status(204).json();
        return res.json(foundVideo);
    } catch (error) {
        res.json(error);
    }
};

/**
 * Create Video
 * @param VideoSchema
 * @returns res
 */
export const createVideo: RequestHandler = async (req, res) => {
    try {
        const videoFound = await Video.findOne({ url: req.body.url });
        if (videoFound)
            return res
                .status(301)
                .json({ message: 'The url already exist...' });
        const videoModel = new Video(req.body);
        const saveVideo = await videoModel.save();
        res.json(saveVideo);
    } catch (error) {
        res.json(error);
    }
};

/**
 * Update Video
 * @param req
 * @param res
 * @returns
 */
export const updateVideo: RequestHandler = async (req, res) => {
    try {
        const videoUpdated = await Video.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        if (!videoUpdated) return res.status(204).json();
        res.json(videoUpdated);
    } catch (error) {}
};

/**
 * Remove Video
 * @param req
 * @param res
 * @returns
 */
export const removeVideo: RequestHandler = async (req, res) => {
    try {
        const foundVideo = await Video.findByIdAndDelete(req.params.id);
        if (!foundVideo) return res.status(204).json();
        res.json(foundVideo);
    } catch (error) {}
};
