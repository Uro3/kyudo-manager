firebase-functions:
	firebase deploy --only functions
dev-server:
	yarn --cwd web run start
firebase-hosting:
	yarn --cwd web run build
	firebase deploy --only hosting
