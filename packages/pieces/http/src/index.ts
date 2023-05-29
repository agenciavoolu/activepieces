import packageJson from '../package.json';
import { createPiece } from '@activepieces/pieces-framework';
import { httpSendRequestAction } from './lib/actions/send-http-request-action';
import { httpReturnResponse } from './lib/actions/return-response';

export const http = createPiece({
	name: 'http',
	displayName: 'HTTP',
	description: 'Sens HTTP requests and return responses',
	logoUrl: 'https://cdn.activepieces.com/pieces/http.png',
	version: packageJson.version,
	actions: [httpSendRequestAction, httpReturnResponse],
	authors: ['khaledmashaly', 'bibhuty-did-this'],
	triggers: [
	],
});
