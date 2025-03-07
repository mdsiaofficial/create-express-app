import app from '@app/app';

const PORT = process.env.PORT || 5000;

// Connect to Database and Start Server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
