import Word from '../models/word.js';

export const createWord = async (req, res) => {
  console.log(req.body)
  const wordParams = req.body;
   try {
    const newWord = new Word(wordParams);
    await newWord.save();
    return res.status(200).json(newWord)
   } catch (error) {
     console.log(error);
     return res.status(500).json({
       message: "Error. The Word was not created."
     })
   }
}

export const updateWord = async (req, res) => {
  console.log("UPDATE WORD")
  const id = req.params.id;
  const wordParams = req.body;
  try {
    const word = await Word.findByIdAndUpdate(id, wordParams, { new: true})
    res.status(200).json(word);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Word was not updated."});
  }
}

export const getWords = async (req, res) => {
  try {
    const words = await Word.find();
    res.status(200).json(words);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message
    });
  }
}

export const getWord = async (req, res) => {
  const id = req.params.id;
  try {
    const word = await Word.findById(id)
    console.log(word)
    res.status(200).json(word);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Word was not created."});
  }
}

export const deleteWord = async (req, res) => {
  const id = req.params.id;
  try {
    await Word.findByIdAndRemove(id);
    res.status(200).json({ message: "Successfully deleted",  id: id});
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Word was not delete."});
  }
}