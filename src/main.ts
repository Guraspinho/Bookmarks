import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as dotenv from "dotenv";

dotenv.config();


const PORT = process.env.PORT || 5050;
async function start() {
	const app = await NestFactory.create(AppModule);
  	await app.listen(PORT, () =>
  	{
		console.log(`Server running on port ${PORT}...`);
		
  	});
}
start();
