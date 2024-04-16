const express = require('express');
const app = express();
const cors = require('cors');

const GenAI = require('./utils/GenAI');

app.use(cors());
app.use(express.json());

app.post('/interview', async (req, res) => {
	const { companyName, position } = req.body;
	const interview = await GenAI.simulateInterview(companyName, position);
	res.status(200).json(interview);
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});