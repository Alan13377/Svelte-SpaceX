import { gql, GraphQLClient } from 'graphql-request';
export const get = async () => {
	const client = new GraphQLClient(import.meta.env.VITE_GRAPHQL_API);
	try {
		const query = gql`
			query Launches {
				launches {
					id
					date
					name
					slug
					year
				}
			}
		`;
		const { launches } = await client.request(query);

		return {
			status: 200,
			body: {
				launches
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
};
