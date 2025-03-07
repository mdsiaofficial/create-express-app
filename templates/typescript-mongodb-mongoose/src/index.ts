import app from '@app/app';
import connectDatabase from '@config/database';

const PORT = process.env.PORT || 5000;

// Connect to Database and Start Server
connectDatabase()
	.then(() => {
		app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
	})
	.catch((err) => {
		console.error('Database connection failed:', err);
		process.exit(1);
	});
