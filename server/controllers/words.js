import Word from '../models/word.js';

export const createWord = async (req, res) => {
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
    res.status(200).json(word);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Word was not created."});
  }
}

export const getWordBySimplified = async (req, res) => {
  try {
    const characterParams = req.params.character;
    const character = await Word.where({simplified: characterParams});
    res.status(200).json(character);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Could not get character."})
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



// takes in text and returns all the words in the database that are found
export const getUniqueWords = async (req, res) => {
  try {
    const textToParase = req.body.text;
    let MAX_LENGTH_OF_WORD = 4;
    let words = [];
  
    for(let index = 0; index < textToParase.length; index ++) {
      let endOfWord  = index + MAX_LENGTH_OF_WORD;

      while (endOfWord > index) {
        let wordToCheck = textToParase.substring(index, endOfWord);
        console.log("wordToCheck")
        console.log(wordToCheck)
        const searchResult = await Word.where({simplified: wordToCheck});
        if (searchResult.length > 0) {
          let containsWord = words.some(word => {
            return word.simplified ===  searchResult[0].simplified;
          });
          if (!containsWord) { words.push(searchResult[0]) }
        }
        endOfWord -= 1;
      }
    }
    res.status(200).send(words);
  } catch (error) {
    console.log(error);
  }
}