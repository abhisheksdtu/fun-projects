class Github {
	constructor() {
		this.client_id = '7075974100c00d95fd85';
		this.client_secret = 'a135ef62e8c97aa8b6f08f999c0bb239da69a213';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const repoResponse = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const profile = await profileResponse.json();
		const repos  = await repoResponse.json();

		return {
			profile,
			repos
		};
	}
}
