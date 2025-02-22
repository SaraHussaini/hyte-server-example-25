import {insertEntry, selectEntriesByUserId} from '../models/entry-model.js';

const postEntry = async (req, res) => {
  // user_id, entry_date, mood, weight, sleep_hours, notes
  // TODO: add try-catch
  const newEntry = req.body;
  newEntry.user_id = req.user.user_id;
  insertEntry(newEntry);
  res.status(201).json({message: "Entry added."});
};

/**
 * Get all entries of the logged in user
 * @param {*} req
 * @param {*} res
 */
const getEntries = async (req, res) => {
  const entries = await selectEntriesByUserId(req.user.user_id);
  res.json(entries);
};

export {postEntry, getEntries};
