import { gql, GraphQLClient } from 'graphql-request';
export async function get({ params }) {
	const { slug } = params;
	const client = new GraphQLClient(import.meta.env.VITE_GRAPHQL_API);

	try {
		const query = gql`
			query GetLaunch($slug: String!) {
				mission: launch(where: { slug: $slug }) {
					year
					date
					name
					launchSuccess
					rocket {
						name
						type
						image {
							fileName
							url(transformation: { image: { resize: { width: 500, height: 500, fit: clip } } })
						}
					}
					launchSite {
						name
						longName
					}
					link {
						article
						pressKit
						video
						wikipedia
						flickrImages {
							url(transformation: { image: { resize: { width: 500, height: 500, fit: clip } } })
							alt
						}
					}
				}
			}
		`;
		const variables = { slug };
		const { mission } = await client.request(query, variables);
		return {
			status: 200,
			body: {
				mission
			}
		};
	} catch (error) {
		return {
			status: 500,
			body: {
				error: 'A server error occurred'
			}
		};
	}
}
