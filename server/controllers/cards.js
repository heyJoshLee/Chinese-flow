import Card from '../models/card.js';
import Word from '../models/word.js';

export const addCard = async (req, res) => {
  const { wordId } = req.body;
  const userId = req.user.id;
  try {
     // todo check to see if user already knows that card
    const alreadyHasCard = await Card.where({userId, wordId});
    if (alreadyHasCard.length > 0) {
      console.log("Card Already known!");
      return res.status(500).json({message: "Card Already known!"});
    }

  const word = await Word.findById(wordId);
    const card = await new Card({ 
      userId,
      wordId
    });
    card.save();
    res.status(200).json(word)
  } catch (error) {
    console.log(error)
  }
}

export const removeCard = async (req, res) => {
  try {
    const { wordId } = req.params;
    const userId = req.user.id
    const oldCard = await Card.deleteOne({ wordId, userId });
    res.status(200).json({wordId})
  } catch (error) {
    console.log(error);
  }
}