import Resource from '../models/resource.js';
import Word from '../models/word.js';

export const createResource = async (req, res) => {
  const resourceParams = req.body;
  let paid = resourceParams.paid !== "paid" ? true : false;

   try {
    const newResource = new Resource(resourceParams);
    newResource.paid = paid;
    await newResource.save();
    console.log(newResource);
    return res.status(200).json(newResource)
   } catch (error) {
     console.log(error);
     return res.status(500).json({
       message: "Error. The resource was not created."
     })
   }
}

export const updateResource = async (req, res) => {
  const id = req.params.id;
  const resourceParams = req.body;
  try {
    const resource = await Resource.findByIdAndUpdate(id, resourceParams, { new: true})
    res.status(200).json(resource);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "resource was not updated."});
  }
}

export const getResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message
    });
  }
}

export const getResource = async (req, res) => {
  const id = req.params.id;
  try {
    const resource = await Resource.findById(id)
    res.status(200).json(resource);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "resource was not created."});
  }
}

export const deleteResource = async (req, res) => {
  const id = req.params.id;
  try {
    await Resource.findByIdAndRemove(id);
    res.status(200).json({ message: "Successfully deleted",  id: id});
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "resource was not delete."});
  }
}

export const addWordById = async (req, res) => {
  try {
    const { id } = req.params;
    const { characterId } = req.body;
    const resource = await Resource.findById(id);
    const character = await Word.findById(characterId);
    let alreadyHasChracter = resource.words.some(word => {
      return word.characterId === characterId
    });
    if (alreadyHasChracter) { return res.status(500).json({ message: "Resource already has Character."}); }
    const characterParams = {
      characterId: character._id,
      simplified: character.simplified,
      traditional: character.traditional
    }
    resource.words.push(characterParams); 
    resource.save();
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ message: "Character was not added to the Resource."});
  }
}

export const getWordsForResource = async (req, res) => {
  try {
    const { id } = req.params;
    const resource = await Resource.findById(id);
    let words = [];
    for (let i = 0; i < resource.words.length; i++ ) {
      let word = await Word.findById(resource.words[i]);
      words.push(word);
    }
    res.status(200).json(words);
  } catch (error) {
    console.log(error)
  }
}

export const removeWordFromResource = async (req, res) => {
  try {
    const { resourceId, wordId } =  req.params;
    const resource = await Resource.findById(resourceId);
    const updatedWords = resource.words.filter(word => {
      if (word.characterId != wordId) { return word }
    });
  
    resource.words = updatedWords
    resource.save();  
    res.status(200).json(resource);
  } catch (error) {
    console.log(error)
  }

}