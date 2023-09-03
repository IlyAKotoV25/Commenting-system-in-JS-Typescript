export class User {
	public id: number;
	public username: string;
	public photoURL: string;

	constructor(id: number, username: string) {
		this.id = id;
		this.username = username;
		this.photoURL = './src/images/avatar4.jpg';
	}

	getId(): number {
		return this.id;
	}

	getUsername(): string {
		return this.username;
	}

	getPhotoURL(): string {
		return this.photoURL;
	}

	// static fromJSON(json: string): User {
	// 	const { id, username } = JSON.parse(json);
	// 	return new User(id, username);
	// }

	// toJSON(): string {
	// 	return JSON.stringify({
	// 		id: this.id,
	// 		username: this.username,
	// 	});
	// }
}