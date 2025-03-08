import mongoose from 'mongoose';

const connectDatabase = async (): Promise<void> => {
	try {
		const mongoUri = process.env.MONGO_URI;

		if (!mongoUri) {
			throw new Error(
				'MONGO_URI is missing in the environment variables',
			);
		}

		await mongoose.connect(mongoUri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log('MongoDB Connected');
	} catch (error) {
		console.error('Database connection failed:', error.message);
		process.exit(1);
	}
};

export default connectDatabase;
