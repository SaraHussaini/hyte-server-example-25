import express from 'express';

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Dummy data
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

// GET /items: List all items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST /items: Create a new item
app.post('/items', (req, res) => {
  const newItem = { id: items.length + 1, ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
});

// GET /items/:id: Retrieve a specific item
app.get('/items/:id', (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
});

// PUT /items/:id: Update an item
app.put('/items/:id', (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  item.name = req.body.name || item.name;
  res.json(item);
});

// DELETE /items/:id: Delete an item
app.delete('/items/:id', (req, res) => {
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Item not found');
  items.splice(index, 1);
  res.status(204).send();
});

// Start server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}}:${port}/`);
});
