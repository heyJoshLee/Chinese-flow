import Card from '../models/card.js';
import Word from '../models/word.js'

export const getWords = async (req, res) => {
  console.log("GETING WORDS FOR LOGGED IN USER")
  try {
    let cards = await Card.where({userId: req.user.id})
    let words = [];
    for(let i = 0; i < cards.length; i++) {
      let word = await Word.findById(cards[i].wordId);
      words.push(word)
    }
    res.status(200).json(words.reverse())
  } catch (error) {
    console.log(error);
  }
}