import Resource from '../models/resource.js';

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