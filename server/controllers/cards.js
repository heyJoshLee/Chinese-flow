import Card from '../models/card.js';
import Word from '../models/word.js';

export const addCard = async (req, res) => {
  const { wordId } = req.body;
  const userId = req.user.id;
  // todo check to see if user already knows that card
  try {

  const word = await Word.findById(wordId);
    const card = await new Card({ 
      userId,
      wordId
    });
    card.save();
    res.status(500).json(word)
  } catch (error) {
    console.log(error)
  }
}