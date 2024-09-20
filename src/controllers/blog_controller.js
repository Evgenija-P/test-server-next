const BlogModel = require("../schemas/blog_schema");

exports.getAllNotation = async (req, res) => {
  try {
    const note = await BlogModel.find();

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getNoteBySlug = async (req, res) => {
  // перевіряємо, що приходить у params
  const { slug } = req.params; // отримуємо slug з params
  try {
    const note = await BlogModel.findOne({ slug }); // шукаємо по полю slug
    console.log(note); // перевіряємо, чи знайдено запис

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(note); // повертаємо знайдений запис
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createNote = async (req, res) => {
  try {
    const note = new BlogModel(req.body);
    const result = await note.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const { title, text, slug } = req.body;
    const updatedNote = await BlogModel.findByIdAndUpdate(
      req.params.id,
      { title, text, slug },
      { new: true }
    );
    if (!updatedNote) {
      throw new NotFound("Feedback not found");
    }
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    await BlogModel.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
